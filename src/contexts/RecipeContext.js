import React from 'react'

import RecipeApiService from '../services/recipe-api-service'
import UploadApiService from '../services/upload-api-service'


const RecipeContext = React.createContext({
  recipeTitle: '',
  recipeDesc: '',
  recipeIngredients: [],
  recipeSteps: [],
  recipeTime: '',
  recipeCuisine: '',
  recipeList: [],
  searchRecipes: [],
  searchBy: '',
  filteredRecipes: [],
  filterBy: null,
  error: null,
  saved: false,
  redirect: false,

  setError: () => { },
  clearError: () => { },
  setRecipeList: () => { },
  removeRecipe: () => { },
  getAllRecipes: () => { },
  delete: () => { },
  setFilter: () => { },
  handleAddTitle: () => { },
  handleRemoveTitle: () => { },
  handleAddDesc: () => { },
  handleRemoveDesc: () => { },
  handleAddRecipeIngredient: () => { },
  handleRemoveIngredient: () => { },
  handleAddRecipeStep: () => { },
  handleRemoveStep: () => { },
  setRecipeTime: () => { },
  handleAddCuisine: () => { },
  handleRemoveCuisine: () => { },
  handleCreateRecipe: () => { },
  searchRecipesBy: () => { },
  filterRecipesByTime: () => { },
  setUser: () => { },
  searchMyRecipes: () => { },
})

export default RecipeContext

export class RecipeProvider extends React.Component {
  constructor(props) {
    super(props)

    const state = {
      recipeId: null,
      recipeTitle: '',
      recipeDesc: '',
      recipeIngredients: [],
      recipeSteps: [],
      recipeCuisine: '',
      recipeTime: null,
      recipeList: [],
      searchRecipes: [],
      searchBy: null,
      filteredRecipes: [],
      filterBy: null,
      recipeImage: null,
      recipePublic: false,
      error: null,
      loading: false,
      saved: false,
      editing: false,
      redirect: false,
    }

    this.state = state
  }

  loadRecipe = (id) => {
    RecipeApiService.getById(id)
      .then(recipe => {
        this.setState({
          recipeId: recipe.id,
          recipeTitle: recipe.name,
          recipeDesc: recipe.description,
          recipeIngredients: recipe.ingredients,
          recipeSteps: recipe.instructions,
          recipeCuisine: recipe.category,
          recipeTime: recipe.time_to_make,
          recipePublic: recipe.public,
          recipeImage: null,
          editing: true
        })
      })
      .catch(res => this.setState({ error: res.error }))
  }

  clearRecipe = () => {
    this.setState({
      recipeId: null,
      recipeTitle: '',
      recipeDesc: '',
      recipeIngredients: [],
      recipeSteps: [],
      recipeCuisine: '',
      recipeTime: null,
      recipeImage: null,
      recipePublic: false,
      editing: false
    })
  }

  setError = (error) => {
    this.setState({
      error
    })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  setRecipeList = (recipeList) => {
    this.setState({
      recipeList,
      saved: false,
      selectRandom: false
    })
  }

  removeRecipe = (idProduct) => {
    this.setState({
      recipeList: this.state.recipeList.filter((item, index) => item.id !== idProduct)
    });
  }

  getAllRecipes = () => {
    RecipeApiService.getAll()
      .then(this.setRecipeList)
  }

  delete = (idRecipe) => {
    RecipeApiService.delete(idRecipe)
      .then(() => this.removeRecipe(idRecipe))
      .catch(this.setError)
  }

  setSelectRandom = () => {
    this.setState({
      selectRandom: !this.state.selectRandom
    })
  }

  setFilter = (filterBy) => {
    this.setState({ filterBy, selectRandom: false })
  }

  handleAddTitle = recipeTitle => {
    this.setState({ recipeTitle })
  }

  handleRemoveTitle = () => {
    this.setState({ recipeTitle: '' })
  }

  handleAddDesc = recipeDesc => {
    this.setState({ recipeDesc })
  }

  handleRemoveDesc = () => {
    this.setState({ recipeDesc: '' })
  }

  handleAddRecipeIngredient = (amount, measurement, ingredient) => {

    const addIngredient = amount + ' ' + measurement + ' ' + ingredient
    const recipeIngredients = this.state.recipeIngredients
    recipeIngredients.push(addIngredient)
    this.setState({
      recipeIngredients
    })
  }

  handleRemoveIngredient = (ingToRemove) => {
    const recipeIngredients = this.state.recipeIngredients
      .filter(ing => ing !== ingToRemove)
    this.setState({ recipeIngredients })
  }


  // convertString = (string) => {
  //   let newString = string.toString().split(',').join('&#44;')
  //   return newString
  // }

  handleAddRecipeStep = step => {
    const { recipeSteps } = this.state
    this.setState({
      recipeSteps: [...recipeSteps, step]
    })
  }

  handleRemoveStep = stepToRemove => {
    const recipeSteps = this.state.recipeSteps
      .filter(step => step !== stepToRemove)
    this.setState({ recipeSteps })
  }

  handleAddTime = recipeTime => {
    this.setState({ recipeTime })
  }

  handleRemoveTime = () => {
    this.setState({ recipeTime: null })
  }

  handleAddCuisine = recipeCuisine => {
    this.setState({ recipeCuisine })
  }

  handleRemoveCuisine = () => {
    this.setState({ recipeCuisine: '' })
  }

  handleAddImage = (e) => {
    this.setState({
      recipeImage: e[0]
    })
  }

  handleAddPublic = (e) => {
    this.setState({
      recipePublic: e.target.checked
    })
  }

  handleRemovePublic = (e) => {
    this.setState({
      recipePublic: false
    })
  }

  // takes recipe data from state and sends api query to server
  handleCreateRecipe = async () => {

    const fileName = this.state.recipeImage ? `${Date.parse(new Date())}.${this.state.recipeImage.name.split('.').pop()}` : null;

    const requiredKeys = ['recipeTitle', 'recipeDesc', 'recipeIngredients', 'recipeSteps', 'recipeTime', 'recipeCuisine']
    const requiredLabels = ['Title', 'Description', 'Ingredient', 'Instruction', 'Cooking Time', 'Cuisine']

    for (let i = 0; i < requiredKeys.length; i++) {
      if (!this.state[requiredKeys[i]] || this.state[requiredKeys[i]] === '' || this.state[requiredKeys[i]].length === 0) {
        return this.setState({
          error: `${requiredLabels[i]} is required`
        })
      }
    }

    let convertedSteps = []
    this.state.recipeSteps.forEach(step => { convertedSteps.push(this.convertCharacters(step)) })

    const recipe = {
      name: this.state.recipeTitle,
      description: this.state.recipeDesc,
      ingredients: "{" + this.state.recipeIngredients.join(',') + "}",
      instructions: "{" + convertedSteps.join(',') + "}",
      time_to_make: this.state.recipeTime,
      category: this.state.recipeCuisine,
      public: this.state.recipePublic,
      imageurl: fileName
    }
    this.setState({
      loading: true
    })

    try {
      if (this.state.editing) {
        if (!recipe.imageurl) delete recipe.imageurl
        await RecipeApiService.saveExisting(this.state.recipeId, recipe)
      } else {
        await RecipeApiService.postRecipe(recipe)
      }
      if (fileName && fileName !== '') {
        await UploadApiService.uploadImage(this.state.recipeImage, fileName)
      }
      this.setState({
        loading: false,
        error: null,
        saved: true,
        editing: false
      })
    }
    catch (error) {
      this.setState({
        loading: false,
        error: error.message || error.error
      })
    }
  }

  convertCharacters = str => {
    let newStr = str.split('')
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === ',') newStr[i] = '^'
      else if (newStr[i] === '"') newStr[i] = '|'
    }
    return newStr.join('')
  }

  deconvertCharacters = str => {
    let newStr = str.split('')
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === '^') newStr[i] = ','
      else if (newStr[i] === '|') newStr[i] = '"'
    }
    return newStr.join('')
  }

  searchMyRecipes = (e) => {
    e.preventDefault()
    const searchBy = e.target['recipe-search'].value.trim();
    this.setState({ searchBy, selectRandom: false })
  }

  searchRecipesBy = (recipeList, term) => {
    return recipeList
      .filter(recipe =>
        Object.values(recipe)
          .join('')
          .toLowerCase()
          .includes(term.toLowerCase())

      )
  }

  filterRecipesByTime = (recipeList, time) => {
    return recipeList
      .filter(recipe =>
        recipe.time_to_make <= time
      )
  }

  render() {
    const recipe = {
      recipeTitle: this.state.recipeTitle,
      recipeDesc: this.state.recipeDesc,
      recipeIngredients: this.state.recipeIngredients,
      recipeSteps: this.state.recipeSteps,
      recipeTime: this.state.recipeTime,
      recipeCuisine: this.state.recipeCuisine,
      recipeList: this.state.recipeList,
      recipePublic: this.state.recipePublic,
      error: this.state.error,
      loading: this.state.loading,
      searchRecipes: this.state.searchRecipes,
      searchBy: this.state.searchBy,
      filteredRecipes: this.state.filteredRecipes,
      filterBy: this.state.filterBy,
      saved: this.state.saved,
      editing: this.state.editing,
      redirect: this.state.redirect,
      selectRandom: this.state.selectRandom,

      setRecipeList: this.setRecipeList,
      removeRecipe: this.removeRecipe,
      getAllRecipes: this.getAllRecipes,
      setFilter: this.setFilter,
      delete: this.delete,
      handleAddTitle: this.handleAddTitle,
      handleRemoveTitle: this.handleRemoveTitle,
      handleAddDesc: this.handleAddDesc,
      handleRemoveDesc: this.handleRemoveDesc,
      handleAddRecipeIngredient: this.handleAddRecipeIngredient,
      handleRemoveIngredient: this.handleRemoveIngredient,
      handleAddRecipeStep: this.handleAddRecipeStep,
      handleRemoveStep: this.handleRemoveStep,
      handleAddTime: this.handleAddTime,
      handleRemoveTime: this.handleRemoveTime,
      handleAddCuisine: this.handleAddCuisine,
      handleRemoveCuisine: this.handleRemoveCuisine,
      handleCreateRecipe: this.handleCreateRecipe,
      handleAddImage: this.handleAddImage,
      handleAddPublic: this.handleAddPublic,
      handleRemovePublic: this.handleRemovePublic,
      setError: this.setError,
      clearError: this.clearError,
      searchRecipesBy: this.searchRecipesBy,
      updateSearchPublicRecipeBy: this.updateSearchPublicRecipeBy,
      filterRecipesByTime: this.filterRecipesByTime,
      loadRecipe: this.loadRecipe,
      clearRecipe: this.clearRecipe,
      searchMyRecipes: this.searchMyRecipes,
      setSelectRandom: this.setSelectRandom,
      setUser: () => { },
    }

    return (
      <RecipeContext.Provider value={recipe}>
        {this.props.children}
      </RecipeContext.Provider>
    )
  }
}
