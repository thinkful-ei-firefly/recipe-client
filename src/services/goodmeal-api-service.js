import config from '../config'
import TokenService from './token-service'

const GoodmealApiService = {
  url: config.API_ENDPOINT,
  getRecipe(id) {
    return fetch(this.url+'/recipes/'+id)
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
  }
}

export default GoodmealApiService
