/* 

    !Array Destructuring
    -Syntax is on left side of assignment operator
    -allows pulling info out of an array and assigning data to it;s own variable

*/

const fullName = ["John", "Doe"];

//firstName = fullName[0];
//lastName = fullName[1];


//destructuring example
//          (1)     (2)           (3)  
const [firstName,lastName] = fullName;

/* 
    1) assign variable name to array item in position 0
    2) same as above but position/index 1
    3) array that is being referenced for info stored in it


*/
console.log(firstName, lastName);

console.log(`Hello, ${firstName}.`);

//! Spread Operator
//pulls out all the elements of the array and sets it as a standalone list
//denoted by three periods: ...

/* 
    !concept - not syntax of spread operator
    const fullName = ["Max", "Steel"];

    ...fullName// 'Max', 'Steel'

    const elements = ...fullName;
*/

/* 
We can utilize this to create an array within an array, or manipulate a small section of an array, or save a section of the array and manipulate 
the rest of it
*/

const copiedFullName = [...fullName];

fullName.push("Mr.");

console.log(fullName, copiedFullName);



console.log(Math.min(1,5, -3)); //logs smallest value of number data

const prices = [10.99, 5.99, 8.99, 19.99];
console.log(Math.min(...prices)); //cycles through the array of prices due to the spread operator 

//! Rest
/* 
    opposite to spread syntax
    rest collects data from array and condenses into a single element
*/

const fullName2 = ["John", "Doe", "Mr.", {month: 3, date: 22, year: 1973}];

const [fName, lName, ...otherInfo] = fullName2; //if add commas between values, you can skip it with rest operator

//example const [fName, lName,,, ...otherInfo]; if we had more items in-between within the array it could skip those and log the last values

console.log(fName, lName, otherInfo); 
//...otherInfo creates an array to highlight rest of the items within fullName2 array -- useful if we didn't know whole array data values