import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import firebase from 'firebase'
import UserContext from '../../contexts/UserContext'

//import nav bar components
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'

import './header.css'

class Header extends React.Component {
  
  static contextType = UserContext
  
  handleLogout = () => {
    if(!firebase.apps.length) {
      TokenService.clearAuthToken()
      this.context.updateLogin(false)
    }else{
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          firebase.auth().signOut()
            .then(() => {
              TokenService.clearAuthToken()
              this.context.updateLogin(false)
            })
        }
        else {
          TokenService.clearAuthToken()
          this.context.updateLogin(false)
        }
      });
    }
  }

  renderLogin() {
    return(
      <ul className='links'>

        <li>
          <Link
            aria-label='home' 
            to="/"
            className="menu">
            <i className="fas fa-home">
              <span>{ ' Home' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='log in'
            to="/login"
            className="menu">
            <i className="fas fa-sign-in-alt">
              <span>{ ' LogIn' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='register'
            to="/register"
            className="menu">
            <i className="fas fa-registered">
              <span>{ ' Register' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='all recipes'
            to="/publicrecipes"
            className="menu">
            <i className="fas fa-utensil-spoon">
              <span>{ ' All Recipes' }</span>
            </i>
          </Link>
        </li>

      </ul>
    )
  }

  renderLogout() {
    return(
      <ul>
        <li>
          <Link
            aria-label='home'
            to = "/"
            className = "menu">
            <i className="fas fa-home">
              <span>{ ' Home' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='my recipes'
            to = "/recipes"
            className = "menu">
            <i className="fas fa-utensils">
              <span>{ ' My Recipes' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='shopping list'
            to = "/shoppinglist"
            className = "menu">
            <i className="fas fa-shopping-basket">
              <span>{ ' Shopping List' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='My pantry'
            to = "/ingredients"
            className = "menu">
            <i className="fas fa-clipboard-list">
              <span>{ ' My Pantry' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='all recipes'
            to="/publicrecipes"
            className="menu">
            <i className="fas fa-utensil-spoon">
              <span>{ ' All Recipes' }</span>
            </i>
          </Link>
        </li>

        <li>
          <Link
            aria-label='log out'
            onClick = { this.handleLogout }
            to = "/"
            className = "menu">
            <i className="fas fa-sign-out-alt">
              <span>{ ' LogOut' }</span>
            </i>
          </Link>
        </li>         
      </ul>
    )
  }
      
  render() {
    return(
      <header className="header">
      
        <nav  className='navigation' 
              aria-label="navigation">
          
        
          <div className="toggle-button">
            <DrawerToggleButton />
          </div>
          
          <div className="spacer"></div>
          
          <div className="navigation-items">
            { 
              TokenService.hasAuthToken()
              ? this.renderLogout()
              : this.renderLogin()
            }   
          </div>
        </nav>
      
      </header>
    )
  }
}

export default Header
