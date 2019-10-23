import React from 'react'

import RecipeApiService from '../services/recipe-api-service'

const RecipeContext = React.createContext({
    recipeTitle: '',
    recipeDesc: '',
    recipeIngredients: [],
    recipeSteps: [],
    recipeTime: '',
    recipeCuisine: '',
    recipeList: [],
    error: null,

    handleAddTitle: () => {},
    handleDesc: () => {},
    handleUpdateRecipeIngredients: () => {},
    handleUpdateRecipeSteps: () => {},
    setRecipeTime: () => {},
    setRecipeCuisine: () => {},
    handleCreateRecipe: () => {},
    setError: () => {},
    clearError: () => {},
    setUser: () => {},
})

export default RecipeContext

export class RecipeProvider extends React.Component {
    constructor(props) {
        super(props)

        const state = {
            recipeTitle: '',
            recipeDesc: '',
            recipeIngredients: [],
            recipeSteps: [],
            recipeTime: '',
            recipeCuisine: '',
            recipeList: [],
            error: null,
            
        }

        this.state = state
    }

    handleAddTitle = recipeTitle => {
        this.setState({ recipeTitle })
    }

    handleAddDesc = recipeDesc => {
        this.setState({ recipeDesc })
    }

    handleUpdateRecipeIngredients = (amount, measurement, ingredient) => {

        const addIngredient = amount + ' ' + measurement + ' ' + ingredient
        const recipeIngredients = this.state.recipeIngredients
        recipeIngredients.push(addIngredient)
        this.setState({
            recipeIngredients
        })
    }

    handleUpdateRecipeSteps = step => {
        const recipeSteps = this.state.recipeSteps
        recipeSteps.push(step)
        this.setState({
            recipeSteps
        })
    }

    setRecipeTime = recipeTime => {
        this.setState({ recipeTime })
    }

    setRecipeCuisine = recipeCuisine => {
        this.setState({ recipeCuisine })
    }

    // takes recipe data from state and sends api query to server
    handleCreateRecipe = () => {

        const ingredientsList = this.state.recipeIngredients.map(ing => {
            return '"' + ing + '", '
        })

        const instructionsList = this.state.recipeSteps.map(step => {
            return '"' + step + '", '
        })

        console.log('add recipe button pressed')
        const recipe = {
            name: this.state.recipeTitle,
            description: this.state.recipeDesc,
            ingredients: "{" + this.state.recipeIngredients.join(',') + "}",
            instructions: "{" + this.state.recipeSteps.join(',') + "}",
            time_to_make: this.state.recipeTime,
            category: this.state.recipeCuisine,
        }

        RecipeApiService.postRecipe(recipe);
    }

    render() {
        const recipe = {
            recipeTitle: this.state.recipeTitle,
            recipeDesc: this.state.recipeDesc,
            recipeIngredients: this.state.recipeIngredients,
            recipeSteps: this.state.recipeSteps,
            recipeTime: this.state.recipeTime,
            recipeCuisine: this.state.recipeCuisine,
            recipeList: this.state.recipeList,
            error: this.state.error,
    
            handleAddTitle: this.handleAddTitle,
            handleAddDesc: this.handleAddDesc,
            handleUpdateRecipeIngredients: this.handleUpdateRecipeIngredients,
            handleUpdateRecipeSteps: this.handleUpdateRecipeSteps,
            setRecipeTime: this.setRecipeTime,
            setRecipeCuisine: this.setRecipeCuisine,
            handleCreateRecipe: this.handleCreateRecipe,
            setError: () => {},
            clearError: () => {},
            setUser: () => {},
        }

        return(
            <RecipeContext.Provider value = { recipe }>
                { this.props.children }
            </RecipeContext.Provider>
        )
    }
}
