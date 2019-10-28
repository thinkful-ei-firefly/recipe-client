import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <section className='PublicRecipes'>
        <div>
          View and search recipes added by other users. If you find one you like, add it to your recipe list and make
          any modifications or substitutions you want.
        </div>
        <Link to='/publicrecipes'>
          <button>All Recipes</button>
        </Link>
      </section>
      <section className='MyRecipes'>
        <div>
          Curate your personal list or recipes. Write new ones, modify old ones, and search your recipes by title,
          ingredients, description, cuisine, or time to make.
        </div>
        <Link to='/recipes'>
          <button>My Recipes</button>
        </Link>
      </section>
      <section className='ShoppingList'>
        <div>
          Once you know what you want to cook, keep track of the ingredients you'll need with a shopping list you can
          take with you on your next excursion.
        </div>
        <Link to='/shoppinglist'>
          <button>My Shopping</button>
        </Link>
      </section>
      <section className='MyIngredients'>
        <div>
          Instead of trying to remember every ingredient sitting in your pantry, keep track of them here to make it that
          much easier to figure out what meals you can mkae from what you already own.
        </div>
        <Link to='/ingredients'>
          <button>My Pantry</button>
        </Link>
      </section>
    </div>
  )
}

export default Dashboard
