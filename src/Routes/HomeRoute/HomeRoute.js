import React from 'react'
import { Link } from 'react-router-dom'

import background from '../../images/background1.png'
import MenuContext from '../../contexts/MenuContext'
import Dashboard from '../../components/Dashboard/Dashboard'
import TokenService from '../../services/token-service'

import './homeRoute.css'

class HomeRoute extends React.Component {

  static contextType = MenuContext

    render() {
      const loggedIn = TokenService.hasAuthToken()
        return(
            <div className='landing'>
              <section className = "home">
                <img src={background} alt='background' className='background'/>
                <h2>Welcome to GoodMeal! </h2>
                <div className='subtitle'>
                  <p hidden={loggedIn}>Create and save your favorite recipes</p>
                  <p hidden={loggedIn}>Create a grocery list</p>
                  <p hidden={loggedIn}>Create delicious meals</p>
                </div>
              </section>
              
              {
                loggedIn ? <Dashboard /> :
                <div>
                  <Link to="/login" className="button">Login</Link>
                  <Link to="/register"className="button">Register</Link> 
                </div> 
              }
            </div>
        )
    }
}

export default HomeRoute