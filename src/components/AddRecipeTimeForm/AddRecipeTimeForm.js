import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipeTimeForm extends React.Component {

  static contextType = RecipeContext

  state = {
    error: null
  }

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveTime()
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
            <span>6</span>
            Cooking Time
          </div>
          {this.context.recipeTime ? 
          <div className="time">
            <Button
              className="edit-button"
              onClick={ this.handleClick }>
              -
            </Button>
            { this.context.recipeTime }
          </div>
          :
          <div>
            <div
              className="inner-wrap">
              <p>{this.state.error}</p>
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
