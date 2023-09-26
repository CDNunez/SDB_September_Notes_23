//* Data types

/* 
    *Booleans
    - true/false
*/

let on = true;
let off = false;

console.log(on, off);

if (on === true && off === false) {
    console.log("These are booleans")
} else {
    console.log("Guess there aren't any booleans.");
}

/* 
*   Null
    -Null is an empty value and acts as an empty container.
*/

let empty = null;
console.log(empty);

/* 
* Undefined
    -No value is assigned and does not act as an empty container.
*/

let notDefined = undefined; //this is technically defined... as undefined.
console.log(notDefined);

let alsoUndefined; //this is the correct way of letting a variable be undefined
console.log(alsoUndefined);

/* 
*   Numbers
    - Numbers are just numbers in JS. No special characters are needed to write them.
*/

let degrees = 98;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3

//Strings into numbers
let a = Number("42"); //turns strings of numbers into actual numbers.
console.log(a);