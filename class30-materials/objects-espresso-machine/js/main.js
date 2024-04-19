//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class Espresso{
    constructor(flavor, size, numOfCupsleft, goated){
        this.flavor = flavor
        this.size = size
        this.numOfCupsleft = numOfCupsleft
        this.goated = goated
    }

    makeCoffee(){
        console.log('make coffee')
    }
    serveCoffee(){
        console.log('serve coffe')
    }
    makeMummyHappy(){
        console.log('I have made my mum happy')
    }
}