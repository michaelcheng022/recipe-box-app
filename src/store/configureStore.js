import { createStore, combineReducers } from 'redux';
import recipesReducer from '../reducers/recipes';
import { addRecipe, editRecipe, removeRecipe } from '../actions/recipes';

export default () => {
  const store = createStore(
    combineReducers({
      recipes: recipesReducer
    })
  );


  store.subscribe(() => {
    console.log(store.getState());
  })

  store.dispatch(addRecipe({name: 'Chicken Pesto', ingredients: 'pesto and chicken and pesto', directions: 'cook the pasta'}));
  store.dispatch(editRecipe('001', {name: 'poop', ingredients: 'poop', directions: 'poop'}));
  store.dispatch(removeRecipe({id: '002'}))


  return store;
};

