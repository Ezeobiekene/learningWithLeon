// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = 'chicken'
favoriteFood = 'Pasta'
alert(favoriteFood)


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const string = 'This is a nice string'
alert(string.charAt(1))


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideMultiply(a, b, c){
    let result = (a / b) * c
    alert(result)
}
divideMultiply(40, 20, 2)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNumb(a){
    console.log(Math.cbrt(a))
}
oneNumb(27)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function months(month){
    if(month === 'may' || month === 'june' || month === 'july' || month === 'august'){
        alert('YAY')
    }else{
        alert('Booo')
    }
}
months('may')
months('april')
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loopy(a){
    for(let i = 1; i <= a; i++){
        // if(i % 5 !== 0){
        //     console.log(i)
        // }
    }
}
loopy(45)