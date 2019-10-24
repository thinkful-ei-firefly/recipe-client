import React from 'react'

import Recipes from '../../components/Recipes/Recipes'
import RecipeContext from '../../contexts/RecipeContext'
import RecipeApiService from '../../services/recipe-api-service'

class RecipesRoute extends React.Component {

  state = {
    recipeList: [],
    error: null
  }

  setError = (error) => {
    this.setState({
      error
    })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  setRecipeList = (recipeList) => {
    this.setState({
      recipeList
    })
  }

  removeRecipe = (idProduct) => {
    this.setState({
        recipeList: this.state.recipeList.filter((item, index) => item.id !== idProduct)
    });
  }

  getAllRecipes = () => {
    RecipeApiService.getAll()
      .then(this.setRecipeList)
  }

  delete = (idRecipe) => {
    RecipeApiService.delete(idRecipe)
      .then(() => this.removeRecipe(idRecipe))
      .catch(this.setError)
  }

  render() {
    const value = {
      recipeList: this.state.recipeList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      getAllRecipes: this.getAllRecipes,
      delete: this.delete,
    }

    return(
      <RecipeContext.Provider value={value}>
        <Recipes />
      </RecipeContext.Provider>
    )
  }
}

export default RecipesRoute
