import React from 'react'
import {Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'
class AddRecipeIngredientForm extends React.Component {

    static contextType = RecipeContext

    handleSubmit = e => {
        e.preventDefault()
        const {amount, measurement, ingredient} = e.target
        this.context.handleUpdateRecipeIngredients(amount.value, measurement.value, ingredient.value)
        e.target.amount.value = ''
        e.target.measurement.value = ''
        e.target.ingredient.value = ''
    }

    amounts = ['1/8', '1/4', '1/2']
    measurements = ['tsp', 'Tbs', 'cup']

    render() {
        return(
            <form
                className = "addIngredient-form"
                onSubmit = { this.handleSubmit }>
                <div className = "amount">
                <div className='section'><span>3</span>Ingredients</div>
                <div className='inner-wrap'>
                    <Label
                        htmlFor = "recipe-amount">
                        How much: <Required />
                    </Label>
                    <Input
                        name = "amount"
                        id = "recipe-amount"
                        type = "text"
                        list = "amounts"
                        required>
                    </Input>
                    <datalist
                        id = "amounts">
                        <option value = "1/8"/>
                        <option value = "1/4"/>
                        <option value = "1/2"/>
                        <option value = "1"/>
                        <option value = "dozen"/>
                    </datalist>
                </div>
                <div className = "inner-wrap">
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
                    </datalist>
                </div>
                <div className = "inner-wrap">
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
                <Button className='add'
                    type = "Submit">
                    +
                </Button>
                </div>
            </form>
        )
    }
}

export default AddRecipeIngredientForm