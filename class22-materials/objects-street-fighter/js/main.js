//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Streetfighters(fighterGender, fighterStrenght, fighterLives, fighterWeapon){
    this.gender = fighterGender
    this.strenght = fighterStrenght
    this.lives = fighterLives
    this.weapon =  fighterWeapon
    this.recharge = function(num){
        this.lives += num
    }
    this.kill = function(character){
        console.log(`I have killed ${character}`)
    }
    this.move = function(direction){
        console.log(`i have moved ${character}`)
    }
}

let ekene = new Streetfighters('female', 100, 9, 'AK47')