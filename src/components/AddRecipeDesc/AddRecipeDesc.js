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
                    { this.context.recipeDesc }
                    <Button
                    className = "removeDesc"
                    onClick = { this.handleClick }>
                    -
                </Button>
            </div>
        )
    }
}

export default AddRecipeDesc