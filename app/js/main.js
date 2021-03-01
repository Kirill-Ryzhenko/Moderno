$(function () {
  $('.product-star').rateYo({
    rating: 5,
    starWidth: '11px',
    readOnly: true,
    ratedFill: '#ffa726',
    spacing: '2px',
  });

  var mixer = mixitup('.product__inner-box');

  $('.container-slider__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
  });
});
