import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeCuisineForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        this.context.setRecipeCuisine(e.target.cuisine.value)
        e.target.cuisine.value = ''
    }

    render() {
        return(
            <form
                className = "addCuisine-form"
                onSubmit = { this.handleSubmit }>
                <legend>What is the recipe's cuisine.</legend>
                <div className = "cuisine">
                    <Label
                        htmlFor = "recipe-cuisine">
                        Cuisine: <Required />
                    </Label>
                    <Input
                        name = "cuisine"
                        id = "recipe-cuisine"
                        type = "text"
                        required>
                    </Input>
                </div>
                <Button
                    type = "submit">
                    Add Cuisine
                </Button>
            </form>
        )
    }
}

export default AddRecipeCuisineForm