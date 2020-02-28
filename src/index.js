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
    const regex = /breeds\/([\w-]+)/
    const figure = document.createElement('figure')
    const figcaption = document.createElement('figcaption')
    
    dogName = image.match(regex)[1]
    img.src = image
    figcaption.innerText = dogName 
    figure.appendChild(img)
    figure.appendChild(figcaption)
    dogContainer.appendChild(figure)
    //Array.from(dogList.matchAll(regex)).map(array => array[1]) 
    //const regex = /breeds\/([\w-]+)/g
    //figure === const figure = document.createElement('figure')
    //image 
    //figcaption === const figcaption = document.createElement('figcaption')
    // figcaption.innerText = dogName 
    // insertAdjacentHTML() is another function to use to display the image an caption 
    // next to another.. research later https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

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