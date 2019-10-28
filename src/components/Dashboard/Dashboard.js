import React from 'react'
import { Link } from 'react-router-dom'

import recipe from '../../images/RecipeIcon.png'
import recipe2 from '../../images/RecipeIcon2.png'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div className='cards-list'>
      <section className='card 1'>
        <div className='card_image'>
          <Link to='/publicrecipes'>
            <img src= {recipe2} alt='icon'></img> 
          </Link>
        </div>
        <Link to='/publicrecipes'>
          <p>
          View and search recipes added by other users. If you find one you like, add it to your recipe list and make
          any modifications or substitutions you want.
          </p>
          </Link>
          <div className='card_image'>
        </div>
          <div className='card_title title_white'>
          <h3><Link className='link' to='/publicrecipes'>All Recipes</Link></h3>
          </div>
      </section>

      <section className='card 2'>
      <div className='card_image'>
      <Link to='/recipes'>
      <img src= {recipe2} alt='icon'></img> 
        </Link>
        </div>
        <Link to='/recipes'>
        <p>
          Curate your personal list or recipes. Write new ones, modify old ones, and search your recipes by title,
          ingredients, description, cuisine, or time to make.
        </p>
        </Link>
        <div className='card_image'>
        </div>
        <div className='card_title title_white'>
        <h3><Link className='link' to='/recipes'>My Recipes</Link></h3>
        </div>
      </section>

      <section className='card 3'>
      <div className='card_image'>
      <Link to='/shoppinglist'>
      <img src= {recipe2} alt='icon'></img> 
        </Link>
        </div>
        <Link to='/shoppinglist'>
        <p>
          Once you know what you want to cook, keep track of the ingredients you'll need with a shopping list you can
          take with you on your next excursion.
        </p></Link>
      <div className='card_image'>
        </div>
        <div className='card_title title_white'>
        <h3><Link className='link' to='/shoppinglist'>My Shopping</Link></h3>
        </div>
      </section>

      <section className='card 4'>
      <div className='card_image'>
      <Link to='/ingredients'>
      <img src= {recipe2} alt='icon'></img> 
        </Link>
        </div>
        <Link to='/ingredients'>
        <p>
          Instead of trying to remember every ingredient sitting in your pantry, keep track of them here to make it that
          much easier to figure out what meals you can make from what you already own.
        </p>
        </Link>
      <div className='card_image'>
        </div>
        <div className='card_title title_white'>
        <h3><Link className='link' to='/ingredients'>My Pantry</Link></h3>
        </div> 
        
      </section>
    </div>
  )
}

export default Dashboard
