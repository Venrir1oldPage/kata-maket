function openCallback() {
  let modal = document.querySelector('.modal-callback');
  let exitButton = document.querySelector('.modal-callback__exit');
  let callButtonMenu = document.querySelector('.menuFooter__chat');
  let callButtonHeader = document.querySelector('.page-header__chat');
  let overlay = document.querySelector('.modal-overlay');

  exitButton.addEventListener('click', function () {
    modal.classList.add('modal-callback_hidden');
    overlay.classList.add('modal-overlay_hidden');
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });

  if (!modal.classList.contains('modal-calbackl_hidden')) {
    overlay.addEventListener('click', function () {
      modal.classList.add('modal-callback_hidden');
      overlay.classList.add('modal-overlay_hidden');
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  }

  callButtonMenu.addEventListener('click', function () {
    modal.classList.remove('modal-callback_hidden');
    overlay.classList.remove('modal-overlay_hidden');
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });

  callButtonHeader.addEventListener('click', function () {
    modal.classList.remove('modal-callback_hidden');
    overlay.classList.remove('modal-overlay_hidden');
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
}
export default openCallback();
