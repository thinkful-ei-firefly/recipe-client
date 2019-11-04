import React from 'react'
import { Label, Input } from '../Form/Form'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipePublic extends React.Component {

  static contextType = RecipeContext

  render() {
    return(
      <form
        className = "addIngredient-form">
        <div className = "description">
          <div className="section">
            <span>7</span>
            Visibility
          </div>
          <div className="inner-wrap">
            <p>Do you want this recipe to be publicly available to everyone?</p>
            <Label
              htmlFor="recipe-type-yes">
              Yes
            </Label>
            <Input
              name="measurement"
              id="recipe-type-yes"
              type="radio"
              checked={ this.context.recipePublic }
              onChange={ this.context.handleAddPublic }>
            </Input>
            <Label
              htmlFor="recipe-type-no">
              No
            </Label>
            <Input
              name="measurement"
              id="recipe-type-no"
              type="radio"
              checked={ !this.context.recipePublic }
              onChange={ this.context.handleRemovePublic }>
            </Input>
          </div>
        </div>
      </form>
    )
  }
}

export default AddRecipePublic
