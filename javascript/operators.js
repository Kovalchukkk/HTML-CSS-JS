"use strict";
// && - логічне 'і'
// || - логічне 'або'
// ! - логічне 'не'

// let arr1 = [1, 5, -7, 9, 10];
// let arr2 = [6, 7, -10, 5, 8];

// let arr3 = arr1.filter(elem => arr2.includes(elem));  
// let object = {};

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// console.log(isEmpty(object));
// console.log(arr3);

const total = [-2, -10, 12, 3, 34].reduce((previousValue, number) => {
    return number >= 0 ? previousValue + number: previousValue;
  }, 0);
  
  console.log(total);


/*
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};

console.log(getFrequency("hello"));
*/
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length ; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// let a = "The car sjdn sadasdasd ds";
// console.log(longestWord(a));
// // console.log(typeof typeof(undefined));
// let str = String.raw `Hello \t ECMAScript ${2 * 3}!`;
// console.log(str);

// function f(num) {
//     if (num <= 1) return 1;
//     return f(num - 1) + f(num - 2);
// }

// console.log(5);

// let str = 'abc';
// console.log([...str].length);

// let a = 100;
// if (a > 50) {
//     let a = 20;
// }

// console.log(a);
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++)
// {
//     arr.fill(i, i);    
// }

// console.log(arr);
/*
Оператор ?? повертає перший аргумент, 
якщо він не null / undefined, інакше другий  
*/

// let name;
// let car = 'BMW';

// console.log(name ?? "Без ім'я"); // Без ім'я
// console.log(car ?? "Без ім'я"); // BMW

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
