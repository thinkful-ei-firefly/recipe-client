import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'

import IngedientsAdderForm from '../../components/IngredientsAdderForm/IngredientsAdderForm'


import "./IngredientsRoute.css"
import logo from '../../images/logo.png'
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
      listElements.push(<li className="pantry-item" key={item.id}><button className="del-item" onClick={() => this.deleteIngredient(item.id)}><i className="fas fa-times"></i></button><div>{listItem}</div></li>)
      listElements.push(<hr key={item.id*100}/>)
    })
    }
    return (
      <div className="pantry-page">
        <section className='pantry'>
          <div className='title'>
            <h1>My Pantry</h1>
            <img src={logo} alt='logo'></img>
          </div> 
        { error }
        <ul className="pantry-list">
          { listElements }
        </ul>
        </section>
        <div className='pantry-buttons'>
        { adding
          ? <IngedientsAdderForm handleSubmit={this.addIngredient} cancelSubmit={this.cancelSubmit}/>
          : <button className="new-pantry" onClick={this.openForm}><i className="far fa-plus-square"><span>&nbsp;Add Item</span></i></button>}
        { (ingredientList && ingredientList.length)
          ? <button className="delete-pantry" onClick={this.deleteAllIngredients}><i className="far fa-trash-alt"><span>&nbsp;Delete List</span></i></button>
          : null}
          </div>
      </div>
    )
  }
}

export default IngredientsRoute
