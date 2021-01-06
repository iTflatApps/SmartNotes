function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();


/* --------------- */
/* --- JQUERY ---- */
/* --------------- */


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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});