import React from 'react'
import { Link } from 'react-router-dom'

import './notFoundRoute.css'

class NotFoundRoute extends React.Component {

  render() {
    return(
      <section className="notFound">
        <div className="head">
          <h2>4<span>0</span>4</h2>
          <p>THE PAGE YOU REQUESTED</p>
          <p>COULD NOT BE FOUND</p>
        </div>
        
        <div className="links">
          <Link
            to="/"
            className="menu">
            <i className="fas fa-home">
              <span>{ ' GO TO HOMEPAGE' }</span>
            </i>
          </Link>
        </div>
        
      </section>
    )
  }
}

export default NotFoundRoute