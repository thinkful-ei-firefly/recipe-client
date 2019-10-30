import React from 'react'
import { Label, Input } from '../Form/Form'

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
                      Public
                  </Label>
                  <Input
                      name = "measurement"
                      id = "recipe-type"
                      type = "checkbox"
                      checked ={this.context.recipePublic}
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
