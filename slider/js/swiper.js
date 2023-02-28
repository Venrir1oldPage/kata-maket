new Swiper('.mySwiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: '.swiperPagination',
    clickable: true,
    mousewheel: true,
    keyboard: true,
    },
  });


// if (window.matchMedia("(max-width: 500px)").matches) { 
//     var swiper = new Swiper(mySwiper, {
//       slidesPerView: "auto",
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         mousewheel: true,
//        keyboard: true,
//       },
//     });
//   };