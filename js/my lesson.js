// // вход - массив чисел
// // выход - одно число
// // function getSum(numbers) {
// //     1. создать переменную для суммы//
// //     2. пройтись по всем элементам массива//
// //     3. каждый элемент прибавить к сумме//
// //     4. вернуть сумму

// // }
// // function getSum(numbers) {
// //     let = 0
// //     for (let i = 0; i <= numbers.length; i += 1){
// //         sum += numbers[i];
// //     }
// //     return sum
// // }

// // вход - массив чисел /
// //     выход - самое большое число в масииве//
// // шаги 1) создать функцию
// // 2) создать переменную n записи большего числа
// // 3) сравнить по очереди числа одно с другим и большее записать в переменную
// // 4) вернуть число n после прохождения всего массива
// // function getMaxNumber(number) {
// //   let max = number[0];
// //   for (let i = 1; i <= number.length; i += 1) {
// //     if (number[i] > max) {
// //       max = number[i];
// //     }
// //   }
// //   return max;
// // }

// // function positiveNumbers(number) {
// //   let sumPositive = 0;
// //   for (let i = 0; i < number.length; i += 1) {
// //     if (number[i] > 0) {
// //       sumPositive += 1;
// //     }
// //   }
// //   return sumPositive;
// // }

// // function sumPositiveNumbers(numbers) {
// //   let sum = 0;
// //   for (let i = 0; i <= numbers.length; i += 1) {
// //     if (numbers[i] > 0) {
// //       sum += numbers[i];
// //     }
// //   }
// //   return sum;
// // }

// // function newPositiveNumbers(numbers) {
// //   let newNumbers = [];
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] > 0) {
// //       newNumbers.push(numbers[i]);
// //     }
// //   }
// //   return newNumbers;
// // }

// // function x2(numbers) {
// //   let newNumbers = [];
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     newNumbers.push(numbers[i] * 2);
// //   }
// //   return newNumbers;
// // }

// // function numberMinus(numbers) {
// //     let firstMinus = 0;
// //     for (let i = 0; i < numbers.length; i += 1) {
// //         if (numbers[i] < 0) {
// //             return firstMinus;
// //             else { return null; }
// //         }
// //     }
// // }
// // function minusNumber(numbers) {
// //     return numbers.filter(minusNumber(number){
// //         return number < 0;
// //     });
// // }
// // function negativeNumber(numbers) {
// //   const result = numbers.find(function (number) {
// //     return number < 0;
// //   });
// // }
// // function firstNumber(numbers) {
// //     const result = numbers.find(function (number) {
// //         return number % 2 === 0;
// //     });
// //     return result ?? null;
// // }

// // function sumPositiveNumbers(numbers) {
// //   let sum = 0;
// //   numbers.forEach(function (number) {
// //       if (number < 0) {
// //           sum += 1;
// //     }
// //   });
// //     return sum;
// // }

// // function sumPositiveNumbers(numbers) {
// //   let sum = 0;
// //   numbers.forEach(function (number) {
// //     if (number % 2 === 0) {
// //       sum += number;
// //     }
// //   });
// //   return sum;
// // }

// // const numbers = [12, 7, -3, 0, 18, 5, -10, 4, 9];
// // function sumPositiveNumbers(numbers) {
// //   let sum = 0;
// //   numbers.forEach(function (number) {
// //     if (number % 2 === 0) {
// //       sum += number;
// //     }
// //   });
// //   return sum;
// // }
// // Numbers.reduce(function (acc, number) {
// //   if (number % 2 === 0) {
// //     return acc + number;
// //   }
// //   return acc;
// // }, 0);

// // const numbers = [5, -2, 10, 3, -7, 4];
// // function negativeNumber(numbers) {
// //   return numbers.reduce(function (acc, number) {
// //     if (number < 0) {
// //       return acc + 1;
// //     }
// //     return acc;
// //   }, 0);
// // }
// // let min = 0;
// // function minNumber(numbers) {
// //     let min = 0;
// //     return numbers.reduce(function (acc, number) {
// //         if (number < min) {
// //             =number
// //         }
// //         return acc
// //     }0)
// // }
// // function getEvenNumbers(numbers) {
// //   return numbers.filter(number => number % 2 === 0);
// // }
// // function moreFive(numbers) {
// //   return numbers.filter(number => number > 5);
// // }

// // function plusOne(numbers) {
// //   return numbers.map(number => number + 1);
// // }

// // function sumNumbers(numbers) {
// //   return numbers.reduce((acc, number) => acc + number, 0);
// // }

// // const product = {
// //   name: 'Phone',
// //   price: 500,
// //   quantity: 3,
// // };
// // function finalPrice(product) {
// //   return product.price * product.quantity;
// // }

// // const prices = {
// //   apple: 50,
// //   banana: 30,
// //   orange: 40,
// // };
// // function allSum(price) {
// //   let sum = 0;
// //   for (const key in price) {
// //     sum += price[key];
// //   }
// //   return sum;
// // }
// // const stock = {
// //   apple: 3,
// //   banana: 1,
// //   orange: 5,
// //   kiwi: 1,
// // };
// // function yesInStok(stock) {
// //   let inStok = {};
// //   for (const key in stock) {
// //     if (stock[key] > 1) {
// //       inStok[key] = stock[key];
// //     }
// //   }
// //   return inStok;
// // }
// // const user = {
// //   name: 'Alex',
// //   age: 20,
// //   isOnline: true,
// // };
// // function sumValue(user) {
// //   let sum = 0;
// //   for (const key in user) {
// //     sum += user.key;
// //   }
// //   return sum;
// // }

// // function sumKey(user) {
// //   let newValue = {};
// //   for (const key in user) {
// //     newValue = user[key];
// //   }
// //   return newValue;
// // }

// // const user = {
// //   name: 'Alex',
// //   age: 20,
// //   isOnline: true,
// // };
// // function newMassive(user) {
// //   let masive = [];
// //   for (const key in user) {
// //     masive.push(user.key);
// //   }
// //   return masive;
// // }

// // const user = {
// //   name: 'Alex',
// //   age: 20,
// //   increaseAge: function () {
// //     this.age += 1;
// //   },
// // };

// // const user = {
// //   name: 'Alex',
// //   age: 20,
// //   getInfo: function () {
// //     return `${this.name} is ${this.age} years old`;
// //   },
// // };

// // class Car{
// //      this.brand = brand;
// // this.speed = speed;
// //  }
// // getSpeed(){
// //     return this.speed;
// //  }
// // class book{
// //     constructor(title, pages) {
// //         this.title = title,
// //             this.pages = pages,
// //     }
// //     getPages() {
// //         return this.pages;
// //     }
// // }
// // class User{
// //     constructor(name, age) {
// //         this.name = name,
// //             this.age = age,
// //     }
// //     asAdult() {
// //         if (age >= 18) {

// //         }
// //     }
// // }

// // class Rectangle {
// //   constructor(width, height) {
// //     this.width = width;
// //     this.height = height;
// //   }
// //     getArea() {
// //         return this.width * this.height;
// //   }
// // }
// // class Product {
// //   constructor(name, price) {
// //     this.name = name;
// //     this.price = price;
// //   }
// // }
// // const products = [
// //   new Product('Phone', 500),
// //   new Product('Laptop', 1200),
// //   new Product('Tablet', 800),
// // ];

// // products.filter(price > 600);
// // return (sum = products += 1);

// // class User {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// // }
// // const users = [
// //   new User('Alex', 20),
// //   new User('John', 16),
// //   new User('Anna', 25),
// //   new User('Mike', 30),
// // ];
// // const result = users;
// // .filter(user => user.age < 18);
// // .map(user => user.naeme);

// // class Product {
// //   constructor(name, price) {
// //     this.name = name;
// //     this.price = price;
// //   }
// // }
// // const products = [
// //   new Product('Phone', 500),
// //   new Product('Laptop', 1200),
// //   new Product('Tablet', 800),
// //   new Product('Watch', 200),
// // ];

// // const numbers = [5, 10, 3, 7, 2];

// // const result = numbers.reduce((count, number) => {
// //   if (number > 5) {
// //     return count + 1;
// //   }
// //   return count;
// // }, 0);

// // const users = [
// //   { name: 'Alex', age: 20 },
// //   { name: 'John', age: 16 },
// //   { name: 'Anna', age: 25 },
// //   { name: 'Mike', age: 17 },
// // ];
// // let adults = users.filter(age => age > 18).map(user => user.name);

// // const numbers = [5, 12, 8, 130, 44];
// // let sum = numbers.filter(number => number > 10).reduce((count, number)return count++)

// // const orders = [
// //   { price: 100, status: 'completed' },
// //   { price: 200, status: 'pending' },
// //   { price: 150, status: 'completed' },
// //   { price: 50, status: 'pending' },
// // ];
// // const sum = orders
// //   .filter(order => order.status === 'completed')
// //   .reduce((sum, price) => sum + order.price, 0);

// // const users = [
// //   { name: 'Alex', age: 20 },
// //   { name: 'John', age: 16 },
// //   { name: 'Anna', age: 25 },
// //   { name: 'Mike', age: 30 },
// // ];

// // const middle = users.reduce((sum, user) => sum + user.age, 0) / users.length;

// // console.log(middle);
// // const products = [
// //   { name: 'Phone', price: 500 },
// //   { name: 'Laptop', price: 1200 },
// //   { name: 'Tablet', price: 800 },
// // ];

// // const brand = products.map(product => product.name);
// // console.log(brand);

// // const users = [
// //   { name: 'Alex', age: 20 },
// //   { name: 'John', age: 16 },
// //   { name: 'Anna', age: 25 },
// //   { name: 'Mike', age: 17 },
// // ];
// // const notAdults = users.filter(user => user.age < 18).length;
// // console.log(notAdults);
// // const products = [
// //   { name: 'Phone', price: 500 },
// //   { name: 'Laptop', price: 1200 },
// //   { name: 'Tablet', price: 800 },
// //   { name: 'Watch', price: 200 },
// // ];

// // const expensive = products.filter(product => product.price > 700);
// // console.log(expensive);
// // const orders = [
// //   { price: 100, status: 'completed' },
// //   { price: 200, status: 'pending' },
// //   { price: 150, status: 'completed' },
// //   { price: 50, status: 'pending' },
// // ];
// // const sumOrders = orders
// //   .filter(order => order.status === 'completed')
// //   .map(order => order.price);

// // console.log(sumOrders);

// // const product = {
// //   name: 'Phone',
// //   price: 500,
// //   brand: 'Apple',
// // };
// // const { name, price } = product;
// // const users = [
// //   { name: 'Alex', age: 20 },
// //   { name: 'Anna', age: 25 },
// //   { name: 'John', age: 18 },
// // ];
// // const ages = users.map(({ age }) => age);
// // console.log(ages);

// // const products = [
// //   { name: 'Phone', price: 500 },
// //   { name: 'Laptop', price: 1200 },
// //   { name: 'Tablet', price: 800 },
// // ];
// // const prices = products.map(({ price }) => price);
// // console.log(prices);

// // const orders = [
// //   { id: 1, user: 'Alex', total: 120, status: 'completed' },
// //   { id: 2, user: 'Anna', total: 80, status: 'pending' },
// //   { id: 3, user: 'Alex', total: 200, status: 'completed' },
// //   { id: 4, user: 'John', total: 50, status: 'completed' },
// // ];

// // const oredersAlex = orders
// //   .filter(order => order.user === 'Alex')
// //   .filter(order => order.status === 'completed')
// //   .reduce((sum, order) => sum + order.total, 0);

// // console.log(oredersAlex);
// // const orders = [
// //   { user: 'Alex', total: 120 },
// //   { user: 'Anna', total: 80 },
// //   { user: 'Alex', total: 200 },
// //   { user: 'John', total: 50 },
// //   { user: 'Anna', total: 70 },
// // ];
// // const sumOrders = orders.reduce((acc, order) => {
// //   if (!acc[order.user]) {
// //     acc[order.user] = 0;
// //   }

// //   acc[order.user] += order.total;

// //   return acc;
// // }, {});

// // console.log(sumOrders);
// // const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// // const finalSt = words.reduce((acc, word) => {
// //   if (!acc[word]) {
// //     acc[word] = 0;
// //   }

// //   acc[word] += 1;

// //   return acc;
// // }, {});

// // console.log(finalSt);
// // const orders = [
// //   { user: 'Alex', total: 120, status: 'completed' },
// //   { user: 'Anna', total: 80, status: 'pending' },
// //   { user: 'Alex', total: 200, status: 'completed' },
// //   { user: 'John', total: 50, status: 'completed' },
// //   { user: 'Anna', total: 70, status: 'completed' },
// // ];

// // const finalOrders = Object.entries(
// //   orders
// //     .filter(order => order.status === 'completed')
// //     .reduce((acc, order) => {
// //       if (!acc[order.user]) {
// //         acc[order.user] = 0;
// //       }

// //       acc[order.user] += order.total;
// //       return acc;
// //     }, {})
// // ).map(([user, total]) => ({ user, total }));

// // console.log(finalOrders);
// // function greet(name, callback) {
// //   callback(`Hello, ${name}`);
// // }

// # Callback

// ---

// // 1. **Сума чисел:** Напишіть функцію `sumArray(numbers, callback)`, яка приймає
// //    масив чисел `numbers` та колбек `callback`. Функція повинна обчислити суму
// //    чисел у масиві та передати результат у колбек.

// // function sumArray(numbers, callback) {
// //   let result = 0;

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     result += numbers[i];
// //   }

// //   callback(result);
// // }

// // 2. **Подвоєння чисел:** Напишіть функцію `doubleArray(numbers, callback)`, яка
// //    приймає масив чисел `numbers` та колбек `callback`. Функція повинна подвоїти
// //    кожне число в масиві та передати новий масив у колбек.

//   // function doubleArray(numbers, callback) {
//   //   let result = [];
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     result.push(numbers[i] * 2);
//   //   }
//   //   callback(result);
//   // }

// // 3. **Фільтр слів:** Напишіть функцію `filterWords(words, condition, callback)`,
// //    яка приймає масив рядків `words`, функцію `condition` (перевірка рядка) та
// //    колбек `callback`. Функція повинна фільтрувати слова масиву за допомогою
// //    переданої умови та передати відфільтрований масив у колбек.

// // 4. **Капіталізація рядків:** Напишіть функцію
// //    `capitalizeStrings(strings, callback)`, яка приймає масив рядків `strings` та
// //    колбек `callback`. Функція повинна перетворити всі рядки в масиві, роблячи
// //    першу літеру кожного рядка великої, і передати перетворений масив в колбек.

// // 5. **Сортування чисел:** Напишіть функцію `sortNumbers(numbers, callback)`, яка
// //    приймає масив чисел `numbers` та колбек `callback`. Функція повинна
// //    відсортувати числа в масиві за зростанням та передати відсортований масив у
// //    колбек.

// // 6. **Пошук максимуму:** Напишіть функцію `findMax(numbers, callback)`, яка
// //    приймає масив чисел `numbers` та колбек `callback`. Функція повинна знайти
// //    максимальне число в масиві та передати його в колбек.

// // 7. **Перевірка на парність:** Напишіть функцію `checkEven(numbers, callback)`,
// //    яка приймає масив чисел `numbers` та колбек `callback`. Функція повинна
// //    перевірити, чи всі числа в масиві парні, і передати результат перевірки
// //    колбек.

// // 8. **Об'єднання рядків:** Напишіть функцію
// //    `concatStrings(strings, separator, callback)`, яка приймає масив рядків
// //    `strings`, рядок `separator` та колбек `callback`. Функція повинна об'єднати
// //    рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що
// //    вийшов, в колбек.

// // 9. **Перетворення в числа:** Напишіть функцію `parseNumbers(strings, callback)`,
// //    яка приймає масив рядків `strings` та колбек `callback`. Функція повинна
// //    перетворити кожен рядок з масиву на число і передати новий масив чисел в
// //    колбек.

// // 10. **Підрахунок символів:** Напишіть функцію
// //     `countCharacters(strings, callback)`, яка приймає масив рядків `strings` та
// //     колбек `callback`. Функція повинна підрахувати загальну кількість символів у
// //     всіх рядках масиву та передати результат у колбек.
