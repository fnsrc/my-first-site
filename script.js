const designText = "طراحی سایت و وب سایت بصورت اختصاصی و کدنویسی در ایران سایت. طراحی سایت شما در دنیا به دو صورت قابل انجام است. طراحی سایت با قالب های آماده و طراحی سایت بصورت کدنویسی و اختصاصی. طراحی سایت در ایران سایت با کدنویسی اختصاصی و بصورت کدنویسی به زبان های PHP و NET. انجام می پذیرد. در این حالت وب سایت شما دارای قابلیت مدیریت تمامی قسمت ها توسط شما و بدون نیاز به طراح سایت می باشد.";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("web-design-card");
  const span = document.querySelector(".close");
  const modalText = document.getElementById("modal-text");

  if (!modal || !btn || !span || !modalText) {
    console.error("Modal elements not found");
    return;
  }

  btn.addEventListener("click", () => {
    modal.style.display = "block";
    modalText.innerText = designText;
  });

  span.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
