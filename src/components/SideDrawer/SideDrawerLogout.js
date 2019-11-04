import React from 'react'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'

class SideDrawerLogout extends React.Component {

  static contextType = UserContext

  handleLogout = () => {
    this.context.handleCloseSideDrawer()
    this.context.processLogout()
    this.context.updateLogin(false)
  }

  render() {
    return(
      <div className="sidebar-navigation-items">    
        <ul>
          <li>
            <Link
              to="/"
              className="menu"
              onClick={ this.context.handleCloseSideDrawer }>
              <i className="fas fa-home">
                <span>Home</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className="menu"
              onClick={ this.context.handleCloseSideDrawer }>
              <i className="fas fa-utensils">
                <span>My Recipes</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="/shoppinglist" 
              className="menu"
              onClick={ this.context.handleCloseSideDrawer }>
              <i className="fas fa-shopping-basket">
                <span>Shopping List</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="/ingredients"
              className="menu"
              onClick={ this.context.handleCloseSideDrawer }>
              <i className="fas fa-clipboard-list">
                <span>My Pantry</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="/publicrecipes"
              className="menu"
              onClick={ this.context.handleCloseSideDrawer }>
              <i className="fas fa-utensil-spoon">
                <span>All Recipes</span>
              </i>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="menu"
              onClick={ this.handleLogout }>
              <i className="fas fa-sign-out-alt">
                <span>LogOut</span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideDrawerLogout