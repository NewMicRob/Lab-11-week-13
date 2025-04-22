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
}