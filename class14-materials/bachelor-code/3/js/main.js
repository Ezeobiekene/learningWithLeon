const contestants = document.querySelectorAll(".contestant")

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('contestant')){
		document.querySelector('#nikki').classList.toggle('rose')
	}else{
		alert("Wrong!");
	}
}
