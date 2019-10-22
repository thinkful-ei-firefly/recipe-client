import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'

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
      <div>
        <h2>{recipe ? recipe.name : 'loading...'}</h2>
        {error}
        <div>
          <button disabled={display==='summary'} name="summary" onClick={event=>this.handleTabClick(event)}>Summary</button>
          <button disabled={display==='ingredients'} name="ingredients" onClick={event=>this.handleTabClick(event)}>Ingredients</button>
          <button disabled={display==='instructions'} name="instructions" onClick={event=>this.handleTabClick(event)}>Instructions</button>
        </div>
        <section>
            {display === 'summary' ? description : <ul>{list}</ul>}
        </section>
        <button onClick={this.handleDelete}>Delete this recipe</button>
      </div>
    )
  }
}

export default RecipeRoute
