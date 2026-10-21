
/* =========================
   HAMBURGERMENY
========================= */

document.addEventListener("DOMContentLoaded", () => {

  // Hämta hamburgermenyn
  const menuDropdown = document.getElementById("menuDropdown");

  // Kontrollera att menyn finns
  if (!menuDropdown) {
    console.error("Hamburgermenyn hittades inte!");
    return;
  }

  // Stäng menyn när man klickar utanför
  document.addEventListener("click", (event) => {

    if (!menuDropdown.contains(event.target)) {
      menuDropdown.open = false;
    }

  });

  // Stäng menyn med Escape
  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      menuDropdown.open = false;
    }

  });

  // Stäng menyn när man klickar på en länk
  const menuLinks = menuDropdown.querySelectorAll("a");

  menuLinks.forEach((link) => {

    link.addEventListener("click", () => {
      menuDropdown.open = false;
    });

  });

});
