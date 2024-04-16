//Create a stopwatch object that has four properties and three methods
 let stopwatch = {
    shape: 'round',
    color: 'black',
    currentTime: 12,
    isUseful: true,

    tellTime(){
        return `the time is ${this.currentTime}`
    },

    display(){
        return `the clock is ${this.color} in color`
    },

    shapy(){
        return `this clock is ${this.shape} in shape.  Useful: ${this.isUseful}`
    }
 }

 console.log(stopwatch.tellTime(),
 stopwatch.display(),
 stopwatch.shapy())

 //JS: info Array Method question 1
 function camelize(str){
   return str
   .split('-') .map(
     (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
   )
   .join('');
 }
 console.log(camelize('background-color'))

  //JS: info Array Method question 2
  function filterRange(arr, a, b){
    let newArr = arr => arr.filter( element => element >= a || element <= b)
    return newArr
        //let onlyEvens = arr => arr.filter(n => n % 2 === 0) 
  }