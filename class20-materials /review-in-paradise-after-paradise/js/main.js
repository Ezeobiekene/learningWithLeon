// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function weirdnes(arrr){
    if(arrr[0] < arrr[arrr.length -1]){
        alert('Hi')
    }else if(arrr[0] > arrr[arrr.length -1]){
        alert('Bye')
    }else{
        alert('We close in an hour')
    }
}
const arrrr = [2, 4, 3, 3, 4, 1]

weirdnes(arrrr)