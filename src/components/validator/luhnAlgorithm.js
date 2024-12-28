export default function luhnAlgorithm(value, submit) {
  const valueList = value.split('');
  let numLuhn = 0;
  valueList.forEach((el, index) => {
    /* eslint-disable no-unused-expressions */
    const elNum = Number(el);
    if (index % 2 === 0) {
      elNum * 2 > 9 ? numLuhn = numLuhn + elNum * 2 - 9 : numLuhn += elNum * 2;
    } else {
      numLuhn += elNum;
    }
  });
  if (numLuhn % 10 === 0) {
    /* eslint no-param-reassign: "error" */
    submit.classList.add('luhn-algorithm-valid');
    submit.innerHTML = 'Valid';
  } else {
    submit.classList.add('luhn-algorithm-invalid');
    submit.innerHTML = 'InValid';
  }
}
