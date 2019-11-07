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
    const { name, amount, unit } = this.props.recipe
    const { crossed } = this.state
    const text = crossed ? <strike>{`${amount} ${unit} ${name}`}</strike> : `${amount} ${unit} ${name}`
    //const ingredientList = ingredients.map(ingredient => <div>{ingredient}</div>)
    //const instructionList = instructions.map(instruction => <div>{instruction}</div>)

    return(
      <section>
        <div className='shopping-item'>
          <button
            aria-label='unchecked' 
            className='check-buttons' 
            onClick={ this.crossUncross }>
            {
              crossed 
                ? <i className="fas fa-check-square"></i> 
                : <i className="fas fa-square"></i>
            }
          </button>

          &nbsp;&nbsp;
          
          <div 
            className='food-item'>
            { text }
          </div>
                   
        </div>
        <hr />
      </section>
    )
  }
}

export default RecipeItem
