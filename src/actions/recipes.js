import uuid from 'uuid'

// Recipes Reducer

export const addRecipe = ({
  name = '',
  ingredients = '',
  directions = ''
} = {}) => ({
  type: 'ADD_RECIPE',
  recipe: {
    id: uuid(),
    name,
    ingredients,
    directions
  }
});

export const removeRecipe = ({ id } = {}) => ({
  type: 'REMOVE_RECIPE',
  id
});

export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id, 
  updates
});