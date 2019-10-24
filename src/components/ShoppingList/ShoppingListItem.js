import React from 'react';
import ShoppingListRoute from '../../contexts/ShoppingListContext'
import { Link } from 'react-router-dom'

import GoodmealApiService from '../../services/goodmeal-api-service'

class RecipeItem extends React.Component {
  static contextType = ShoppingListRoute

  state = {
    crossed: this.props.recipe.crossed
  }

  crossUncross = () => {
    GoodmealApiService.strikeUnstrikeListItem(this.props.recipe.id, {crossed: !this.state.crossed})
      .then(() => this.setState({crossed: !this.state.crossed}))
  }

  render() {
    console.log(this.props.recipe);
    const { id, name, amount, unit } = this.props.recipe
    const { crossed } = this.state
    const text = crossed ? <strike>{`${amount} ${unit} of ${name}`}</strike> : `${amount} ${unit} of ${name}`
    //const ingredientList = ingregients.map(ingredient => <div>{ingredient}</div>)
    //const instructionList = instructions.map(instruction => <div>{instruction}</div>)

      return(
          <section className="recipe">
              <div>{text}</div>
              <button onClick={this.crossUncross}>{crossed ? 'Uncross' : 'Cross off'}</button>
              <button onClick={e => this.context.delete(id)}>Remove</button>
          </section>
      )
  }
}

export default RecipeItem
