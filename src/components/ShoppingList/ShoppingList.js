import React from 'react';
import ShoppingListContext from '../../contexts/ShoppingListContext'
import ShoppingListItem from './ShoppingListItem'

import logo from '../../images/logo.png'
import './ShoppingList.css'

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
          <section className="shop-list">
            <div className='title'>
              <h1>Shopping List</h1><br/>
              <img src={logo} alt='logo'></img>
              </div>
              <div>
                { recipes }
              </div>
          </section>
      )
  }
}

export default ShoppingList
