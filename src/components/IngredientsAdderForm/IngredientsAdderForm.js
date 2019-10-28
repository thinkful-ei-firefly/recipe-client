import React from 'react'
import {Label, Input, Required } from '../Form/Form'
import Button from '../Button/Button'

const IngredientsAdderForm = (props) => {
    return(
        <form
            className = "addIngredient-form"
            onSubmit = {event => props.handleSubmit(event) }>
            <legend>Add An Ingredient</legend>
            <div className = "amount">
                <Label
                    htmlFor = "recipe-amount">
                    How much: <Required />
                </Label>
                <Input
                    name = "amount"
                    id = "recipe-amount"
                    type = "number"
                    list = "amounts"
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
            <Button
                onClick={props.cancelSubmit}
                type = "Button">
                Cancel
            </Button>
        </form>
    )
}

export default IngredientsAdderForm
