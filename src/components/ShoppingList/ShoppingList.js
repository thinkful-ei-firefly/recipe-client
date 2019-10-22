import React from 'react';
import ShoppingListContext from '../../contexts/ShoppingListContext'
import ShoppingListItem from './ShoppingListItem'
import { Link } from 'react-router-dom'

class ShoppingList extends React.Component {
  static contextType = ShoppingListContext

  componentDidMount(){
    this.context.clearError()
    this.context.getShoppingList()
  }

  render() {
    const recipes = this.context.recipeList.map(item => {
      return <ShoppingListItem key={item.id} recipe={item}/>
    })

      return(
          <section className="re">
              Your shopping list<br/>
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

export default ShoppingList
