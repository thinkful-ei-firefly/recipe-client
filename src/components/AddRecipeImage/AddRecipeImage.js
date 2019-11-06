import React from 'react'

import RecipeContext from '../../contexts/RecipeContext'
import '../../Routes/AddRecipe/addRecipe.css'

class AddRecipeImage extends React.Component {

  static contextType = RecipeContext

  render() {
    return(
      <form
        className = "addIngredient-form">
        <div className = "description">
          <div 
            className='section'>
            <span>5</span>
            <h3>Image</h3>
          </div>
          <div className='inner-wrap'>
            <label htmlFor='image'>Image
              <input 
                id='image' 
                type="file" 
                accept=".png,.jpg,.jpeg" 
                onChange={ 
                  (e) => this.context.handleAddImage(e.target.files) 
                }/>
            </label>
          </div>
        </div>
      </form>
    )
  }
}

export default AddRecipeImage
