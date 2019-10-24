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
        return(
            <div className = "time">
                {this.context.recipeTime}
                <Button
                    className = "removeTime"
                    onClick = { this.handleClick }>
                    -
                </Button>
            </div>

        )
    }
}

export default AddRecipeTime