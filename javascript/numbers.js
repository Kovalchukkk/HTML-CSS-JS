/*
let someNum = 458;
console.log(someNum);

let someNums = 4.58;
console.log(someNums);

let someBigNum = 1e6; // 1000000;
console.log(someBigNum);

let someLittleNum = 1e-6; // 0.000001;
console.log(someLittleNum);

console.log(0xff); // 255
console.log(0b11111111); // 255
console.log(0o377); // 255

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));
*/

/*
let numOne = Math.floor(5.8); // Округлює до меншого
let numTwo = Math.ceil(2.2); // Округлює до більшого
let numThree = Math.round(-2.7); // Округлює до найближчого цілого

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
let num = 5.845;
console.log(num.toFixed(3)); // 5.845
console.log(+num.toFixed(3));
console.log(Number(num.toFixed(3)));
*/

/*
console.log(Number(25 + "Hello!"));

console.log(isNaN(25 + "Hello!")); // true

console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Hello!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
*/

/*
let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255
*/

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.max(5, 85, -49)); // 85
console.log(Math.min(5, 85, -49)); // -49

console.log(Math.abs(-58)); // 58
console.log(Math.pow(3, 3)); // 27
console.log(3 ** 3); // 27