import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRecipeInstructions extends React.Component {

    static contextType = PublicRecipeContext

    render() {
        return(
            <section className = "tab-panel">
                <ul className='inst-list' itemProp = "recipeInstructions">
                    { this.context.getInstructionsList() }
                </ul>
            </section>
        )
    }
}

export default PublicRecipeInstructions