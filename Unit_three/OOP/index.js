//? Object Oriented Programming

/* 
    -JS has both Functional and Procedural aspects.
        -It's a multi-paradigm language.
    -Core Concepts of OOP:
        -Encapsulated data and behavior through an exposed interface.
        -Allow for inheritance of behavior
        -Abstraction of complexity
        -Polymorphism of behavior
*/

/* 
*   Encapsulation
    -set of data within an object
        -properties / methods
*/

class Pet {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    speak() {
        return `${this.name} says, ${this.voice}`;
    }
}

// let buttons = new Pet('Buttons', "brown");

// console.log(buttons.speak());

//?----- Own Practice ----

class NameOfClass {
    constructor(param1, param2, param3,) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }

    classMethod() {
        return `This method is currently displaying ${this.param1}, ${this.param2}, and ${this.param3}`;
    }

    parentMethod() {
        return `This method can be called by it's child classes to display ${this.extendedparam} `
    }
}

let newObjectOfClass = new NameOfClass('param1', 'param2', 'param3'); //creates a new object using the key/value pairs in NameOfClass
console.log(newObjectOfClass.classMethod()); //invokes the class function using newObjectOfClass as the object

//?------------------------

/* 
*   Inheritance
    A child class can gain (inherit) properties from a parent class.
*/

class Dog extends Pet {
    constructor(name,color,voice) {
        super(name,color);
        this.voice = voice;
    }

    // speak() {
    //     return `${this.name} says, ${this.voice}`;
    // }
}

let buttons = new Dog('Buttons', "brown", "ruff!");

console.log(buttons.speak());

class Cat extends Pet {
    constructor(name,color,voice){
        super(name,color);
        this.voice = voice;
    }
}

let oreo = new Cat("Oreo", 'Black And White', "meow");
console.log(oreo.speak());

//?--------Own Practice----------

class ExtendClass extends NameOfClass {
    constructor(param1,param2,param3,extendedparam) {//can add parameters in the constructor
        super(param1,param2,param3);//declares the parameters inherited from its parent class
        this.extendedparam = extendedparam;//defining a new parameter
    }

    anotherMethod() {
        return `This class inherits ${this.param1}, ${this.param2}, and ${this.param3}. It can also add an ${this.extendedparam}.`
    }
}

let extendedObject = new ExtendClass ('param1', 'param2', 'param3', 'extendedparam');
console.log(extendedObject.anotherMethod());

class AnotherExtendedClass extends NameOfClass {
    constructor(param1,param2,param3,extendedparam) {
        super(param1,param2,param3,);
        this.extendedparam = extendedparam;
    }
}

let anotherExtendedObject = new AnotherExtendedClass ('param1', 'param2', 'param3', 'another extendedparam');

console.log(anotherExtendedObject.classMethod());
console.log(anotherExtendedObject.parentMethod());

//?--------------------------------

/* 
*   Abstraction
    Hide complexity via an object method
*/

class Tab {
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip;
    }

    tipAmount(x) {
        let total = this.subtotal + this.tax;
        this.tip = (total * x);
        let final = total + this.tip;
        return final.toFixed(2);
    }
}

let saleTax = 0.075;
let tipPercent = .2;

let dinnerBill = new Tab(42.83, saleTax);

function calcTip(bill) {
    return(bill.tipAmount(tipPercent));
}

console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of: $${dinnerBill.tip.toFixed(2)}`);

/* 
*   Polymorphism
    -How objects respond in relationship from child to parent.
        - ex: same methods
    -"Siblings" cannot respond to each others methods / properties
        -unless shared with parent
    -Perform a single action in different forms
        -when a method is called from a child but that method is within a parent.
*/

class A {
    show() {
        console.log("From A");
    }
}

class B extends A {

}

let b = new B();
b.show();