/* 
*   Conditionals
    -It's a way for devs to ask a question and provide a response to depending on the condition of what is being asked
    -Conditionals focus on booleans (the question being either true or false).
    - Evaluates an expression and responds if it is true.
        - Falsy
                - false
                - 0
                - empty strings
                - null
                - undefined
                - NaN (not a number)
*/

//* If Conditionals Statements

/* 
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

let needsCoffee = true;

if (needsCoffee == true) {
    console.log('I need coffee!');
}

if (needsCoffee) {
    console.log('Yeah, I neeeeed coffeeee!');
}

let isOff = false;

if (isOff == false) {
    console.log("The billboard light is off.");
}

let weather = 68;

if (weather < 70) {
    console.log("It is nice out.");
}

//* If Else Conditional Statement

//let isOn = true;

//console.log((Math.floor(Math.random() * 2)));

/*if (isOn == true) {
    console.log("The lights are on.");
} else {
    console.log('The lights are off.');
}*/

let isOn = (Math.floor(Math.random() * 2));

if (isOn == 1) {
    console.log('The lights are on.');
} else {
    console.log('The lights are off.');
}

let temp = 75;
let lovelyWeather = "It's lovely out.";
let badWeather = "It's awfully hot out.";

if (temp < 70) {
    console.log(lovelyWeather);
} else {
    console.log(badWeather);
}

//* And, &&, checks if both conditions are equal

let username = "myUserName";
let password = "1234"; //to see false change password

if (username == "myUserName" && password == "1234") {
    console.log('Hello World! You are logged in.');
} else {
        console.log('Login error!');
}

//* OR, ||, checks if one statement is true or the other

let email = 'hotsinglesinyourarea@hotmail.com';
let uName = 'totallyNotAVirus420';

if (email == 'hotsinglesinyourarea@hotmail.com' || uName == 'totallyNotAVirus420') {
    console.log("Welcome, user!");
} else {
    console.log('Login info incorrect.');
}

//* NOT, !

//let rain - true; nothing logs
let rain = false;

if (!rain) {
    console.log("It is sunny");
}
//same if statements
if (rain != true) {
    console.log("It's sunny");
}

//* Else If Conditional Statement
// they can let us check more than one condition (asking multiple questions)
// once one of the conditions is met (results in true) it will exit the statement/code block

//let grade = 90; first statement
//let grade = 70; second statement
let grade = 50; //third statement

if (grade >= 75) {
    console.log("You are good, no worries.");
} else if (grade >= 69) {
    console.log('You good there, buddy?');
} else {
    console.log("You are not passing, buddy.");
}