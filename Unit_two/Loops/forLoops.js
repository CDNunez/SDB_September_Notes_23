/* 
*  Loops

    Loops loop through a block of code a number of times.

    ! If stuck in accidental infinite running loop:
        ctrl + c, ctrl + z, red stop button from "code runner"

    ? For Loops:
        Take in 3 parameters (things within the ( ) of a statement)
            -Initial expression (starting value)
            -Condition to be met
            -Increment expression

*   Structure:
        for (initial expression; condition; increment expression) {
            ..code block of logic to run
        }
*/

//start at 0 and increase to 10
for ( i = 0; i <= 10; i++ ) {
    console.log(i);
}

console.log("Finished for loop");

//Start at 0 increase by 2 to 20
for ( i = 0; i <= 20; i += 2 ) {
    console.log(i);
}

console.log("Done looping");

//Start at 10 and decrease by 1 until 0
for ( i = 10; i >= 0; i --) {
    console.log(i);
}

console.log("loop done");

//straight return(one item is returning from a statement): we don't need to use {curly brackets}
for ( i = 5; i >= 0; i-- ) console.log(i);

//Spell out word letter for letter
let firstName = "Danny";

console.log(firstName.length);

for (let i = 0; i < firstName.length; i++) {
    console.log(i, firstName[i]);
}

//Change the value of a variable with a for loop

let sum = 0;

console.log(`Sum equals ${sum} before the for loop.`);

for (let i = 1; i <= 5; i++) {
    console.log("Before: ", sum);
    sum += i;
    console.log("After: ", sum);
}

console.log(`Sum equals ${sum} after the for loop.`); //sum equals 15

/* 
*   For In Loops

    -Loop through the properties of an object

    Structure:
    for ( key in object ) {
        ...code to run
    }

    ^key is a random variable name of our choice, object refers to the variable name of the targeted object
*/

let student = {
    name: "Natsu",
    guild: "Fairy Tail",
    animal: "Dragon",
    wizard: true,
}

//console.log(student.name); //output Natsu  -- dot notation
//console.log(student["name"]); //output Natsu -- square bracket notation

for (item in student) {
    console.log(item); //should log each key name in the object
    console.log(student[item]); //should log each value of each key
}

//arrays are consider objects by JS.
let catArray = ["Calico", "Tabby", "Maine Coon", "Russian Gray"];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

/* 
*   For in loops can be used on objects and arrays.
    But if array index order is important, it is better to use a:
        -for loop
        -for of loop
        -Array.forEach()
*/

/* 
*   For Of Loops:
    -Loops through the values of an iterable object
        iterable - an object that has iterable properties(properties it can count/go through)

    Structure:
    for (variable of iterableData) {
        ...code to run
    }

    ^variable is any word we choose to use
    ^iterableData is the name of any iterable "thing"

    Can loop over Arrays, Strings, etc.

    ! For Of Loops cannot iterate over objects
*/

let dogArray = ["Husky", "Corgi", "Boxer", "Shiba Inu"];

// for (dog of dogArray) {
//     console.log("For of loop:", dog);
// }

for (dog of dogArray) {
    // Use and if conditional statement to make a separate console.log for husky
    (dog === "Husky") ? console.log(`I think the ${dog} wants scooby snacks.`)
    : (dog === "Shiba Inu") ? console.log(`The ${dog} is being judgy.`)
    : console.log(`The ${dog} is sitting quietly.`);
}