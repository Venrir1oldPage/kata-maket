import reedMore from '../blocks/main/article/articleReedMore.js';
import ShowMore from '../blocks/main/brendGalery/showMore.js';
import ShowMoreType from '../blocks/main/typeGalery/showMore.js';
import showMenu from '../blocks/side-menu/showMenu.js';
import openCall from '../blocks/modal/modal-call.js';
import openCallback from '../blocks/modal/modal-callback.js';
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const breakpoint = window.matchMedia('(min-width:661px)');
let swiperBrend;

const breakpointChecker = function () {
  // если шире - сетка
  if (breakpoint.matches === true) {
    // удалить, если активировано
    if (swiperBrend !== undefined) swiperBrend.destroy(true, true);
    return;
    // если меньше 501 то надо включить свайпер
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  swiperBrend = new Swiper('.swiper', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 16,
    slideToClickedSlide: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

window.addEventListener('resize', breakpointChecker), breakpointChecker();

import '../scss/style.scss';
