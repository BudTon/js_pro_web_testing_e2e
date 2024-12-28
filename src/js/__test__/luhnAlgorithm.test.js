import luhnAlgorithm from '../../components/validator/luhnAlgorithm';

test.each([
  ['valid number card', '5257978343161242', 'Valid'],
  ['valid number card', '4916724819304890', 'Valid'],
  ['InValid number card', '676240322574323', 'InValid'],
  ['InValid number card', '67624032257432', 'InValid'],
  ['invalid number card', '1544846518328', 'InValid'],
])('it should be %s', (_, value, expected) => {
  const submit = document.createElement('div');
  luhnAlgorithm(value, submit);
  expect(submit.innerHTML).toBe(expected);
});
