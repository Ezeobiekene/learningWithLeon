// *Variables*
// Create a variable and console log the value
const random = 'Ekene is a queen'
console.log(random)

// Create a variable, add 10 to it, and alert the value
let number = 20
number = number + 10
alert(number)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(a,b,c,d){
    const result = a - b - c - d
    alert(result)
}
subtracts(2,5,6,8)

// Create a function that divides one number by another and returns the remainder
function divide(a, b){
    const result = a%b
    return result
}
divide(23/2)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add(a, b){
 const result = a + b
 if(result > 50){
    alert('Jumanji')
 }
}
add(25,27)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys(a,b,c){
    const result = a * b * c
    if(result%3 === 0){
        alert('ZEBRA')
    }
}
multiplys(6,9,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function word(w, num){

    for(let i = 0; i < num; i++){
        console.log(w)
    }

}
word('Ekene', 13)
