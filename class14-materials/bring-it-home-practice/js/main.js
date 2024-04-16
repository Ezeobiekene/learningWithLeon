// *Variables*
// Create a variable and console log the value
const randomVariable = 3902
console.log(randomVariable)

// Create a variable, add 10 to it, and alert the value
let tenSum = 12
tenSum = tenSum + 10
alert(tenSum)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNumb( a, b, c, d){
    const result = a - b - c - d
    alert(result)
}
subtractsFourNumb(30, 2, 3, 12)

// Create a function that divides one number by another and returns the remainder
function returnRemainder(e, f){
    const result = e % f
    return result
}
returnRemainder(100, 10)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(a, b){
    const result = a + b

    if(result > 50){
        alert('Jumanji')
    }
}
addTwoNums(23, 1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(a, b, c){
    const result = a * b * c
    if(result % 3 == 0){
        alert('Zebra')
    }
}
multiplyThree(2, 1, 5)