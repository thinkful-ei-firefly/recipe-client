import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRecipeTabs extends React.Component {

  static contextType = PublicRecipeContext

  handleTabClick(event) {
    this.context.updateDisplay(event.target.value)
  }

  render() {
    return(
      <div className='tabset'>
        <input type='radio' id='tab1' defaultChecked value="summary" name="recipe" onClick={event=>this.handleTabClick(event)}></input>
        <label htmlFor='tab1'>Summary</label>
        <input type='radio' id='tab2' value="ingredients" name="recipe" onClick={event=>this.handleTabClick(event)}></input>
        <label htmlFor='tab2'>Ingredients</label>
        <input type='radio' id='tab3' value="instructions" name="recipe" onClick={event=>this.handleTabClick(event)}></input>
        <label htmlFor='tab3'>Instructions</label>
      </div>
    )
  }
}

export default PublicRecipeTabs