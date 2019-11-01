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
          <div className="inner-wrap">
            <Label
              htmlFor = "recipe-cuisine">
              Cuisine: <Required />
            </Label>
            <Input
              name = "cuisine"
              id = "recipe-cuisine"
              type = "text"
              required>
            </Input>
          </div>
          <Button className='add'
            type = "submit">
            +
          </Button>
        </div>
      </form>
    )
  }
}
  
export default AddRecipeCuisineForm