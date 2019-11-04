import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import { Link } from 'react-router-dom'

import '../Recipes/Recipes.css'

class RecipeItem extends React.Component {
  static contextType = RecipeContext

  render() {

    const { id, name, description, imageurl, matchPercent } = this.props.recipe

<<<<<<< HEAD
        return(
            <div className ='cards'>
            <section className="recipe-card">
                
                <Link to = { '/recipe/'+id }>
                  <div className = "image">
                    <img
                        src = { "https://good-meal.s3.amazonaws.com/" + (imageurl?imageurl:"nofound.png") }
                        alt = { name }
                    />
                  </div>
                </Link>
                <div className = 'name'></div>
                <Link
                    to = { '/recipe/'+id }
                    className = "name">
                    { name }
                </Link>
                <p>{matchPercent ? `You own ${matchPercent}% of these ingredients` : ''}</p>
                <p className='description'>{ description } </p>
                <div className='recipe-buttons'>
                <Link
                    to={ '/editrecipe/'+id }
                    className="edit-recipe">
                    <i className="fas fa-edit"></i>
                </Link>
                <button className='remove-recipe'
                    onClick = {e => this.context.delete(id)}>
                    <i className="far fa-trash-alt"></i>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
               
                </div>
                       
            </section>
=======
    return(
      <div className ='cards'>
        <section className="recipe-card">
          <Link to = { '/recipe/'+id }>
            <div className = "image">
              <img
                src = { "https://good-meal.s3.amazonaws.com/" + (imageurl?imageurl:"nofound.png") }
                alt = { name }>
              </img>
>>>>>>> 0a59ae5463299db4111e8a350deb51e535034fed
            </div>
          </Link>
          <div className = 'name'></div>
            <Link
              to = { '/recipe/'+id }
              className = "name">
              { name }
            </Link>
            <p>
              { matchPercent 
                  ? `You own ${matchPercent}% of these ingredients` 
                  : '' 
              }
            </p>
            <p className='description'>{ description } </p>
            <div className='recipe-buttons'>
              <Link
                to={ '/editrecipe/'+id }
                className="edit-recipe">
                <i className="fas fa-edit"></i>
              </Link>
            <button className='remove-recipe'
              onClick = {e => this.context.delete(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>         
        </section>
      </div>
    )
  }
}

export default RecipeItem
