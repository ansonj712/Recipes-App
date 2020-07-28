import React, { Component } from 'react';
import { Button, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';

class RecipesList extends Component {
  render() {
    const { recipes } = this.props.recipes;

    return (
      <Item.Group>{recipeList(recipes)}</Item.Group>
    );
  }
}

const ingredientsList = (ingredients) => ingredients.map((ingredient, i) => 
    <ul key={i}>
      <li>{ingredient}</li>
    </ul>
  );

const recipeList = (recipes) => recipes.map((recipe) => 
  <Item key={recipe.id}>
    <Item.Image size='medium' src={recipe.image} />

    <Item.Content>
      <Item.Header>{recipe.name}</Item.Header>
      <Item.Meta>Ingredients</Item.Meta>
      <Item.Description>{ingredientsList(recipe.ingredients)}</Item.Description>
      <Item.Extra><Button href={recipe.url} target="_blank">More Info</Button></Item.Extra>
    </Item.Content>
  </Item>
);

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipesList);