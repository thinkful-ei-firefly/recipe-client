import React from 'react'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeImage extends React.Component {

    static contextType = RecipeContext

    render() {
        return(
          <form
              className = "recipe-form">
              <div className = "description">
              <div className='section'><span>8</span>Image</div>
              <div className='inner-wrap'>
              <label htmlFor='image'>Image
                <input id='image' type="file" accept=".png,.jpg,.jpeg" onChange={ (e) => this.context.handleAddImage(e.target.files) }/>
              </label>
              </div>
              </div>
          </form>
        )
    }
}

export default AddRecipeImage
