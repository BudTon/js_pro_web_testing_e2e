export function isValidNum(inputField, value) {
  const isNum = /^\d+$/.test(value);
  if (!isNum) {
    /* eslint no-param-reassign: "error" */
    inputField.value = '';
    inputField.classList.add('error-num');
    inputField.placeholder = 'You only need to enter numbers';
  } else {
    inputField.classList.remove('error-num');
    inputField.placeholder = 'Credit card number';
  }
}

export function isValidTypeCard(value) {
  const elementLi = document.querySelectorAll('li');
  elementLi.forEach((item) => {
    item.classList.add('not-identified-card');
  });
  if (/^[4]/.test(value)) {
    const visa = document.querySelector('[data-id="Visa"]').parentElement;
    visa.classList.remove('not-identified-card');
  }
  if (/^5[1-5]/.test(value)) {
    const masterCard = document.querySelector('[data-id="MasterCard"]').parentElement;
    masterCard.classList.remove('not-identified-card');
  }
  if (/^34|^37/.test(value)) {
    const americanExpress = document.querySelector('[data-id="AmericanExpress"]').parentElement;
    americanExpress.classList.remove('not-identified-card');
  }
  if (/^64[4-9]|^65|^6011/.test(value)) {
    const discover = document.querySelector('[data-id="Discover"]').parentElement;
    discover.classList.remove('not-identified-card');
  }
  if (/^352[8-9]|^35[3-8][0-9]/.test(value)) {
    const jsb = document.querySelector('[data-id="JSB"]').parentElement;
    jsb.classList.remove('not-identified-card');
  }
  if (/^30[0-5]|^36/.test(value)) {
    const dinersClub = document.querySelector('[data-id="DinersClub"]').parentElement;
    dinersClub.classList.remove('not-identified-card');
  }
  if (/^[2]/.test(value)) {
    const mir = document.querySelector('[data-id="Mir"]').parentElement;
    mir.classList.remove('not-identified-card');
  }
}
