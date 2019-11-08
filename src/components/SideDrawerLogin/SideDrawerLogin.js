import React from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

class SideDrawerLogin extends React.Component {

  static contextType = UserContext

  render() {
    return (
      <div className="sidebar-navigation-items">
        <ul>
          <li>
            <Link
              aria-label='Home'
              to="/"
              className="menu"
              onClick={this.context.handleCloseSideDrawer}>
              <i className="fas fa-home">
                <span>{' Home'}</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              aria-label='Log in'
              to="/login"
              className="menu"
              onClick={this.context.handleCloseSideDrawer}>
              <i className="fas fa-sign-in-alt">
                <span>{' LogIn'}</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              aria-label='register'
              to="/register"
              className="menu"
              onClick={this.context.handleCloseSideDrawer}>
              <i className="fas fa-registered">
                <span>{' Register'}</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              aria-label='public recipes'
              to="/publicrecipes"
              className="menu"
              onClick={this.context.handleCloseSideDrawer}>
              <i className="fas fa-utensil-spoon">
                <span>{' All Recipes'}</span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideDrawerLogin