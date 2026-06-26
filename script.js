document.addEventListener("DOMContentLoaded", () => {
  const servicesToggle = document.getElementById("servicesToggle");
  const megaMenu = document.getElementById("megaMenu");
  const servicesMenu = document.getElementById("servicesMenu");

  if (servicesToggle && megaMenu && servicesMenu) {
    servicesToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      megaMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!servicesMenu.contains(e.target)) {
        megaMenu.classList.remove("show");
      }
    });
  }
});
