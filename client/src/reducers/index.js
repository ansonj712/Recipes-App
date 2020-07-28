import { combineReducers } from 'redux';
import ingredientReducer from './ingredientReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  ingredients: ingredientReducer,
  recipes: recipeReducer
});