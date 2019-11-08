import React from 'react'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeCuisine extends React.Component {

  static contextType = RecipeContext

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveCuisine()
  }

  render() {
    return (
      <div className="cuisine">

        <Button
          className="edit-button"
          onClick={this.handleClick}>
          -
      </Button>
        {this.context.recipeCuisine}
      </div>
    )
  }
}

export default AddRecipeCuisine