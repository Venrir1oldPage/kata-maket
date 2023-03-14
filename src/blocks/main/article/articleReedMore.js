export default reedMore();

function reedMore() {
  let article = document.querySelector('.article__text');
  let showMoreBtn = document.querySelector('.article__moreButton');
  let showMoreBtnIcon = document.querySelector('.moreButton__icon');
  let showMoreBtnDescription = document.querySelector(
    '.moreButton__description'
  );

  showMoreBtn.addEventListener('click', function () {
    article.classList.toggle('article__text_short');
    showMoreBtnIcon.classList.toggle('moreButton__icon_short');
    if (showMoreBtnDescription.textContent === 'Читать далее') {
      showMoreBtnDescription.textContent = 'Скрыть';
    } else {
      showMoreBtnDescription.textContent = 'Читать далее';
    }
  });
}
