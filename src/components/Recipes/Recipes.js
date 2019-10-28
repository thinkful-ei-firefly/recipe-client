import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import RecipeItem from '../RecipeItem/RecipeItem'
import { Label, Input } from '../Form/Form'
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
      if (this.context.searchBy) {
        recipeList = this.context.searchRecipesBy(
          this.context.recipeList, 
          this.context.searchBy
      )
      }
      if (this.context.filterBy) {
        recipeList = this.context.filterRecipesByTime(
          recipeList,
          this.context.filterBy
      )
      }

        const recipes = recipeList
            .map(recipe => 
                { return <RecipeItem key={recipe.id} recipe={recipe}/> }
            )

            return(
                <section className="recipes">

                    <h1>My Recipes</h1>
                    
                    <form className = "search">

                    <input 
                            onChange={event => this.context.setSearch(event.target.value)} 
                            id='recipe-search'
                            type='text' 
                            placeholder='Search...'
                            name='search'>
                        </input>
                        <button type='submit'><i class="fa fa-search"></i></button>

                        <Link
                        to="/newrecipe"
                        className="menu">
                        <i className="far fa-plus-square"><span>Add New Recipe</span></i>
                    </Link>
                     
                    </form>
                        
                    { recipes }
                
                </section>
            )
    }
}

export default Recipes
