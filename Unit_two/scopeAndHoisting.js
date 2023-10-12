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