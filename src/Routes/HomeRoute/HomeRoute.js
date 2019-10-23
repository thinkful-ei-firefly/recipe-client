import React from 'react'
import { Link } from 'react-router-dom';

import background from '../../images/background1.png'

import './homeRoute.css'

class HomeRoute extends React.Component {

    render() {
        return(
            <div className='landing'>
              <section className = "home">
                <img src={background} alt='background' className='background'/>
                <h2>Welcome to GoodMeal! </h2>
                <div className='subtitle'>
                  <p>Create and save your favorite recipes</p>
                  <p>Create a grocery list</p>
                  <p>Create delicious meals</p>
                </div>
              </section>
              
              <Link to="/login" className="button">Login</Link>
              <Link to="/register"className="button">Register</Link>
              
            </div>
        )
    }
}

export default HomeRoute