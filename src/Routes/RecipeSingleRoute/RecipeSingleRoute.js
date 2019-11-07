import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'
import ListGenerator from '../../components/ListGenerator/ListGenerator'

import './RecipeSingleRoute.css'
import { Link } from 'react-router-dom'

class RecipeSingleRoute extends React.Component {

  state = {
    recipe: null,
    error: null,
    display: 'summary' //summary, ingredients, or instructions
  }

  componentDidMount() {
    GoodmealApiService.getRecipe(this.props.match.params.id)
      .then(recipe => {
        const convertedInstructions = []
        recipe.instructions.forEach(step => {
          convertedInstructions.push(this.deconvertCharacters(step))
        })
        recipe.instructions = convertedInstructions
        this.setState({ recipe })
      })
      .catch(res => this.setState({ error: res.error }))
  }

  deconvertCharacters = str => {
    let newStr = str.split('')
    for (let i=0; i<newStr.length; i++) {
      if (newStr[i] === '^') newStr[i] = ','
      else if (newStr[i] === '|') newStr[i] = '"'
    }
    return newStr.join('')
  }

  handleTabClick(event) {
    this.setState({ display: event.target.value })
  }

  handleDelete = () => {
    GoodmealApiService.deleteRecipe(this.props.match.params.id)
      .then(this.props.history.push('/'))
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const { name, recipe, error, display } = this.state
    let description
    let list = []
    if (recipe) {
      description = recipe.description
      if (display==='ingredients') {
        recipe.ingredients.forEach((item, i) => list.push(<li className='ing-list bulleted' key={i}>{item}</li>))
      } else if (display==='instructions') {
        recipe.instructions.forEach((item, i) => list.push(<li className='inst-list numbered' key={i}>{item}</li>))
      }
    }
    return (
      <div className='single-recipe'>
      <div className='recipe-tabs'>
      <Link
          to = '/recipes'
          className = "back">
         <i className="fas fa-backspace">&nbsp;<span>Back To Recipes</span></i> 
      </Link>
        <h1>{recipe ? recipe.name : 'loading...'}</h1>
        <p role='alert'>{error}</p>
        
        <div className = "image">
                    <img
                        src = { "https://good-meal.s3.amazonaws.com/" + (recipe && recipe.imageurl?recipe.imageurl:'nofound.png') }
                        alt = { name }
                    />
                  </div>
        <div className='tabset'>
          <input type='radio' id='tab1' defaultChecked  value="summary" name="recipe" onClick={event=>this.handleTabClick(event)}></input>
          <label htmlFor='tab1'>Summary</label>
          <input type='radio' id='tab2'  value="ingredients" name="recipe" onClick={event=>this.handleTabClick(event)}></input>
          <label htmlFor='tab2'>Ingredients</label>
          <input type='radio' id='tab3'  value="instructions" name="recipe" onClick={event=>this.handleTabClick(event)}></input>
          <label htmlFor='tab3'>Instructions</label>
        </div>
        <div className='tab-panels'>
          <section aria-live="polite" className='tab-panel'>
            {display === 'summary' ? description : <ul className='displayed-list'>{list}</ul>}
            </section>
        </div>
      </div>
      <ListGenerator recipe={this.state.recipe}/>
      </div>
    )
  }
}

export default RecipeSingleRoute
