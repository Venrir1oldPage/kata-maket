if (window.matchMedia("(min-width: 501px)").matches) { 
  let list = document.querySelector('.brendGalery__list');
  let showHideButton = document.querySelector('.showHideButton');
  let showHideButtonDescription = document.querySelector('.showHideButton__description');
  let showHideButtonIcon = document.querySelector('.showHideButton__icon');
  
  showHideButton.addEventListener('click', function () {
    console.log('klick');
      list.classList.toggle('brendGalery__list_short');
      showHideButtonIcon.classList.toggle('showHideButton__icon_short');
      if (showHideButtonDescription.textContent === "Показать все"){
      showHideButtonDescription.textContent="Скрыть";
      } else {
      showHideButtonDescription.textContent="Показать все";
      }
    });
  };
