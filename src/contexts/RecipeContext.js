import React from 'react'

import RecipeApiService from '../services/recipe-api-service'
import UploadApiService from '../services/upload-api-service'
import TokenService from '../services/token-service'

import { Link } from 'react-router-dom'

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
    searchPublicRecipesBy: '',
    publicRecipes: [],
    publicRecipesJSX: [],

    setError: () => {},
    clearError: () => {},
    setRecipeList: () => {},
    removeRecipe: () => {},
    getAllRecipes: () => {},
    delete: () => {},
    setSearch: () => {},
    setFilter: () => {},
    handleAddTitle: () => {},
    handleRemoveTitle: () => {},
    handleAddDesc: () => {},
    handleRemoveDesc: () => {},
    handleAddRecipeIngredient: () => {},
    handleRemoveIngredient: () => {},
    handleAddRecipeStep: () => {},
    handleRemoveStep: () => {},
    setRecipeTime: () => {},
    handleAddCuisine: () => {},
    handleRemoveCuisine: () => {},
    handleCreateRecipe: () => {},
    searchRecipesBy: () => {},
    filterRecipesByTime: () => {},
    updateSearchPublicRecipeBy: () => {},
    updatePublicRecipesList: () => {},
    updatePublicRecipes: () => {},
    updatePublicRecipesJSX: () => {},
    setUser: () => {},
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
            searchPublicRecipesBy: '',
            publicRecipes: [],
            publicRecipesJSX: [],
        }

        this.state = state
    }

    loadRecipe = (id) => {
      RecipeApiService.getById(id)
        .then(recipe => {
          //console.log(recipe)
          this.setState({
            recipeId: recipe.id,
            recipeTitle: recipe.name,
            recipeDesc: recipe.description,
            recipeIngredients: recipe.ingredients,
            recipeSteps: recipe.instructions,
            recipeCuisine: recipe.category,
            recipeTime: recipe.time_to_make,
            recipeImage: recipe.imageurl,
            recipePublic: recipe.public,
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
            saved: false
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

    setSearch = (searchBy) => {
        this.setState({ searchBy })
    }

    setFilter = (filterBy) => {
        this.setState({ filterBy })
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

    handleAddRecipeStep = step => {
        const recipeSteps = this.state.recipeSteps
        recipeSteps.push(step)
        this.setState({
            recipeSteps
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
        recipeImage : e[0]
      })
    }

    handleAddPublic = (e) => {
      this.setState({
        recipePublic : e.target.checked
      })
    }

    // takes recipe data from state and sends api query to server
    handleCreateRecipe = async () => {

        const fileName =  (!this.state.editing && this.state.recipeImage)?`${Date.parse(new Date())}.${this.state.recipeImage.name.split('.').pop()}`:'';

        const requiredKeys = ['recipeTitle', 'recipeDesc', 'recipeIngredients', 'recipeSteps', 'recipeTime', 'recipeCuisine' ]
        const requiredLabels = ['Title', 'Description', 'Ingredient', 'Instruction', 'Cooking Time', 'Cuisine' ]

        for (let i=0; i<requiredKeys.length; i++){
          if (!this.state[requiredKeys[i]] || this.state[requiredKeys[i]] === '' || this.state[requiredKeys[i]].length === 0) {
            return this.setState({
              error: `${requiredLabels[i]} is required`
            })
          }
        }

        const recipe = {
            name: this.state.recipeTitle,
            description: this.state.recipeDesc,
            ingredients: "{" + this.state.recipeIngredients.join(',') + "}",
            instructions: "{" + this.state.recipeSteps.join(',') + "}",
            time_to_make: this.state.recipeTime,
            category: this.state.recipeCuisine,
            public: this.state.recipePublic,
            imageurl: fileName,
        }
        this.setState({
          loading: true
        })

        try{
          console.log(recipe);
          if (this.state.editing){
            delete recipe.imageurl;
            await RecipeApiService.saveExisting(this.state.recipeId, recipe)
          }else{
            await RecipeApiService.postRecipe(recipe)
          }
          if (fileName && fileName!==''){
            await UploadApiService.uploadImage(this.state.recipeImage, fileName)
          }
          this.setState({
            loading: false,
            error: null,
            saved: true,
            editing: false
          })
        }catch(error){
          //console.log(error);
          this.setState({
            loading: false,
            error: error.message || error.error
          })
        }
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

    updateSearchPublicRecipeBy = searchPublicRecipesBy => {
        this.setState({
            searchPublicRecipesBy
        })
    }

    updatePublicRecipes = publicRecipes => {
        this.setState({
            publicRecipes
        })
    }

    cloneRecipe = (id) => {
      RecipeApiService.cloneRecipe(id)
        .then(recipe => this.setState({redirect: true}))
    }

    updatePublicRecipesJSX = () => {
        let recipes = this.state.publicRecipes
        recipes = this.searchRecipesBy(
            recipes,
            this.state.searchPublicRecipesBy
        )
        recipes = recipes.map(recipe =>
            <div className='cards'>
            <section className = "recipe-card"
                key = { recipe.id }>
                    <Link to = { '/publicrecipes/' + recipe.id }>
                      <div className = "image">
                    <img
                        src = { "https://good-meal.s3.amazonaws.com/" + (recipe.imageurl?recipe.imageurl:"nofound.png") }
                        alt = { recipe.name }
                    />
                </div>
                </Link>
                <Link
                    to = { '/publicrecipes/' + recipe.id }
                    className = "name">
                    { recipe.name }
                </Link>
                <p className='description'>{ recipe.description}</p>
                
                { TokenService.hasAuthToken() && 
                <div className='recipe-buttons'>
                  <button className='remove-recipe' type='button' onClick={e => this.cloneRecipe(recipe.id)} ><i className="fas fa-copy"></i></button>
                </div>}
            </section>
            </div>
        )

        this.setState({
            publicRecipesJSX: recipes
        })
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
            searchPublicRecipesBy: this.state.searchPublicRecipesBy,
            publicRecipes: this.state.publicRecipes,
            publicRecipesJSX: this.state.publicRecipesJSX,

            setRecipeList: this.setRecipeList,
            removeRecipe: this.removeRecipe,
            getAllRecipes: this.getAllRecipes,
            setSearch: this.setSearch,
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
            setError: this.setError,
            clearError: this.clearError,
            searchRecipesBy: this.searchRecipesBy,
            updateSearchPublicRecipeBy: this.updateSearchPublicRecipeBy,
            filterRecipesByTime: this.filterRecipesByTime,
            updatePublicRecipesList: this.updatePublicRecipesList,
            updatePublicRecipes: this.updatePublicRecipes,
            updatePublicRecipesJSX: this.updatePublicRecipesJSX,
            loadRecipe: this.loadRecipe,
            clearRecipe: this.clearRecipe,
            setUser: () => {},
        }

        return(
            <RecipeContext.Provider value = { recipe }>
                { this.props.children }
            </RecipeContext.Provider>
        )
    }
}
