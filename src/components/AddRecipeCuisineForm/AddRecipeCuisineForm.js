import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipeCuisineForm extends React.Component {

  static contextType = RecipeContext

  handleSubmit = e => {
    e.preventDefault()
    this.context.handleAddCuisine(e.target.cuisine.value)
    e.target.cuisine.value = ''
  }

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveCuisine()
  }

  render() {
    return(
      <form
        className = "addIngredient-form"
        onSubmit = { this.handleSubmit }>
        <div className = "cuisine">
          <div
            className='section'>
              <span>5</span>
              Cuisine
          </div>
          {this.context.recipeCuisine ?
          <div className = "cuisine">
            <Button
            className = "edit-button"
            onClick = { this.handleClick }>
            -
            </Button>
            { this.context.recipeCuisine }
          </div>
          :
          <div>
            <div className="inner-wrap">
              <Label
                htmlFor = "recipe-cuisine">
                Cuisine: <Required />
              </Label>
              <Input
                placeholder = 'ex. "Italian"'
                name = "cuisine"
                id = "recipe-cuisine"
                type = "text"
                list = "cuisines"
                required>
              </Input>
              <datalist
                      id = "cuisines">
                      <option value = "American"/>
                      <option value = "Cajun"/>
                      <option value = "Chinese"/>
                      <option value = "French"/>
                      <option value = "Greek"/>
                      <option value = "Indian"/>
                      <option value = "Italian"/>
                      <option value = "Japanese"/>
                      <option value = "Korean"/>
                      <option value = "Mexican"/>
                      <option value = "Soul"/>
                      <option value = "Thai"/>
                  </datalist>
            </div>
            <Button className='add'
              type = "submit">
              +
            </Button>
          </div>
          }
        </div>
      </form>
    )
  }
}

export default AddRecipeCuisineForm
