/* 
*   Parameters & Arguments

    -Parameters are placeholder data to be passed through the function
    -Can be named anything but should be appropriate

    Structure example
                    (1)
        function hi(name) {
            console.log(`Hi, ${name}`);
        }                       (2)
            (3)
        hi("Joe");

        1)Parameter(s) that the function is accepting or place holding.
        2)Using string interpolation, we can refer to the parameter that was given to the function.
        3)This is where we define what the parameter's value will be.
            -Known as an argument
*/

function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}!`);
}

order('cheese pizza');
order('burger and fries');
order('cheesecake');

function myName (firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName}.`);
}

myName('Carlos', 'Nunez');

function yourName( fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

yourName('Rock', 'Lee');

let num1 = 1;
let num2 = 2;
let newNum = 5;

function addTwoNumbers(one, two) {
    let sum = one + two;
    console.log(sum);
}

addTwoNumbers(num1, num2); //3
addTwoNumbers(num1, newNum); //6