//Write your pseduo code first! 
// get the input
// calculate the change
document.querySelector('#check').addEventListener('click', calculate)

function calculate(){
    const celcius = document.querySelector('#temp').value

    const fahrenheit = (celcius * 9/5) + 32;
    document.querySelector('#placeToSee').innerText = `${fahrenheit}°F`;
}
// output the result
