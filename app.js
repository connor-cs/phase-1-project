const firstForm = document.querySelector('#firstForm')
const ingredientName = document.querySelector('#ingredientForm')
const ingredientsList = document.querySelector('#ingredientList')
const randomButton = document.querySelector('#random')
const makeItBigger = document.querySelector('#hoverElement')
const firstH2 = document.querySelector('#firstH2')
const secondH2 = document.querySelector('#secondH2')
const thirdH2 = document.querySelector('#thirdH2')
const likeButton = document.getElementById('likeButton')
const empty_heart = '♡'
const full_heart = '♥'

//image is hosted locally so leave this off and keep background as gradient
// document.addEventListener('DOMContentLoaded', () => {
//   document.body.style.backgroundImage="url(images/pI06OES.png)"

// })


//search by name of dish
firstForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(e.target.children.dishName.value)
  const input = e.target.children.dishName.value
  const newVariable = input.split(' ').join('_')

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${newVariable}`)
    .then(response => response.json())
    .then(data => {
      getIngredientsList(data)
      getInstructions(data)
      getMealName(data)
      getPicture(data)
    })
})


//HELPER FUNCTIONS HELPER FUNCTIONS HELPER FUNCTIONS HELPER FUNCTIONS HELPER FUNCTIONS

// get list of ingredients and measurements
function getIngredientsList(data) {
  const ingredientsArray = []
  const measurementsArray = []
  const obj = data.meals[0]
  // console.log(Object.entries(obj))
  for (const element of Object.entries(obj)) {
    if (element[0][3] === 'I' && element[0][4] === 'n' && element[0][5] === 'g') {
      if (element[1]) {
        ingredientsArray.push(element[1])
      }
    }
  }
  for (const el of Object.entries(obj)) {
    if (el[0][3] === 'M' && el[0][6] === 's') {
      if (el[1]) {
        measurementsArray.push(el[1])
        //console.log(measurementsArray)
      }
    }
  }
  ingredientMeasure(ingredientsArray, measurementsArray)
}

//combine ingredients and measurements and append to DOM
function ingredientMeasure(ingredients, measure) {
  comboArray = ingredients.map((el, i) => el + ': ' + measure[i])
  // const image = document.getElementById('anImage')
  const title = document.createElement('h3')
  title.textContent='Ingredients:'
  for (const element of comboArray){
    const lis = document.createElement('li')
    ingredientsList.appendChild(lis).textContent=element
  }
  let parentNode = document.getElementById('results')
  parentNode.insertBefore(title, ingredientsList)

}

//get instructions
function getInstructions(data) {
  const instructions = data.meals[0].strInstructions
  instructionsElement = document.querySelector('#instructions')
  instructionsElement.textContent = instructions
}
//get name
function getMealName(data) {
  document.querySelector('#name').textContent = data.meals[0].strMeal
}
//get picture
function getPicture(data) {
  imageElement = document.querySelector('#anImage')
  imageElement.src = data.meals[0].strMealThumb
}



//search by main ingredient
ingredientName.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.children.ingredientInput.value
  const thing = input.split(' ').join('_')
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${thing}`)
    .then(response => response.json())
    .then(data => displayListOfNames(data))
})

//create helper function for 'search by main ingredient' that displays list of meals
//and appends it to DOM
function displayListOfNames(data) {
  const mealsList = document.querySelector('#mealsList')
  const mealsListArr = data.meals
  const newArr = []
  for (let i = 0; i < mealsListArr.length; i++) {
    newArr.push(mealsListArr[i].strMeal)
  }
  for (let i = 0; i < newArr.length; i++) {
    const liElement = document.createElement('li')
    liElement.textContent = newArr[i]
    mealsList.append(liElement)
  }
}

//like button
likeButton.addEventListener('click', ()=> {
  if(likeButton.textContent=empty_heart){
    likeButton.textContent=full_heart
    likeButton.classList.add('fullHeart')
  }
  else{
    likeButton.textContent=empty_heart
    likeButton.classList.remove('fullHeart')
    likeButton.classList.add('emptyHeart')
  }
})


//get random meal
randomButton.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => displayMeal(data))
})

//display random meal
function displayMeal(data) {
  const randomMeal = document.querySelector('#randomMealContainer')
  randomMeal.innerHTML = `<h1>${data.meals[0].strMeal}</h1>
  <img src="${data.meals[0].strMealThumb}" alt="food image">`
}



//bigger and smaller
makeItBigger.addEventListener('mouseenter', (e) => {
  e.target.style.fontSize = "50px"
})

//turning this off because it is really annoying
// firstH2.addEventListener('mouseenter', (e) => {
//   e.target.style.fontSize = "30px"
// })
secondH2.addEventListener('mouseenter', (e) => {
  e.target.style.fontSize = "30px"
})
thirdH2.addEventListener('mouseenter', (e) => {
  e.target.style.fontSize = "26px"
})

//why these don't work?:
firstH2.addEventListener('mouseleave', (e) => {
  e.target.style.fontsize = "26px"
})
secondH2.addEventListener('mouseleave', (e) => {
  e.target.style.fontsize = "26px"
})
thirdH2.addEventListener('mouseleave', (e) => {
  e.target.style.fontsize = "26px"
})
