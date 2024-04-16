// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'goat day'
favHoliday = 'Christmas'
console.log(favHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let thisVar = 'very random string'
alert(thisVar.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fivey(a, b, c, d, e){
    let result = 100 - (a+b+c+d+e)
    alert(Math.abs(result))
}
fivey(90,21,10,10,10)

//Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threey(a,b,c){
    let lowest = Math.min(a,b,c);
    let highest =  Math.max(a,b,c);
    
    return `lowest is ${lowest} and the highest is ${highest}`
}
console.log(threey(5,9,32))
console.log(threey(5,56,32))
console.log(threey(5,54,32))
console.log(threey(5,945,32))
console.log(threey(523,9,32))
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const returnsHeads = () => (Math.random() < .5) ? 'Heads': 'Tails'



//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function aNum(a){
    for(let i = 0; i < a; i++){
        console.log(returnsHeads())
    }
}

aNum(78)