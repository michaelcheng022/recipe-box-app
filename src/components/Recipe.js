import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <h1>{props.recipe.name}</h1>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Directions: {props.recipe.directions}</p>
    </div>
  );
}

export default Recipe;