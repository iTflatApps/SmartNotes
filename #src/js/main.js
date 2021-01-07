/* ----------------------- */
/* ------- JQUERY -------- */
/* ----------------------- */


@@include('slick.min.js')

$('.slider__row').slick({
  speed: 400,
  lazyLoad: 'ondemand',
  draggable: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  loop: true,
  responsive: [
    {
      breakpoint: 745,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 396,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/* ----------------------- */
/* ------- JQUERY -------- */
/* ----------------------- */



function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();





let scrollpos = window.scrollY;
const header = document.querySelector(".header");
const header_height = header.offsetHeight;


const add_class_on_scroll = () => header.classList.add("active")
const remove_class_on_scroll = () => header.classList.remove("active")


window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})
