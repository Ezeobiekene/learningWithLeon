//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function arrayNum(num){
    const array = []
    for(let i = 1; i <= num; i++){
        array.push(i)
    }
    return array
}
console.log(arrayNum(17))