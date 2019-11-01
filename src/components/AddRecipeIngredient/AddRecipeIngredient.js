import React from 'react'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeIngredient extends React.Component {
  
  static contextType = RecipeContext
  
  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveIngredient(e.target.value)
  }
  
  render() {
    
    const ingredients = this.context.recipeIngredients
      .map((ingredient, index) => {
        return(
          <div className = "ingredient" key={ index }>
            <Button
              value = { ingredient }
              className = "edit-button"
              onClick = { this.handleClick }>
              -
            </Button>
            { ingredient }
          </div>
          )
        })
      
    return(
      <div className = "list-ingredients">
        { ingredients }
      </div>
    )
  }
}
    
export default AddRecipeIngredient