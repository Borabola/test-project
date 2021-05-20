const initFormTab = () => {
  const togglesList = document.querySelectorAll('.toggle');

  togglesList.forEach((toggle) => {
    const toggleCheckbox = toggle.querySelector('input');
    const changingBlock = toggle.nextElementSibling;

    toggleCheckbox.addEventListener('change', ()=> {
      changingBlock.classList.toggle('f-block--tab2');
    });
  });
};

export {initFormTab};
