import axios from 'axios';
import { GET_RECIPES } from './types';

export function fetchRecipes(ingredients) {
  return function(dispatch) {
    axios.get(process.env.REACT_APP_EDAMAM_API_URL + "?q=" + ingredients + "&app_id=" + process.env.REACT_APP_EDAMAM_APP_ID + "&app_key=" + process.env.REACT_APP_EDAMAM_APP_KEY)
      .then(res => 
        dispatch({
          type: GET_RECIPES,
          payload: res.data.hits.map((hit) => {
            return { 
              name: hit.recipe.label, 
              ingredients: hit.recipe.ingredientLines, 
              image: hit.recipe.image,
              url: hit.recipe.url,
              source: hit.recipe.source 
            };
          })
        })
      )
      .catch(console.log)
  }
};