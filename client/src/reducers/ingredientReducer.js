import { GET_INGREDIENTS } from '../actions/types'

const initialState = {
  ingredients: []
};

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ingredients: action.payload
      }
    default:
      return state;
  }
}

export default ingredients;
