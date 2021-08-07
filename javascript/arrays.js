// Створення масива

// let arr = new Array(); // Використовується рідко

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

/*
let arrTwo = [
    "Олег",
    {
        type: "JS",
        age: 36
    },
    true,
    function () {
        console.log("Привіт, я Олег!");
    }
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();
*/

// Метод push - додає елемент в кінець масива

// let arr = ["Тамара", "Геннадій", "Ольга",];
// arr.push("Коля");
// console.log(arr);

// Метод shift - видаляє перший елемент масива

// arr.shift();
// console.log(arr);

// Метод pop - видаляє останній елемент масива

// arr.pop();
// console.log(arr);

// Метод unshift - додає елемент напочаток масива

// arr.unshift("Іван");
// console.log(arr);

// Метод splice. Дозволяє додавати, видаляти і заміняти елементи
// Починаючи з першого індекса видаляємо один елемент
// arr.splice(1, 1);
// В змінну removed записуємо видалений елемент
/*
let removed = arr.splice(1, 1);
console.log(removed);
console.log(arr);
*/

// Замінюємо елементи

let arrThree = ["Тамара", "Геннадій", "Ольга", "Сергій",];
console.log(arrThree); // ["Тамара", "Геннадій", "Ольга", "Сергій"]
// Починаючи з 0 індексу заміняємо один елемент 
arrThree.splice(0, 1, "Коля",);
console.log(arrThree); // ["Коля", "Геннадій", "Ольга", "Сергій"]

let arrFour = ["Тамара", "Геннадій", "Ольга", "Сергій",];
console.log(arrFour);
// Додаємо два елементи перед другим елементом в масиві
arrFour.splice(1, 0, "Коля", "Олег",);
console.log(arrFour);
// Видаляємо останній елемент
arrFour.splice(-1, 1);
console.log(arrFour);

// Копіювання масивів
// Метод slice і concat

// копіюємо весь масив

let arrFive = arrFour.slice();
console.log(`arrFive: ${arrFive}`);

// копієюмо від першого до третього (невключно)

let arrSix = arrFour.slice(0, 2);
console.log(`arrSix: ${arrSix}`);

let arrSeven = arrSix.concat("Петро", "Олег");
console.log(arrSeven);

// Пошук в масиві 
// Методи indexOf/LastIndexOf та includes

let arr_new = ["BMW", "AUDI", "MERCEDES", "OPEL",];

console.log(arr_new.indexOf("BMW")); // 0
console.log(arr_new.indexOf("RENAULT")); // -1

// Починаючи з 6 елемента
console.log(arr_new.indexOf("BMW", 5)); // -1

// includes - так само як indexOf, але повертає true або false

// Sort
arr_numbers = [8, 22, 1,];
console.log(arr_numbers.sort((a, b) => a - b));

// Reverse

console.log(arr_new.reverse());

// Метод map 

let result = arr_new.map(function (item, index, array) {
    return item[0];
});

console.log(result);

// Методи split і join

let str = "Lenovo,Asus,HP";

let arr_to_str = ["Apple", "Banana", "Lolipop"];

let arr_str = str.split(',');

let arr_str_2 = str.split(',', 2);

let str_from_arr = arr_to_str.join(', ');

console.log(arr_str);
console.log(arr_str_2);
console.log(str_from_arr);