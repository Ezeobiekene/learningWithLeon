//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}


document.querySelector('button').addEventListener('click', addAnotherOne)


function addAnotherOne(){
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
    // const choice = document.querySelector('input').value
    // const url = `https://api.nasa.gov/planetary/apod?api_key=5UTTyxsbECtAHTNBEElsePtX2cB8GjZFicrNbgqC&date=${choice}`
  
    // fetch(url)
    //     .then(res => res.json()) // parse response as JSON
    //     .then(data => {
    //       console.log(data)
    //       if(data.media_type === 'image'){
    //         document.querySelector('img').src = data.hdurl
    //       }else if(data.media_type === 'video'){
    //         document.querySelector('iframe').src = data.url
    //       }
          
    //       document.querySelector('h3').innerText = data.explanation
    //     })
    //     .catch(err => {
    //         console.log(`error ${err}`)
    //     });
  }
  