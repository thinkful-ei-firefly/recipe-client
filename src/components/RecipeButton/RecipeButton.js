import React from 'react'
import { withRouter } from 'react-router-dom'

import RecipeApiService from '../../services/recipe-api-service'

class RecipeButton extends React.Component {

    cloneRecipe = (id) => {
        RecipeApiService.cloneRecipe(id)
          .then(() => this.props.history.push('/recipes'))
      }

    render() {
        return(
            <div className='recipe-buttons_p'>
                <button
                    data-tooltip='Copy to My Recipes'
                    className='remove-recipe'
                    type='button'
                    onClick={e => this.cloneRecipe(this.props.recipeId)}>
                    <i className="far fa-copy"
                        style={{
                        textAlign: 'end',
                        fontSize: '24px',
                        }}>
                    </i>
                </button>
            </div>
        )
    }
}

export default withRouter (RecipeButton)