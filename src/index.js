console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImage() {
     fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImage(json)); 
   }
  
  function renderImage(json) {
    const dogContainer = document.querySelector("#dog-image-container")
    json.message.forEach(image => {
      const img = document.createElement('img')
      img.src = image
      dogContainer.appendChild(img)
    })
  }
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function fetchDogBreeds() {
    fetch(breedUrl)
   .then(resp => resp.json())
   .then(json => renderBreeds(json)); 
  }

  function renderBreeds(json) {
    const dogBreeds = document.querySelector("#dog-breeds")
    for (const breed in json.message)
     (`${breed}: ${json.message[breed.name]}`);
      const li = document.createElement('li')
      li.innerHTML = dogBreeds
      dogBreeds.appendChild(li)
    
 
}
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
    fetchDogBreeds()
  
    
  })
  