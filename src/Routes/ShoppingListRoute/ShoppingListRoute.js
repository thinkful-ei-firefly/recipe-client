import React from 'react'
//import { Link } from 'react-router-dom'

import ShoppingList from '../../components/ShoppingList/ShoppingList'
import IngedientsAdderForm from '../../components/IngredientsAdderForm/IngredientsAdderForm'
import ShoppingListContext from '../../contexts/ShoppingListContext'
import GoodmealApiService from '../../services/goodmeal-api-service'
import ShoppingListApiService from '../../services/shoppinglist-api-service'

class ShoppingListRoute extends React.Component {

  state = {
    recipeList: [],
    error: null,
    adding: false
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

  addIngredient = (event) => {
    event.preventDefault()
    let ingredient = {
      name: event.target.ingredient.value,
      amount: event.target.amount.value,
      unit: event.target.measurement.value
    }
    GoodmealApiService.addToShoppingList(ingredient)
      .then(res => this.setState({
        adding: false,
        error: null,
        recipeList: [...this.state.recipeList, res]
      }))
      .catch(res => this.setState({ error: res.error }))
  }

  openForm = () => {
    this.setState({ adding: true })
  }

  cancelSubmit = () => {
    this.setState({
      adding: false
    })
  }

  render() {
    const value = {
      recipeList: this.state.recipeList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      getShoppingList: this.getShoppingList,
      delete: this.delete,
      setRecipeList: this.setRecipeList
    }
    const { adding } = this.state

    return(
      <ShoppingListContext.Provider value={value}>
        <ShoppingList />
        <button hidden={!this.state.recipeList.length}onClick={this.deleteList}>Delete List</button>
        <button hidden={!this.state.recipeList.length}onClick={this.deleteCrossedItems}>Delete crossed off list items</button>
        {adding ? <IngedientsAdderForm handleSubmit={this.addIngredient} cancelSubmit={this.cancelSubmit}/> : <button onClick={this.openForm}>Add to list</button>}
      </ShoppingListContext.Provider>
    )
  }
}

export default ShoppingListRoute
