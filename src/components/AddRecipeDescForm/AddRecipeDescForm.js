import React from 'react'
import { Label, Input, Required } from '../../components/Form/Form'
import Button from '../../components/Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeDescForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault() 
        this.context.handleAddDesc(e.target.desc.value)
        e.target.desc.value = ''
    }
    render() {
        return(
            <form
                className = "desc-form"
                onSubmit = { this.handleSubmit }>
                <legend>Add Recipe Description</legend>
                <div className = "description">
                    <Label
                        htmlFor = "recipe-desc">
                        Description: <Required />
                    </Label>
                    <Input
                        name = "desc"
                        id = "recipe-desc"
                        type = "textarea"
                        required>
                    </Input>
                </div>
                <Button
                    type = "Submit">
                    Add Description
                </Button>

            </form>
        )
    }
}

export default AddRecipeDescForm