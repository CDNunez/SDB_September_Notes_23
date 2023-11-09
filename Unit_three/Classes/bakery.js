class Bakery {
    constructor(shopName) {
        this.shopName = shopName;
        this.inventory = [];
        this.profit = 0;
    }

    addItem(batch) {
        this.inventory.push(batch);//adds item to inventory array
    }

    sellItem(item, qty) {
        item.quantity -= qty; //change the quantity of the item passed in as there will be less in stock
        this.profit += Number((item.pricePer * qty).toFixed(2));
    }
}

class BakedGoods {
    static bakedInStore(item, qty, store, expense) { //factory method for each item/baked good created
        let price = (expense + (expense * .2)) * qty;
        const newItem = new BakedGoods(item, qty, store.shopName, Number(price.toFixed(2)));
        store.addItem(newItem); //calls the function in Bakery class
        return newItem; //stores inside of new variable
    }

    constructor(item, qty, store, price) {
        this.store = store;
        this.item = item;
        this.quantity = qty;
        this.pricePer = price;
    }

    stock(item, qty) {
        
    }
}

const bigOlDonuts = new Bakery("Big Ol Donuts");
const chocCookies = BakedGoods.bakedInStore("Chocolate Chip Cookie", 12, bigOlDonuts, .12);

const  cupCakes = BakedGoods.bakedInStore('Cup Cakes', 8, bigOlDonuts, .20 );

bigOlDonuts.sellItem(chocCookies, 4);
console.log(bigOlDonuts);
console.log(chocCookies);
//bigOlDonuts.addItem(chocolateDonuts);