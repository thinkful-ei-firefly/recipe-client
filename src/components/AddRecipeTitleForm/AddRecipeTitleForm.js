import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
//import './Add.css'
import '../../Routes/AddRecipe/addRecipe.css'

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
                    <div className='section'><span>1</span>Title</div>
                    <div class="inner-wrap">
                    <Label
                        htmlFor = "recipe-title">
                        Title: <Required />
                    </Label>
                    <Input className= 'input'
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
                </div>
            </form>
        )
    }
}

export default AddRecipeTitleForm