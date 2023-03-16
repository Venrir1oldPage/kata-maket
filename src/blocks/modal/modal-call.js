function openCall() {
  let modal = document.querySelector('.modal-call');
  let exitButton = document.querySelector('.modal-call__exit');
  let callButtonMenu = document.querySelector('.menuFooter__call');
  let callButtonHeader = document.querySelector('.page-header__call');
  let overlay = document.querySelector('.modal-overlay');

  exitButton.addEventListener('click', function () {
    modal.classList.add('modal-call_hidden');
    overlay.classList.add('modal-overlay_hidden');
  });

  if (!modal.classList.contains('modal-call_hidden')) {
    overlay.addEventListener('click', function () {
      modal.classList.add('modal-call_hidden');
      overlay.classList.add('modal-overlay_hidden');
    });
  }

  callButtonMenu.addEventListener('click', function () {
    modal.classList.remove('modal-call_hidden');
    overlay.classList.remove('modal-overlay_hidden');
  });

  callButtonHeader.addEventListener('click', function () {
    modal.classList.remove('modal-call_hidden');
    overlay.classList.remove('modal-overlay_hidden');
  });
}
export default openCall();
