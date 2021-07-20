"use strict";
// && - логічне 'і' 
// || - логічне 'або'
// ! - логічне 'не'

/*
Оператор ?? повертає перший аргумент, 
якщо він не null / undefined, інакше другий  
*/

let name;
let car = 'BMW';

console.log(name ?? "Без ім'я"); // Без ім'я
console.log(car ?? "Без ім'я"); // BMW

// Оператор строгого порівняння (без приведення типів)
/*
console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);
console.log(null == undefined); // true
console.log(null === undefined); // false
*/

// Порівняння null і 0
/*
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
*/

// Порівняння undefined і 0
/*
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
*/

/*
let users = "25";
let admins = "10";
console.log(users + admins);
console.log(+users + +admins);
console.log(Number(users) + Number(admins)); // Довший запис
*/

/*
let resOne = "Фрілансер" + " " + "по" + " " + "життю";
console.log(resOne);

let resTwo = "Фрілансер " + 58;
console.log(resTwo);
console.log(typeof resTwo);

let resThree = 2 + "2";
console.log(resThree);

let resFour = 58 - 20 + " Фрілансер";
console.log(resFour);

let resFive = +"25";
console.log(resFive);
console.log(typeof resFive);
*/

/*
let x;
x = 5 + 8;
console.log(`Результат додавання: ${x} `);
x = 9 - 5;
console.log(`Результат віднімання: ${x} `);
x = 2 * 3;
console.log(`Результат множення: ${x} `);
x = 10 / 2;
console.log(`Результат ділення: ${x} `);
x = 11 % 3;
console.log(`Результат остачі від ділення: ${x} `);
x = 5 ** 3;
console.log(`Результат піднесення до степення: ${x} `);
*/
