import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRecipeSummary extends React.Component {

  static contextType = PublicRecipeContext

  render() {
    return(
      <section className = "tab-panel">
        <p className = "description" itemProp = 'description'><span style={{ fontWeight:'600' }}>Description:</span> { this.context.recipe.description }</p>
        <p className = "timeToMake"><span style={{ fontWeight:'600' }}>Time to make:</span> { this.context.recipe.time_to_make } minutes</p>
        <p className = "cuisine" itemProp = "recipeCuisine"><span style={{ fontWeight:'600' }}>Cuisine:</span> { this.context.recipe.cuisine }</p>
      </section>
    )
  }
}

export default PublicRecipeSummary