import React from 'react'
//import { Link } from 'react-router-dom'

import ShoppingList from '../../components/ShoppingList/ShoppingList'
import ShoppingListContext from '../../contexts/ShoppingListContext'
import ShoppingListApiService from '../../services/shoppinglist-api-service'

class ShoppingListRoute extends React.Component {

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

  getShoppingList = () => {
    ShoppingListApiService.getAll()
      .then(this.setRecipeList)
  }

  delete = (idRecipe) => {
    ShoppingListApiService.delete(idRecipe)
      .then(() => this.removeRecipe(idRecipe))
      .catch(this.setError)
  }

  render() {
    const value = {
      recipeList: this.state.recipeList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      getShoppingList: this.getShoppingList,
      delete: this.delete,
    }

    return(
      <ShoppingListContext.Provider value={value}>
        <ShoppingList />
      </ShoppingListContext.Provider>
    )
  }
}

export default ShoppingListRoute
