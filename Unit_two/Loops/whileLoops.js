/* 
*   While Loops

    -While loop loops through a block of code WHILE a specific condition is true.

    Structure:
    while (condition) {
        .... code to run/execute
    }


    - The main purpose for while loops are when the iteration is uncertain.
        -i.g. : when its unknown how much content is in the data that is referenced or being looped through.
*/

let n = 1;

while (n < 10) {
    console.log(`n before addition(start of loop): ${n}.`);
    n++;
    console.log(`n after addition(end of loop): ${n}.`);
    console.log("<------------------------------------>");
}

console.log(`While Loop done running -- final value: ${n}`);

//Use a while loop to create and log a string -- pretend online cart (low value example for practice)

let cartMessage = "";
let count = 0; //zero items in cart

while (count < 5) {
    count++; //increase count by one -- count + 1 => count++
    cartMessage = `You have ${count} item(s) in your cart!`; // you can use interpolation to declare variables -- 
    console.log(cartMessage); // logs the new value of cartMessage with updated count while count is less than five.
}

console.log(`You have ${count} items in your cart, would you like to check out now?`); //logs message with updated count value

//Create a Spider Man story line with a while loop and an array

let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
    ];

    let structure = city[0];
   //console.log(structure); logs building

    let position = 0;
    //console.log(city[position]); logs building

    console.log("Welcome to the adventures of Spider Man!! Looks like Green Goblin is fucking shit up again!");

    while (structure != "empty street") {
        console.log(`Spider Man swings from the ${structure} in pursuit of Green Goblin!`); //logs the value structure is at city array
        position++; //increases position value by 1
        structure = city[position]; //updates structure to be new value of position
        console.log(`Spider Man lands on a ${structure}.`);
        console.log('<----------->');
    }

    console.log(`Spider Man lands in the ${structure}! He corners and confronts Green Goblin. Spidey saves the day again!!`);

    /* 
    ?   Do While Loops
        -They also loop through a block of code while a specified condition is true BUT 
            ! loop will run the code block ONCE, BEFORE checking if the condition is true and will keep running as long as the condition remains true.

        Structure:
        do {
            code to run/execute
        } while (condition)

        -works just like while loops with the exception that it will run the code block at least once.
    */

let num = 5;

do {
    console.log(`The number is ${num}.`); //logs string with num starting value
    num++; //num increments by one => num + 1
} while (num < 10)

console.log(`Final value of number after do while loop: ${num}.`);

//Do code block wile run once even if the condition is not true:
let value = 20;

do {
    value *= 2;
    console.log("Do block is running...");
} while (value > 100);

console.log(value); // new value is 40

//? Mock switch a group of account from deactivated to active, use a boolean

//Declare and Init an object called accounts

let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

//Use square bracket notations with the objects property key to get the true/false (boolean) value
//We want a variable that starts at 1 (acct1, etc) that we can increment

let acctNum = 1;

do {
    // Create a log message to prove the account is currently inactive
    console.log(
        `acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`);
    //activating message and setting acct to true
    console.log("Activating...");
    accounts[`acct${acctNum}`] = true; //reassigning value

    //Confirmation message
    console.log(
        `acct${acctNum} is currently active: set to ${accounts[`acct${acctNum}`]}.`);
    
    //After acct is activated(true), add 1 to acctNum variable to move to the next acct
    acctNum++;
} while (accounts[`acct${acctNum}`] == false);

//final message
console.log("All accounts are active");
console.table(accounts); //verify change in object