import React, { Component } from 'react';
import RecipeItem from './RecipeItem';

class RecipesList extends Component {
  render() {
    const recipes = this.props.recipes;

    return (
      recipes.map((recipe, i) => 
        <RecipeItem key={i} recipe={recipe} />
      )
    );
  }
}

export default RecipesList;