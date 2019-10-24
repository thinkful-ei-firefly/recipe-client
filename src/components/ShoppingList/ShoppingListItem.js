import React from 'react';
import ShoppingListRoute from '../../contexts/ShoppingListContext'
import { Link } from 'react-router-dom'

class RecipeItem extends React.Component {
  static contextType = ShoppingListRoute

  render() {
    console.log(this.props.recipe);
    const { id, name, amount, unit } = this.props.recipe
    //const ingredientList = ingregients.map(ingredient => <div>{ingredient}</div>)
    //const instructionList = instructions.map(instruction => <div>{instruction}</div>)

      return(
          <section className="recipe">
              <div>{amount} {unit} of {name}</div>
              <button onClick={e => this.context.delete(id)}>Remove</button>
              <Link
                  to="/editrecipe"
                  className="menu">
                  Edit
              </Link>
          </section>
      )
  }
}

export default RecipeItem
