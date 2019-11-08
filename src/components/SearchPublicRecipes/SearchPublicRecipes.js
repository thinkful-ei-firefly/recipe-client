import React from 'react'
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'

import './SearchPublicRecipes.css'
class SearchPublicRecipes extends React.Component {


  state = {
    error: null
  }

  render() {

    const error = this.state.error

    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="search-public-recipes">

        <p role='alert'>{error}</p>

        <Label
          htmlFor="public-recipe-search">
          <Input
            placeholder='Search Recipes...'
            id="public-recipe-search"
            name="publicSearch"
            type="text">
          </Input>
        </Label>

        <Button
          type="Submit">
          <i className="fa fa-search"></i>
        </Button>

      </form>
    )
  }
}

export default SearchPublicRecipes