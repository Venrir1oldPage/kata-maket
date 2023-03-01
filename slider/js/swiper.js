let init = false;
let swiper;

function swiperHandler() {
  if (window.innerWidth < 501 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    if (!init) {
      init = true;
      swiper = new Swiper ('.mySwiper', {
        slidesPerView: "auto",
        grabCursor:true,
        spaceBetween: 16,
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

