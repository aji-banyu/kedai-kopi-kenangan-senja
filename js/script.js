// Toggle class active
const navbarNAV = document.querySelector(".navbar-nav");
// Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNAV.classList.toggle("active");
};
// klik diluar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNAV.contains(e.target)) {
    navbarNAV.classList.remove("active");
  }
});
