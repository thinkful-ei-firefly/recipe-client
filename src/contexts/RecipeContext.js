import React from 'react'

import RecipeApiService from '../services/recipe-api-service'
import UploadApiService from '../services/upload-api-service'

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
    handleRemoveTitle: () => {},
    handleAddDesc: () => {},
    handleRemoveDesc: () => {},
    handleAddRecipeIngredient: () => {},
    handleRemoveIngredient: () => {},
    handleAddRecipeStep: () => {},
    handleRemoveStep: () => {},
    setRecipeTime: () => {},
    handleAddCuisine: () => {},
    handleRemoveCuisine: () => {},
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
            recipeCuisine: '',
            recipeTime: null,
            recipeList: [],
            recipeImage: null,
            error: null,

        }

        this.state = state
    }

    handleAddTitle = recipeTitle => {
        this.setState({ recipeTitle })
    }

    handleRemoveTitle = () => {
        this.setState({ recipeTitle: '' })
    }

    handleAddDesc = recipeDesc => {
        this.setState({ recipeDesc })
    }

    handleRemoveDesc = () => {
        this.setState({ recipeDesc: '' })
    }

    handleAddRecipeIngredient = (amount, measurement, ingredient) => {

        const addIngredient = amount + ' ' + measurement + ' ' + ingredient
        const recipeIngredients = this.state.recipeIngredients
        recipeIngredients.push(addIngredient)
        this.setState({
            recipeIngredients
        })
    }

    handleRemoveIngredient = (ingToRemove) => {
        const recipeIngredients = this.state.recipeIngredients
            .filter(ing => ing !== ingToRemove)
        this.setState({ recipeIngredients })
    }

    handleAddRecipeStep = step => {
        const recipeSteps = this.state.recipeSteps
        recipeSteps.push(step)
        this.setState({
            recipeSteps
        })
    }

    handleRemoveStep = stepToRemove => {
        const recipeSteps = this.state.recipeSteps
            .filter(step => step !== stepToRemove)
        this.setState({ recipeSteps })
    }

    handleAddTime = recipeTime => {
        this.setState({ recipeTime })
    }

    handleRemoveTime = () => {
        this.setState({ recipeTime: null })
    }

    handleAddCuisine = recipeCuisine => {
        this.setState({ recipeCuisine })
    }

    handleRemoveCuisine = () => {
        this.setState({ recipeCuisine: '' })
    }

    handleAddImage = (e) => {
      console.log(e[0]);
      this.setState({
        recipeImage : e[0]
      })
    }

    // takes recipe data from state and sends api query to server
    handleCreateRecipe = () => {
      const fileName = `${Date.parse(new Date())}.${this.state.recipeImage.name.split('.').pop()}`;

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
            imageURL: fileName,
        }

        RecipeApiService.postRecipe(recipe)
          .then(response => UploadApiService.uploadImage(this.state.recipeImage, fileName))
          .then(resImage => {
            console.log(resImage);
            //this.props.history.push('/recipes')
          })
          .catch(this.setError)
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
            handleRemoveTitle: this.handleRemoveTitle,
            handleAddDesc: this.handleAddDesc,
            handleRemoveDesc: this.handleRemoveDesc,
            handleAddRecipeIngredient: this.handleAddRecipeIngredient,
            handleRemoveIngredient: this.handleRemoveIngredient,
            handleAddRecipeStep: this.handleAddRecipeStep,
            handleRemoveStep: this.handleRemoveStep,
            handleAddTime: this.handleAddTime,
            handleRemoveTime: this.handleRemoveTime,
            handleAddCuisine: this.handleAddCuisine,
            handleRemoveCuisine: this.handleRemoveCuisine,
            handleCreateRecipe: this.handleCreateRecipe,
            handleAddImage: this.handleAddImage,
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
