//Create a constructor with 4 properties and 3 methods

class Pizza {
    constructor(size, crustType, toppings, sauce) {
        this.size = size
        this.crustType = crustType
        this.toppings = toppings
        this.sauce = sauce
    }
    bake() {
        console.log('this pizza is baking')
    }
    getEatten() {
        console.log('I am getting eatten')
    }
    talk() {
        console.log('this is a pizza that talks')
    }
    
}

let ekenePizza = new Pizza('small', 'stuffed', ['bacon', 'chicken', 'philly steak'], 'marinara')