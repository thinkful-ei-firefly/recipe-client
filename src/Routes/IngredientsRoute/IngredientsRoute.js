import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'

import IngedientsAdderForm from '../../components/IngredientsAdderForm/IngredientsAdderForm'

import "./IngredientsRoute.css"

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

  cancelSubmit = () => {
    this.setState({
      adding: false
    })
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
      listElements.push(<li className="pantry-item" key={item.id}><button className="del-item" onClick={() => this.deleteIngredient(item.id)}>Delete</button><div>{listItem}</div></li>)
      listElements.push(<hr/>)
    })
    }
    return (
      <div className="pantry">
        <h2>My Pantry</h2>
        <hr className="rule"/>
        { error }
        <ul className="pantry-list">
          { listElements }
        </ul>
        { adding
          ? <IngedientsAdderForm handleSubmit={this.addIngredient} cancelSubmit={this.cancelSubmit}/>
          : <button className="new-pantry" onClick={this.openForm}>New Ingredient</button>}
        { (ingredientList && ingredientList.length)
          ? <button className="delete-pantry" onClick={this.deleteAllIngredients}>Delete Whole List</button>
          : null}
      </div>
    )
  }
}

export default IngredientsRoute
