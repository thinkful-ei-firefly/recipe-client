import React from 'react'
import { Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'
import AddRecipeIngredient from '../AddRecipeIngredient/AddRecipeIngredient'
import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'
class AddRecipeIngredientForm extends React.Component {

  static contextType = RecipeContext

  state = {
    amountError: null,
    measurementError: null,
    ingredientError: null
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      amountError: null,
      measurementError: null,
      ingredientError: null
    })
    if (!this.validateAmount(e))
      return
    if (!this.validateMeasurement(e))
      return
    if (!this.validateIngredient(e))
      return
    const { amount, measurement, ingredient } = e.target
    this.context.handleAddRecipeIngredient(
      amount.value,
      measurement.value,
      ingredient.value
    )
    e.target.amount.value = ''
    e.target.measurement.value = ''
    e.target.ingredient.value = ''
  }

  validateMeasurement = (event) => {
    const str = event.target.measurement.value
    const invalid = /~|\^|\*|\[|\{|\]|\}|;|:|\s|"|,|\|/.test(str)
    if (invalid) {
      return this.setState({
        measurementError: 'Error: measurement cannot contain special characters, commas, quotes, or spaces'
      })
    }
    return true
  }

  validateIngredient = (event) => {
    const str = event.target.ingredient.value
    const invalid = /~|\^|\*|\[|\{|\]|\}|;|:|"|,|\|/.test(str)
    if (invalid) {
      return this.setState({
        ingredientError: 'Error: ingredient cannot contain special characters, commas, or quotes'
      })
    }
    return true
  }

  validateAmount = (event) => {
    const string = event.target.amount.value
    const isNumber = /^[\d/ ]+$/.test(string)
    if (!isNumber)
      return this.setState({
        amountError: 'Error: Amount must contain only numbers and fractions'
      })
    if (string.startsWith(' ') || string.endsWith(' '))
      return this.setState({
        amountError: 'Error: Amount cannot start or end with an empty space'
      })
    if (string.startsWith('/') || string.endsWith('/'))
      return this.setState({
        amountError: 'Error: Amount cannot start or end with a slash'
      })
    const arr = string.split(' ')
    if (arr.length === 1) {
      const slashSplit = arr[0].split('/')
      if (slashSplit.length === 2) {
        if (!slashSplit[0].length || !slashSplit[1].length) {
          return this.setState({
            amountError: 'Error: Amount cannot have a number that starts or ends with a slash'
          })
        }
      } else if (slashSplit.length !== 1) {
        return this.setState({
          amountError: 'Error: Amount cannot have more than 1 fraction'
        })
      }
    } else if (arr.length === 2) {
      if (arr[0].includes('/')) {
        return this.setState({
          amountError: 'Error: In amount, a fraction cannot precede a whole number'
        })
      } else if (!arr[1].includes('/')) {
        return this.setState({
          amountError: 'Error: In amount, cannot have 2 numbers unless the second is a fraction'
        })
      } else {
        const slashSplit = arr[1].split('/')
        if (slashSplit.length === 2) {
          if (!slashSplit[0].length || !slashSplit[1].length) {
            return this.setState({
              amountError: 'Error: Amount cannot have a number that starts or ends with a slash'
            })
          }
        } else if (slashSplit.length !== 1) {
          return this.setState({
            amountError: 'Error: Amount cannot have more than 1 fraction'
          })
        }
      }
    } else {
      return this.setState({
        amountError: 'Error: Amount cannot have more than 1 space'
      })
    } return true
  }

  amounts = ['1/8', '1/4', '1/2']
  measurements = ['tsp', 'Tbs', 'cup']

  render() {
    return (
      <form
        className="addIngredient-form"
        onSubmit={this.handleSubmit}>
        <div className="amount">
          <div className='section'>
            <span>6</span>
            <h3>Ingredients</h3>
          </div>
          <AddRecipeIngredient />
          <div>
            <p role='alert'>{this.state.amountError}</p>
            <div className='inner-wrap'>
              <Label
                htmlFor="recipe-amount">
                How much: <Required />
              </Label>
              <Input
                placeholder='ex. "1 1/4"'
                name="amount"
                id="recipe-amount"
                type="text"
                list="amounts"
                required>
              </Input>
              <datalist
                id="amounts">
                <option value="1/8" />
                <option value="1/4" />
                <option value="1/2" />
                <option value="1" />
              </datalist>
            </div>
            <p role='alert'>{this.state.measurementError}</p>
            <div className="inner-wrap">
              <Label
                htmlFor="recipe-measurement">
                Unit of Measure: <Required />
              </Label>
              <Input
                placeholder='ex. "each"'
                name="measurement"
                id="recipe-measurement"
                type="text"
                list="measurements">
              </Input>
              <datalist
                id="measurements">
                <option value="tsp" />
                <option value="Tbs" />
                <option value="cup" />
                <option value="dozen" />
                <option value="lb" />
                <option value="each" />
              </datalist>
            </div>
            <p role='alert'>{this.state.ingredientError}</p>
            <div className="inner-wrap">
              <Label
                htmlFor="recipe-ingredient">
                Ingredient: <Required />
              </Label>
              <Input
                placeholder='ex. "apples"'
                name="ingredient"
                id="recipe-ingredient"
                type="text"
                required>
              </Input>
            </div>
            <Button className='add'
              type="Submit">
              +
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddRecipeIngredientForm
