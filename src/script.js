const menu = document.querySelector(".tombol");
const nav = document.querySelector("#nav");

menu.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (e.target !== nav && e.target !== menu) {
    menu.classList.remove("active");
    nav.classList.remove("active");
  }
  console.log(e.target);
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTOp = document.querySelector("#toTop");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTOp.classList.remove("hidden");
    toTOp.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTOp.classList.remove("flex");
    toTOp.classList.add("hidden");
  }
};
