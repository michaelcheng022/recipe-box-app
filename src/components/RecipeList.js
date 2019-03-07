import React from 'react';

const RecipeList = (props) => {
  return(
    <div>
      List of Recipes Go Here
      {props.recipes.map((recipe, index)=> {
        return <li key={index} onClick={()=> (props.handleClick(index))}>{recipe.name}</li>
      })}
    </div>
  );
}

export default RecipeList;