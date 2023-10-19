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

//---------------notes continued---------------

let movies = [
    { name: "Top Gun 2", category: "Action"},
    { name: "Scary Movie 5", category: "Horror"},
];

movies.push({name: "It", category: "Horror"});
movies.push({name: "Get Out", category: "Horror"});
movies.push({name: "Taken", category: "Action"});

const actionMovies = movies.filter( movie => movie.category === 'Action'); //filters out for action movies
const horrorMovies = movies.filter(movie => movie.category === "Horror"); // filters out for horror movies

console.log("Horror :", horrorMovies);
console.log("Action: ", actionMovies);

//! .forEach()
/* 
    it provides a callback function for each of the elements..?
*/

let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

for(let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i]);// logs each item in the array
}

//newFoodList.forEach(item => console.log("For Each: ", item)); //logs same as above loop

newFoodList.forEach((item, index) => {
    console.log("For Each: ", item, "index: ", index);
})// logs the index of each item inside the array

/*
    !Challenge
    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end //push
    - And replace one of your existing movies with another one //splice
*/

let movieArray = ["Pokemon", "Yu Gi Oh", "DragonBall Z"];

movieArray.push("One Piece");

movieArray.splice(1, 1, "BayBlade");

movieArray.forEach(movie => console.log(movie));

//! .find()

let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

////tmnt.forEach( (character, index) => console.log("Character: ", character,"length of item: ", character.length, "Index of Character: ", index));

let character = "Leo";
console.log("Find: ", tmnt.find(c => c == character)); //searches the array for the parameter/data we specify by cycling through the array

character = "Shredder";//updating the variable further down wont affect the first result due to how js is read and how initializing and redefining values work
console.log("Find: ", tmnt.find(c => c == character)); 

character = "Splinter";
tmnt.find((c, i) => console.log("Index: ", c == character, "index: ", i));

//! .map()
//cycle through an array of items and adjust for what is needed


let numberArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) numberArray.push(i);//logs numbers from 0 to 101 inside of numberArray --immediate return for the loop

numberArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x); //logs numbers inside numberArray that are divisible by 15 into fizzBuzzArray
});

console.log(fizzBuzzArray);

/*
 - First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
       - search something like "arrays", "javascript", "reverse"
       - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];

console.log(typeof arr);

/*if( arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log("not an array");
}*/

console.log(arr instanceof Array === true);

let backwards = arr.reverse();

console.log(backwards);