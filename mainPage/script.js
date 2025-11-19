function goto(page) {
    window.location.href = page;
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