import React from 'react'
import SearchPublicRecipe from '../../components/SearchPublicRecipes/SearchPublicRecipes'
import RecipeContext from '../../contexts/RecipeContext'

import PublicRecipe from '../../components/PublicRecipe/PublicRecipe'

class PublicRecipesRoute extends React.Component {

    static contextType = RecipeContext

    componentDidMount() {
        this.context.clearError()
        this.context.getAllRecipes()
    }

    

    render() {
        return(
            <section className = "public-recipes">
                
                <SearchPublicRecipe />

                { this.context.publicRecipes }
            </section>
        )
    }
}

export default PublicRecipesRoute