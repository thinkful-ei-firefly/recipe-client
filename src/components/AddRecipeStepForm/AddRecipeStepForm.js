import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'
import AddRecipeStep from '../AddRecipeStep/AddRecipeStep'
import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddStepToRecipeForm extends React.Component {

  static contextType = RecipeContext

  state = {
    error: null
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.validateStep(e)) return
    this.context.handleAddRecipeStep(e.target.step.value)
    e.target.step.value = ''
  }

  validateStep = (event) => {
    this.setState({ error: null })
    const str = event.target.step.value
    const invalid = /\^|\[|\{|\]|\}|\|/.test(str)
    if (invalid) {
      return this.setState({
        error: 'Error: Instruction cannot contain any of the following characters: ^ { } [ ] |'
      })
    }
    return true
  }

  render() {
    return (
      <form
        className="addIngredient-form"
        onSubmit={this.handleSubmit}>
        <div className="step">
          <div className='section'>
            <span>7</span>
            <h3>Instructions</h3>
          </div>
          <AddRecipeStep />
          <div>
            <p role='alert'> {this.state.error} </p>
            <div className='inner-wrap'>
              <Label
                htmlFor="recipe-step">
                Step: <Required />
              </Label>
              <Input
                placeholder='ex. "bake for 45 minutes"'
                className='input'
                name="step"
                id="recipe-step"
                type="text"
                required>
              </Input>
            </div>
            <Button className='add'
              type="submit">
              +
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddStepToRecipeForm
