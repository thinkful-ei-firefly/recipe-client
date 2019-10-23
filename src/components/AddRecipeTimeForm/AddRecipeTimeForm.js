import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

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
                className = "recipe-form"
                onSubmit = { this.handleSubmit }>
                <div className = "time">
                <div className='section'><span>6</span>Cooking Time</div>
                    <div class="inner-wrap">
                    <Label
                        htmlFor = "recipe-time">
                        Time (in minutes): <Required />
                    </Label>
                    <Input className='input'
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
                </div>
            </form>
        )
    }
}

export default AddRecipeTimeForm