const headerList = document.querySelector(".header__list");
const headerBurger = document.querySelector(".header__burger");
const body = document.querySelector("body");

headerBurger.addEventListener("click", function (e) {
    e.preventDefault();
    headerList.classList.toggle("header-menu-active");
    headerBurger.classList.toggle("header-menu-active");
    body.classList.toggle("lock");
})

@@include('focus-visible.js')
