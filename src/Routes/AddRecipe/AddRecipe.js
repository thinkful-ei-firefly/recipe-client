import React from 'react'
import { Redirect } from 'react-router-dom'
import AddRecipeTitleForm from '../../components/AddRecipeTitleForm/AddRecipeTitleForm'
import AddRecipeTitle from '../../components/AddRecipeTitle/AddRecipeTitle'
import AddRecipeDescForm from '../../components/AddRecipeDescForm/AddRecipeDescForm'
import AddRecipeDesc from '../../components/AddRecipeDesc/AddRecipeDesc'
import AddRecipeIngredientForm from '../../components/AddRecipeIngredientForm/AddRecipeIngredientForm'
import AddRecipeIngredient from '../../components/AddRecipeIngredient/AddRecipeIngredient'
import AddRecipeStepForm from '../../components/AddRecipeStepForm/AddRecipeStepForm'
import AddRecipeStep from '../../components/AddRecipeStep/AddRecipeStep'
import AddRecipeTimeForm from '../../components/AddRecipeTimeForm/AddRecipeTimeForm'
import AddRecipeTime from '../../components/AddRecipeTime/AddRecipeTime'
import AddRecipeCuisineForm from '../../components/AddRecipeCuisineForm/AddRecipeCuisineForm'
import AddRecipeCuisine from '../../components/AddRecipeCuisine/AddRecipeCuisine'
import AddRecipeImage from '../../components/AddRecipeImage/AddRecipeImage'
import AddRecipePublic from '../../components/AddRecipePublic/AddRecipePublic'
import Button from '../../components/Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

import './addRecipe.css'

class AddRecipe extends React.Component {

    static contextType = RecipeContext

    componentDidMount() {
      const idRecipe = this.props.match.params.id;
      if (idRecipe) {
        this.context.loadRecipe(idRecipe)
      }else{
        this.context.clearRecipe()
      }
    }

    render() {

        return(
            <div className='add-form'>
            <section className = "addRecipe">

                <h1>{this.context.editing?'Edit':'New'} Recipe</h1>

                {
                    this.context.recipeTitle
                        ? <AddRecipeTitle />
                        : <AddRecipeTitleForm />
                }

                {
                    this.context.recipeDesc
                        ? <AddRecipeDesc />
                        : <AddRecipeDescForm />
                }

                <AddRecipeIngredient />
                <AddRecipeIngredientForm />

                <AddRecipeStep />
                <AddRecipeStepForm />

                {
                    this.context.recipeCuisine
                        ? <AddRecipeCuisine />
                        : <AddRecipeCuisineForm />
                }

                {
                    this.context.recipeTime
                        ? <AddRecipeTime />
                        : <AddRecipeTimeForm />
                }

                <AddRecipePublic />

                {!this.context.editing && <AddRecipeImage />}

                {this.context.error && <div>{this.context.error}</div>}

                <Button className='submit_button'
                    onClick = { this.context.handleCreateRecipe }>
                    Save
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='submit_button' onClick={this.props.history.goBack}>Back</button>

                { this.context.loading && <div>Saving..</div> }

                { this.context.saved && <Redirect to={'/recipes'}/> }

            </section>
            </div>
        )
    }
}

export default AddRecipe
