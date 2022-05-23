
# Phase One Project

### This is my first JavaScript project. It is a single-page "application" that uses a database of recipes/meals/foods to allow a hypothetical user to perform the following functions:

1. Search for a particual food by name, and receive a picture, a list of indgredients, and directions on how to make it
2. Search using an ingredient as a keyword returning a list of meals that use that ingredient
3. Click a button to return a random meal that includes a picture and a name

<p>There is an additional "like" button in the shape of a heart that provides some basic interactivity.</p>

I started with the temporary working title of "Food App" but ultimately didn't come up with anything more creative.
The API used: https://www.themealdb.com/api.php

## The event listeners used:
- submit
- click
- hover/mouseenter

## Ideas for improvement:
- Better styling, it's pretty basic. Tried experimenting with different color pallettes using https://coolors.co/palettes as well as different backgrounds but none of the changes really seemed to be much of an improvement, nor did it help much with the "basic" look.
- Make some sections have a different background/styling when populated, but hidden when unpopulated. I think this would make it seem a bit more dynamic.
- Being able to "unlike" the like button with a click.
- Why did the .reset() method break my forms?
- I tried making a helper function that took a parent and child node as parameters and appended the child to the parent; couldn't get that to work. Maybe this is just unneccessary anyway.
- I wanted to make the 'results' section of the first form (which would be populated by a dish's name, picture, ingredients and instructions) have its own background and text color that would make it stand out from the rest of the page. In order to do this, perhaps I might not want to hard-code that section into the HTML, but rather have it created and populated using JavaScript instead.
- When a new search is made, the content in the DOM should be replaced and not added below the results of the previous search. I spent some time on this but was unsuccessful. 
