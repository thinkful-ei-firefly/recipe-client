import React from 'react'
import { Input } from '../Form/Form'
import Button from '../Button/Button'

import './SearchPublicRecipes.css'
class SearchPublicRecipes extends React.Component {


  state = {
    error: null
  }

  render() {
    
    const error = this.state.error
    
    return(
      <form 
        onSubmit = { this.props.handleSubmit }
        className = "search-public-recipes">
        { error }

        <Input
          placeholder='Search Recipes...'
          id = "public-recipe-search"
          name = "publicSearch"
          type = "text">    
        </Input>
        
        <Button
          type = "Submit">
          <i className="fa fa-search"></i>
        </Button>

      </form>
    )
  }
}

export default SearchPublicRecipes