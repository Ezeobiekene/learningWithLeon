//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [23, 45, 67, 68, 65]
function sum(arr){
    let sum = 0
    arr.forEach(item => sum += item)
    alert(sum)
}
sum(arr)

//   OR use .reduce
let summ = arr.reduce( (acc, c) => acc + +c, 0)
alert(summ)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function newArr( arr){
    let newArray = arr.map(item => item**2)
    console.log(newArray)
}
newArr([3, 4, 5, 6, 7, 8])
//Create a function that takes string
//Print the reverse of that string to the console
const printReverse = (str) => str.split('').reverse().join('')
//    strArr = strArr.reverse()
//    return strArr.join('')

console.log(printReverse('EKene is a solid queen'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
