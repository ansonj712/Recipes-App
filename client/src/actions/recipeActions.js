import axios from 'axios';
import { GET_RECIPES } from './types';

export function fetchRecipes(ingredients) {
  return function(dispatch) {
    axios.get("https://api.edamam.com/search?q=" + ingredients + "&app_id=57f5e752&app_key=781a726ba413561209ec885eac5d0f99")
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