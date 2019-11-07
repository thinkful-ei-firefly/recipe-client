import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'

const Dashboard = () => {
  return (
    <section className='dashboard'>

      <div className="group">
        <Link to="/recipe/2">
          <div className="card">
          <p>
            View and search public recipes. 
            If you find one you like, add it 
            to your recipe list and make any 
            modifications you want.
          </p>
          <h3>All Recipes</h3>
          </div>
        </Link>

        <Link to="/recipes">
          <div className="card">
            <p>
              Curate your personal list or recipes. 
              Write new ones, modify old ones, and 
              search your recipes by title, ingredients, 
              description, cuisine, or time to make.
            </p>
            <h3>My Recipes</h3>
          </div>
        </Link>
      </div>

      <div className="group">
        <Link to="/shoppinglist">
          <div className="card">
          <p>
            Once you know what you want to cook, 
            keep track of the ingredients you'll 
            need with a shopping list you can
            take with you on your next excursion.
          </p>
          <h3>My List</h3>
          </div>
        </Link>

        <Link to="/ingredients">
          <div className="card">
            <p>
              Keep track of all your pantry items 
              here to make it that much easier to 
              figure out what meals you can make 
              from what you already own.
            </p>
            <h3>My Pantry</h3>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Dashboard
