//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('ul').innerText = null

        document.querySelector('h2').innerText = data.name

        document.querySelector('h3').innerText = data['classes'][0].name
        // document.querySelector('h4').innerText = data['subclasses'][0].name
        // document.querySelector('h4').innerText += '   and   ' + data['subclasses'][1].name

        data.subclasses.forEach(obj => {
        console.log(obj.name)

        //create an li
        const li = document.createElement('li')

        //add text to li 
        li.textContent = obj.name

        //append the li to the ul
        document.querySelector('ul').appendChild(li)

        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

