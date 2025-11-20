function goto(page) {
    window.location.href = page;
}

function login() {
    const usernameInput = document.getElementById("usn");
    const passwordInput = document.getElementById("pwd");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        alert("Username dan Password tidak boleh kosong!");
        return;
    }

    if (username == "admin" && password == "admin123") {
        goto("admin.html");
    } else {
        alert("Username atau Password salah!");
    }

    usernameInput.value = "";
    passwordInput.value = "";
}

const popup = document.getElementById('loginPopup');
const overlay = document.getElementById('loginOverlay');
const openBtn = document.getElementById('adminLogo');
const closeBtn = document.getElementById('closeLogin');

const togglePopup = (show) => {
    overlay.classList.toggle('visible', show);
    popup.classList.toggle('active-popup', show);
    overlay.setAttribute('aria-hidden', show ? 'false' : 'true');
};

openBtn.addEventListener('click', (event) => {
    event.preventDefault();
    togglePopup(true);
});
closeBtn.addEventListener('click', () => togglePopup(false));
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) togglePopup(false);
});