import { isValidNum, isValidTypeCard } from '../validator/valid';
import luhnAlgorithm from '../validator/luhnAlgorithm';

export default class CreatedForm {
  constructor(parantEl) {
    this.parantEl = parantEl;
    this.onSubmit = this.onSubmit.bind(this);
    this.onText = this.onText.bind(this);
    this.bindToDOM();
  }

  static get markup() {
    return `
        <form data-widget="validator-form" class="card-validator">
        <div class="validator-control">
          <div data-id="validator-value" class="validator-value">
            <input data-id="validator-input" class="input" type="text" placeholder="Credit card number">
          </div>
          <button data-id="validator-btn" class="validator-btn">Click to Validate</button>
        </div>
        </form >
        `;
  }

  static get selector() {
    return '.card-validator';
  }

  static get inputSelector() {
    return '.input';
  }

  static get submitSelector() {
    return '.validator-btn';
  }

  bindToDOM() {
    this.parantEl.insertAdjacentHTML('beforeend', CreatedForm.markup);
    this.element = this.parantEl.querySelector(CreatedForm.selector);
    this.submit = this.element.querySelector(CreatedForm.submitSelector);
    this.input = this.element.querySelector(CreatedForm.inputSelector);
    this.element.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('input', this.onText);
  }

  onSubmit(e) {
    e.preventDefault();
    luhnAlgorithm(this.input.value, this.submit);
  }

  onText(e) {
    e.preventDefault();
    isValidNum(this.input, this.input.value);
    if (this.input.value !== '') {
      isValidTypeCard(this.input.value);
    }
    this.input.addEventListener('click', () => {
      this.input.value = '';
      this.input.classList.remove('error-num');
      this.input.placeholder = 'Credit card number';
      const liList = document.querySelectorAll('li');
      liList.forEach((item) => {
        item.classList.remove('not-identified-card');
      });
      this.submit.classList.remove('luhn-algorithm-valid');
      this.submit.classList.remove('luhn-algorithm-invalid');
      this.submit.innerHTML = 'Click to Validate';
    });
  }
}
