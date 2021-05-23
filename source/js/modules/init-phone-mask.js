const COUNTRY_CODE = '+38(0';
const length = COUNTRY_CODE.length;

const onInputPhoneInput = ({target}) => {
  const matrix = `${COUNTRY_CODE}__) ___ - __ - __`;
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let val = target.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  target.value = matrix.replace(/./g, (a) => {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
  });
};

const onFocusPhoneInput = ({target}) => {
  if (!target.value) {
    target.value = COUNTRY_CODE;
    target.addEventListener('input', onInputPhoneInput);
    target.addEventListener('blur', onBlurPhoneInput);
    target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

const onKeydownPhoneInput = (e) => {
  if (e.target.selectionStart <= length && e.keyCode !== 8 && e.keyCode !== 46) {
    e.target.setSelectionRange(length, length);
  }
  if ((e.target.selectionStart === length || e.target.selectionStart === 1) && e.keyCode === 8) {
    e.preventDefault();
  }
  if (e.target.selectionStart === 1 && e.keyCode === 46) {
    e.preventDefault();
  }
};

const onBlurPhoneInput = ({target}) => {
  if (target.value === COUNTRY_CODE) {
    target.value = '';
    target.closest('.js-field').classList.remove('custom-input--has-value');
    target.removeEventListener('input', onInputPhoneInput);
    target.removeEventListener('blur', onBlurPhoneInput);
  }
};

const initPhoneMask = () => {
  const phoneInputs = document.querySelectorAll('[type="tel"]');
  if (phoneInputs.length) {
    phoneInputs.forEach((input) => {
      input.addEventListener('focus', onFocusPhoneInput);
    });
  }
};

export {initPhoneMask};
