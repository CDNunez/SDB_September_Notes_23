/* 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine"
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine"
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/

class Vehicle {
    constructor(make, model, no_wheels, color, engine_on) {
        this.make = make;
        this.model = model;
        this.no_wheels = no_wheels;
        this.color = color;
        this.engine_on;
    }

    turnOnEngine() {
        console.log(`The ${this.color} ${this.make} ${this.model} turns on its engine.`);
        this.engine_on = true;
        console.log(this.engine_on);
    }

    turnOffEngine() {
        console.log(`The ${this.color} ${this.make} ${this.model} turns off its engine.`);
        this.engine_on = false;
        console.log(this.engine_on);
    }
}

let honda = new Vehicle("Honda", "Civic", 4, "Black");
console.log(honda);



honda.turnOnEngine();
honda.turnOffEngine();



//*-------------breaking down practice-----------------

class ClassName {
    constructor(param1, param2, param3) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }

    classMethod() {
        console.log(`This method can affect ${this.param1}, ${this.param2}, and ${this.param3}`);
    }
}

let classItem = new ClassName("parameter one", "parameter two", "parameter three");

classItem.classMethod();