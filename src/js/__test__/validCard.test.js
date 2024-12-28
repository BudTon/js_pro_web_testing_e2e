import CreatedForm from '../../components/CreatedClass/CreatedForm.class';
import CreatedWidget from '../../components/CreatedClass/CreatedWidget.class';

test('test valid Card', () => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  new CreatedWidget(parent);
  const form = new CreatedForm(parent);
  form.input.value = '4916724819304890';
  form.submit.click();
  expect(form.submit.classList.contains('luhn-algorithm-valid')).toBe(true);
});

test('test invalid Card', () => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  new CreatedWidget(parent);
  const form = new CreatedForm(parent);
  form.input.value = '67624032257432';
  form.submit.click();
  expect(form.submit.classList.contains('luhn-algorithm-invalid')).toBe(true);
});


