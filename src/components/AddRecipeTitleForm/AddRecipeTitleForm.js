import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'
import AddRecipeTitle from '../AddRecipeTitle/AddRecipeTitle'
import RecipeContext from '../../contexts/RecipeContext'
import './addRecipeTitleForm.css'

class AddRecipeTitleForm extends React.Component {

  static contextType = RecipeContext

  handleSubmit = e => {
    e.preventDefault()
    this.context.handleAddTitle(e.target.title.value)
    e.target.title.value = ''
  }

  renderInnerWrap() {
    return (
      <div>
        <div className="inner-wrap">
          <Label
            htmlFor="recipe-title">
            Title: <Required />
          </Label>
          <Input
            placeholder='ex. "Spicy Tacos"'
            className="input"
            name="title"
            id="text"
            type="text"
            required>
          </Input>
        </div>

        <Button className="add"
          type="Submit">
          +
        </Button>
      </div>
    )
  }

  render() {
    return (
      <form
        className="addIngredient-form"
        onSubmit={this.handleSubmit}>
        <div className="title">
          <div
            className="section">
            <span>1</span>
            <h3>Title</h3>
          </div>
          {
            this.context.recipeTitle
              ? <AddRecipeTitle />
              : this.renderInnerWrap()
          }
        </div>
      </form>
    )
  }
}

export default AddRecipeTitleForm
