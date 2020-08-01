import React, { Component } from 'react';

class RecipeIngredientsList extends Component {
  render() { 
    const ingredients = this.props.ingredients;

    return (
      ingredients.map((ingredient, i) => 
        <ul key={i}>
          <li>{ingredient}</li>
        </ul>
    ));
  }
}

export default RecipeIngredientsList;