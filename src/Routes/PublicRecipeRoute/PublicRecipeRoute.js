import React from 'react'
import PublicRecipeTabs from '../../components/PublicRecipeTabs/PublicRecipeTabs'
import PublicRecipeSummary from '../../components/PublicRecipeSummary/PublicRecipeSummary'
import PublicRecipeIngredients from '../../components/PublicRecipeIngredients/PublicRecipeIngredients'
import PublicRecipeInstructions from '../../components/PublicRecipeInstructions/PublicRecipeInstructions'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'
import GoodmealApiService from '../../services/goodmeal-api-service'
import './PublicRecipeRoute.css'

class RecipeRoute extends React.Component {

    static contextType = PublicRecipeContext

    state = {
        error: null,
    }

    componentDidMount() {
        GoodmealApiService.getPublicRecipe(this.props.match.params.id)
            .then(recipe => this.context.updateRecipe(recipe))
            .catch(res => this.setState({ error: res.error }))
    }

    componentWillUnmount() {
        this.context.updateDisplay('summary')
    }

    handleTabClick(event) {
        this.context.updateDisplay(event.target.name)
    }

    render() {

        const error = this.state.error
        const recipe = this.context.recipe
        let publicRecipePage

        if(this.context.display === 'summary')
            publicRecipePage = <PublicRecipeSummary />

        else if(this.context.display === 'ingredients')
            publicRecipePage = <PublicRecipeIngredients />

        else if(this.context.display === 'instructions')
            publicRecipePage = <PublicRecipeInstructions />

        return(

            <div className='recipe-tabs' itemType = "http://schema.org/Recipe">
                <div>
                <h1 itemProp = "name">
                    {
                        recipe 
                            ? recipe.name 
                            : 'loading...'
                    }
                </h1>

                {error}

                <div className = "image" itemProp = "image">
                    <img
                        src = { "https://good-meal.s3.amazonaws.com/" + (recipe.imageurl?recipe.imageurl:"nofound.png") }
                        alt = { recipe.name }
                    />
                </div>

                <PublicRecipeTabs />
                
                <div className='tab-panels'>
                    { publicRecipePage }
                </div>
                </div>
            </div>
          
        )
    }
}

export default RecipeRoute
