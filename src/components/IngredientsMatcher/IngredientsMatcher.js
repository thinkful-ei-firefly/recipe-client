import React from 'react'

import RecipeContext from '../../contexts/RecipeContext'
import GoodmealApiService from '../../services/goodmeal-api-service'

import './IngredientsMatcher.css'


class IngredientsMatcher extends React.Component {

  static contextType = RecipeContext

  handleIngredientMatch = async () => {
    const results = []
    const { recipeList } = this.context
    const myPantry = await GoodmealApiService.getIngredientList()
    recipeList.forEach(recipe => {
      let total = 0
      let match = 0
      recipe.ingredients.forEach(ing => {
        total++
        for (let i = 0; i < myPantry.length; i++) {
          if (ing.includes(myPantry[i].name)) {
            console.log(ing + ' includes ' + myPantry[i].name)
            match++
            break
          }
        }
      })
      results.push({ ...recipe, matchPercent: Math.round(match / total * 100) })
    })
    results.sort((b, a) => (a.matchPercent > b.matchPercent) ? 1 : -1)
    this.context.setRecipeList(results)
  }

  render() {
    return (
      <div className='IngredientsMatcher'>
        <button className='find-recipes' onClick={this.handleIngredientMatch}>Find Recipes With Ingredients I Own</button>
      </div>
    )
  }
}

export default IngredientsMatcher
