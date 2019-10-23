import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeTimeForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        this.context.setRecipeTime(e.target.time.value)
        e.target.time.value = ''
    }

    render() {
        return(
            <form
                className = "addTime-form"
                onSubmit = { this.handleSubmit }>
                <legend>Add how long this recipe takes(minutes).</legend>
                <div className = "time">
                    <Label
                        htmlFor = "recipe-time">
                        Time: <Required />
                    </Label>
                    <Input
                        name = "time"
                        id = "recipe-step"
                        type = "number"
                        required>
                    </Input>
                </div>
                <Button
                    type = "submit">
                    Add Time
                </Button>
            </form>
        )
    }
}

export default AddRecipeTimeForm