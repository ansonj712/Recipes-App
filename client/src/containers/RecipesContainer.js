import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes';

class RecipesContainer extends Component {
  render() {
    const { recipes } = this.props.recipes;

    return (
      <Item.Group className="recipe list">
        <Recipes recipes={recipes} />
      </Item.Group>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipesContainer);