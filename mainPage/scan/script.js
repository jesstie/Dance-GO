const video = document.getElementById("camera");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// --- Buka Kamera ---
navigator.mediaDevices.getUserMedia({
    video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        facingMode: "environment"
    }
})
.then(stream => {
    video.srcObject = stream;
    requestAnimationFrame(scanQR);
})
.catch(error => {
    console.error("Gagal membuka kamera:", error);
    alert("Tidak bisa mengakses kamera. Pastikan izin kamera diizinkan.");
});

// --- Fungsi Scan QR ---
function scanQR() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const qr = jsQR(frame.data, frame.width, frame.height);

        if (qr) {
            console.log("QR Terdeteksi:", qr.data);
            const nim = qr.data.slice(2, 4);

            if (nim == "51") {
                alert("Berhasil Scan!\nSelamat Bermain!");
                localStorage.setItem("scanStatus", "success");
                localStorage.setItem("slot", "3");
                goBack();
            } else {
                alert("Gagal!\nBukan NIM FILKOM UB");
                localStorage.setItem("scanStatus", "failed");
            }
            
            return;
        }
    }
    requestAnimationFrame(scanQR);
}

function goBack() {
    window.history.back();
}