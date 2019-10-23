import React from 'react'

const ShoppingListContext = React.createContext({
  shoppingList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
})

export default ShoppingListContext
