import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRecipeSummary extends React.Component {

    static contextType = PublicRecipeContext

    render() {
            return(
                <section className = "tab-panel">
                    <p className = "cuisine" itemProp = "recipeCuisine">Cuisine: { this.context.recipe.cuisine }</p>
                    <p className = "description" itemProp = 'description'>Description: { this.context.recipe.description }</p>
                    <p className = "timeToMake">Time to make: { this.context.recipe.time_to_make } minutes</p>
                </section>
            )
    }
}

export default PublicRecipeSummary