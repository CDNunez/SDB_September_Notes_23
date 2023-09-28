/* 
*   Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional

    Expressions & Statement:

    keyword name (expression) {
        code block that runs
    }
*/

/* 
*   Comparison Operators
    - JS is helpful and does something called "coercion" when comparing values.
    -Coercion is the process of converting one value from one type to another.
*/

//* Equal To ==
//JS assumed we wanted to check if "3" equals 3 -- it is checking values

console.log("3" == 3); //true -- only checks value

//* Strict Equal to, ===
// Check if the two values and the two datatypes are the equal.

console.log(3 === 3); //true
console.log('3' === 3); //false - checks both value and datatypes string !== number

//* Not Equal To, !=

console.log("3" != 3); //false only checks values
console.log('3' != 4); //true

//* Strictly Not Equal To, !==

console.log("3" !== 3); //true checks values and datatypes
console.log(3 !== 3); //false

//* Greater Than >
//3 > 2;

//* Less Than <
//4 < 5;

//* Greater or Equal to >=
// ! The Greater Than Operator must be used BEFORE the equal sign in order to work/execute correctly
console.log(4 >= 3); //true

//* Less Than or Equal to <=
console.log(1 <= 3); //true

//* And &&
//* Or ||

/* 
    Logical Operators
    -Arithmetic Operators
*/

//* Addition Operator
let r = 4;
console.log(r += 1); // r = r + 1 -- answer:5
console.log(r); // 5

//* Subtraction Operator

let x = 4;
console.log(x -= 3); //answer: 1

//* Multiplication Operator
let y = 2;

console.log(y * y); // 4

//* Division Operator
let z = 2;
console.log(z / z); // 1

//* Remainder Operator (Modulo)

let a = 8;
let b = 9;

console.log(a %= 1);
console.log(b %= 1);

//* Exponential Operator
c **= 1; //c = c ** 1;