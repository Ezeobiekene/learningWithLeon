const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}

// let age = prompt('enter a number')
// while (age < 11){
// 	age = prompt('enter a number')
// 	console.log(age)
// }

// for (let i = 1; i <= 10; i++) {
// 	if (i % 2 === 0) {
// 	  console.log(`${i} is even`);
// 	}else{
// 		console.log(`${i} is odd`)
// 	}
// }

// let i = prompt('enter a number to see if it is even or odd?')
// while(i < 11){
// 	if (i % 2 === 0) {
// 			  console.log(`${i} is even`);
// 			}else{
// 				console.log(`${i} is odd`)
// 	}

// 	i = prompt('enter a number to see if it is even or odd?')
// }  

// let i = prompt('enter a number')
// while(i > 2 || i < 9){
// 	for(let num = 0; num <= 12; num++){
// 	let result = i * num
// 	console.log(`${i} x ${num} = ${result}`)
// }
//  i = prompt('enter a number')
// }

	// let userInput = prompt('enter a text').toLocaleLowerCase()
	// while(userInput != 'yes' && userInput != 'no'){
	// 	console.log(userInput)
	// 	userInput = prompt('enter a text').toLocaleLowerCase()
	// }


	// for(let i = 0; i < 100; i++){

	// 	if(i % 3 == 0 && i % 5 == 0){
	// 		console.log('FizzBuzz')
	// 	}else if(i % 3 == 0){
	// 		console.log('Fizz')
	// 	}else if(i % 5 == 0){
	// 		console.log('Buzz')
	// 	}else{
	// 		console.log(i)
	// 	}

	// }

	for (let i = 1; i <= 100; i++) {
		let output = "";
	
		if (i % 3 === 0) {
			output += "Fizz";
		}
		if (i % 5 === 0) {
			output += "Buzz";
		}
	
		console.log(output || i);
	}
	