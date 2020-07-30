import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import RecipesList from '../components/RecipesList';

class Recipes extends Component {
  render() {
    const { recipes } = this.props.recipes;

    return (
      <Item.Group className="recipe list">
        <RecipesList recipes={recipes} />
      </Item.Group>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipes);