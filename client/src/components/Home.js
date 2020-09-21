import React, { Component } from 'react'
import IngredientsContainer from '../containers/IngredientsContainer'
import SearchContainer from '../containers/SearchContainer'
import RecipesContainer from '../containers/RecipesContainer'
import { Container, Divider, Header, Responsive } from 'semantic-ui-react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      ingredients: e.selected.toString()
    })
  }

  render() {
    return (
      <div className="top">
        <Responsive as={Container}>
          <Header as='h1'>Recipes App</Header>
          <p>Find recipes from your own fridge</p>
          <IngredientsContainer onChange={this.handleChange} />
          <Divider hidden />
          <SearchContainer ingredients={this.state.ingredients} />
          <RecipesContainer />
        </Responsive>
      </div>
    );
  }
}

export default Home;