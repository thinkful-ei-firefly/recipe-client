import React from 'react';
import ShoppingListContext from '../../contexts/ShoppingListContext'
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem'

import logo from '../../images/logo.png'

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
        <div className="shop-list">

          <div className="title">
            <h1>Shopping List</h1>
            <img src={ logo } alt="logo"></img>
          </div>

          <div className="shopping-list-items">
            { recipes }
          </div>

        </div>
      )
  }
}

export default ShoppingList
