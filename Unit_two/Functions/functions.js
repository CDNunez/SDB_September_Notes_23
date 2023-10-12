/* 
*   Functions

    Blocks of code that create small programs. They are used for repetitive tasks. When user does x, program does y. Functions are built to reduce repeated code - functional programming.

    -Block of code that performs a particular task.
    -simplified programs that run a task when invoked.

    ?Function Declaration Structure
    (1)        (2)
    function hi() {
        console.log("Hi");
    }

    1) Keyword
    2)Name of the function
        -parenthesis is for parameters
*/

//?Declarative Functions
function hi() {
    console.log('Hi!');
}

/* 
    ?Expression Function
    (1)
    let hey = function() {
        console.log('Hi!');
    }

    1)The variable "hey" is now representative of the function "hi"

    !Does not get hoisted
*/

let hey = function hello() {
    console.log('Hello World!');
}

hey(); // Hello World!


//Invoking - means to run a function

/* 
*    Invoking

    function hi() {
        console.log('hi!);
    }

    (1)
    hi();

    1)Invoking function 'hi' -- write the name of the function followed by a parenthesis.
*/

function greetings() {
    console.log("Hello");
}

greetings; //shouldnt log
greetings(); //logs Hello
console.log(greetings); //logs [Function: greetings]

// Create a function that when invoked lists out the numbers 1 through 10. function name "counting"

function counting() {
    for( let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

counting();

// Given an array, create a function that lists out the values individually.

let array = ['This', 'is', 'really', 'lame'];

function arrList() {
    for(i = 0; i <= 3; i++) {
        console.log(array[i]);
    }
}

arrList();

let arrayList = function arrayList() {
    for(item of array) {
        console.log(item);
    }
}

arrayList();

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
];

//for of loop - calls the value in array

let dogList = function doglist() {
    for(dog of dogArray) {
        console.log(dog);
    }
}

dogList();

//or for loop

console.log("------------");

let pupList = function pupList() {
    for(i = 0; i <= 5; i++) {
        console.log(dogArray[i]);
    }
}

pupList();

//or for in loop - calls the index of the array

console.log("---------");

let petList = function petList() {
    for(dog in dogArray) {
        console.log(dogArray[dog]);
    }
}

petList();