// Sidebar overlay logic
const navbarNav = document.getElementById("navbarNav");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const hamburger = document.getElementById("hamburger-menu");

if (navbarNav && sidebarOverlay && hamburger) {
  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    navbarNav.classList.toggle("active");
    sidebarOverlay.classList.toggle("active");
  });

  // Klik di luar sidebar (overlay) untuk menutup sidebar
  sidebarOverlay.addEventListener("click", function () {
    navbarNav.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  });
}

// Klik di luar sidebar dan hamburger untuk menutup sidebar (fallback, jika overlay tidak menutup)
document.addEventListener("click", function (e) {
  if (
    navbarNav.classList.contains("active") &&
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target) &&
    !sidebarOverlay.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  }
});

// Highlight active page in sidebar
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname;
  const jadwalAdminLink = document.querySelector("#jadwalAdmin");
  const logAdminLink = document.querySelector("#logAdmin");

  // Remove active class from all links first
  if (jadwalAdminLink) jadwalAdminLink.classList.remove("active");
  if (logAdminLink) logAdminLink.classList.remove("active");

  // Add active class based on current page
  if (
    currentPage.includes("jadwal") ||
    currentPage.endsWith("jadwal/") ||
    currentPage.endsWith("jadwal/index.html")
  ) {
    if (jadwalAdminLink) jadwalAdminLink.classList.add("active");
  } else if (
    currentPage.includes("log") ||
    currentPage.endsWith("log/") ||
    currentPage.endsWith("log/index.html")
  ) {
    if (logAdminLink) logAdminLink.classList.add("active");
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
