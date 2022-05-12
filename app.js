//create fetch statements for:
  //meal by name
  //by main ingredient
  //random
//buttons

const mealName = document.querySelector('#dishName')
const ingredientName = document.querySelector('#ingredientInput')
const randomButton = document.querySelector('#random')



//random button
randomButton.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => console.log(data.json()))
})