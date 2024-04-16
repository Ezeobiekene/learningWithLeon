//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function returnsArr(arr){
    const array = []
    arr.forEach(element => {
        if(element % 2 === 0){
            array.push(element)
        }
    });
    return array
}
console.log(returnsArr([1,2,3,4,5,6,7,8,9,10]))