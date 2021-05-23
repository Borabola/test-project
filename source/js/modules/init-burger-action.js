const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');
const burgerBtn = document.querySelector('.main-nav__toggle');
const breakpointMd = window.matchMedia('(max-width:768px)');
const mainNavWrapper = document.querySelector('.main-nav__wrapper');

const openMenu = () => {
  burgerBtn.ariaPressed = 'true';
  headerOverlay.classList.add('active');
  window.disableBodyScroll(mainNavWrapper);

  setTimeout(() => {
    headerOverlay.classList.add('show');
    header.classList.add('show');
  }, 100);

  setTimeout(() => {
    header.classList.add('header--opened');
  }, 300);
};

const closeMenu = () => {
  burgerBtn.ariaPressed = 'false';
  headerOverlay.classList.remove('show');
  header.classList.remove('show');
  header.classList.add('hide');
  window.enableBodyScroll(mainNavWrapper);

  setTimeout(() => {
    header.classList.remove('hide');
    headerOverlay.classList.remove('active');
    header.classList.remove('header--opened');
  }, 200);
};

const closeMenuOnResize = () => {
  burgerBtn.ariaPressed = 'false';
  headerOverlay.classList.remove('show');
  headerOverlay.classList.remove('active');
  header.classList.remove('show');
  window.enableBodyScroll(mainNavWrapper);
  setTimeout(() => {
    header.classList.remove('header--opened');
  }, 0);
};


const initBurgerAction = () => {

  if (burgerBtn) {
    breakpointMd.addListener(closeMenuOnResize);
    burgerBtn.addEventListener('click', () => {
      if (burgerBtn.ariaPressed === 'true') {
        closeMenu();
      } else {
        openMenu();
      }
    });

    headerOverlay.addEventListener('click', () => {
      closeMenu();
    });
  }
};

export {initBurgerAction};
