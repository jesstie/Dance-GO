// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ======== Action Overlay (Delete Confirmation) ========
const actionOverlay = document.getElementById("actionOverlay");
const actionMessage = document.getElementById("actionMessage");
const cancelActionBtn = document.getElementById("cancelAction");
const confirmActionBtn = document.getElementById("confirmAction");
const tableBody = document.querySelector(".scroll-area tbody");
let pendingRow = null;

const toggleRowActionModal = (show) => {
  if (!actionOverlay) return;
  actionOverlay.classList.toggle("visible", show);
  actionOverlay.setAttribute("aria-hidden", show ? "false" : "true");
};

const openRowActionModal = (row) => {
  pendingRow = row;
  toggleRowActionModal(true);
};

const deleteRow = () => {
  if (!pendingRow) return;
  pendingRow.remove();
  pendingRow = null;
  toggleRowActionModal(false);
  
  // Update nomor setelah menghapus
  const rows = tableBody.querySelectorAll("tr");
  rows.forEach((row, index) => {
    const firstCell = row.querySelector("td:first-child");
    if (firstCell) {
      firstCell.textContent = `${index + 1}.`;
    }
  });
};

confirmActionBtn?.addEventListener("click", deleteRow);
cancelActionBtn?.addEventListener("click", () => toggleRowActionModal(false));
actionOverlay?.addEventListener("click", (event) => {
  if (event.target === actionOverlay) toggleRowActionModal(false);
});

tableBody?.addEventListener("click", (event) => {
  const actionButton = event.target.closest(".delete-action");
  if (!actionButton || !tableBody.contains(actionButton)) return;
  event.preventDefault();
  const row = actionButton.closest("tr");
  if (!row) return;
  openRowActionModal(row);
});

// ======== Success Overlay (Export Data) ========
const successOverlay = document.getElementById("successOverlay");
const exportDataBtn = document.getElementById("exportData");
const confirmSuccessBtn = document.getElementById("confirmSuccess");

const toggleSuccessModal = (show) => {
  if (!successOverlay) return;
  successOverlay.classList.toggle("visible", show);
  successOverlay.setAttribute("aria-hidden", show ? "false" : "true");
};

exportDataBtn?.addEventListener("click", () => {
  toggleSuccessModal(true);
});

confirmSuccessBtn?.addEventListener("click", () => {
  toggleSuccessModal(false);
});

successOverlay?.addEventListener("click", (event) => {
  if (event.target === successOverlay) toggleSuccessModal(false);
});