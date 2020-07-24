import React, { Component } from 'react'

import { Button } from 'semantic-ui-react'

class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ingredients) {
    fetch("https://api.edamam.com/search?q=" + ingredients + "&app_id=57f5e752&app_key=781a726ba413561209ec885eac5d0f99")
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          recipes: data.hits.map(hit => {
            return { 
              name: hit.recipe.label, 
              ingredients: hit.recipe.ingredientLines, 
              image: hit.recipe.image,
              url: hit.recipe.url,
              source: hit.recipe.source 
            };
          })
        }, () => { this.props.onClick(this.state) });
      })
      .catch(console.log)
  }

  render() {
    return <Button onClick={() => this.handleClick(this.props.ingredients)}>Get Recipes</Button>
  }
}

export default SearchButton;