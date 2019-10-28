import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'
import './RecipeSingleRoute.css'

class RecipeRoute extends React.Component {

  state = {
    recipe: null,
    error: null,
    display: 'summary' //summary, ingredients, or instructions
  }

  componentDidMount() {
    GoodmealApiService.getRecipe(this.props.match.params.id)
      .then(recipe => this.setState({ recipe }))
      .catch(res => this.setState({ error: res.error }))
  }

  handleTabClick(event) {
    this.setState({ display: event.target.name })
  }

  handleDelete = () => {
    GoodmealApiService.deleteRecipe(this.props.match.params.id)
      .then(this.props.history.push('/'))
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const { recipe, error, display } = this.state
    let description
    let list = []
    if (recipe) {
      description = recipe.description
      if (display==='ingredients') {
        recipe.ingredients.forEach((item, i) => list.push(<li key={i}>{item}</li>))
      } else if (display==='instructions') {
        recipe.instructions.forEach((item, i) => list.push(<li key={i}>{item}</li>))
      }
    }
    return (
      <div className='recipe-tabs'>
        <button onClick={this.props.history.goBack}>Back to recipes</button>
        <h1>{recipe ? recipe.name : 'loading...'}</h1>
        {error}
        <div className='tabset'>
          <input type='radio' id='tab1' defaultChecked  name="summary" onClick={event=>this.handleTabClick(event)}></input>
          <label htmlFor='tab1'>Summary</label>
          <input type='radio' id='tab2'  name="ingredients" onClick={event=>this.handleTabClick(event)}></input>
          <label htmlFor='tab2'>Ingredients</label>
          <input type='radio' id='tab3'  name="instructions" onClick={event=>this.handleTabClick(event)}></input>
          <label htmlFor='tab3'>Instructions</label>
        </div>
        <div className='tab-panels'>
          <section className='tab-panel'>
            {display === 'summary' ? description : <ul>{list}</ul>}
            </section>
        </div>
      </div>
    )
  }
}

export default RecipeRoute
