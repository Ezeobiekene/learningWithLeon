//Create a mouse object that has four properties and three methods

let mouse = {
    color: 'mint',
    size: 'small',
    brand: 'onn',
    isOn: true,

    moveUp(){
        console.log('mouse was moved up')
    },
    click(){
        console.log('click, clickity, click')
    },
    movedown(){
        console.log('mouse was moved down')
    },
    displayPropertyValue(){
        console.log(`This mouse is ${this.color} in color, it is ${this.size} in size, the brand is ${this.brand} and is this thing on yes or no: ${(this.isOn) ? 'Yess' : 'No'}`)
    }
}
mouse.moveUp()
mouse.movedown()
mouse.displayPropertyValue()