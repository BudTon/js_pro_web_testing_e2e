import { isValidNum, isValidTypeCard } from '../../components/validator/valid';
import CreatedWidget from '../../components/CreatedClass/CreatedWidget.class';

test.each([
  ['wwww', 'You only need to enter numbers'],
  ['49167248193048q', 'You only need to enter numbers'],
  ['676240322574323', 'Credit card number'],
  ['67624032257432', 'Credit card number'],
])('test the function on the card number %s', (value, expected) => {
  const inputField = document.createElement('input');
  isValidNum(inputField, value);
  expect(inputField.placeholder).toBe(expected);
});

test.each([
  ['44', 'Visa'],
  ['55', 'MasterCard'],
  ['374556', 'American Express'],
  ['65', 'Discover'],
  ['3533', 'JSB'],
  ['303', 'Diners Club'],
  ['2222222222222', 'Мир'],
])('test the function on the card number %s pay card %s', (value, expected) => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  new CreatedWidget(parent);
  isValidTypeCard(value);
  const elementList = document.querySelectorAll('li');
  let title;
  elementList.forEach((element) => {
    if (element.classList.value === '') {
      title = element.querySelector('img').title;
    }
  });
  const result = title;
  expect(result).toBe(expected);
});
