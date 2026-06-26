// متن مورد نظر شما
const designText = "طراحی سایت و وب سایت بصورت اختصاصی و کدنویسی در ایران سایت. طراحی سایت شما در دنیا به دو صورت قابل انجام است. طراحی سایت با قالب های آماده و طراحی سایت بصورت کدنویسی و اختصاصی. طراحی سایت در ایران سایت با کدنویسی اختصاصی و بصورت کدنویسی به زبان های PHP و NET. انجام می پذیرد. در این حالت وب سایت شما دارای قابلیت مدیریت تمامی قسمت ها توسط شما و بدون نیاز به طراح سایت می باشد.";

// گرفتن المان‌ها
const modal = document.getElementById("myModal");
const btn = document.getElementById("web-design-card");
const span = document.getElementsByClassName("close")[0];
const modalText = document.getElementById("modal-text");

// وقتی روی کارت کلیک شد
btn.onclick = function() {
  modal.style.display = "block";
  modalText.innerText = designText;
}

// وقتی روی ضربدر کلیک شد
span.onclick = function() {
  modal.style.display = "none";
}

// وقتی بیرون از پاپ‌آپ کلیک شد، بسته شود
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

