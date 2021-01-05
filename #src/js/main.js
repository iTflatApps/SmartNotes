@@include('slick.min.js')

$('.slider__row').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  loop: true
});

/* --------------- */
/* --- JQUERY ---- */
/* --------------- */


function ibg() {

    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();