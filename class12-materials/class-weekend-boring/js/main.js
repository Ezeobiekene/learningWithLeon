document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if(day === "sunday" || day === "saturday" ){
    document.querySelector('#placeToSee').innerText = "It's a weekend";
  }else if(day === "tuesday" || day === "thursday" ){
    document.querySelector('#placeToSee').innerText = "YOU HAVE ";
  }else{
    document.querySelector('#placeToSee').innerText = "Boring day";
  }
}

// String.prototype.equalsIgnoreCase = function (compareString) { 
//   return this.toUpperCase() === compareString.toUpperCase(); 
// }; 