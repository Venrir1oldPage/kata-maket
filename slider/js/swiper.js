const breakpoint = window.matchMedia( '(min-width:501px)' );
let mySwiper;

const breakpointChecker = function() {
  // если шире - сетка
if ( breakpoint.matches === true ) {
     // удалить, если активировано
if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
return;
  // если меньше 501 то надо включить свайпер
 } else if ( breakpoint.matches === false ) {
     //включаем
return enableSwiper();
}
};

const enableSwiper = function() {
mySwiper = new Swiper ('.brendGalery__container', {
  slidesPerView: 'auto',
  grabCursor:true,
  spaceBetween: 16,
  slideToClickedSlide:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    observer: true,
    observeParents: true,
  cssMode: true,
  keyboard: {
                enable:true,
                onlyInViewport:true,
                pageUpDown:true,
            },
});
};

window.addEventListener('resize', breakpointChecker);
breakpointChecker();

