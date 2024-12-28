import CreatedForm from '../../components/CreatedClass/CreatedForm.class';
import CreatedWidget from '../../components/CreatedClass/CreatedWidget.class';

test.each([
  ['', "Click to Validate"],
])('test the function .onSubmit', (value, expected) => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  const form = new CreatedForm(parent);
  form.input.value = value
  const submitEl = parent.querySelector(CreatedForm.submitSelector);
  submitEl.click()
  const result = form.submit.innerHTML;
  expect(result).toBe(expected);
});

test.each([
  ['4', "Click to Validate"],
  ['', "Click to Validate"],
])('test the function .onText', (value, expected) => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  new CreatedWidget(parent)
  const form = new CreatedForm(parent);
  const input = parent.querySelector(CreatedForm.inputSelector);
  form.input.value = value
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('click', { bubbles: true }));
  const result = form.submit.innerHTML;
  expect(result).toBe(expected);
});
