import React from 'react'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeTitle extends React.Component {

  static contextType = RecipeContext

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveTitle()
  }

  render() {
    return (
      <div className="title">
        <Button
          className="edit-button"
          onClick={this.handleClick}>
          -
        </Button>
        {this.context.recipeTitle}
      </div>
    )
  }
}

export default AddRecipeTitle