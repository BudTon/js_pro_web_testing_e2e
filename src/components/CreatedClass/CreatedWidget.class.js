import visa from '../../img/visa.png';
import masterCard from '../../img/mastercard.png';
import americanExpress from '../../img/american-express.png';
import discover from '../../img/discover.png';
import jbs from '../../img/jcb.png';
import dinersClub from '../../img/diners-club.png';
import mir from '../../img/mir.png';

export default class CreatedWidget {
  constructor(parent) {
    this.parent = parent;
    this.init();
  }

  init() {
    this.parent.insertAdjacentHTML('beforeend', '<h1>4. Домашнее задание к лекции «Организация тестирования»</h1>');
    this.parent.insertAdjacentHTML('beforeend', '<h2>4.1 Credit Card Validator,</h2>');
    this.parent.insertAdjacentHTML('beforeend', '<h2>4.2 Puppeteer (задача со звёздочкой),</h2>');
    this.parent.insertAdjacentHTML('beforeend', '<h2>4.3 JSDOM (задача со звёздочкой)</h2>');
    this.parent.insertAdjacentHTML('beforeend', ' <ul class="card-list">');
    const ulElement = this.parent.querySelector('ul');
    CreatedWidget.cardList.forEach((item) => {
      const elementList = this.renderItem(item);
      ulElement.insertAdjacentHTML('beforeend', elementList);
    });
  }

  // eslint-disable class-methods-use-this
  renderItem(item) {
    return `
      <li><img data-id="${item.id}" src="${item.src}" title="${item.title}" alt="${item.alt}"></li>
    `;
  }
}

CreatedWidget.cardList = [
  {
    id: 'Visa', src: `${visa}`, title: 'Visa', alt: 'Visa',
  },
  {
    id: 'MasterCard', src: `${masterCard}`, title: 'MasterCard', alt: 'MasterCard',
  },
  {
    id: 'AmericanExpress', src: `${americanExpress}`, title: 'American Express', alt: 'American Express',
  },
  {
    id: 'Discover', src: `${discover}`, title: 'Discover', alt: 'Discover',
  },
  {
    id: 'JSB', src: `${jbs}`, title: 'JSB', alt: 'JSB',
  },
  {
    id: 'DinersClub', src: `${dinersClub}`, title: 'Diners Club', alt: 'Diners Club',
  },
  {
    id: 'Mir', src: `${mir}`, title: 'Мир', alt: 'Мир',
  },
];
