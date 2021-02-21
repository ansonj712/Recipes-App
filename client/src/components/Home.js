import React, { Component } from 'react'
import IngredientsContainer from '../containers/IngredientsContainer'
import SearchContainer from '../containers/SearchContainer'
import RecipesContainer from '../containers/RecipesContainer'
import { Container, Grid, Header, Responsive } from 'semantic-ui-react'

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
          <Grid>
            <Grid.Row>
              <Grid.Column width={13}>
                <IngredientsContainer onChange={this.handleChange} />
              </Grid.Column>
              <Grid.Column width={3}>
                <SearchContainer ingredients={this.state.ingredients} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <RecipesContainer />
        </Responsive>
      </div>
    );
  }
}

export default Home;