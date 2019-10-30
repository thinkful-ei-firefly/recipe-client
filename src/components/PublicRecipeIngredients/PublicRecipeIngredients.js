import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRecipeIngredients extends React.Component {

    static contextType = PublicRecipeContext

    render() {
        
        return(
            <section className = "tab-panel">
                <ul>
                    { this.context.getIngredientsList() }
                </ul>
            </section>
        )
    }
}

export default PublicRecipeIngredients