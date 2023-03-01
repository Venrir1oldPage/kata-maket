let init = false;
let mobile = window.matchMedia("(min-width: 0px) and (max-width: 501px)");
let swiper;

function swiperHandler() {
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new swiper ('.mySwiper', {
        slidesPerView: "auto",
        grabCursor:true,
        spaceBetween: 30,
        slideToClickedSlide:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        keyboard: {
            enable:true,
            onlyInViewport:true,
            pageUpDown:true,
        },
        mousewheel: {
            sensitivity:1,
        },
    });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperHandler();
window.addEventListener('resize',swiperHandler);