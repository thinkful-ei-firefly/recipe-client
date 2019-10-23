import React from 'react'
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
import Button from '../../components/Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

import './addRecipe.css'

class AddRecipe extends React.Component {

    static contextType = RecipeContext

    render() {

        return(
            <section className = "addRecipe">
                
                <h2>Let's Build Your New Recipe</h2>

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

                <Button
                    onClick = { this.context.handleCreateRecipe }>
                    Create Recipe
                </Button>
                
            </section>
        )
    }
}

export default AddRecipe