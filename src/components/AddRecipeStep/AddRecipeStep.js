import React from 'react'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeStep extends React.Component {

    static contextType = RecipeContext

    handleClick = e => {
        e.preventDefault()
        this.context.handleRemoveStep(e.target.value)
    }
    render() {

        const steps = this.context.recipeSteps.map((step, index) => {
            return(
                <div className ="step" key={ index }>
                    {`${ index + 1 }) ${ step }` }
                    <Button
                        value = { step }
                        className = "removeStep"
                        onClick = { this.handleClick }>
                        -
                    </Button>
                </div>
            )
        })

        return(
            <div className = "list-steps">
                { steps }
            </div>
        )
    }
}

export default AddRecipeStep