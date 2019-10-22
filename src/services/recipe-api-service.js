import config from '../config'
import TokenService from './token-service'

const RecipeApiService = {
    postRecipe(recipes) {
        console.log(recipes)
        return fetch(`${config.API_ENDPOINT}/recipes`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({ recipes })
        })
    
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default RecipeApiService