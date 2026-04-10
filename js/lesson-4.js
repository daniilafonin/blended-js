// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = body.querySelector('#title');
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = body.querySelector('.list');
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = list.querySelectorAll('[data-topic]');
console.log(dataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstDT = list.querySelector('[data-topic]');
console.log(firstDT);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDT = dataTopic[dataTopic.length - 1];
console.log(lastDT);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const siblingTH1 = title.nextElementSibling;
console.log(siblingTH1);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3 = list.querySelectorAll('h3');
const h3Titles = Array.from(h3, item => item.textContent);
// console.log(h3Titles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3.forEach(item => item.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigationItem = list.querySelector('li[data-topic="navigation"]');
console.log(navigationItem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigationItem.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const navigationP = navigationItem.querySelector('p');
console.log(navigationP);
navigationP.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const currentTopicItem = list.querySelector(`li[data-topic="${currentTopic}"]`);
console.log(currentTopicItem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

currentTopicItem.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const topicCompleted = document.querySelector('.completed');
console.log(topicCompleted);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
topicCompleted.closest('li').remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const domInfo = document.createElement('p');
domInfo.textContent = "Об'єктна модель документа (Document Object Model)";
title.insertAdjacentElement('afterend', domInfo);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const property = document.createElement('li');
property.dataset.topic = 'manipulation';

const titleProperty = document.createElement('h3');
titleProperty.textContent = 'Властивість innerHTML';

const pProperty = document.createElement('p');
pProperty.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

property.append(titleProperty, pProperty);
list.append(property);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
