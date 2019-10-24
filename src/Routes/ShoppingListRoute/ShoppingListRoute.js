import React from 'react'
//import { Link } from 'react-router-dom'

import ShoppingList from '../../components/ShoppingList/ShoppingList'
import ShoppingListContext from '../../contexts/ShoppingListContext'
import ShoppingListApiService from '../../services/shoppinglist-api-service'
import GoodmealApiService from '../../services/goodmeal-api-service'

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

  deleteCrossedItems = () => {
    GoodmealApiService.deleteCrossedOnShoppingList()
      .then(() => {
        const newList = this.state.recipeList.filter(item => item.crossed === false)
        this.setState({ recipeList: newList })
      })
      .catch(this.setError)
  }

  deleteList = () => {
    GoodmealApiService.deletShoppingList()
      .then(() => this.setState({ recipeList: []}))
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
        <button onClick={this.deleteList}>Delete List</button>
        <button onClick={this.deleteCrossedItems}>Delete crossed off list items</button>
      </ShoppingListContext.Provider>
    )
  }
}

export default ShoppingListRoute
