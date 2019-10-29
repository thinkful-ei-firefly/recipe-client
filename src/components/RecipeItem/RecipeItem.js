import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import { Link } from 'react-router-dom'

import '../Recipes/Recipes.css'

class RecipeItem extends React.Component {
    static contextType = RecipeContext

    render() {

        const { id, name, time_to_make, cuisine, imageurl } = this.props.recipe

        return(
            <section className="recipe-card">
                  <div className = "image">
                    <img
                        src = { "https://good-meal.s3.amazonaws.com/" + (imageurl?imageurl:"nofound.png") }
                        alt = { name }
                    />
                </div>
                <Link
                    to = { '/recipe/'+id }
                    className = "name">
                    { name }
                </Link>

                <div className='recipe-buttons'>
                <button className='remove-recipe'
                    onClick = {e => this.context.delete(id)}>
                    <i class="fas fa-trash-alt"></i>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                    to={ '/editrecipe/'+id }
                    className="edit-recipe">
                    <i class="fas fa-edit"></i>
                </Link>
                </div>
            </section>
        )
    }
}

export default RecipeItem
