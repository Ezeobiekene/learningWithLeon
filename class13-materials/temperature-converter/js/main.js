//Write your pseduo code first! 
// enter in the input
document.querySelector('#check').addEventListener('click', change)
// pickup the input
function change(){
    const celcius = document.querySelector('#temp').value
    const answer = (celcius * 9/5) + 32;

    document.querySelector('#placeToSee').innerText = `${answer}°F`
}

// calculate the output
// (5°C × 9/5) + 32 = 41°F

// output the output