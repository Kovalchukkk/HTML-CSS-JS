
function createMessage(text, name) {
    return `${text}, ${name}!`;
}

function showMessage(message) {
    console.log(message);
}

function initMessage(text, name) {
    showMessage(createMessage(text, name));
}

initMessage('Hello', 'Dave');

// setTimeout and setInterval

/*
let res = 0;
function showNumber(num) {
    res += num;
    console.log(res);
    if (res === 5) {
        clearInterval(timeId);
    }
}
let timeId = setInterval(showNumber, 1000, 1);
*/

/*
function showNumber(num) {
    console.log(num);
    let timeId = setTimeout(showNumber, 1000, ++num);
    if (num === 4) {
        clearTimeout(timeId);
    }
}
setTimeout(showNumber, 1000, 1);
*/

/*
function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
    setTimeout(showMessage, 3000, text, name);
}

setTimeout(showMessage, 3000, 'Hello', 'Dave');
*/

//setInterval(showMessage, 1000, 'Hello', 'Dave');

// Arrow functions

/*
let getMessage = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
};

console.log(getMessage('Hello', 'Dave'));
*/

/*
let getMessage = (text, name) => text + ', ' + name + '!';

console.log(getMessage('Hello', 'Dave'));
*/

/*
let getSumm;

if (2 > 1) {
    getSumm = function () {
        let summ = 1 + 2;
        console.log(summ);
    };
}
getSumm();
*/

// Create functions

/*
function calcSumm(first, second) {
    console.log(`Var first: ${first}`);
    console.log(`Var second: ${second}`);

    let numSumm = first + second;

    console.log(`Sum: ${numSumm}`);
    return numSumm;
}

let res = calcSumm(1, 2);
console.log(`Sum: ${res}`);
*/


// global variables
/*
let message;
function showMessage() {
    local variable
    let message = "Hello World!";
    message = "Hello!";
    console.log(message);
    console.log('Hi!');
}

showMessage();
console.log(message);
showMessage();
*/