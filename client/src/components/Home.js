import React, { Component } from 'react'

import SearchDropdown from './SearchDropdown'
import SearchButton from './SearchButton'
import RecipesList from './RecipesList'

import { Container, Divider, Header, Responsive } from 'semantic-ui-react'
import styles from './Home.module.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: '',
      recipes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      recipes: e.recipes
    }, () => this.displayRecipes())
  }

  displayRecipes() {
    console.log(this.state.recipes);
  }

  handleChange(e) {
    this.setState({
      ingredients: e.selected.toString()
    })
  }

  render() {
    return (
      <div className={styles.top}>
        <Responsive as={Container}>
          <Header as='h1'>Last Minute Recipes</Header>
          <p>Find recipes from your own fridge</p>
          <SearchDropdown onChange={this.handleChange} />
          <Divider hidden />
          <SearchButton ingredients={this.state.ingredients} onClick={this.handleClick} />
          <RecipesList recipes={this.state.recipes}/>
        </Responsive>
      </div>
    );
  }
}

export default Home;