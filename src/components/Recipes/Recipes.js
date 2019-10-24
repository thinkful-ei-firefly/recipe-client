import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import RecipeItem from '../RecipeItem/RecipeItem'
import { Link } from 'react-router-dom'

import './Recipes.css'

class Recipes extends React.Component {

    static contextType = RecipeContext

    componentDidMount(){
        this.context.clearError()
        this.context.getAllRecipes()
    }

    render() {
        let recipeList = this.context.recipeList
        if (this.context.filterBy) 
            recipeList = recipeList
                .filter(recipe => Object.values(recipe)
                    .join('')
                    .toLowerCase()
                    .includes(this.context.filterBy
                        .toLowerCase()
                    )
                )
        const recipes = recipeList
            .map(recipe => 
                { return <RecipeItem key={recipe.id} recipe={recipe}/> }
            )

            return(
                <section className="recipes">
                    <h2>Your recipes</h2><br/>
                    <label 
                        htmlFor='recipe-search'>
                        Search for
                    </label>
                    <input 
                        onChange={event => this.context.setSearch(event.target.value)} 
                        id='recipe-search'type='text' 
                        placeholder='e.g. "bananas"'>
                    </input>
                    <Link
                        to="/newrecipe"
                        className="button">
                        Add
                    </Link>
                    <div>
                        { recipes }
                    </div>
                </section>
            )
    }
}

export default Recipes
