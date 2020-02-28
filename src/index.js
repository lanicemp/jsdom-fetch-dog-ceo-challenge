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

function fetchDogBreeds(filter = "") {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json, filter)); 
}

function renderBreeds(json, filter = "") {
  const dogBreeds = document.querySelector("#dog-breeds")
  for (const breed in json.message) {
    const li = document.createElement('li')
    li.innerHTML = `${breed}`
    if (filter== ""){
      dogBreeds.appendChild(li)  
    }else {
      if (breed[0] === filter){
      dogBreeds.appendChild(li)
      }
    }
  }
}
    
document.addEventListener('DOMContentLoaded', function() {
  fetchImage()
  fetchDogBreeds()
  const ul = document.querySelector("ul")
  ul.addEventListener("click", function(event){
    let element = event.target 
    switchColors(element)
  } )
    const select = document.querySelector("#breed-dropdown")
    select.addEventListener("change", function(){
      let filter = select.value
      const dogBreeds = document.querySelector("#dog-breeds")
      dogBreeds.innerHTML = "" 
      fetchDogBreeds(filter)
      //call fetch breed method and pass in value as an argument
     })
})

function switchColors(element){  
  links=document.getElementsByTagName("li") ;  
  for (var i = 0 ; i < links.length ; i ++){
    links.item(i).style.color = 'black' ; 
   }
  element.style.color='orange' ;  
}  

//dogbreeds.innertext 
// returns the values of all the dogs. 
// const dogBreednames = dogBreeds.innerText
  //user selects the letter we ge the value and then fetch the breeds render the
  // breeds on the page 
  //add code to the render breed function that only return the letter o