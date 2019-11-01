import config from '../config'
import TokenService from './token-service'

const GoodmealApiService = {
  url: config.API_ENDPOINT,
//recipe endpoints
  getRecipe(id) {
    return fetch(this.url+'/recipes/'+id, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json())
  },
  getPublicRecipe(id) {
    return fetch(this.url+'/recipes/public/'+id)
      .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json())
  },
  deleteRecipe(id) {
    return fetch(this.url+'/recipes/'+id, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json())
  },
//ingredient list endpoints
  getIngredientList() {
    return fetch(this.url+'/ingredients', {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json())
  },
  addIngredient(ingredient) {
    return fetch(this.url+'/ingredients', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(ingredient),
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json())
  },
  deleteIngredient(id) {
    return fetch(this.url+'/ingredients/'+id, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  },
  deleteIngredientList() {
    return fetch(this.url+'/ingredients/', {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  },
//shopping list endpoints
  addToShoppingList(item) {
    return fetch(this.url+'/list', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(item)
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : res.json())
  },
  addManyToShoppingList(items) {
    return fetch(this.url+'/list/many', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(items)
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  },
  strikeUnstrikeListItem(id, crossed) {
    return fetch(this.url+'/list/'+id, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(crossed)
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  },
  deletShoppingList() {
    return fetch(this.url+'/list/', {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  },
  deleteCrossedOnShoppingList() {
    return fetch(this.url+'/list/crossed', {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  },
  moveCrossedOnShoppingList() {
    return fetch(this.url+'/list/movetopantry', {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  },
//rating endpoints
  submitRating(id, rating) {
    return fetch(this.url+'/ratings/'+id, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(rating)
    })
    .then(res => (!res.ok) ? res.json().then(err => Promise.reject(err)) : Promise.resolve('OK'))
  }
}

export default GoodmealApiService
