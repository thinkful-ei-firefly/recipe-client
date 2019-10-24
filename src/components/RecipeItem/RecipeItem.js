import React from 'react';
import RecipeContext from '../../contexts/RecipeContext'
import { Link } from 'react-router-dom'

class RecipeItem extends React.Component {
    static contextType = RecipeContext

    render() {

        const { id, name, time_to_make, cuisine, imageurl } = this.props.recipe

        return(
            <section className="recipe">
                <Link
                    to = { '/recipe/'+id }
                    className = "name">
                    { name }
                </Link>
                <div className = "image">
                    <img 
                        src = { "https://good-meal.s3.amazonaws.com/" + (imageurl?imageurl:"nofound.png") } 
                        alt = { name }
                    />
                </div>
                <div className = "cuisine">
                    Cuisine: { cuisine }
                </div>
                <div className = "time">
                    Time to make: { time_to_make }
                </div>
                <button 
                    onClick = {e => this.context.delete(id)}>
                    Remove
                </button>
                <Link
                    to="/editrecipe"
                    className="edit-recipe">
                    Edit
                </Link>
            </section>
        )
    }
}

export default RecipeItem
