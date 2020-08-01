import React, { Component } from 'react';
import Recipe from './Recipe';

class Recipes extends Component {
  render() {
    const recipes = this.props.recipes;

    return (
      recipes.map((recipe, i) => 
        <Recipe key={i} recipe={recipe} />
      )
    );
  }
}

export default Recipes;