//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function Skater(name, strength, gender, livesLeft){
    this.name = name
    this.strength = strength
    this.gender = gender
    this.livesLeft = livesLeft
    this.moves = function(){
        console.log('i got the moves like ekene')
    }
    this.win = function(){
        console.log('I have won you will now face my wrath')
    }
    this.die = function(){
        console.log('I have met my demise in the hands of my enemy')
    }
}

let kareenCampell = new Skater('kareem', 'dropKick', 'female', '10')