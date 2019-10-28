import React from 'react'
import { Label, Input } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import RecipeApiService from '../../services/recipe-api-service'

class SearchPublicRecipes extends React.Component {

    static contextType = RecipeContext

    state = {
        error: null
    }

    componentDidMount() {
        RecipeApiService.getPublicRecipes()
            .then(recipes => {
                console.log(recipes)
                this.context.updatePublicRecipes(recipes)
            })
            .catch(res => this.setState({error: res.error}))
    }

    render() {
        const error = this.state.error
        return(
            <form 
                onSubmit = { this.props.handleSubmit }
                className = "search-public-recipes">
                { error }
                <Label
                    htmlFor = "public-recipe-search">
                    {this.props.label}
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