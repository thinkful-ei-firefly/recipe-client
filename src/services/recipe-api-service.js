import TokenService from './token-service'

import config from '../config'

const RecipeApiService = {

  getPublicRecipes() {
    return fetch(`${config.API_ENDPOINT}/recipes/public`, {
      method: 'GET'
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getAll() {
      return fetch(`${config.API_ENDPOINT}/recipes`, {
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
        return fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
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
        return fetch(`${config.API_ENDPOINT}/recipes`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipe)
        })

        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

  saveNew(obj) {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
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
    return fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
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
    return fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
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
    return fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
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
  },

  cloneRecipe(id) {
    return fetch(`${config.API_ENDPOINT}/recipes/clone`, {
      method: 'POST',
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({id}),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default RecipeApiService;
