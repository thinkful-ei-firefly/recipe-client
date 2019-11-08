import React from 'react'
import { Label, Input } from '../Form/Form'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipePublic extends React.Component {

  static contextType = RecipeContext

  render() {
    return (
      <form
        className="addIngredient-form">
        <div className="description">
          <div className="section">
            <span>8</span>
            <h3>Visibility</h3>
          </div>
          <div className="inner-wrap">
            <p>Do you want this recipe to be publicly available to everyone?</p>
            <div className='yes_no'>
              <Label
                htmlFor="recipe-type-yes">
                Yes
              </Label>
              <Input
                name="measurement"
                id="recipe-type-yes"
                type="radio"
                checked={this.context.recipePublic}
                onChange={this.context.handleAddPublic}>
              </Input>
                <Label
                htmlFor="recipe-type-no">
                No
              </Label>
              <Input
                name="measurement"
                id="recipe-type-no"
                type="radio"
                checked={!this.context.recipePublic}
                onChange={this.context.handleRemovePublic}>
              </Input>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default AddRecipePublic
