import React from 'react'
import {Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddStepToRecipeForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        this.context.handleUpdateRecipeSteps(e.target.step.value)
        e.target.step.value = ''
    }

    render() {
        return(
            <form
                className = "addStep-form"
                onSubmit = { this.handleSubmit }>
                <legend>Add a Step to the Instructions</legend>
                <div className = "step">
                    <Label
                        htmlFor = "recipe-step">
                        Step: <Required />
                    </Label>
                    <Input
                        name = "step"
                        id = "recipe-step"
                        type = "text"
                        required>
                    </Input>
                </div>
                <Button
                    type = "submit">
                    Add Step
                </Button>       
            </form>
        )
    }
}

export default AddStepToRecipeForm