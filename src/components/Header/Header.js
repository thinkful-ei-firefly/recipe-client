import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import MenuContext from '../../contexts/MenuContext'

//import nav bar components
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'

import './header.css';

class Header extends React.Component {

    static contextType = MenuContext

    handleLogout = () => {
        TokenService.clearAuthToken()
        this.context.updateLogin(false)
    }

    renderLogin() {
        return(
            <ul className='links'>
                <li>
                    <Link
                        to="/"
                        className="menu">
                        <i class="fas fa-home"><span>Home</span></i>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className="menu">
                        <i class="fas fa-sign-in-alt"><span>LogIn</span></i>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className="menu">
                        <i class="fas fa-registered"><span>Register</span></i>
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
                            <i class="fas fa-home"><span>Home</span></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/recipes"
                            className = "menu">
                            <i class="fas fa-utensils"><span>My Recipes</span></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/shoppinglist" 
                            className = "menu">
                            <i class="fas fa-shopping-basket"><span>Shopping List</span></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/ingredients"
                            className = "menu">
                            <i class="fas fa-clipboard-list"><span>Ingredients</span></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick = { this.handleLogout }
                            to = "/"
                            className = "menu">
                            <i class="fas fa-sign-out-alt"><span>LogOut</span></i>
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