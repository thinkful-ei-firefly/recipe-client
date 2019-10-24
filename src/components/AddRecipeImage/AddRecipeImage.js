import React from 'react'

import RecipeContext from '../../contexts/RecipeContext'

class AddRecipeImage extends React.Component {

    static contextType = RecipeContext

    render() {
        return(
          <label htmlFor='image'>Image
            <input id='image' type="file" required accept=".png,.jpg,.jpeg" onChange={ (e) => this.context.handleAddImage(e.target.files) }/>
          </label>
        )
    }
}

export default AddRecipeImage
