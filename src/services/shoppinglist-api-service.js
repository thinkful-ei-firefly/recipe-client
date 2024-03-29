import TokenService from './token-service'

import config from '../config'

const ShoppingListApiService = {
  getAll() {
    return fetch(`${config.API_ENDPOINT}/list`, {
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getById(id) {
    return fetch(`${config.API_ENDPOINT}/list/${id}`, {
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postRecipe(recipe) {
    return fetch(`${config.API_ENDPOINT}/list`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "name": recipe.name,
        "description": recipe.description,
        "ingredients": recipe.ingredients,
        "instructions": recipe.instructions,
        "category": recipe.category,
        "time_to_make": recipe.time_to_make,
      })
    })

      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  saveNew(obj) {
    return fetch(`${config.API_ENDPOINT}/list`, {
      method: 'POST',
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  saveExisting(id, obj) {
    return fetch(`${config.API_ENDPOINT}/list/${id}`, {
      method: 'PATCH',
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : Promise.resolve('OK')
      )
  },

  delete(id) {
    return fetch(`${config.API_ENDPOINT}/list/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : Promise.resolve('OK')
      )
  },

  deleteWithResult(id) {
    return fetch(`${config.API_ENDPOINT}/list/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default ShoppingListApiService;
