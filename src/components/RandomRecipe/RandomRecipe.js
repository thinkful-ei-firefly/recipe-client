import React from 'react'

import RecipeContext from '../../contexts/RecipeContext'

class RandomRecipe extends React.Component {

    static contextType = RecipeContext

    handleRandomRecipe = async () => {
      this.context.setSelectRandom(true)
    }

    render() {
        return(
            <div className='IngredientsMatcher'>
              <button className='find-recipes' onClick={this.handleRandomRecipe}>Get random recipe</button>
            </div>
        )
    }
}

export default RandomRecipe
