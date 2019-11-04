import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import RecipeItem from '../RecipeItem/RecipeItem'
import { Link } from 'react-router-dom'

import IngredientsMatcher from '../IngredientsMatcher/IngredientsMatcher'
import RandomRecipe from '../RandomRecipe/RandomRecipe'

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

    if (this.context.selectRandom){
      const temp = recipeList[Math.floor(Math.random() * recipeList.length)]
      recipeList = []
      recipeList.push(temp)
    }

    const recipes = recipeList
        .map(recipe =>
            { return <RecipeItem key={recipe.id} recipe={recipe}/> }
        )

    return(
      <section>

        <div className='search-bar'>
          <h1 className='my-recipe'>My Recipes</h1>
            <form onSubmit={this.context.searchMyRecipes} className = "search">
              <input
                    id='recipe-search'
                    type='text'
                    placeholder='Search...'
                    name='search'>
              </input>
              <button
                className='search_button'
                type='submit'>
                <i className="fa fa-search"></i>
              </button>
            </form>

          <IngredientsMatcher />
          <RandomRecipe />
        </div>

        <br/>

        <form>
          <div className='add_new'>
            <h3>Add New Recipe
              &nbsp;
              <Link
                to="/newrecipe"
                className="menu">
                <i className="far fa-plus-square"></i>
              </Link>
            </h3>
          </div>
        </form>

        { recipes }

      </section>
    )
  }
}

export default Recipes
