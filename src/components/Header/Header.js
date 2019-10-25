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
            <ul>
                <li>
                    <Link
                        to="/"
                        className="menu">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className="menu">
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className="menu">
                        Register
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
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/recipes"
                            className = "menu">
                            My Recipes
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/shoppinglist" 
                            className = "menu">
                            Shopping List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/ingredients"
                            className = "menu">
                            My Ingredients
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/newrecipe"
                            className = "menu">
                            New Recipe
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick = { this.handleLogout }
                            to = "/"
                            className = "menu">
                            Logout
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