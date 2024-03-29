import React from 'react'
import { Link } from 'react-router-dom'

import GoodmealApiService from '../../services/goodmeal-api-service'
import TokenService from '../../services/token-service'

import './ListGenerator.css'

class ListGenerator extends React.Component {

  state = {
    ingredientsToAdd: [],
    feedback: null,
    popUpArray: null,
    poppingUp: false
  }

  handleListCreate = async () => {
    const popUpArray = []
    const ingredientsToAdd = []
    let newIngs = []
    const { ingredients } = this.props.recipe
    ingredients.forEach(ing => {
      let ingArr = ing.split(' ')
      const num1 = ingArr.shift()
      const num2 = (ingArr[0].split('/').length === 2) ? ingArr.shift() : null
      const unit = ingArr.shift()
      const ingString = ingArr.join(' ')
      const numString = num2 ? [num1, num2].join(' ') : num1
      ingArr = [numString, unit, ingString]
      newIngs.push(ingArr)
    })
    const myIngs = await GoodmealApiService.getIngredientList()
    newIngs.forEach(newIng => {
      let includes = false
      for (let i = 0; i < myIngs.length; i++) {
        if (newIng[2].includes(myIngs[i].name)) {
          includes = true
          popUpArray.push([newIng, myIngs[i]])
          break
        }
      }
      if (!includes) {
        ingredientsToAdd.push(newIng)
      }
    })
    this.setState({ ingredientsToAdd })
    if (!!popUpArray.length) {
      this.handlePopUps(popUpArray)
    } else {
      this.createList()
    }
  }

  handlePopUps = async (popUps) => {
    const popUpArray = []
    popUps.forEach((popUp, i) => {
      const { amount, unit, name } = popUp[1]
      const newIng = popUp[0].join(' ')
      popUpArray.push(
        <li key={i} id={i}>
          {`You already own ${amount} ${unit} of ${name}. Add ${newIng} to your shopping list?`}
          <button
            className='yes-no-button'
            value={popUp[0]}
            onClick={event => this.handleYes(event, i)}
          >
            <i className="fas fa-check-circle"></i></button>
          <button
            className='yes-no-button'
            onClick={event => this.handleNo(event)}
          >
            <i className="fas fa-times-circle"></i></button>
        </li>)
    })
    await this.setState({ popUpArray })
    const modal = document.getElementById("myListModal");
    modal.style.display = "block"
  }

  handleYes = (event, i) => {
    event.preventDefault()
    this.setState({ ingredientsToAdd: [...this.state.ingredientsToAdd, event.target.parentElement.value.split(',')] })
    event.target.parentElement.parentElement.remove()
  }
  handleNo = (event) => {
    event.target.parentElement.parentElement.remove()
  }

  createList = async () => {
    const newIngs = []
    this.state.ingredientsToAdd.forEach(ing => newIngs.push({ amount: ing[0], unit: ing[1], name: ing[2] }))
    if (newIngs.length) await GoodmealApiService.addManyToShoppingList(newIngs)
    else this.setState({ feedback: 0 })
    document.getElementById("myListModal").style.display = 'none'
    this.setState({ feedback: this.state.ingredientsToAdd.length })
  }


  render() {
    const { feedback } = this.state
    return (
      <div className='ListGenerator'>
        <div className='added'>
          <p aria-live="polite">{feedback !== null ? `Added ${feedback} item(s) ` : ''}</p>
          <Link hidden={feedback === null} to='/shoppinglist'>
            <button aria-live="polite" className='view'>View List</button>
          </Link>
        </div>
        <button
          className='create'
          hidden={feedback !== null || !TokenService.hasAuthToken()}
          id='listCreateButton'
          onClick={this.handleListCreate}
        >
          <i className="fas fa-cart-plus">
            <span>Create Shopping List</span>
          </i>
        </button>
        <div id="myListModal" className="modal">
          <div aria-live="polite" className='modal-content'>
            <ul>
              {this.state.popUpArray}
            </ul>
            <button className='close' onClick={this.createList}>Done</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListGenerator
