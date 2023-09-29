/* 
*   Ternary Conditional Statement
    - Shorthand to write an if, if/else, or else/if statement
    -(condition) ? true result : false result;
    -TERNARIES REQUIRE THE DEFAULT/ELSE CATCH ALL
*/

let num = 13;

//Ternary:


//(condition x) then do y else do z 
(num > 0) ? console.log('yes') : console.log('no');

//if else form
if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

// Ternary with two conditions vs Else if statement

let x = 1;

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

//Ternary statement
(x == 0) ? console.log('hello') : (x < 0) ? console.log('hi') : console.log("goodbye");

// Other form of Ternary
(x == 0) ? console.log('hello') 
    : (x < 0) ? console.log('hi') 
    : console.log("goodbye");