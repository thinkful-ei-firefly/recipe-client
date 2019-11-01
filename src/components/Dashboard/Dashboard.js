import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'
import recipe2 from '../../images/RecipeIcon2.png'

const Dashboard = () => {
  return (
    <div>
    <div className='cards-list'>
      <section className='card 1'>
        <div className='card_image'>
          <Link to='/publicrecipes'>
            <img src= {recipe2} alt='icon'></img> 
          </Link>
        </div>
        <Link className='explanation' to='/publicrecipes'>
          <p>
          View and search public recipes. If you find one you like, add it to your recipe list and make
          any modifications you want.
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
        <Link className='explanation' to='/recipes'>
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
      </div>
      <br/><br/>
      <div className='cards-list'>
      <section className='card 3'>
      <div className='card_image'>
      <Link to='/shoppinglist'>
      <img src= {recipe2} alt='icon'></img> 
        </Link>
        </div>
        <Link className='explanation' to='/shoppinglist'>
        <p>
          Once you know what you want to cook, keep track of the ingredients you'll need with a shopping list you can
          take with you on your next excursion.
        </p></Link>
      <div className='card_image'>
        </div>
        <div className='card_title title_white'>
        <h3><Link className='link' to='/shoppinglist'>My List</Link></h3>
        </div>
      </section>

      <section className='card 4'>
      <div className='card_image'>
      <Link to='/ingredients'>
      <img src= {recipe2} alt='icon'></img> 
        </Link>
        </div>
        <Link className='explanation' to='/ingredients'>
        <p>
          Keep track of all your pantry items here to make it that
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
    </div>
  )
}

export default Dashboard
