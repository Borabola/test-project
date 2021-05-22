const breakpointLg = window.matchMedia('(max-width: 1024px)');

const setAccordionStartState = () => {
  const activeContent = document.querySelectorAll('.accordion__content.active');
  if (activeContent.length) {
    activeContent.forEach((el) => {
      el.style.transition = 'none';
      el.style.maxHeight = '100%';
      setTimeout(() => {
        el.style.transition = null;
        el.style.maxHeight = el.scrollHeight + 'px';
      }, 300);
    });
  }
};

const updateActiveAccordion = () => {
  const activeContent = document.querySelectorAll('.accordion__content.active');
  if (activeContent.length) {
    activeContent.forEach((el) => {
      el.style.transition = 'none';
      el.style.maxHeight = el.scrollHeight + 'px';
      setTimeout(() => {
        el.style.transition = null;
      }, 300);
    });
  }
};


const initAccordionAction = (accordion) => {
  const btn = accordion.children[0];
  const content = accordion.children[1];
  const parent = accordion.closest('.accordion__content');

  btn.addEventListener('click', (e) => {

    e.preventDefault();
    btn.blur();

    const activeAccordionBtn = document.querySelector('.accordion__btn.active');
    if (activeAccordionBtn && activeAccordionBtn !== btn) {
      const activeAccordion = activeAccordionBtn.closest('.accordion');
      const activeAccordionContent = activeAccordion.querySelector('.accordion__content');
      activeAccordionBtn.classList.remove('active');
      activeAccordionContent.style.maxHeight = null;
      activeAccordionContent.classList.remove('active');
    }

    const maxHeight = content.style.maxHeight;
    if (maxHeight) {
      content.style.maxHeight = null;
      btn.classList.remove('active');
      content.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      btn.classList.add('active');
      content.classList.add('active');
    }
    if (parent) {
      parent.style.maxHeight = parent.scrollHeight + content.scrollHeight + 'px';
    }
  });
};

const initAccordion = () => {
  const accordions = document.querySelectorAll('.accordion');
  if (accordions.length && breakpointLg.matches) {
    setAccordionStartState();
    window.addEventListener('resize', updateActiveAccordion);
    accordions.forEach((accordion) => initAccordionAction(accordion));
  }
};

window.initAccordion = initAccordion;

export {initAccordion, updateActiveAccordion};
