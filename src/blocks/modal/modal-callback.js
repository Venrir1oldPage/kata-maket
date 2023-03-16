function openCallback() {
  let modal = document.querySelector('.modal-callback');
  let exitButton = document.querySelector('.modal-callback__exit');
  let callButtonMenu = document.querySelector('.menuFooter__chat');
  let callButtonHeader = document.querySelector('.page-header__chat');
  let overlay = document.querySelector('.modal-overlay');

  exitButton.addEventListener('click', function () {
    modal.classList.add('modal-callback_hidden');
    overlay.classList.add('modal-overlay_hidden');
  });

  if (!modal.classList.contains('modal-calbackl_hidden')) {
    overlay.addEventListener('click', function () {
      modal.classList.add('modal-callback_hidden');
      overlay.classList.add('modal-overlay_hidden');
    });
  }

  callButtonMenu.addEventListener('click', function () {
    modal.classList.remove('modal-callback_hidden');
    overlay.classList.remove('modal-overlay_hidden');
  });

  callButtonHeader.addEventListener('click', function () {
    modal.classList.remove('modal-callback_hidden');
    overlay.classList.remove('modal-overlay_hidden');
  });
}
export default openCallback();
