import React from 'react'
import SearchPublicRecipe from '../../components/SearchPublicRecipes/SearchPublicRecipes'
import RecipeContext from '../../contexts/RecipeContext'

class PublicRecipesRoute extends React.Component {

    static contextType = RecipeContext



    render() {
        return(
            <section className = "public-recipes">
                
                <SearchPublicRecipe />

                { this.context.publicRecipesJSX }

            </section>
        )
    }
}

export default PublicRecipesRoute