import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipePublic extends React.Component {

    static contextType = RecipeContext

    render() {
        return(
            <form
                className = "recipe-form">
                <div className = "description">
                <div className='section'><span>7</span>Type</div>
                <div className='inner-wrap'>
                  <Label
                      htmlFor = "recipe-type">
                      Public <Required />
                  </Label>
                  <Input
                      name = "measurement"
                      id = "recipe-type"
                      type = "checkbox"
                      onChange = {this.context.handleAddPublic}
                      >
                  </Input>
                </div>
                </div>

            </form>
        )
    }
}

export default AddRecipePublic
