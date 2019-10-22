import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import { Link } from 'react-router-dom'

class RecipeItem extends React.Component {
  static contextType = RecipeContext

  render() {
    console.log(this.props.recipe);
    const { id, name, time_to_make, ingregients, instructions } = this.props.recipe
    //const ingredientList = ingregients.map(ingredient => <div>{ingredient}</div>)
    //const instructionList = instructions.map(instruction => <div>{instruction}</div>)

      return(
          <section className="recipe">
              <div>{name}</div>
              <div>{time_to_make}</div>
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
