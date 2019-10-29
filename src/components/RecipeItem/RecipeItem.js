import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import { Link } from 'react-router-dom'

import '../Recipes/Recipes.css'

class RecipeItem extends React.Component {
    static contextType = RecipeContext

    render() {

        const { id, name, description, imageurl } = this.props.recipe

        return(
            <div className ='cards'>
            <section className="recipe-card">
                <div className='rc'>
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
                <p className='description'>{ description } </p>
                <div className='recipe-buttons'>
                <button className='remove-recipe'
                    onClick = {e => this.context.delete(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                    to={ '/editrecipe/'+id }
                    className="edit-recipe">
                    <i className="fas fa-edit"></i>
                </Link>
                </div>
                </div>                
            </section>
            </div>
        )
    }
}

export default RecipeItem
