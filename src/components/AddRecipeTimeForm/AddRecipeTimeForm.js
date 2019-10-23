import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../AddRecipeTitleForm/Add.css'

class AddRecipeTimeForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        this.context.handleAddTime(e.target.time.value)
        e.target.time.value = ''
    }

    render() {
        return(
            <form
                className = "recipe-form"
                onSubmit = { this.handleSubmit }>
                <legend>Add how long this recipe takes(minutes).</legend>
                <div className = "time">
                    <Label
                        htmlFor = "recipe-time">
                        Cooking-Time: <Required />
                    </Label>
                    <Input
                        name = "time"
                        id = "recipe-step"
                        type = "number"
                        required>
                    </Input>
                </div>
                <Button className='add'
                    type = "submit">
                    +
                </Button>
            </form>
        )
    }
}

export default AddRecipeTimeForm