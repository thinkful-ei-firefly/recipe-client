import React from 'react'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeTime extends React.Component {

  static contextType = RecipeContext

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveTime()
  }

  render() {
    return (
      <div className="time">
        <Button
          className="edit-button"
          onClick={this.handleClick}>
          -
        </Button>
        {this.context.recipeTime}
      </div>
    )
  }
}

export default AddRecipeTime