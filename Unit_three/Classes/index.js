//? Classes

/* 
keywords
    class
    new
    this
    constructor
    static


    -Introduced in 2015
    -A function that helps us create objects
    -Defines a category of objects

    Structure:

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter;
        }

        methodName() {
            ... code block
        }
    }
*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = "A Name";
one.desc = "A description";

console.log(one);



//(1)    (2)
class   Item {
    //(3)        (4)
    constructor(name, desc, price) {
        
        //(5)  (6)  (7) 
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

let newItem = new Item("Item Name", "Item Description", "Item Price/Other descriptor");

console.log(newItem);

/* 
    1) Keyword to establish what type of "function".
    2) Class name denoted in PascalCase
    3) Keyword to automatically run when the class is instantiated.
    4) The parameters for our constructed object. Established values of the new object.
    5) Keyword that refers to "this" specific object being created.
    6)The name of the key to our new object.
    7) The value for the keys being created (set by parameters).
*/

console.log("------------------------------------");

let itemZero = new Item();
console.log(itemZero); //returns an obj with set keys that hold undefined values

let itemOne = new Item("Manga", "JoJo's Bizarre Adventure", "$ " + 9.99);
console.log(itemOne);

//let brokenItem = Item();
//console.log(brokenItem);
//TypeError: Class constructor Item cannot be invoked without 'new'

//? Factory Functions

let iType = 'whooper';
let iDesc = "burger";
let iCost = 4.99;

function processItem(i,d,c) {
    return new Item(i,d,c);
};

let useFunction = processItem(iType,iDesc,iCost);
console.log(useFunction);

//? Methods

class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.item = []//making a default value for this key
    }
//  1                  2
    addToInventory(newItem) {
    //     3                4
        this.item.push(newItem);
        console.log("Item Added!");
    }

}


// 5
let dryGoods = new DeptInventory("Dry Goods");
//console.log(dryGoods);

let itemTwo = new Item('corn', 'canned', 0.79);

//6
dryGoods.addToInventory(itemTwo);
console.log(dryGoods);

/* 
    1) Establish the name of the method
    2)This method requires a parameter. (Not all methods will need parameters).
    3)"this" keyword references the specific object -- (dryGoods).
    4)Using an array method to add the "item object" to the items array.
    5)Create a new object (Dept / Item)
    6)Invoke the method available to dryGoods object.
*/

//? Factory Methods

class Expense {
    static addUpChargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }


    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpChargeForProfit(1);

itemToSell.addTax(0.07);

console.log(itemToSell);

let anotherItem = Expense.addUpChargeForProfit(5);
anotherItem.addTax(0.06);
console.log(anotherItem);