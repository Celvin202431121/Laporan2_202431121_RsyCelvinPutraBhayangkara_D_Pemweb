/* INTERAKSI SHOW / HIDE PENJELASAN */
document.querySelectorAll(".problem").forEach(problem => {
  
  const title = problem.querySelector(".title");
  const desc = problem.querySelector(".desc");

  desc.style.display = "block";
  problem.dataset.hidden = "false";

  function toggleDesc() {
    let hidden = problem.dataset.hidden === "true";

    if (!hidden) {
      if (confirm("Apakah Anda ingin menyembunyikan penjelasan ini?")) {
        desc.style.display = "none";
        problem.dataset.hidden = "true";
      }
    } else {
      if (confirm("Apakah Anda ingin menampilkan penjelasan ini?")) {
        desc.style.display = "block";
        problem.dataset.hidden = "false";
      }
    }
  }

  title.addEventListener("click", toggleDesc);
});
/* MODE TAMPILAN */
function updateModeIndicator() {
  const berantakan = document.body.classList.contains("mode-berantakan");
  const textMode = berantakan ? "Berantakan" : "Rapi";

  document.querySelectorAll(".mode-indicator").forEach(el => {
    el.textContent = "Mode: " + textMode;
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("toggleModeBtn");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("mode-berantakan");
      document.body.classList.toggle("mode-rapi");
      updateModeIndicator();
    });
  }

  updateModeIndicator();
});