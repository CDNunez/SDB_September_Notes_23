/* 
*   Arrow Functions

    Structure

    (1)         (2)
    let hi = () => {
        console.log('hi!');
    }

    1)We need to set the fat arrow function to a variable. use "let" keyword
    2)We use the "fat arrow" to signify it is a function.

    -Arrow functions (fat arrow functions) were introduced in ES6. They are a more concise form of writing a function expression; not declarative function.
   ! -Do not get hoisted
*/

//* Concise Body Arrow Function

let hi = () => console.log('hi!');

//invokes hi();
hi();


//* Block Body Arrow Function

let hello = () => {
    let greeting = "Hello";
    let user = "Yoyo";
    return `${greeting}, ${user}`; //this will be returned to the function when invoked - if you want to view it in the console you must log it outside the function
}

//invokes function hello(); and logs it to the console
console.log(hello());

//concise      parameter          parameter being called
let apples1 = (x) => `There are ${x} apples.`;


//block
let apples2 = (x) => {
    return `There are ${x} apples.`;
}


console.log(apples1(6)); //6
console.log(apples2(2)); //2

//single parameter example

let apples3 = x => `There are ${x} apples.`;

console.log(apples3(1000000000));//1000000000

//multiple parameters example

let apples4 = (x, y) => `There are ${x+y} apples.`;

console.log(apples4(4, 5));//9

/* 
*   return keyword

    let hi = () => {
        (1)
        return 'Hi';
    }
            (2)    (3)
    let newName = hi();

    console.log(newName);

    1) The keyword that brings our data out of our function.
    2) New variable is required to hold the value of the return.
    3) When called, the function becomes the value of the return.
*/

//block code practice

let age = (currentYear, birthYear) => {
    return `Your age is ${currentYear - birthYear}.`;
}

console.log(age(2023, 1996));


//single parameter example
let firstName = fName => 'Steve';
let myName = firstName();
console.log(myName); //logs Steve;



function capitalizeName(name) {
    let capName = '';

    for(letter in name) {
        //console.log(letter); test to log the index of the letters
        //if else loop inside of for in loop to check for the index of the letter, capitalize letter in index 0 and return it, then return the following letters lower case.
        if(letter == 0) {
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }

    return capName;
}

const newName = capitalizeName('meLvIn');
console.log(newName);

//Challenge tip calculator - return the value, capture the returned 

let tipCalculator = (total, tip) => {
    let tipPercent = (total * tip) / 100;
    let totalBill = total + tipPercent;
    return `Your total is ${totalBill} and the tip is: ${tipPercent}`;
}

console.log(tipCalculator(420, 10));

let tipCalc = (subtotal, tipPer) => {
    let tip = (subtotal * tipPer) / 100;
    let total = subtotal + tip;
    return total;
}

console.log(tipCalc(25,13.5));
