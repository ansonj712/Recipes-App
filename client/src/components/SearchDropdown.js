import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class SearchDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selected: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/ingredients')
      .then(res => res.json())
      .then((data) => { 
        this.setState({
          options: data.map(ingredient => {
            return { key: ingredient.name, text: ingredient.name, value: ingredient.name }
          })
        })
      })
      .catch()
  }

  handleChange(e, {value}) {
    this.setState({
      selected: value
    }, () => { this.props.onChange(this.state) });
  }

  render() {
    return (
      <Dropdown
        placeholder='Enter your ingredients here'
        fluid
        multiple
        search
        selection
        onChange={this.handleChange}
        options={this.state.options}
      />
    );
  }
}

export default SearchDropdown;