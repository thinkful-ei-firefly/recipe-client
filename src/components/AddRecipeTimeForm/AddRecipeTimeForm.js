import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'
import AddRecipeTime from '../AddRecipeTime/AddRecipeTime'
import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipeTimeForm extends React.Component {

  static contextType = RecipeContext

  state = {
    error: null
  }

  handleSubmit = e => {
    e.preventDefault()
    const time = e.target.time.value
    if (time < 0) return this.setState({ error: 'Cook time cannot be negative'})
    this.setState({ error: null})
    this.context.handleAddTime(time)
    e.target.time.value = ''
  }

  render() {
    return(
      <form
        className="addIngredient-form"
        onSubmit={ this.handleSubmit }>
        <div className="time">
          <div
            className="section">
            <span>4</span>
            <h3>Cooking Time</h3>
          </div>
          {this.context.recipeTime ?
          <AddRecipeTime />
          :
          <div>
            <div
              className="inner-wrap">
              <p role='alert'>{this.state.error}</p>
              <Label
                htmlFor="recipe-time">
                Time (in minutes): <Required />
              </Label>
              <Input
                placeholder='ex. "10"'
                className="input"
                name="time"
                id="recipe-step"
                type="number"
                required>
              </Input>
            </div>
            <Button
              className="add"
              type="submit">
              +
            </Button>
          </div> }
        </div>
      </form>
    )
  }
}

export default AddRecipeTimeForm
