import axios from 'axios';
import { GET_INGREDIENTS } from './types';

export function fetchIngredients() {
  return function(dispatch) {
    axios.get('/api/ingredients')
      .then(res =>
        dispatch({
          type: GET_INGREDIENTS,
          payload: res.data.map(ingredient => {
            return { key: ingredient.name, text: ingredient.name, value: ingredient.name }
          })
        })
      )
      .catch(console.log);
  }
};