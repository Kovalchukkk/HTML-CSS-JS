// creation

/*
let userInfo = new Object(); // конструктор об'єкта
let userInfo = {}; // літерал об'єкта
*/

// властивості. ключ + значення (key + value)

/*
let userInfo = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};
*/

/*
console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo["name"]);
console.log(userInfo["likes javascript"]);
*/

/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Lviv",
        street: "Freedom",
    }
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/

// Функція для створення об'єктів
/*
function makeUserInfo(name, age) {
    return {
        name, // або name: name,
        age, // або age: age,
        "likes javascript": true,
    };
}
let user = makeUserInfo("Олег", 50);
console.log(user.name);
*/

// Додавання властивостей
/*
let userInfo = {
    name: "Олег",
};

console.log(userInfo);

userInfo.age = 50;

console.log(userInfo);

userInfo["likes javascript"] = true;

console.log(userInfo);

userInfo.address = {
    city: "Lviv",
    street: "Freedom",
};

console.log(userInfo);

delete userInfo.age; // видалення об'єкту або пари ключ-значення

console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

// Дублювання об'єктів

// Object.assign()
/*
let userInfo = {
    name: "Олег",
    age: 30,
};

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/

// Оператор "in"
/*
let userInfo = {
    name: "Олег",
    age: 30,
    address: {
        city: "Lviv",
        street: "Freedom",
    }
}
*/

/*
if ("name" in userInfo) {
    console.log(userInfo.name);
}
*/

// Цикл for ... in

/*
for (let key in userInfo) {
    // keys
    console.log(key);
    // values
    console.log(userInfo[key]);
}


for (let key in userInfo.address) {
    console.log(key);
    console.log(userInfo.address[key]);
}
*/

// Методи об'єктів
/*
let userInfo = {
    name: "Олег",
    age: 30,
    address: {
        city: "Lviv",
        street: "Freedom",
    },
    */
/*
showInfo: function () {
    console.log(`${userInfo.name}, ${userInfo.age} років. Адреса: м.${userInfo.address.city}, вул.${userInfo.address.street}`);
}
*/
/*
showInfo() {
    //console.log(`${userInfo.name}, ${userInfo.age} років. Адреса: м.${userInfo.address.city}, вул.${userInfo.address.street}`);
    console.log(`${this.name}, ${this.age} років. Адреса: м.${this.address.city}, вул.${this.address.street}`);
}
}
*/
/*
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/

// Функція-конструктор

function UserInfo(name) {

    // this = {}; Створюється пустий об'єкт (неявно)

    this.name = name;
    this.age = 30;

    // return this; Повертається об'єкт (неявно)
}

console.log(new UserInfo("Олег"));
console.log(new UserInfo("Павло"));
