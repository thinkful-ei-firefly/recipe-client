import React from 'react'
import { Input } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import RecipeApiService from '../../services/recipe-api-service'

import './SearchPublicRecipes.css'
class SearchPublicRecipes extends React.Component {

    static contextType = RecipeContext

    state = {
        error: null
    }

    componentDidMount() {
        RecipeApiService.getPublicRecipes()
            .then(recipes => {
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
                <Input
                placeholder='Search Recipes...'
                id = "public-recipe-search"
                name = "publicSearch"
                type = "text">
                    
                </Input>
                <Button
                    type = "Submit">
                    <i className="fa fa-search"></i>
                </Button>
            </form>
        )
    }
}

export default SearchPublicRecipes