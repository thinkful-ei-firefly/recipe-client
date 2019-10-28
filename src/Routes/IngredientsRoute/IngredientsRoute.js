import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'

import IngedientsAdderForm from '../../components/IngredientsAdderForm/IngredientsAdderForm'

class IngredientsRoute extends React.Component {
  
  state = {
    error: null,
    ingredientList: null,
    adding: false
  }

  componentDidMount() {
    GoodmealApiService.getIngredientList()
      .then(ingredientList => this.setState({ ingredientList }))
      .catch(res => this.setState({ error: res.error }))
  }

  openForm = () => {
    this.setState({ adding: true })
  }

  addIngredient = (event) => {
    event.preventDefault()
    let ingredient = {
      name: event.target.ingredient.value,
      amount: event.target.amount.value,
      unit: event.target.measurement.value
    }
    GoodmealApiService.addIngredient(ingredient)
      .then(res => this.setState({
        adding: false,
        error: null,
        ingredientList: [...this.state.ingredientList, res]
      }))
      .catch(res => this.setState({ error: res.error }))
  }

  deleteIngredient = (id) => {
    GoodmealApiService.deleteIngredient(id)
      .then(() => {
        let ingredientList = this.state.ingredientList.filter(ingredient => ingredient.id !== id)
        this.setState({ ingredientList })
      })
      .catch(res => this.setState({ error: res.error }))
  }

  deleteAllIngredients = () => {
    GoodmealApiService.deleteIngredientList()
      .then(() => this.setState({ ingredientList: null }))
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const { error, ingredientList, adding } = this.state
    const listElements = []
    if (ingredientList) {
    ingredientList.forEach(item => {
      let listItem = `${item.amount} ${item.unit} of ${item.name}`
      listElements.push(<li key={item.id}>{listItem} <button onClick={() => this.deleteIngredient(item.id)}>Delete</button></li>)
    })
    }
    return (
      <div>
        <h2>Ingredients</h2>
        { error }
        <ul>
          { listElements }
        </ul>
        { adding 
          ? <IngedientsAdderForm handleSubmit={this.addIngredient}/> 
          : <button onClick={this.openForm}>New Ingredient</button>}
        { (ingredientList && ingredientList.length) 
          ? <button onClick={this.deleteAllIngredients}>Delete Whole List</button> 
          : null}
      </div>
    )
  }
}

export default IngredientsRoute
