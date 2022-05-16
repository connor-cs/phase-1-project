
const firstForm = document.querySelector('#firstForm')
const ingredientName = document.querySelector('#ingredientForm')
const randomButton = document.querySelector('#random')
const makeItBigger = document.querySelector('#hoverElement')
const firstH2 = document.querySelector('#firstH2')
const secondH2 = document.querySelector('#secondH2')
const thirdH2 = document.querySelector('#thirdH2')

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

// // get list of ingredients
function getIngredientsList(data){
  const ingredientsArray = []
  const obj = data.meals[0]
  for (const key, const value in Object.entries(obj)){
    ingredientsArray.push(key, value)
  for (const element in obj){
    if (element[3]=== 'I' && element[4]=== 'n' && element[5]=== 'g'){
      ingredientsArray.push(element)
      console.log(ingredientsArray)
    }
  }
  // for (let i=1; i<=20; i++){
  //   debugger
  //     ingredientsArray.push(data.meals[0])
  console.log(ingredientsArray)
    }
   
//   //loop through array and append to DOM
//   //object.values

//get instructions
function getInstructions(data){
  const instructions = data.meals[0].strInstructions
  instructionsElement = document.querySelector('#instructions')
  instructionsElement.textContent = instructions
}
//get name
function getMealName(data){
  document.querySelector('#name').textContent=data.meals[0].strMeal
}
//get picture
function getPicture(data){
  imageElement=document.querySelector('#anImage')
  imageElement.src=data.meals[0].strMealThumb
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
function displayListOfNames(data){
  const mealsList = document.querySelector('#mealsList')
  const mealsListArr = data.meals
  const newArr = []
  for (let i=0; i<mealsListArr.length; i++){
    newArr.push(mealsListArr[i].strMeal)
  } 
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

//display random meal
function displayMeal(data){
  const randomMeal = document.querySelector('#randomMealContainer')
  randomMeal.innerHTML = `<h1>${data.meals[0].strMeal}</h1>
  <img src="${data.meals[0].strMealThumb}" alt="food image">`}

  
  
//bigger and smaller
  makeItBigger.addEventListener('mouseenter', (e) => {
    e.target.style.fontSize= "50px"
  })
  firstH2.addEventListener('mouseenter', (e)=>{
    e.target.style.fontSize="30px"
    
  })
  secondH2.addEventListener('mouseenter', (e)=>{
    e.target.style.fontSize="30px"
  })
  thirdH2.addEventListener('mouseenter', (e)=>{
    e.target.style.fontSize="40px"
  })

  //why these don't work?:
  firstH2.addEventListener('mouseleave', (e) =>{
    e.target.style.fontsize="26px"
  })
  secondH2.addEventListener('mouseleave', (e) =>{
    e.target.style.fontsize="26px"
  })
  thirdH2.addEventListener('mouseleave', (e) =>{
    e.target.style.fontsize="26px"
  })
