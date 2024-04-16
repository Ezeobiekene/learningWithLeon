// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = ' fanta '
console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let stringArr = ['donut', 'words', 'apple', 'leon']
console.log(stringArr.includes('apple'))

//           OR
let str = 'donut words apple leon and aint nobody told me nothing'
console.log(str.search('apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function returnsRPS(){
    let move = Math.random()
    if(move < .33){
        return 'rock'
    }else if( move < .66){
        return 'paper'
    }else{
        return 'scissors'
    }
    // switch(move){
    //     case 1:
    //         return 'rock'
    //         break
    //     case 2:
    //         return 'paper'
    //         break
    //     case 3:
    //         return 'scissors'
    //         break
    // }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
// function rPS(){
//     let player = returnsRPS
//     let bot = returnsRPS
//    if (player === bot) {
//     console.log('its a tie')
//     }else if(player === 'rock' ){
//         console.log('Player wins')
//     }else if(bot === 'rock'){
//         console.log('The bot won ;)')
//     }
// }

function checkWin(playerChoice){
    let botChoice = returnsRPS()
    if((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice =='rock') || (playerChoice === 'scrissors' && botChoice =='paper')){
        console.log('You Win')
    }else if(playerChoice === botChoice){
        console.log('You Tied')
    }else{
        console.log('You Lose')
    }
}
checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playXTimes(arr){
    arr.forEach(choice => checkWin(choice))
}
playXTimes(['rock', 'paper', 'scissors'])