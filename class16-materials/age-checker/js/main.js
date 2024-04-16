//Create a conditonal that checks their age
// const age = document.querySelector('#danceDanceRevolution').value
const output = document.querySelector('#output')
//If under 16, tell them they can not drive
// if(age < 16){
//     output.innerText = 'You cannot Drive'
// }else if(age < 18){
//     output.innerText = 'You can\'t hate from outside the club, because they can\'t even get in'
// }else if(age < 21){
//     output.innerText = 'You can\'t drink'
// }else if(age < 25){
//     output.innerText = 'You can\'t rent cars affordably'
// }else if(age < 30){
//     output.innerText = 'You can\'t rent fancy cars affordably'
// }else{
//     output.innerText = 'here is nothing left to look forward to'
// }
//If under 18, tell them they can't hate from outside the club, because they can't even get in

//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If over 30, tell them there is nothing left to look forward too

let age
//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', funcAge)

function funcAge(){
    age = Number(document.querySelector('#danceDanceRevolution').value)

    if(age < 16){
        output.innerText = 'You cannot Drive'
    }else if(age < 18){
        output.innerText = 'You can\'t hate from outside the club, because they can\'t even get in'
    }else if(age < 21){
        output.innerText = 'You can\'t drink'
    }else if(age < 25){
        output.innerText = 'You can\'t rent cars affordably'
    }else if(age < 30 ){
        output.innerText = 'You can\'t rent fancy cars affordably'
    }else{
        output.innerText = 'There is nothing left to look forward to'
    }
}
//Take the value from the input
//Place the result of the conditional in the paragraph
