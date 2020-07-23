import React, { Component } from 'react'

import SearchDropdown from './SearchDropdown'
import SearchButton from './SearchButton'

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
      <div>
        <h1>Last Minute Recipes</h1>
        <p>Get Recipes from your own fridge</p>
        <SearchDropdown onChange={this.handleChange}/>
        <SearchButton ingredients={this.state.ingredients}/>
      </div>
    );
  }
}

export default Home;