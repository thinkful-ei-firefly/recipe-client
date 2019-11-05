import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRandomRecipe extends React.Component {

    static contextType = PublicRecipeContext

    handleRandomRecipe = async () => {
      this.context.updatePublicRecipesJSX(!this.context.selectRandom)
    }

    render() {
        return(
            <div style={ {display:'flex', justifyContent:'center', alignItems:'center'} }className='IngredientsMatcher'>
              <button className='find-recipes' onClick={this.handleRandomRecipe}>{this.context.selectRandom?'Show all recipes':'Get Random Recipe'}</button>
            </div>
        )
    }
}

export default PublicRandomRecipe
