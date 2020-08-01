import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions/ingredientActions';

class IngredientsContainer extends Component {
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

  handleAddition = (e, { value }) => {
    const { options } = this.props;
    options.ingredients.push({ text: value, value });
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
        allowAdditions
        onChange={this.handleChange}
        onAddItem={this.handleAddition}
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

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer);