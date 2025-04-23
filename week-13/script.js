//Part 1
class productProperties { //Mame of the class being created
    constructor(name, price, quantity) { //Class attributes
        this.name = name; //Name of a product
        this.price = price; //Price of a product
        this.quantity = quantity; //Quantity of a product
    }

    getTotalValue() { //Method to return the calculated total value of a product
        return this.price * this.quantity; //Returns the total value of a product multiplies price times quantity
    }

    toString() { //Method to return the string representation of the product
        return `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Total Value: ${this.getTotalValue()}. `; //Returns the string of the products name its price and quantity
    }

    //Part 3
    static applyDiscount(products, discount) {
        products.forEach(product => { // goes over each product in the array
            product.price -= product.price * discount; // Update the product's price directly
        });
        return products; // Return the updated products array
    }

}

//Part 2
class perishableProductProperties extends productProperties { //Class that extends the productProperties class
    constructor(name, price, quantity, expirationDate) { //Constructor of the class
        super(name, price, quantity); //Calls the parent class
        this.expirationDate = expirationDate; //Adds expiratoion date attribute/property
    }

    toString() { //Method to return the string representation of the perishable product
        return `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}, Total Value: ${this.getTotalValue()}`; //Returns the string of the products name its price, quantity and expiration and total
    }
}
//ProdcutProperties instances
//let product1 = new productProperties('Apple', 1.25, 7);
//let product2 = new productProperties('Kraft Dinner', 1, 4);

//PerishableProductProperties instances
let perishable1 = new perishableProductProperties('Milk', 1.5, 10, '2024-12-31');
let perishable2 = new perishableProductProperties('Eggs', 2.0, 20, '2025-01-08');

//Parent class log
//console.log(product1.toString());
//console.log(product2.toString());

//Child class log
console.log(perishable1.toString())
console.log(perishable2.toString());

let discount = 0.15; // The discount value

class store { //Class to create a store
    constructor(inventory) { //attribute/property
        this.inventory = inventory; 
    }
}