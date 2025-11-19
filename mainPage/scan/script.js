const video = document.getElementById("camera");

// Minta izin kamera laptop
navigator.mediaDevices.getUserMedia({
    video: {
        width: { ideal: 640 },   // resolusi kamera (bisa diubah)
        height: { ideal: 480 },
        facingMode: "user"       // kamera depan (laptop)
    }
})
.then(stream => {
    video.srcObject = stream;
})
.catch(error => {
    console.error("Gagal membuka kamera:", error);
    alert("Tidak bisa mengakses kamera. Pastikan izin kamera diizinkan.");
});

function goBack() {
    window.history.back();
}