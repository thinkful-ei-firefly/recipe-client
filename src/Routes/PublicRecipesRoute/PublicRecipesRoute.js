import React from 'react'
import SearchPublicRecipe from '../../components/SearchPublicRecipes/SearchPublicRecipes'
import RecipeContext from '../../contexts/RecipeContext'

class PublicRecipesRoute extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
      console.log('hello')
      e.preventDefault()
      this.context.updateSearchPublicRecipeBy(
          e.target.publicSearch.value
      )
      this.context.updatePublicRecipesJSX()
      // this.props.history.push('/publicrecipes') //?
  }

    render() {
        return(
            <section className = "public-recipes">
                
                <SearchPublicRecipe handleSubmit={this.handleSubmit} label={'Search For:'}/>

                { this.context.publicRecipesJSX }

            </section>
        )
    }
}

export default PublicRecipesRoute