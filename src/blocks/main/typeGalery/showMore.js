function ShowMoreType() {
  let list = document.querySelector('.typeGalery__list');
  let showHideButton = document.querySelector('.showHideButtonGalery');
  let showHideButtonDescription = document.querySelector(
    '.showHideButtonGalery__description'
  );
  let showHideButtonIcon = document.querySelector(
    '.showHideButtonGalery__icon'
  );

  showHideButton.addEventListener('click', function () {
    list.classList.toggle('typeGalery__list_short');
    showHideButtonIcon.classList.toggle('showHideButtonGalery__icon_short');
    if (showHideButton.textContent === 'Показать все') {
      showHideButtonDescription.textContent = 'Скрыть';
    } else {
      showHideButtonDescription.textContent = 'Показать все';
    }
  });
}

export default ShowMoreType();
