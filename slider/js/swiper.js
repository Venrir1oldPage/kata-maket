new Swiper ('.mySwiper', {
    slidesPerView: "auto",
    simulateTouch: true,
    tuochRatio:50,
    touchAngle:45,
    grabCursor:true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    }
});



// new Swiper('.mySwiper', {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     mousewheel: true,
//     keyboard: true,
//     pagination: {
//       el: '.swiperPagination',
//     clickable: true,
//     mousewheel: true,
//     keyboard: true,
//     },
//   });


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