import React from 'react'
//import { Link } from 'react-router-dom'

import ShoppingList from '../../components/ShoppingList/ShoppingList'
import IngedientsAdderForm from '../../components/IngredientsAdderForm/IngredientsAdderForm'
import ShoppingListContext from '../../contexts/ShoppingListContext'
import GoodmealApiService from '../../services/goodmeal-api-service'
import ShoppingListApiService from '../../services/shoppinglist-api-service'

import './ShoppingListRoute.css'

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

  moveCrossedItems = () => {
    GoodmealApiService.moveCrossedOnShoppingList()
      .then(() => {
        const newList = this.state.recipeList.filter(item => item.crossed === false)
        this.setState({ recipeList: newList })
      })
      .catch(this.setError)
  }

  deleteList = () => {
    GoodmealApiService.deletShoppingList()
      .then(() => this.setState({ recipeList: [] }))
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

    return (

      <ShoppingListContext.Provider value={value}>
        <section className="shop-list-page">

          <ShoppingList />

          <div className="list-buttons">
            {
              adding
                ? <IngedientsAdderForm
                  handleSubmit={this.addIngredient}
                  cancelSubmit={this.cancelSubmit} />
                : <button
                  aria-label='Add item'
                  className='modify-buttons'
                  onClick={this.openForm}>
                  <i className="far fa-plus-square">
                    <span>&nbsp;Add Item</span>
                  </i>
                </button>
            }

            <button
              aria-label='move checked to pantry'
              className='modify-buttons'
              hidden={!this.state.recipeList.length}
              onClick={this.moveCrossedItems}>
              <i className="far fa-arrow-alt-circle-up">
                <span>&nbsp;Move Checked to Pantry</span>
              </i>
            </button>

            <button
              aria-label='delete checked'
              className='modify-buttons'
              hidden={!this.state.recipeList.length}
              onClick={this.deleteCrossedItems}>
              <i className="far fa-minus-square">
                <span>&nbsp;Delete Checked</span>
              </i>
            </button>

            <button
              aria-label='delete all        '
              className='modify-buttons'
              hidden={!this.state.recipeList.length}
              onClick={this.deleteList}>
              <i className="far fa-trash-alt">
                <span>&nbsp;Delete All</span>
              </i>
            </button>

          </div>
        </section>
      </ShoppingListContext.Provider>
    )
  }
}

export default ShoppingListRoute
