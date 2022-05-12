//create fetch statements for:
  //meal by name
  //by main ingredient
  //random
//buttons

const mealName = document.querySelector('#dishName')
const ingredientName = document.querySelector('#ingredientInput')
const randomButton = document.querySelector('#random')

function displayMeal(data){
  console.log(data)
  console.log(data.strMealThumb)
  // const randomMealTitle = document.createElement('h1')
  const randomMeal = document.querySelector('#randomMealContainer')
  randomMeal.innerHTML = `<h1>Random meal</h1>
  <img src="${data.meals[0].strMealThumb}" alt="">
  <p>dfsd</p>
  <ul>dfdd</ul>
  <ol>'saddfddf<ol>`
//   // randomMealTitle.appendChild(randomMeal)
//   // somevar.c
  }


//random button
randomButton.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => displayMeal(data))
})