import React from 'react'

import { Item } from 'semantic-ui-react'

function RecipesList(props) {
  const recipes = props.recipes;

  const ingredientsList = (ingredients) => ingredients.map((ingredient, i) => 
    <ul key={i}>
      <li>{ingredient}</li>
    </ul>
  );

  const recipeList = recipes.map((recipe) => 
    <Item key={recipe.name}>
      <Item.Image size='medium' src={recipe.image} />

      <Item.Content>
        <Item.Header>{recipe.name}</Item.Header>
        <Item.Meta>Ingredients</Item.Meta>
        <Item.Description>{ingredientsList(recipe.ingredients)}</Item.Description>
      </Item.Content>
    </Item>
  );

  return (
    <Item.Group>{recipeList}</Item.Group>
  );
}

export default RecipesList;