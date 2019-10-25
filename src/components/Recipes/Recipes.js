import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import RecipeItem from '../RecipeItem/RecipeItem'
import { Label, Input } from '../Form/Form'

import './Recipes.css'

class Recipes extends React.Component {

    static contextType = RecipeContext

    componentDidMount(){
        this.context.clearError()
        this.context.getAllRecipes()
    }

    render() {
        let recipeList = this.context.recipeList
        if (this.context.searchBy || this.context.filterBy ) 
            recipeList = recipeList
                .filter(recipe => {
                    if(Object.values(recipe).join('').toLowerCase().includes(this.context.searchBy.toLowerCase()) && recipe.time_to_make <= this.context.filterBy ) {
                        return recipe
                    }
                })

        const recipes = recipeList
            .map(recipe => 
                { return <RecipeItem key={recipe.id} recipe={recipe}/> }
            )

            return(
                <section className="recipes">

                    <h1>My recipes</h1>
                    
                    <form className = "search">
                        <label 
                            htmlFor='recipe-search'>
                            Search:  
                        </label>
                        <input 
                            onChange={event => this.context.setSearch(event.target.value)} 
                            id='recipe-search'
                            type='text' 
                            placeholder='e.g. "meatloaf"'>
                        </input>
                    </form>

                    <form className = "filterByTime">
                        <Label
                            htmlFor = "recipe-filter">
                            Cooking Time Less Than (minutes)
                        </Label>
                        <Input
                            id = "recipe-filter"
                            onChange = { e => this.context.setFilter(e.target.value) }
                            type = "number"
                            min = "0">
                        </Input>
                    </form>
                        
                    { recipes }
                
                </section>
            )
    }
}

export default Recipes
