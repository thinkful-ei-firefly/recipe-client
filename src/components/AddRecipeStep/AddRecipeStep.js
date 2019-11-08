import React from 'react'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeStep extends React.Component {

  static contextType = RecipeContext

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveStep(e.target.value)
  }

  deconvertCharacters = str => {
    let newStr = str.split('')
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === '^') newStr[i] = ','
      else if (newStr[i] === '|') newStr[i] = '"'
    }
    return newStr.join('')
  }

  render() {

    const steps = this.context.recipeSteps.map((step, index) => {
      return (
        <div
          className="step"
          key={index}>
          <Button
            value={step}
            className="edit-button"
            onClick={this.handleClick}>
            -
          </Button>
          {`${index + 1}) ${this.deconvertCharacters(step)}`}
        </div>
      )
    })

    return (
      <div className="list-steps">
        {steps}
      </div>
    )
  }
}

export default AddRecipeStep