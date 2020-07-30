import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions/ingredientActions';

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }

  handleChange(e, {value}) {
    this.setState({
      selected: value
    }, () => { this.props.onChange(this.state) });
  }

  render() {
    const { options } = this.props;

    return (
      <Dropdown
        placeholder='Enter your ingredients here'
        fluid
        multiple
        search
        selection
        onChange={this.handleChange}
        options={options.ingredients}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.ingredients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIngredients: () => dispatch(fetchIngredients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);