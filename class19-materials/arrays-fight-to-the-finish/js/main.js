//Create an array of movie titles. Loop through the array and each element to the h2.
let moviesArr = ['Criminal minds', 'NCIS', 'Blacklist', 'Enola Holmes', 'Chosen']
let addHTwo = document.querySelector('h2')
moviesArr.forEach((x, i) => addHTwo.innerText += " "+ x)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrNums = [2,46,75,9989,42]
arrNums.forEach((x, i) =>{ 
    arrNums[i] += 3
})
arrNums.forEach((x, i) => console.log(x))
//Find the average of all the numbers from question three
let total = 0
arrNums.forEach((x, i) =>{
    total += x
}  )

let average = Number(total) / arrNums.length
console.log(average)