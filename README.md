# Домашнее задание к занятию "4.Организация тестирования"

Правила сдачи задания:

1. **Важно**: в рамках этого ДЗ можно использовать любой менеджер пакетов
1. **Важно**: всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через Appveyor.
1. Всё задание можно выполнить в виде одного Github-репозитория
1. В README.md должен быть размещён бейджик сборки и ссылка на Github Pages
1. В качестве результата присылайте проверяющему ссылки на ваши GitHub-проект(ы)

В качестве примера организации e2e-тестирования используйте код из каталога [`e2e`](e2e).

---

### Credit Card Validator

![CI](https://github.com/BudTon/js_pro_web_testing_e2e/actions/workflows/web.yml/badge.svg)

[GitHub Pages](https://budton.github.io/js_pro_web_testing_e2e/)

#### Легенда

Вам пришла задача: сделать виджет, позволяющий вводить номер карты (можете в качестве общего развития почитать про PCI DSS).

Общий вид виджета должен выглядеть следующим образом:

![](./pic/validator.png)

Скриншот взят с сайта http://www.validcreditcardnumber.com.

Вам нужно провести исследовательскую работу и выяснить - на базе чего определяется, какой платёжной системе принадлежит определённая карта (не забудьте про "Мир").

#### Описание

Используйте [следующий алгоритм](https://en.wikipedia.org/wiki/Luhn_algorithm) для проверки валидности номера карты.

Изображения для карт необходимо найти самостоятельно (помните, про авторские права и недопустимость нелегального использования). Обычно информацию об использованных изображениях размещают в файле `licenses.txt` и кладут в корень сайта (настройте для этого соответствующим образом Webpack).

Разделите логику проверки номера карты, выяснения принадлежности определённой платёжной системе и взаимодействия с DOM.

Напишите авто-тесты на функции проверки номера карты и принадлежности определённой платёжной системе.

В качестве источника номеров карт используйте сервис [FreeFormatter](https://www.freeformatter.com/credit-card-number-generator-validator.html).

---

### Puppeteer* (задача со звёздочкой)

Важно: эта задача не является обязательной. Её (не)выполнение не влияет на получение зачёта по ДЗ.

Подключите Puppeteer и проверьте взаимодействие для двух различных вариантов:
1. Ввод валидного номера карты
1. Ввод невалидного номера краты

---

### JSDOM (задача со звёздочкой)

Важно: эта задача не является обязательной. Её (не)выполнение не влияет на получение зачёта по ДЗ.

К предыдущей задаче подключите JSDOM и реализуйте проверку с использованием `jest.each` (т.е. вам надо проверить взаимодействие с DOM).
