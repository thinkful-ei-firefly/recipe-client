import React from 'react'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeDesc extends React.Component {

    static contextType = RecipeContext

    handleClick = e => {
        e.preventDefault()
        this.context.handleRemoveDesc()
    }

    render() {
        return(
            <div className = "description">
                   
                    <Button
                    className = "edit-button"
                    onClick = { this.handleClick }>
                    -
                </Button>
                { this.context.recipeDesc }
            </div>
        )
    }
}

export default AddRecipeDesc