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
  }
}

export default GoodmealApiService
