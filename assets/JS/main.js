$(document).ready(function () {
  $(".sub-main").slick({
    rtl: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
});
$(".slider-for").slick({
  rtl: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
const allBoxes = document.querySelector(".all-boxes");
const messageLink = document.querySelector(".message-link");

messageLink.addEventListener("click", () => {
  allBoxes.classList.toggle("active");
});
