const compareBtns = document.querySelectorAll('.js-compare');
const favoriteBtns = document.querySelectorAll('.js-favorite');
const digitCompare = document.querySelector('.hero__digit--compare');
const digitFavorite = document.querySelector('.hero__digit--favorite');
let compareCount = 0;
let favoriteCount = +0;

const initBtnCount = () => {

  compareBtns.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      btn.classList.toggle('added');
      btn.lastChild.textContent = btn.lastChild.textContent === 'Сравнить товар' ? 'В сравнении' : 'Сравнить товар';
      if (btn.classList.contains('added')) {
        compareCount++;
      } else {
        compareCount--;
      }

      if ((compareCount > 0) && !digitCompare.classList.contains('show')) {
        digitCompare.classList.add('show');
        digitCompare.innerText = compareCount;
      } else {
        if ((compareCount > 0) && digitCompare.classList.contains('show')) {
          digitCompare.innerText = compareCount;
        } else {
          digitCompare.classList.remove('show');
        }
      }
      return compareCount;
    });
  });

  favoriteBtns.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      btn.classList.toggle('added');
      btn.lastChild.textContent = btn.lastChild.textContent === 'В избранное' ? 'В избранном' : 'В избранное';
      if (btn.classList.contains('added')) {
        favoriteCount++;
      } else {
        favoriteCount--;
      }

      if ((favoriteCount > 0) && !digitFavorite.classList.contains('show')) {
        digitFavorite.classList.add('show');
        digitFavorite.innerText = favoriteCount;
      } else {
        if ((favoriteCount > 0) && digitFavorite.classList.contains('show')) {
          digitFavorite.innerText = favoriteCount;
        } else {
          digitFavorite.classList.remove('show');
        }
      }

      return favoriteCount;
    });
  });
};

export {initBtnCount};
