function showMenu() {
  let menu = document.querySelector('.side-menu');
  let exitButton = document.querySelector('.menuHeader__exit');
  let menuButton = document.querySelector('.page-header__menu');
  let content = document.querySelector('.content-wrapper');

  exitButton.addEventListener('click', function () {
    menu.classList.add('side-menu_hidden');
    elem.style.display = 'none';
  });

  menuButton.addEventListener('click', function () {
    menu.classList.remove('side-menu_hidden');
  });
}
export default showMenu();
