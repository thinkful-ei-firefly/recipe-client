import React from 'react'
import { Link } from 'react-router-dom'

import background from '../../images/background1.png'
import RecipeContext from '../../contexts/RecipeContext'
import Dashboard from '../../components/Dashboard/Dashboard'
import TokenService from '../../services/token-service'

import './homeRoute.css'

class HomeRoute extends React.Component {

  static contextType = RecipeContext

  handleSubmit = async e => {
    e.preventDefault()
    await this.context.updateSearchPublicRecipeBy(
        e.target.publicSearch.value
    )
    this.context.updatePublicRecipesJSX()
    this.props.history.push('/publicrecipes')
  }

    render() {
      const loggedIn = TokenService.hasAuthToken()
        return(
            <div className='landing'>
              <section className = "home">
                <div className ='wrapper'>
                  <img src={background} alt='background' className='back-image'/>
                </div>
                <h2>Welcome to GoodMeal! </h2>
                <div className='subtitle'>
                  <p hidden={loggedIn}>Create your own recipes</p>
                  <p hidden={loggedIn}>Make a shopping list</p>
                  <p hidden={loggedIn}>Cook delicious meals</p>
                </div>
              </section>
              
              {
                loggedIn 
                  ? <Dashboard /> 
                  : <div className='buttons'>
                    <Link
                      to="/login" 
                      className="log-button">
                      LOGIN
                    </Link>
                    <Link                  
                      to="/register"
                      className="reg-button">
                      REGISTER
                    </Link> 
                  </div>
              }

            </div>
        )
    }
}

export default HomeRoute