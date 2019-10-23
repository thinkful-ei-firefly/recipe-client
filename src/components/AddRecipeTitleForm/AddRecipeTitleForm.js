import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeTitleForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.title.value)
        this.context.handleAddTitle(e.target.title.value)
        e.target.title.value = ''
    }

    render() {
        return(
            
            <form
                className = "recipe-form"
                onSubmit = { this.handleSubmit }>
                <legend>Add Recipe Title</legend>
                <div className = "title">
                    <Label
                        htmlFor = "recipe-title">
                        Title: <Required />
                    </Label>
                    <Input
                        name = "title"
                        id = "text"
                        type = "text"
                        required>
                    </Input>
                </div>
                <Button
                    type = "Submit">
                    Add Recipe Title
                </Button>
            </form>
        )
    }
}

export default AddRecipeTitleForm