import React from 'react'
import SearchPublicRecipe from '../../components/SearchPublicRecipes/SearchPublicRecipes'
import PublicRandomRecipe from '../../components/PublicRandomRecipe/PublicRandomRecipe'
import PublicRecipeContext from '../../contexts/PublicRecipeContext'
import { Redirect } from 'react-router-dom'

import './PublicRecipes.css'
class PublicRecipesRoute extends React.Component {

    static contextType = PublicRecipeContext

    componentDidMount = async () => {
        await this.context.getPublicRecipes()
        this.context.updatePublicRecipesJSX()
    }

    handleSubmit = async e => {
      e.preventDefault()
      await this.context.updateSearchPublicRecipesBy(
          e.target.publicSearch.value
      )
      this.context.updatePublicRecipesJSX()
  }

    render() {
        return(
            <section className = "public-recipes">
              <h1>All Recipes</h1>
                {this.context.redirect && <Redirect to='/recipes' />}

                <SearchPublicRecipe handleSubmit={this.handleSubmit} label={'Search For:'}/>

                <PublicRandomRecipe />

                { this.context.publicRecipesJSX }

            </section>
        )
    }
}

export default PublicRecipesRoute
