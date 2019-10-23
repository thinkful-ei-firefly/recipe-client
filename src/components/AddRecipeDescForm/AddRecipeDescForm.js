import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

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
                className = "recipe-form"
                onSubmit = { this.handleSubmit }>
                <div className = "description">
                <div className='section'><span>2</span>Description</div>
                <div className='inner-wrap'>
                    <Label
                        htmlFor = "recipe-desc">
                        Description: <Required />
                    </Label>
                    <Input className='input'
                        name = "desc"
                        id = "recipe-desc"
                        type = "text"
                        required>
                    </Input>
                </div>
                <Button className='add'
                    type = "Submit">
                    +
                </Button>
                </div>

            </form>
        )
    }
}

export default AddRecipeDescForm