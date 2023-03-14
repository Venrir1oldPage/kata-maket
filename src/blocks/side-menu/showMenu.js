function showMenu() {
  let menu = document.querySelector('.side-menu');
  let exitButton = document.querySelector('.menuHeader__exit');
  let menuButton = document.querySelector('.page-header__menu');
  let page = document.querySelector('.page');

  exitButton.addEventListener('click', function () {
    menu.classList.add('side-menu_hidden');
    menu.style.display = 'none';
  });

  if (!menu.classList.contains('side - menu_hidden')) {
    page.addEventListener('click', function () {
      menu.classList.add('side-menu_hidden');
      menu.style.display = 'none';
    });
  }

  menuButton.addEventListener('click', function () {
    menu.classList.remove('side-menu_hidden');
    menu.style.display = 'block';
  });
}
export default showMenu();
