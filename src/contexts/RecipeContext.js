import React from 'react'

const RecipeContext = React.createContext({
  recipeList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
})

export default RecipeContext
