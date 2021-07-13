// Header animation

let scrollpos = window.scrollY;
const header = document.querySelector(".header");
const header_height = header.offsetHeight;


const add_class_on_scroll = () => header.classList.add("active")
const remove_class_on_scroll = () => header.classList.remove("active")


window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})

// Add class when scrolling

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight ){
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active");
      }else{
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() =>{
    animOnScroll();
  }, 300) 
}

// Burger menu

const headerList = document.querySelector(".header__list");
const headerBurger = document.querySelector(".header__burger");
const body = document.querySelector("body");


headerBurger.addEventListener("click", function (e) {
    e.preventDefault();
    headerList.classList.toggle("header-menu-active");
    headerBurger.classList.toggle("header-menu-active");
    body.classList.toggle("lock");
})