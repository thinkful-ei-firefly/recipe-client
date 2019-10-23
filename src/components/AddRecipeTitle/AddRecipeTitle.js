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
        return(
            <div className = "title">
                { this.context.recipeTitle }
                <Button
                    className = "removeTitle"
                    onClick = { this.handleClick }>
                    -
                </Button>
            </div>
        )
    }
}

export default AddRecipeTitle