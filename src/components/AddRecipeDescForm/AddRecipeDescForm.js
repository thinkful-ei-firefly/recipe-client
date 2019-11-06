import React from 'react'
import { Label, Textarea, Required } from '../Form/Form'
import Button from '../Button/Button'
import AddRecipeDesc from '../AddRecipeDesc/AddRecipeDesc'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipeDescForm extends React.Component {

  static contextType = RecipeContext

  handleSubmit = e => {
    e.preventDefault()
    this.context.handleAddDesc(e.target.desc.value)
    e.target.desc.value = ''
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
            <h3>Description</h3>
          </div>
          { this.context.recipeDesc ?
          <AddRecipeDesc/>
          :
          <div>
            <div className='inner-wrap'>
              <Label
                htmlFor = "recipe-desc">
                Description: <Required />
              </Label>
              <Textarea
                placeholder = 'ex. "This recipe is..."'
                className='input'
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
