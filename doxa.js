const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".mobile-nav-menu");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("close");
});
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("btn-mobile-nav");
});
