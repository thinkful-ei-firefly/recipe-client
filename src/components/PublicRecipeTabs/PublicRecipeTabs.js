import React from 'react'

import PublicRecipeContext from '../../contexts/PublicRecipeContext'

class PublicRecipeTabs extends React.Component {

  static contextType = PublicRecipeContext

  handleTabClick(event) {
    this.context.updateDisplay(event.target.name)
  }

  render() {
    return(
      <div className='tabset'>
        <input type='radio' id='tab1' defaultChecked  name="summary" onClick={event=>this.handleTabClick(event)}></input>
        <label htmlFor='tab1'>Summary</label>
        <input type='radio' id='tab2'  name="ingredients" onClick={event=>this.handleTabClick(event)}></input>
        <label htmlFor='tab2'>Ingredients</label>
        <input type='radio' id='tab3'  name="instructions" onClick={event=>this.handleTabClick(event)}></input>
        <label htmlFor='tab3'>Instructions</label>
      </div>
    )
  }
}

export default PublicRecipeTabs