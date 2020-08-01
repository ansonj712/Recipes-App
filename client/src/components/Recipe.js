import React, { Component } from 'react'
import { Button, Item } from 'semantic-ui-react';
import IngredientsList from './IngredientsList';

class Recipe extends Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <Item>
        <Item.Image size='medium' src={recipe.image} />

        <Item.Content>
          <Item.Header>{recipe.name}</Item.Header>
          <Item.Meta>Ingredients</Item.Meta>
          <Item.Description>
            <IngredientsList ingredients={recipe.ingredients} />
          </Item.Description>
          <Item.Extra>
            <Button href={recipe.url} target="_blank">More Info</Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default Recipe;