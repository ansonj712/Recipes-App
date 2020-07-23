import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/ingredients')
      .then(res => res.json())
      .then((data) => { 
        this.setState({
          options: data.map(ingredient => {
            return { key: ingredient.name, text: ingredient.name, value: ingredient.name }
          })
      })})
      .catch(console.log)
  }
  
  render() {
    const options = this.state.options;
    return (
      <Dropdown
        placeholder='Enter your ingredients here'
        fluid
        multiple
        search
        selection
        options={options}
      />
    );
  }
}

export default SearchBar;