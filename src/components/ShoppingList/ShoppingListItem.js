import React from 'react';
import ShoppingListContext from '../../contexts/ShoppingListContext'

import GoodmealApiService from '../../services/goodmeal-api-service'

class RecipeItem extends React.Component {
  static contextType = ShoppingListContext

  state = {
    crossed: this.props.recipe.crossed
  }

  crossUncross = () => {
    GoodmealApiService.strikeUnstrikeListItem(this.props.recipe.id, {crossed: !this.state.crossed})
      .then(() => {
        let list = this.context.recipeList
        const index = list.indexOf(this.props.recipe)
        list[index].crossed = !list[index].crossed
        this.context.setRecipeList(list)
      })
      .then(() => this.setState({crossed: !this.state.crossed}))
  }

  render() {
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
