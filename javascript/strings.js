/*
let textHi = "Hello!";
let textAll = `${textHi} I'm string!`;

console.log(textAll);

function someSum(a, b) {
    return a + b;
}
console.log(`Сума: ${someSum(4, 7)}`);

let textTwo = "Привіт!\n\tРадий вас бачити\n\t\tУспіхів! \u00A9 \u{1F60D}";
console.log(textTwo);
*/

// Робота зі стрічками

// length

// let textOne = "Привіт!";
// console.log(textOne.length);

// Символи стрічки

/*
let firstSymbol = textOne[0];
let lastSymbol = textOne[textOne.length - 1];
console.log(firstSymbol);
console.log(lastSymbol);
*/

// for of
/*
for (const char of textOne) {
    console.log(char);
}

console.log(" ");

for (let i = 0; i < textOne.length; i++) {
    console.log(textOne[i]);
}
*/

// Зміна регістру

/*
let text = "Привіт!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
*/

// Пошук підстрічки

// Метод str.indexOf(substr, pos) // Повертає індекс, де відбулось співпадіння, якщо ні, то повертає -1

/*
let text = "Привіт!";
console.log(text.indexOf("рив"));
console.log(text.indexOf("рив", 3));
*/

// Метод str.includes(substr, pos) повертає true, якщо підстрічка є в строці або false, якщо нема

let text = "Привіт!";
console.log(text.includes("рив"));
console.log(text.includes("рив", 3));

console.log(text.startsWith("Прив"));
console.log(text.endsWith("!"));

// str.slice

console.log(text.slice(1, 2)); // р
console.log(text.slice(-2, -1));
console.log(text.slice(1)); // ривіт!

console.log(123 + +"456");

let nameS = "фрілансер";
console.log(nameS.slice(3, 6));
console.log(nameS.includes("лан", 4));