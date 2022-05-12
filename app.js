//create fetch statements for:
  //meal by name
  //by main ingredient
  //random
//buttons

const mealName = document.querySelector('#dishName')
const ingredientName = document.querySelector('#ingredientForm')
const randomButton = document.querySelector('#random')

function displayMeal(data){
  console.log(data)
  console.log(data.strMealThumb)
  // const randomMealTitle = document.createElement('h1')
  const randomMeal = document.querySelector('#randomMealContainer')
  const ingredientsList= [data.meals[0]]
  randomMeal.innerHTML = `<h1>${data.meals[0].strMeal}</h1>
  <img src="${data.meals[0].strMealThumb}" alt="">
  <h2>Ingredients:/h2>
  <ul>dfdd</ul>
  <ol>'saddfddf<ol>`
//   // randomMealTitle.appendChild(randomMeal)
//   // somevar.c
  }


//ingredient button
ingredientName.addEventListener('submit', (e) => {
  console.log(e.target.value)
  // const ingInput = e.target.value
  // fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingInput}`)
})

//random button
randomButton.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => displayMeal(data))
})