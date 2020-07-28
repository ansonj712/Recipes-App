import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';

class SearchButton extends Component {
  render() {
    return <Button onClick={() => this.props.fetchRecipes(this.props.ingredients)}>Get Recipes</Button>
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: (ingredients) => dispatch(fetchRecipes(ingredients))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);