import React from 'react'
import Recipes from '../../components/Recipes/Recipes'

import RecipeContext from '../../contexts/RecipeContext'

class RecipesRoute extends React.Component {

    static contextType = RecipeContext

    render() { 
        return(
            <Recipes />
        )
    }
}

export default RecipesRoute
