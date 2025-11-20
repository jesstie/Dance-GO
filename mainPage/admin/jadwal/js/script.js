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

// ======== Stop Facility Modal & Logic ========
const stopOverlay = document.getElementById("stopOverlay");
const toggleFacilityBtn = document.getElementById("toggleFacility");
const cancelStopBtn = document.getElementById("cancelStop");
const confirmStopBtn = document.getElementById("confirmStop");
const modalMessage = document.getElementById("modalMessage");
const actionOverlay = document.getElementById("actionOverlay");
const actionMessage = document.getElementById("actionMessage");
const cancelActionBtn = document.getElementById("cancelAction");
const confirmActionBtn = document.getElementById("confirmAction");
const tableBody = document.querySelector(".scroll-area tbody");
const initialTableMarkup = tableBody ? tableBody.innerHTML : "";
let facilityStopped = false;
let pendingAction = "stop";
let pendingRow = null;
let pendingRowAction = null;

const toggleStopModal = (show) => {
  if (!stopOverlay) return;
  stopOverlay.classList.toggle("visible", show);
  stopOverlay.setAttribute("aria-hidden", show ? "false" : "true");
};

const toggleRowActionModal = (show) => {
  if (!actionOverlay) return;
  actionOverlay.classList.toggle("visible", show);
  actionOverlay.setAttribute("aria-hidden", show ? "false" : "true");
};

const openRowActionModal = (actionType, row) => {
  pendingRow = row;
  pendingRowAction = actionType;

  if (actionMessage) {
    actionMessage.textContent =
      actionType === "stop"
        ? "Apakah Anda ingin menghentikan jadwal ini?"
        : "Apakah Anda ingin menghapus jadwal ini?";
  }

  if (confirmActionBtn) {
    confirmActionBtn.textContent = actionType === "stop" ? "STOP" : "HAPUS";
    confirmActionBtn.classList.remove("danger", "success", "alt");
    if (actionType === "stop") {
      confirmActionBtn.classList.add("success");
    } else {
      confirmActionBtn.classList.add("success", "alt");
    }
  }

  toggleRowActionModal(true);
};

const applyStoppedVisualState = () => {
  if (!tableBody) return;
  tableBody.querySelectorAll("tr").forEach((row) => {
    row.classList.add("muted");
    row.classList.remove("highlight");
    const statusCell = row.children[2];
    const actionCell = row.children[3];
    if (statusCell) {
      statusCell.innerHTML = '<span class="badge expired">Expired</span>';
    }
    if (actionCell) {
      actionCell.innerHTML = "";
    }
  });
};

const stopFacility = () => {
  facilityStopped = true;
  document.body.classList.add("facility-off");
  applyStoppedVisualState();
  toggleFacilityBtn.classList.add("activate");
  toggleFacilityBtn.innerHTML =
    '<i data-feather="power"></i><span>AKTIFKAN FASILITAS</span>';
  toggleStopModal(false);
  if (window.feather) feather.replace();
};

const reactivateFacility = () => {
  facilityStopped = false;
  document.body.classList.remove("facility-off");
  toggleFacilityBtn.classList.remove("activate");
  if (tableBody) {
    tableBody.innerHTML = initialTableMarkup;
  }
  toggleFacilityBtn.innerHTML =
    '<i data-feather="power"></i><span>BERHENTIKAN FASILITAS</span>';
  toggleStopModal(false);
  if (window.feather) feather.replace();
};

if (toggleFacilityBtn) {
  toggleFacilityBtn.addEventListener("click", () => {
    if (facilityStopped) {
      pendingAction = "start";
      if (modalMessage) {
        modalMessage.textContent = "Apakah Anda ingin mengaktifkan fasilitas?";
      }
      toggleStopModal(true);
    } else {
      pendingAction = "stop";
      if (modalMessage) {
        modalMessage.textContent = "Apakah Anda ingin mematikan fasilitas?";
      }
      toggleStopModal(true);
    }
  });
}

cancelStopBtn?.addEventListener("click", () => toggleStopModal(false));
confirmStopBtn?.addEventListener("click", () => {
  if (pendingAction === "start") {
    reactivateFacility();
  } else {
    stopFacility();
  }
});
stopOverlay?.addEventListener("click", (event) => {
  if (event.target === stopOverlay) toggleStopModal(false);
});

const updateRowStatus = () => {
  if (!pendingRow) return;
  const statusCell = pendingRow.children[2];
  if (!statusCell) return;
  if (pendingRowAction === "stop") {
    statusCell.innerHTML = '<span class="badge expired">Expired</span>';
    pendingRow.classList.add("muted");
  } else if (pendingRowAction === "delete") {
    statusCell.innerHTML = '<span class="badge notused">Not Reserved</span>';
    pendingRow.classList.remove("muted");
  }
  const actionCell = pendingRow.children[3];
  if (actionCell) {
    actionCell.innerHTML = "";
  }

  pendingRow = null;
  pendingRowAction = null;
  toggleRowActionModal(false);
};

confirmActionBtn?.addEventListener("click", updateRowStatus);
cancelActionBtn?.addEventListener("click", () => toggleRowActionModal(false));
actionOverlay?.addEventListener("click", (event) => {
  if (event.target === actionOverlay) toggleRowActionModal(false);
});

tableBody?.addEventListener("click", (event) => {
  const actionButton = event.target.closest(".stop-action, .delete-action");
  if (!actionButton || !tableBody.contains(actionButton)) return;
  event.preventDefault();
  const row = actionButton.closest("tr");
  if (!row) return;
  if (actionButton.classList.contains("stop-action")) {
    openRowActionModal("stop", row);
  } else if (actionButton.classList.contains("delete-action")) {
    openRowActionModal("delete", row);
  }
});