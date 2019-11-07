import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import RecipeItem from '../RecipeItem/RecipeItem'
import { Link } from 'react-router-dom'
import { Label, Input } from '../Form/Form'
import Button from '../Button/Button'

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

    if (this.context.selectRandom && recipeList.length>0){
      const temp = recipeList[Math.floor(Math.random() * recipeList.length)]
      recipeList = []
      recipeList.push(temp)
    }

    const recipes = recipeList
        .map(recipe =>
            { return <RecipeItem key={recipe.id} recipe={recipe}/> }
        )

    return(
      <section className="my-recipes">

        <div className="head">
          <h1>My Recipes</h1>
          <form 
            onSubmit={ this.context.searchMyRecipes } 
            className = "search">
            <Label
              htmlFor="recipe-search">
              <Input
                    aria-label='Search recipes'
                    id='recipe-search'
                    type='text'
                    placeholder='Search...'
                    name='search'>
              </Input>
            </Label>
            <Button
              aria-label='search'
              className='search_button'
              type='submit'>
              <i className="fa fa-search"></i>
            </Button>
          </form>

          <IngredientsMatcher />
          
          <RandomRecipe />

          <div className='add_new'>
            <h3>{ ' Add New Recipe' }</h3>
            <Link
              aria-label='add new recipe'
              to="/newrecipe"
              className="menu">
              <i className="far fa-plus-square"></i>
            </Link>
          </div>

        </div>

        { recipes }

      </section>
    )
  }
}

export default Recipes
