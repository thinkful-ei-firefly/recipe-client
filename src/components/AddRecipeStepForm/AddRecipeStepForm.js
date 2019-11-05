import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddStepToRecipeForm extends React.Component {

  static contextType = RecipeContext

  handleSubmit = e => {
    e.preventDefault()
    this.context.handleAddRecipeStep(e.target.step.value)
    e.target.step.value = ''
  }

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveStep(e.target.value)
  }

  render() {
    const steps = this.context.recipeSteps.map((step, index) => {
      return(
        <div
          className="step"
          key={ index }>
          <Button
            value={ step }
            className="edit-button"
            onClick={ this.handleClick }>
            -
          </Button>
        { `${ index + 1 }) ${ step }` }
        </div>
        )
      })

    return(
      <form
        className = "addIngredient-form"
        onSubmit = { this.handleSubmit }>
        <div className = "step">
          <div className='section'>
            <span>4</span>
            Instructions
          </div>
          <div className="list-steps">
            { steps }
          </div>
          <div>
            <div className='inner-wrap'>
              <Label
                htmlFor = "recipe-step">
                Step: <Required />
              </Label>
              <Input
                placeholder = 'ex. "bake for 45 minutes"'
                className='input'
                name = "step"
                id = "recipe-step"
                type = "text"
                required>
              </Input>
            </div>
            <Button className='add'
              type = "submit">
              +
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddStepToRecipeForm
