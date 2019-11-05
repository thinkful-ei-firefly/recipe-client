import React from 'react'

import RecipeApiService from '../services/recipe-api-service'
import TokenService from '../services/token-service'

import { Link } from 'react-router-dom'
import '../Routes/PublicRecipesRoute/PublicRecipes.css'

const PublicRecipeContext = React.createContext({
  recipe: null,
  display: '',
  publicRecipesJSX: [],

  updateRecipe: () => {},
  updateDisplay: () => {},
  updateSearchPublicRecipesBy: () => {},
  getIngredientsList: () => {},
  getInstructionsList: () => {},
  getPublicRecipes: () => {},
  updatePublicRecipesJSX: () => {},
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
      publicRecipes: [],
      publicRecipesJSX: [],
      searchPublicRecipesBy: '',
      redirect: false,
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

  updateSearchPublicRecipesBy = searchPublicRecipesBy => {
    this.setState({
      searchPublicRecipesBy
    })
  }

  getIngredientsList = () => {
    return this.state.recipe.ingredients
      .map((item, index) =>
        <li
          key={ index }
          itemProp="recipeIngredient">
          { item }
        </li>
      )
  }

  getInstructionsList = () => {
    return this.state.recipe.instructions
      .map((step, index) =>
        <li
          key = { index }>
          { step }
        </li>
      )
  }

  getPublicRecipes = () => {
    return RecipeApiService.getPublicRecipes()
      .then(recipes => {
        this.setState({
          publicRecipes: recipes
        })
      })
  }

  searchRecipesBy = (recipeList, term) => {
    return recipeList
      .filter(recipe =>
        Object.values(recipe)
          .join('')
          .toLowerCase()
          .includes(term.toLowerCase())
      )
  }

  updatePublicRecipesJSX = (selectRandom) => {

    let recipes = this.state.publicRecipes

    if(this.state.searchPublicRecipesBy !== ''){
      recipes = this.searchRecipesBy(
        recipes,
        this.state.searchPublicRecipesBy
      )
    }

    if (selectRandom && recipes.length>0){
      const temp = recipes[Math.floor(Math.random() * recipes.length)]
      recipes = []
      recipes.push(temp)
    }
    
    recipes = recipes.map(recipe =>
      <div
        key={ recipe.id }
        className="cards">
        <section
          className="recipe-card"
          key={ recipe.id }>
            <Link to={ '/publicrecipes/' + recipe.id }>
              <div className = "image">
                <img
                  src={
                    "https://good-meal.s3.amazonaws.com/"
                    + (recipe.imageurl?recipe.imageurl:"nofound.png")
                  }
                  alt={ recipe.name }>
                </img>
              </div>
          </Link>
          <Link
            to={ '/publicrecipes/' + recipe.id }
            className="name">
            { recipe.name }
          </Link>
          <p
            className="description">
            { recipe.description}
          </p>
          <p
            style={{
              float:'left',
              fontWeight:'600',
              marginLeft:'15px', 
              marginTop: '2em', 
              color: '#b6282b', 
              marginBottom:'10px',
            }}
            className='rating'>
            { Number(recipe.rating)
              ? `Rating: ${recipe.rating}`
              : 'Recipe not yet rated'}
          </p>
          {
            TokenService.hasAuthToken()
              && <div className='recipe-buttons'>
                <button
                  data-tooltip='Copy to My Recipes'
                  className='remove-recipe'
                  type='button'
                  onClick = { e => this.cloneRecipe(recipe.id) }>
                  <i className="far fa-copy"
                    style={{
                      fontSize:'24px', 
                      marginRight:'15px',
                    }}>
                  </i>
                </button>
              </div>
          }
        </section>
      </div>
    )
    this.setState({
      publicRecipesJSX: recipes,
      selectRandom: selectRandom
    })
  }

  cloneRecipe = (id) => {
    RecipeApiService.cloneRecipe(id)
      .then(recipe => this.setState({redirect: true},
        () => this.setState({redirect: false})
      ))
    }

  render() {
    const value = {
      recipe: this.state.recipe,
      display: this.state.display,
      publicRecipesJSX: this.state.publicRecipesJSX,
      selectRandom: this.state.selectRandom,

      updateRecipe: this.updateRecipe,
      updateDisplay: this.updateDisplay,
      updateSearchPublicRecipesBy: this.updateSearchPublicRecipesBy,
      getIngredientsList: this.getIngredientsList,
      getInstructionsList: this.getInstructionsList,
      getPublicRecipes: this.getPublicRecipes,
      updatePublicRecipesJSX: this.updatePublicRecipesJSX,
      setSelectRandom: this.setSelectRandom,
    }

    return(
      <PublicRecipeContext.Provider value={value}>
        { this.props.children }
      </PublicRecipeContext.Provider>
    )
  }
}
