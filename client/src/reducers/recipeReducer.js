import { GET_RECIPES } from '../actions/types'

const initialState = {
  recipes: []
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        recipes: action.payload
      }
    default:
      return state;
  }
}

export default recipes;
