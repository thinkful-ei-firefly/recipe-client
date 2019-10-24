import React from 'react'

import Recipes from '../../components/Recipes/Recipes'
import RecipeContext from '../../contexts/RecipeContext'
import RecipeApiService from '../../services/recipe-api-service'

class RecipesRoute extends React.Component {

  state = {
    recipeList: [],
    error: null,
    filteredRecipes: [],
    filterBy: null
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

  setFilter = (filterBy) => {
    this.setState({ filterBy })
  }

  render() {
    const value = {
      recipeList: this.state.recipeList,
      error: this.state.error,
      filterBy: this.state.filterBy,
      setError: this.setError,
      clearError: this.clearError,
      getAllRecipes: this.getAllRecipes,
      delete: this.delete,
      setFilter: this.setFilter
    }

    return(
      <RecipeContext.Provider value={value}>
        <Recipes />
      </RecipeContext.Provider>
    )
  }
}

export default RecipesRoute
