"use strict";

// while
/*
let num = 5;
while (num) {
    console.log(num);
    num--;
}
*/

// do while
/*
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 0);
*/

// for
/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/

// break
/*
let i = 0;
for (; i < 5; i++) {
    console.log(i);
    if (i == 2) break;
}
console.log(`Work is done!, num = ${i}`);
*/

// continue
/*
let num = 0;
for (; num < 5; num++) {
    if (num == 2) continue;
    console.log(num);
}
*/

// Мітки
/*
firstFor:
for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor;
        }
        console.log(size);
    }
}
*/

/*
firstFor:
for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            continue firstFor;
        }
        console.log(size);
    }
}
*/

/* HOMEWORK */

// let num = 1;

/*
while (num < 6) {
    console.log(num);
    num++;
}
*/

/*
do {
    console.log(num);
    num++;
} while (num <= 5);
*/

/*
for (; num < 6; num++) {
    console.log(num);
}
*/

/*
let num = 0;
while (num <= 2) {
    console.log(`Число: ${num}`);
    num++;
}
*/

/*
firstFor:
for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break firstFor;
        }
        console.log(size);
    }
}
*/
