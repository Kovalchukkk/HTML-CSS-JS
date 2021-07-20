"use strict";

let message = "Привіт";
let number = 5;

/*
if (number > 1)
{
    console.log(message);
}
else
{
    console.log("Умова не виконана!")
}
*/

let messageEnd = 5 > 1 ? ", Вася!" : ", Оля!";

message += messageEnd;
console.log(message);