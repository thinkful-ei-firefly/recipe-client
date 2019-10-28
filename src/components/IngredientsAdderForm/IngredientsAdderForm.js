import React from 'react'
import {Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

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
    const hasSlash = /\//.test(string)
    const hasSpace = / /.test(string)
    // this.props.handleSubmit(event)
  }
  render() {
    return(
        <form
            className = "addIngredient-form"
            onSubmit = {event => this.validateAmount(event) }>
            <legend>Add An Ingredient</legend>
            <div className = "amount">
                {this.state.amountError}<br />
                <Label
                    htmlFor = "recipe-amount">
                    How much: <Required />
                </Label>
                <Input
                    name = "amount"
                    id = "recipe-amount"
                    type = "text"
                    list = "amounts"
                    placeholder = "1 1/4"
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
                    Measure <Required />
                </Label>
                <Input
                    name = "measurement"
                    id = "recipe-measurement"
                    type = "text"
                    list = "measurements">
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
                <Input
                    name = "ingredient"
                    id = "recipe-ingredient"
                    type = "text"
                    required>
                </Input>
            </div>
            <Button
                type = "Submit">
                Add Ingredient
            </Button>
        </form>
    )
  }
}

export default IngredientsAdderForm