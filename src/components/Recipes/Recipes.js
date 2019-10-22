import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import RecipeItem from './RecipeItem'
import { Link } from 'react-router-dom'

class Recipes extends React.Component {
  static contextType = RecipeContext

  componentDidMount(){
    this.context.clearError()
    this.context.getAllRecipes()
  }

  render() {
    const recipes = this.context.recipeList.map(recipe => {
      return <RecipeItem key={recipe.id} recipe={recipe}/>
    })

      return(
          <section className="re">
              Your recipes<br/>
              <Link
                  to="/newrecipe"
                  className="menu">
                  Add
              </Link>
              <div>
                { recipes }
              </div>
          </section>
      )
  }
}

export default Recipes
