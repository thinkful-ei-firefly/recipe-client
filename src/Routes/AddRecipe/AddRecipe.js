import React from 'react'
import AddRecipeTitleForm from '../../components/AddRecipeTitleForm/AddRecipeTitleForm'
import AddRecipeDescForm from '../../components/AddRecipeDescForm/AddRecipeDescForm'
import AddRecipeIngredientForm from '../../components/AddRecipeIngredientForm/AddRecipeIngredientForm'
import AddRecipeStepForm from '../../components/AddRecipeStepForm/AddRecipeStepForm'
import AddRecipeTimeForm from '../../components/AddRecipeTimeForm/AddRecipeTimeForm'
import AddRecipeCuisineForm from '../../components/AddRecipeCuisineForm/AddRecipeCuisineForm'
import Button from '../../components/Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

import './addRecipe.css'

class AddRecipe extends React.Component {

    static contextType = RecipeContext

    render() {

        const ingredients = this.context.recipeIngredients.map((ingredient, index) => {
            return(
                <div className = "ingredient" key={ index }>
                    { ingredient }
                </div>
            )
        })

        const steps = this.context.recipeSteps.map((step, index) => {
            return(
                <div className ="step" key={ index }>
                    {`${ index + 1 }) ${ step }` }
                </div>
            )
        })

        return(
            <section className = "addRecipe">
                
                <h2>Let's Build Your New Recipe</h2>

                <div className = "title">
                    { this.context.recipeTitle }
                </div>

                <div className = "description">
                        { this.context.recipeDesc }
                </div>
                
                <div className = "list-ingredients">
                    { ingredients }
                </div>

                <div className = "list-steps">
                    { steps }
                </div>

                <div className = "cuisine">
                    { this.context.recipeCuisine }
                </div>

                <div className = "time">
                    {this.context.recipeTime}
                </div>

                <AddRecipeTitleForm />

                <AddRecipeDescForm />

                <AddRecipeIngredientForm />
                
                <AddRecipeStepForm />

                <AddRecipeCuisineForm />

                <AddRecipeTimeForm />

                <Button
                    onClick = { this.context.handleCreateRecipe }>
                    Create Recipe
                </Button>
                
            </section>
        )
    }
}

export default AddRecipe