import defaultRecipes from '../testData'


const initialState = {
  recipes: defaultRecipes
}
export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_RECIPE': 
      return state.recipes.concat(action.recipe);
    case 'REMOVE_RECIPE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          return {...recipe, ...action.updates};
        } else {
          return recipe;
        }
      });
    default: 
      return state;
  }
}