//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrayNum = [11, 23, 45, 67]

const sum = arrayNum.reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)
alert(sum)

// OR
alert( arrayNum.reduce((acc, c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function returnNewArr(arr){
    let newArr = arr.map((item) => item**2)
    return newArr
}
console.log(returnNewArr([1,3,4,5,6,7]))
//Create a function that takes string
//Print the reverse of that string to the console
function takeString(str){
    console.log(str.split('').reverse().join(''))
}
takeString('Ekene is a queen')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function stringgy(str){
    alert(str.split('').reverse().join('') === str)
}
stringgy('ebube')