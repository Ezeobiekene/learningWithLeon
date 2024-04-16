//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const array = ['NCIS', 'Young Sheldon', 'Blacklist']
array.forEach( element => {
    console.log(element)
})

//Create and array of numbers
const numArr = [21, 12, 32, 43, 46, 65, 67]
//Return a new array of numbers that includes every even number from the previous Array
let onlyEvens = arr => arr.filter(n => n % 2 === 0) 
console.log(onlyEvens(numArr))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function takeArray(arr = [12, 32,42,13 , 12,]){
    let sorted = arr.sort((a, b) => a-b)
    alert(sorted[1]+sorted[sorted.length - 2])
}
takeArray()

