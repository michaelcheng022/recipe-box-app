import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Recipe:
            <input type="text" recipe="recipe"/>
          </label>
          <label>
            Ingredients:
            <input type="text" ingredients="ingredients" />
          </label>
          <label>
            Directions: 
            <input type="text" directions="directions" />
          </label>
          <button type="submit">ADD NEW RECIPE</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;