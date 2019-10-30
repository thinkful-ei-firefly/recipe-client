import React from 'react'
import SearchPublicRecipe from '../../components/SearchPublicRecipes/SearchPublicRecipes'
import RecipeContext from '../../contexts/RecipeContext'
import { Redirect } from 'react-router-dom'

class PublicRecipesRoute extends React.Component {

    static contextType = RecipeContext

    componentDidMount = async () => {
        await this.context.getPublicRecipes();
        this.context.updatePublicRecipesJSX()
    }

    handleSubmit = async e => {
      e.preventDefault()
      await this.context.updateSearchPublicRecipeBy(
          e.target.publicSearch.value
      )
      this.context.updatePublicRecipesJSX()
      // this.props.history.push('/publicrecipes') //?
  }

    render() {
        return(
            <section className = "public-recipes">

                {this.context.redirect && <Redirect to='/recipes' />}
                
                <SearchPublicRecipe handleSubmit={this.handleSubmit} label={'Search For:'}/>

                { this.context.publicRecipesJSX }

            </section>
        )
    }
}

export default PublicRecipesRoute
