// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bool = true
alert(bool)


// Declare a variable, reassign it to your favorite color, and console log the value
let favoriteColor = 'purple'
console.log(favoriteColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNumbers(a, b, c, d){
    return (a+b+c) / d
}
fourNumbers(2,20,4,2)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNumbers(a, b){
    console.log(a**b)
}
twoNumbers(5, 2)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function conditions(bool, string){
    bool ? alert(string) : console.log(string)
}
conditions('false', 'This is my father\'s house')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function numbLog(a){
    for(let i = 1; i <= a; i++){
        let output = ''
        if(i % 3 === 0) output += 'Fizz'
        if(i % 5 === 0) output += 'Buzz'

        console.log(output || i)
    }
}
numbLog(300)