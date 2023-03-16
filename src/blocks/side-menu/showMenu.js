function showMenu() {
  let menu = document.querySelector('.side-menu');
  let exitButton = document.querySelector('.menuHeader__exit');
  let menuButton = document.querySelector('.page-header__menu');
  let page = document.querySelector('.page');
  const breakpoint = window.matchMedia('(max-width:1100px)');

  exitButton.addEventListener('click', function () {
    menu.classList.add('side-menu_hidden');
  });

  if (
    !menu.classList.contains('side - menu_hidden') &&
    breakpoint.matches === true
  ) {
    page.addEventListener('click', function () {
      menu.classList.add('side-menu_hidden');
    });
  }

  menuButton.addEventListener('click', function () {
    menu.classList.remove('side-menu_hidden');
  });
}
export default showMenu();
