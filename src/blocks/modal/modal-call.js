function openCall() {
  let modal = document.querySelector('.modal-call');
  let exitButton = document.querySelector('.modal-call__exit');
  let callButtonMenu = document.querySelector('.menuFooter__call');
  let callButtonHeader = document.querySelector('.page-header__call');
  let overlay = document.querySelector('.modal-overlay');

  exitButton.addEventListener('click', function () {
    modal.classList.add('modal-call_hidden');
    overlay.classList.add('modal-overlay_hidden');
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });

  if (!modal.classList.contains('modal-call_hidden')) {
    overlay.addEventListener('click', function () {
      modal.classList.add('modal-call_hidden');
      overlay.classList.add('modal-overlay_hidden');
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  }

  callButtonMenu.addEventListener('click', function () {
    modal.classList.remove('modal-call_hidden');
    overlay.classList.remove('modal-overlay_hidden');
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });

  callButtonHeader.addEventListener('click', function () {
    modal.classList.remove('modal-call_hidden');
    overlay.classList.remove('modal-overlay_hidden');
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
}
export default openCall();
