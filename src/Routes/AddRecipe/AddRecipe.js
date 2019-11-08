import React from 'react'
import { Redirect } from 'react-router-dom'
import AddRecipeTitleForm from '../../components/AddRecipeTitleForm/AddRecipeTitleForm'
import AddRecipeDescForm from '../../components/AddRecipeDescForm/AddRecipeDescForm'
import AddRecipeIngredientForm from '../../components/AddRecipeIngredientForm/AddRecipeIngredientForm'
import AddRecipeStepForm from '../../components/AddRecipeStepForm/AddRecipeStepForm'
import AddRecipeTimeForm from '../../components/AddRecipeTimeForm/AddRecipeTimeForm'
import AddRecipeCuisineForm from '../../components/AddRecipeCuisineForm/AddRecipeCuisineForm'
import AddRecipeImage from '../../components/AddRecipeImage/AddRecipeImage'
import AddRecipePublic from '../../components/AddRecipePublic/AddRecipePublic'
import Button from '../../components/Button/Button'

import RecipeContext from '../../contexts/RecipeContext'

import './addRecipe.css'

class AddRecipe extends React.Component {

  static contextType = RecipeContext

  componentDidMount() {
    const idRecipe = this.props.match.params.id;
    if (idRecipe) {
      this.context.loadRecipe(idRecipe)
    } else {
      this.context.clearRecipe()
    }
  }

  render() {

    return (
      <div className="add-form">
        <section className="addRecipe">

          <h1>{this.context.editing ? 'Edit' : 'New'} Recipe</h1>

          <AddRecipeTitleForm />
          <AddRecipeDescForm />
          <AddRecipeCuisineForm />
          <AddRecipeTimeForm />
          <AddRecipeImage />
          <AddRecipeIngredientForm />
          <AddRecipeStepForm />
          <AddRecipePublic />

          {this.context.error && <div role='alert'>{this.context.error}</div>}

          <Button
            className="submit_button"
            onClick={this.context.handleCreateRecipe}>
            Save
                </Button>

          &nbsp;&nbsp;&nbsp;&nbsp;

                <Button
            className="submit_button"
            onClick={this.props.history.goBack}>
            Back
                </Button>

          {this.context.loading && <div>Saving..</div>}

          {this.context.saved && <Redirect to={'/recipes'} />}

        </section>
      </div>
    )
  }
}

export default AddRecipe
