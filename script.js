document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("servicesSlider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -350, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 350, behavior: "smooth" });
    });
  }
});
