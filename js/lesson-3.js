// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map(number => number * number);
// console.log(newNumbers);

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArray = data.flatMap(object => object.values);
// const newFlatArray = array => array.flatMap(object => object.values);
// console.log(newArray);
// console.log(newFlatArray(data));

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const isAdault = people.some(object => object.age < 20);
// const checkAge = (array, age) => array.some(object => object.age < age);
// console.log(isAdault);
// console.log(checkAge(people, 20));

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const everyNumbers = numbers.every(number => {
//   return number % 2 === 0;
// });
// const checkItem = (array, num) => array.every(number => number % 2 === 0);
// console.log(everyNumbers);
// console.log(checkItem(numbers, 2));

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firsrOddNumber = numbers.find(num => num % 2 !== 0);
// const checkItem = (array, number) => array.find(num => num % 2 !== 0);

// console.log(firsrOddNumber);
// console.log(checkItem(numbers, 2));

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const sortedArray = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedArray);
// const sortArray = arr => arr.toSorted((a, b) => a - b);
// console.log(sortArray(numbersArray));

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedArray = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedArray);
// const sortArray = arr => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(sortArray(stringArray));

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const sortedArray = users.toSorted((a, b) => a.age - b.age);
// console.log(sortedArray);
// const sortArray = arr => arr.toSorted((a, b) => a.age - b.age);
// console.log(sortArray(users));
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const filterUsers = users.filter(user => user.age > 20);
// console.log(sortUsers);
// const filteredUsers = (array, age) => array.filter(user => user.age > age);
// console.log(filteredUsers(users, 20));

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((num, number) => num + number, 0);
// console.log(sum);
// const a = array => array.reduce((num, number) => num + number, 0);
// console.log(a(numbers));

//Підрахунок кількості повторень
//Дано масив:
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// Очікуваний результат:
// {
//  apple: 3,
//  banana: 2,
//  orange: 1
// }

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const obj = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(obj);
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод subtract - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// // Приклад використання:

// class Calculator {
//   number(value) {
//     this.value = value;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }

//   add(value) {
//     this.value += value;
//     return this;
//   }

//   subtract(value) {
//     this.value -= value;
//     return this;
//   }

//   multiply(value) {
//     this.value *= value;
//     return this;
//   }

//   divide(value) {
//     if (!value) {
//       return this;
//     }
//     this.value /= value;
//     return this;
//   }
// }

// const result = calc.number(10); // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

/*Розроби клас Calculator, який дозволяє виконувати арифметичні
 операції над числом за допомогою методів класу, підтримуючи
ланцюжковий виклик (method chaining).

Вимоги до класу Calculator
- Метод number(value)
Встановлює початкове значення для наступних обчислень.
Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

- метод getResult, Повертає поточний результат усіх операцій.
Не змінює значення, просто повертає його.

- метод add - Додає value до поточного значення.
Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

- метод subtract - Віднімає value від поточного значення. Повертає this.

- метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

- метод multiply -Множить поточне значення на value. Повертає this.

Об'єкт класу може проводити послідовні операції у вигляді ланцюжка*/

// class Calculator {
//   #number = 0;

//   number(value) {
//     this.#number = value;
//     return this;
//   }

//   add(value) {
//     this.#number += value;
//     return this;
//   }

//   subtract(value) {
//     this.#number -= value;
//     return this;
//   }

//   multiply(value) {
//     this.#number *= value;
//     return this;
//   }

//   divide(value) {
//     this.#number /= value;
//     return this;
//   }

//   getResult(value) {
//     return this.#number;
//   }
// }

// // Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client();

// client.login = 'admin';

// console.log(client);
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor({ name, age, gender, email }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(data) {
//     super(data);
//     this.salary = data.salary;
//     this.department = data.department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const data = {
//   name: 'Poly',
//   age: 18,
//   gender: 'Male',
//   email: 'poly@gmail.com',
//   salary: 50,
//   department: 'developer',
//   login: 'admin',
// };

// const person = new Employee(data);

// console.log(person.getDetails());
// console.log(person.getEmployeeDetails());
// console.log(person);
