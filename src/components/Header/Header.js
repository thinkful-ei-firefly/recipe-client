import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import MenuContext from '../../contexts/MenuContext'
import firebase from 'firebase'
//import nav bar components
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'

import './header.css';

class Header extends React.Component {

    static contextType = MenuContext

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
          } else {
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
                        to="/"
                        className="menu">
                        <i className="fas fa-home"><span>Home</span></i>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className="menu">
                        <i className="fas fa-sign-in-alt"><span>LogIn</span></i>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className="menu">
                        <i className="fas fa-registered"><span>Register</span></i>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/publicrecipes"
                        className="menu">
                        <i className="fas fa-utensil-spoon"><span>All Recipes</span></i>
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
                            to = "/"
                            className = "menu">
                            <i className="fas fa-home"><span>Home</span></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/recipes"
                            className = "menu">
                            <i className="fas fa-utensils"><span>My Recipes</span></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/shoppinglist"
                            className = "menu">
                            <i className="fas fa-shopping-basket"><span>Shopping List</span></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/ingredients"
                            className = "menu">
                            <i className="fas fa-clipboard-list"><span>My Pantry</span></i>
                        </Link>
                    </li>
                    <li>
                    <Link
                        to="/publicrecipes"
                        className="menu">
                        <i className="fas fa-utensil-spoon"><span>All Recipes</span></i>
                    </Link>
                </li>
                    <li>
                        <Link
                            onClick = { this.handleLogout }
                            to = "/"
                            className = "menu">
                            <i className="fas fa-sign-out-alt"><span>LogOut</span></i>
                        </Link>
                    </li>
                </ul>
        )
    }

    render() {
        return(
            <header className="header">

                <nav className="navigation">

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
