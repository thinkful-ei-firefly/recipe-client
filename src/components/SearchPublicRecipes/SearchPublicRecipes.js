import React from 'react'
import { Label, Input } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

class SearchPublicRecipes extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        this.context.updateSearchPublicRecipesBy(
            e.target.publicSearch.value
        )
        // create PublicRecipesList
        // push history to PublicRecipesRoute
    }

    render() {
        return(
            <form 
                onSubmit = { this.handleSubmit }
                className = "search-public-recipes">
                <Label
                    htmlFor = "public-recipe-search">
                    Search For:
                </Label>
                <Input
                id = "public-recipe-search"
                name = "publicSearch"
                type = "text">
                </Input>
                <Button
                    type = "Submit">
                    Go
                </Button>
            </form>
        )
    }
}

export default SearchPublicRecipes