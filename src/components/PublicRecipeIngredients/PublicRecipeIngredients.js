import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRecipeIngredients extends React.Component {

    static contextType = PublicRecipeContext

    render() {
        
        return(
            <section className = "tab-panel">
                <ul className='ing-list'>
                    { this.context.getIngredientsList() }
                </ul>
            </section>
        )
    }
}

export default PublicRecipeIngredients