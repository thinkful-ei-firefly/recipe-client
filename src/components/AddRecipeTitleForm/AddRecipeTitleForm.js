import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import './Add.css'

class AddRecipeTitleForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        this.context.handleAddTitle(e.target.title.value)
        e.target.title.value = ''
    }

    render() {
        return(
            
            <form
                className = "recipe-form"
                onSubmit = { this.handleSubmit }>
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
                <Button className='add'
                    type = "Submit">
                    +
                </Button>
            </form>
        )
    }
}

export default AddRecipeTitleForm