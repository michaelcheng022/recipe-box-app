import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from './components/Recipe';
import RecipeModal from './components/RecipeModal';
import RecipeList from './components/RecipeList';
//import recipes from './testData';

class RecipeBoxApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: props.recipes,
      currRecipe: 0,
      displayForm: undefined
    }
  }
  handleClick = (i) => {
    this.setState((prevState) => { 
      return {...prevState.currRecipe, currRecipe: i} // why does this work?? look into object spread
      // return Object.assign({}, prevState, {
      //   currRecipe: i
      // })
    });
  }
  handleFormRender = () => {
    this.setState((prevState) => ({
      displayForm: !prevState.displayForm
    }));
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState((prevState) => {
      return {...prevState.recipes, ...e.target.value}
    });

  }
  render () {
    return (
      <div>
        <h1>Recipe Box App</h1>
        <RecipeList 
          recipes={this.state.recipes} 
          handleClick={this.handleClick} 
        />
        <button onClick={this.handleFormRender}>Add New Recipe</button>
        <RecipeModal 
          displayForm={this.state.displayForm}
          handleSubmit={this.handleSubmit}
        />
        <div>
          <Recipe 
            recipe={this.state.recipes[this.state.currRecipe]} 
          />
          <button>Edit</button>
          <button>Delete Recipe</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeBoxApp);

