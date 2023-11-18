const hamburger = document.querySelector(".hamburger");
const navitem = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navitem.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navitem.classList.remove("active");
}))