//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('img').src = data.message
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
