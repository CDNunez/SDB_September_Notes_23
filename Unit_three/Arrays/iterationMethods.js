// * Iteration Methods

/* 
*   -Do not destroy the original array
*   -Takes in a callback function
*   -Loops Through Arrays
*   -Must have a return

    example of iterative functions
        .filter()
        .includes()
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

//this doesnt have to be a const
const filteredFruit = fruits.filter(fruit => {
    //console.log('Parameter:', fruit); //logs item inside the array
    let result = fruit !== "mango"; //checks if fruit (item in the array) isn't mango (item to be filtered)
    //console.log("Inside Filter: ", result); //logs if item is in the array after the filter true/false -- boolean.
    return result; // stores fruit (item in the array) that isn't mango (item to be filtered)
});

//console.log(filteredFruit); //logs array after filtered

let fruit1 = 'pineapple';
//console.log(fruit1.includes('apple')); //logs true because the string 'pineapple' contains the sub string or string of 'apple'

//?arrow function with a concise body
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));//if in array fruits the word/string "apple" exists withing the array item -- the item is excluded
console.log(filteredFruit2);//removes item "apple" and "pineapple" because they contain the string/sub string "apple"

//? Function example
function removeMango(fruit) {
    return fruit !== 'mango'; //stores the items that isn't the one specified inside the function
}

const filteredFruit3 = fruits.filter(removeMango); //invokes function (callback function) without invoking it outside the const or let
console.log(filteredFruit3);


//-----------------Practice-------------------------------

let exampleArray = ['item0', 'item1', 'item2', 'item3', 'item4'];

//* Block Body Arrow Function
const filteredItems = exampleArray.filter(item => {
    let result = item !== "item2";
    return result;
})

console.log(filteredItems); //filters out item 2


//* Concise Body Arrow Func
const filteredItems2 = exampleArray.filter(item => !item.includes("4"));

console.log(filteredItems2);//filters out item 4

//*Function
function removeItemThree(item) {
    return item !== "item3";
}

const filteredItems3 = exampleArray.filter(removeItemThree);//filters out item 3
console.log(filteredItems3);

/* 
    !Challenge
    remove all the 5s
    store new variable and log it
*/

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

function removeFive(num) {
    return num !== 5; //stores number in the array that are not strictly equal to 5 in the array
}

const filterNum = myNumberArray.filter(removeFive); //invokes the function and iterates on each item in the array
console.log(filterNum); //filters out num 5

const takeFive = myNumberArray.filter(myNumberArray => {
    let makeString = myNumberArray.toString(); //converts array items from numbers to string data type
    let result = !makeString.includes("5"); //creates new variable that excludes the string 5
    return result; //stores the value of result to takeFive
})
console.log(takeFive); //filters out 5