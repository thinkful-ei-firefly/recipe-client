import React from 'react';
import ShoppingListContext from '../../contexts/ShoppingListContext'
import ShoppingListItem from './ShoppingListItem'

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
              <div>
                { recipes }
              </div>
          </section>
      )
  }
}

export default ShoppingList
