
const mealName = document.querySelector('#dishName')
const ingredientName = document.querySelector('#ingredientForm')
const randomButton = document.querySelector('#random')
//search by name of dish



// get list of ingredients
  function getIngredientsList(){}
  // const ingredientsArray = []
  // for (let i=1; i<=20; i++){
  //   if(`data.meals[0].strIngredient${i}`){
  //     ingredientsArray.push(data.meals[0].strIngredients[i])
  //   }}
  //loop through array and append to DOM
  //object.values



//search by main ingredient
ingredientName.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.children.ingredientInput.value
  const thing = input.split(' ').join('_')
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${thing}`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => displayListOfNames(data))
    
})

//create helper function for 'search by main ingredient' that displays list of meals
//and appends it to DOM
function displayListOfNames(data){
  const mealsList = document.querySelector('#mealsList')
  const mealsListArr = data.meals
  const newArr = []
  for (let i=0; i<mealsListArr.length; i++){
    newArr.push(mealsListArr[i].strMeal)
  }
  console.log(newArr)
  
  for (let i=0; i< newArr.length; i++){
    const liElement = document.createElement('li')
    liElement.textContent = newArr[i]
    mealsList.append(liElement)
  }
}




//get random meal
randomButton.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => displayMeal(data))
})
function displayMeal(data){
  const randomMeal = document.querySelector('#randomMealContainer')
  randomMeal.innerHTML = `<h1>${data.meals[0].strMeal}</h1>
  <img src="${data.meals[0].strMealThumb}" alt="food image">
  <p></p>
  <ul></ul>
  <ol><ol>`}
