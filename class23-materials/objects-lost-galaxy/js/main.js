//Create a dog object that has four properties and three methods

let dog = {
    name: 'Zara',
    breed: 'yorkie',
    height: '3ft',
    weight: 19,
    bark: function(){
        console.log(`${this.name} says woof woof`)
    },
    sleep: function(){
        console.log(`${this.name} is sleeping`)
    },
    eat: function(){
        console.log(`${this.name} is eating, yum!!`)
    },
    sleep: function(){
        console.log(`${this.name} is now sleeping`)
    }
}

dog.bark()
dog.sleep()
dog.eat()

dog.legs = 4
dog.color = 'brown and black'
console.log(dog)