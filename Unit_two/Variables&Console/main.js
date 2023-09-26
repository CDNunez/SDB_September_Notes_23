// single line comment command + '/'

/*
multi
line
comment
'shift' + 'alt' + 'a'
 */

// *Variables

/* 
    We can create a variable (var) through 3 different keywords:
    1) var
    2) let
    3) const
    4) (none) = 'undefined'
*/

/* 
Variable are named containers for storing data values.

We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.
*/

let a = 2;

//  (1)        (2)         (3)         (4)
    let         b           =           1;

    /* 
        1)variable declaration -- Use JS keyword to denote the creation of a variable.
        
        2)variable name -- what is called upon to get the stored value; camelCaseExample.
        
        3)Assignment operator -- equal sign. Although there are other operators such as:
        === equal to
        < less than
        > greater than
        || or
        && and
        =< equal to or less than
        => equal to or greater than

        4)Initial variable value.
        var isn't use as much
        let allows variable to be changed
        const does not allow variable to be changed unless under special cases (review later).
    */

        // *Variable Declaration VS Initialization

        // Declaration: declaring the variable, but not assigning it.

        let x;
        console.log("Declaration of x: ", x); //logging multiple variables undefined

        let apple;

        // Init.: declaring the variable and giving it a value.
        let y = 4; //this is a value/datatype
        
        let life = 42069;
        
        // Reassign a variable value, reassign declared or initialized variables (not const)
        x = 20;
        console.log("Init 1:", x) //logs x as 20

        x = 100;
        console.log("Init 2:", x) //second init logs x as 100

        apple = 12;

        //* Assigning to Other Variables / create variables from variables

        let firstName = "Danny"; //this is a string
        let lastName = "Rodriguez"; // this also a string

        let fullName = firstName + " " + lastName;

        /* 
            * CONSOLE

            Text output / code results.
            There is a console attached to the browser (web).
            We have a console in VSC to view results/what is logged.

            .log() log method of the console, .log() will print whatever it is passed
        */

console.log(fullName); // logs Danny Rodriguez

console.log(2 + 2); // logs 4

console.log(x); // third init. logs 100

// Use Multiples items/variables in console.log()

let today = "Great!";
const javaScript = "So much fun!";

console.log(today, javaScript);

// ctrl + alt + N to run console

today = "Meh, day.";
//javaScript = "whooooooo."; //this will print out an error -- reassigning a const -- TypeError: Assignment to constant variable.

let firstArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let whatDayIsIt;

function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(7));