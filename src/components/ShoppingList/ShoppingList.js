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
        <div className='shop-list'>
          <section className="shop-list-page">
            <div className='title'>
              <h1>Shopping List</h1>
              <img src={logo} alt='logo'></img>
              </div>
              <div>
                { recipes }
              </div>
          </section>
        </div>
      )
  }
}

export default ShoppingList
