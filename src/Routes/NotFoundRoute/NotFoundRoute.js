import React from 'react'
import { Link } from 'react-router-dom'

import './notFoundRoute.css'

class NotFoundRoute extends React.Component {

  render() {
    return(
      <section className="notFound">
        
        <div className="head">
          <h2>404</h2>
          <p>Not Found</p>
        </div>
        
        <p>Sorry the page you are looking for is not here.</p>
        
        <p>Maybe you were looking for one of these?</p>
        
        <div className="links">
          <Link
            to="/publicrecipes"
            className="menu">
            <i className="fas fa-utensil-spoon">
              <span>{ ' All Recipes' }</span>
            </i>
          </Link>
          <Link
            to = "/recipes"
            className = "menu">
            <i className="fas fa-utensils">
              <span>{ ' My Recipes' }</span>
            </i>
          </Link>
          <Link
            to="/login"
            className="menu">
            <i className="fas fa-sign-in-alt">
              <span>{ ' LogIn' }</span>
            </i>
          </Link>
        </div>
        
      </section>
    )
  }
}

export default NotFoundRoute