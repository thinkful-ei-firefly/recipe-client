import React from 'react'
import {Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import './IngredientsAdderForm.css'

class IngredientsAdderForm extends React.Component {

  state = {
    amountError: null
  }

  validateAmount = (event) => {
    event.preventDefault()
    this.setState({ amountError: null })
    const string = event.target.amount.value
    const isNumber = /^[\d/ ]+$/.test(string)
    if(!isNumber) return this.setState({ amountError: 'Error: Amount must contain only numbers and fractions'})
    if(string.startsWith(' ') || string.endsWith(' ')) return this.setState({ amountError: 'Error: Amount cannot start or end with an empty space'})
    if(string.startsWith('/') || string.endsWith('/')) return this.setState({ amountError: 'Error: Amount cannot start or end with a slash'})
    const arr = string.split(' ')
    if (arr.length === 1) {
      const slashSplit = arr[0].split('/')
      if (slashSplit.length === 2) {
        if (!slashSplit[0].length || !slashSplit[1].length) {
          return this.setState({ amountError: 'Error: Amount cannot have a number that starts or ends with a slash'})
        }
      } else if (slashSplit.length !== 1) {
        return this.setState({ amountError: 'Error: Amount cannot have more than 1 fraction'})
      }
    } else if (arr.length === 2) {
      if (arr[0].includes('/')) {
        return this.setState({ amountError: 'Error: In amount, a fraction cannot precede a whole number'})
      } else if (!arr[1].includes('/')) {
        return this.setState({ amountError: 'Error: In amount, cannot have 2 numbers unless the second is a fraction'})
      } else {
        const slashSplit = arr[1].split('/')
        if (slashSplit.length === 2) {
          if (!slashSplit[0].length || !slashSplit[1].length) {
            return this.setState({ amountError: 'Error: Amount cannot have a number that starts or ends with a slash'})
          }
        } else if (slashSplit.length !== 1){
          return this.setState({ amountError: 'Error: Amount cannot have more than 1 fraction'})
        }
      }
    } else {
      return this.setState({ amountError: 'Error: Amount cannot have more than 1 space'})
    }
    this.props.handleSubmit(event)
  }
  render() {
    return(
        <form
            className = "addIngredient-form"
            onSubmit = {event => this.validateAmount(event) }>

            <legend>Add An Item:</legend>
            <hr/>
            <p role='alert'>{this.state.amountError}</p>
            <div className = "amount">
                <Label
                    htmlFor = "recipe-amount">
                    Quantity: <Required />
                </Label>
                <Input className='addIng-input'
                    aria-label='enter Quantity' 
                    name = "amount"
                    id = "recipe-amount"
                    type = "text"
                    list = "amounts"
                    placeholder = 'ex. "1 1/4"'
                    required>
                </Input>
                <datalist
                    id = "amounts">
                    <option value = "1/8"/>
                    <option value = "1/4"/>
                    <option value = "1/2"/>
                    <option value = "1"/>
                </datalist>
            </div>
            <div className = "measurement">
                <Label
                    htmlFor = "recipe-measurement">
                    Unit of Measure: <Required />
                </Label>
                <Input className='addIng-input'
                    aria-label='enter measurement' 
                    name = "measurement"
                    id = "recipe-measurement"
                    type = "text"
                    list = "measurements"
                    placeholder = 'ex. "each"'
                    required>
                </Input>
                <datalist
                    id = "measurements">
                    <option value = "tsp"/>
                    <option value = "Tbs"/>
                    <option value = "cup"/>
                    <option value = "lb"/>
                    <option value = "each"/>
                    <option value = "dozen"/>
                </datalist>
            </div>
            <div className = "ingredient">
                <Label
                    htmlFor = "recipe-ingredient">
                    Ingredient: <Required />
                </Label>
                <Input className='addIng-input'
                    aria-label='enter ingredient' 
                    name = "ingredient"
                    id = "recipe-ingredient"
                    type = "text"
                    placeholder = 'ex. "apple"'
                    required>
                </Input>
            </div>
            <div className='ingredients-buttons'>
              <Button aria-label='add item' className ='ingr-button'
                type = "Submit">
                <i className="fas fa-plus"></i>
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button aria-label='cancel' className ='ingr-button'
                onClick={this.props.cancelSubmit}
                type = "Button">
                <i className="fas fa-times"></i>
              </Button>
            </div>
        </form>
    )
  }
}

export default IngredientsAdderForm
