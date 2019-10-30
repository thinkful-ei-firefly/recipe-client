import React from 'react'

const PublicRecipeContext = React.createContext({
    recipe: null,
    display: '',

    updateRecipe: () => {},
    updateDisplay: () => {},
    getIngredientsList: () => {},
    getInstructionsList: () => {}
})

export default PublicRecipeContext

export class PublicRecipeProvider extends React.Component {
    constructor(props) {
        super(props)

        const state = {
            recipe: {
                title: '',
                cuisine: '', 
                description: '',
                ingredients: [],
                instructions: [],
                time_to_make: '',
                imageurl: '',
            },
            display: 'summary'
        }

        this.state = state;
    }

    updateRecipe = recipe => {
        this.setState({
            recipe
        })
    }

    updateDisplay = display => {
        this.setState({
            display
        })
    }

    getIngredientsList = () => {
        return this.state.recipe.ingredients
            .map((item, index) => 
                <li key = { index } itemProp = "recipeIngredient">
                    { item }
                </li>
            )
    }

    getInstructionsList = () => {
        return this.state.recipe.instructions
            .map((step, index) => 
                <li key = { index }>
                    { step }
                </li>)
    }

    render() {
        const value = {
            recipe: this.state.recipe,
            display: this.state.display,

            updateRecipe: this.updateRecipe,
            updateDisplay: this.updateDisplay,
            getIngredientsList: this.getIngredientsList,
            getInstructionsList: this.getInstructionsList,
        }

        return(
            <PublicRecipeContext.Provider value = {value}>
                { this.props.children }
            </PublicRecipeContext.Provider>
        )
    }
}