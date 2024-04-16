//Create a pizza object that has four properties and three methods
let pizza = {
    size: 'small',
    crustType: 'thick n\' cheesy',
    toppings: ['pepperoni', 'chicken', 'bacon'],
    sauce: 'alfredo',
    bake: function(){
       console.log('this pizza is baking')
    },
    talk: function(){
        console.log('this is a pizza that talks')
    },
    getEatten: function(){
        console.log('I am getting eatten')
    }
}
pizza.bake()
pizza.getEatten()
pizza.talk()