import React from 'react'
import PublicRecipeTabs from '../../components/PublicRecipeTabs/PublicRecipeTabs'
import PublicRecipeSummary from '../../components/PublicRecipeSummary/PublicRecipeSummary'
import PublicRecipeIngredients from '../../components/PublicRecipeIngredients/PublicRecipeIngredients'
import PublicRecipeInstructions from '../../components/PublicRecipeInstructions/PublicRecipeInstructions'
import RatingPopups from '../../components/RatingPopup/RatingPopup'
import Sharing from '../../components/Sharing/Sharing'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'
import GoodmealApiService from '../../services/goodmeal-api-service'
import { Link } from 'react-router-dom'
import './PublicRecipeRoute.css'

class RecipeRoute extends React.Component {

  static contextType = PublicRecipeContext

  state = {
    error: null,
  }

  componentDidMount() {
    GoodmealApiService.getPublicRecipe(this.props.match.params.id)
      .then(recipe => this.context.updateRecipe(recipe))
      .catch(res => this.setState({ error: res.error }))
  }

  componentWillUnmount() {
    this.context.updateDisplay('summary')
  }

  handleTabClick(event) {
    this.context.updateDisplay(event.target.name)
  }

  render() {

    const error = this.state.error
    const recipe = this.context.recipe
    let publicRecipePage

    if (this.context.display === 'summary')
      publicRecipePage = <PublicRecipeSummary />

    else if (this.context.display === 'ingredients')
      publicRecipePage = <PublicRecipeIngredients />

    else if (this.context.display === 'instructions')
      publicRecipePage = <PublicRecipeInstructions />

    return (
      <div className='single-recipe'>
        <div className='recipe-tabs' itemType="http://schema.org/Recipe">
          <Link
            to='/publicrecipes'
            className="back">
            <i className="fas fa-backspace">&nbsp;<span>Back To Recipes</span></i>
          </Link>
          <div>
            <h1 itemProp="name">
              {
                recipe
                  ? recipe.name
                  : 'loading...'
              }
            </h1>

            {error}

            <div className="image" itemProp="image">
              <img
                src={"https://good-meal.s3.amazonaws.com/" + (recipe.imageurl ? recipe.imageurl : "nofound.png")}
                alt={recipe.name}
              />
            </div>

            <PublicRecipeTabs />

            <div className='tab-panels'>
              {publicRecipePage}
            </div>
            <RatingPopups id={recipe.id} />
            <Sharing recipe={recipe} />
          </div>
        </div>
        <div className='share'>
          <span>Share</span>
          <nav>
            <button type='button' onClick={e => this.shareFacebook(recipe.id)}><i className='fab fa-facebook-f'></i></button>
            <button type='button' onClick={e => this.shareTwitter(recipe.id)}><i className='fab fa-twitter'></i></button>
          </nav>
        </div>
      </div>

    )
  }
}

export default RecipeRoute
