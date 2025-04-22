//Part 1
class productProperties { //name of the class being ccreated
    constructor(name, price, quantity) { //class attributes
        this.name = name; //name of a product
        this.price = price; //price of a product
        this.quantity = quantity; //quantity of a product
    }

    getTotalValue() { //method to return the calculated total value of a product
        return this.price * this.quantity; //returns the total value of a product multiplies price times quantity
    }

    toString() { //method to return the string representation of the product
        return `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Total Value: ${this.getTotalValue()}`; //returns the string of the products name its price and quantity
    }

    perishableProductProperties = class extends productProperties { //class that extends the productProperties class
        constructor(name, price, quantity, expirationDate) { //constructor of the class
            super(name, price, quantity); //calls the parent class
            this.expirationDate = expirationDate; //adds expiratoion date attribute/property
        }
    }
}