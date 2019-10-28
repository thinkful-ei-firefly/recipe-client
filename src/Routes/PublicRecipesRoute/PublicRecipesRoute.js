import React from 'react'
import SearchPublicRecipe from '../../components/SearchPublicRecipes/SearchPublicRecipes'
import RecipeContext from '../../contexts/RecipeContext'
import { Redirect } from 'react-router-dom'

class PublicRecipesRoute extends React.Component {

    static contextType = RecipeContext



    render() {
        return(
            <section className = "public-recipes">

            {this.context.redirect && <Redirect to='/recipes' />}

                <SearchPublicRecipe />

                { this.context.publicRecipesJSX }

            </section>
        )
    }
}

export default PublicRecipesRoute
