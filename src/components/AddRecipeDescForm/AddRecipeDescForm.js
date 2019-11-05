import React from 'react'
import { Label, Required, Textarea } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipeDescForm extends React.Component {

  static contextType = RecipeContext

  handleSubmit = e => {
    e.preventDefault()
    this.context.handleAddDesc(e.target.desc.value)
    e.target.desc.value = ''
  }

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveDesc()
  }

  render() {
    return(
      <form
        className = "addIngredient-form"
        onSubmit = { this.handleSubmit }>
        <div className = "description">
          <div
            className='section'>
            <span>2</span>
            Description
          </div>
          { this.context.recipeDesc ?
          <div className = "description">
            <Button
              className = "edit-button"
              onClick = { this.handleClick }>
              -
            </Button>
            { this.context.recipeDesc }
          </div>
          :
          <div>
            <div className='inner-wrap'>
              <Label
                htmlFor = "recipe-desc">
                Description: <Required />
              </Label>
              <Textarea
                placeholder = 'ex. "This recipe is..."'
                className='textarea'
                name = "desc"
                id = "recipe-desc"
                required>
              </Textarea>
            </div>
            <Button className='add'
              type = "Submit">
              +
            </Button>
          </div> }
        </div>
      </form>
    )
  }
}

export default AddRecipeDescForm
