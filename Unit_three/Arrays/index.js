/* 
*   Array
        -Denoted with square brackets []
        -Indices starts at zero 0
        -Using a property called "length", we can find the sum of data stored

 */

let list = ['milk', 'bread', 'chicken', 'coffee'];
//              0       1       2           3

console.log(list[2]); // chicken
console.log(list.length); // 4 -- number of indices

list[0] = "chocolate milk";
console.log(list);

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', [
        'Tony', 8, true
    ]
];

console.log(typeof avengers);
console.log(avengers instanceof Array);

/* 
Using the console.log()
    -target "Bruce"
    target "true"
    Using string interpolation return "Hello, Nick" and "hello, Tony"
*/

console.log(avengers[4]); //Bruce
console.log(avengers[5][2]);
console.log(`Hello ${avengers[0]} and hello ${avengers[5][0]}`);

//! Array Methods
// .push()

let food = ['peacan pie','shrimp','quesadilla','cheese cake','hot dog'];

food.push('pizza');
console.log("Push: ", food); //adds pizza

// .splice(target position, how many removed, replaced with what)
food.splice(1,1,'tacos');
console.log("Splice ", food); //replaces shrimp with tacos


food.splice(1,0,'Steak');
console.log('Splice 2: ', food); //replaces tacos with steak

// .pop() removes item from the end of current array
food.pop();
console.log("Pop ", food); // removes pizza

// .shift() removes item from the start of the array
food.shift();
console.log("Shift:", food); //removes peacan pie

// .unshift() adds items to the start of array
food.unshift("burger", 'salad'); //adds burger and salad before steak and tacos
console.log("Unshift:", food);

// .toString() alter arrays to provide a string

let rgb = ['red', 'green', 'blue'];
console.log(rgb.length);
console.log(rgb.toString());
console.log(typeof rgb);
console.log(typeof rgb.toString());