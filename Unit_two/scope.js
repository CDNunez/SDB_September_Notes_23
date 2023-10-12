/* 
*   Scope
*/

let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();//33
console.log(x);//12

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2(); //33
console.log(y); //33

/* 
*   Variable Keywords:
    - const: cannot be reassigned.
    - var: Scoped to near function or function block. Can be changed/reassigned
    - let: Scoped to the nearest enclosing block. Can be change/reassigned

*/

//*var

var myVariable = 69;

function varTest() {
    var myVariable = 420;

    if(true) {
        var myVariable = 45;
        console.log(`Var - Within If: ${myVariable}`);
    }
    console.log(`Var - Outside If: ${myVariable}`);
}

varTest();
console.log(`Var - Outside of function: ${myVariable}`);

//* let
//? cmd D for multi cursors

let theVariable = 69;

function letTest() {
    let theVariable = 420;

    if(true) {
        let theVariable = 45;
        console.log(`Let - Within If: ${theVariable}`);
    }
    console.log(`Let - Outside If: ${theVariable}`);
}

letTest();
console.log(`Let - Outside of function: ${theVariable}`);

//* const

function constTest() {
    const scope = 1;
    //const could not be reassigned outside the function
    if(true) {
        const scope = 2;
        console.log(scope); //2
    }

    console.log(scope); //1
}

constTest();