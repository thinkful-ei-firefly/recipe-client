import React from 'react'
import { Link } from 'react-router-dom'
import MenuContext from '../../contexts/MenuContext'
// import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service'

import './sideDrawer.css'

class SideDrawer extends React.Component {
    
    static contextType = MenuContext
    // static contextType = UserContext

    handleLogout = () => {
        this.context.handleCloseSideDrawer()
        this.context.processLogout()
        this.context.updateLogin(false)
    }

    renderLogin() {
        return(
            <div className="sidebar-navigation-items">    
                <ul>
                    <li> 
                        <Link
                            to="/"
                            className="menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-home">
                                <span>Home</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-sign-in-alt">
                                <span>LogIn</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            className="menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-registered">
                                <span>Register</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/publicrecipes"
                            className="menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-utensil-spoon">
                                <span>Public Recipes</span>
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    renderLogout() {
        return(
            <div className="sidebar-navigation-items">    
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-home">
                                <span>Home</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/recipes"
                            className = "menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-utensils">
                                <span>My Recipes</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/shoppinglist" 
                            className = "menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-shopping-basket">
                                <span>Shopping List</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/ingredients"
                            className = "menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            <i className="fas fa-clipboard-list">
                                <span>Ingredients</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/login"
                            className = "menu"
                            onClick = { this.handleLogout }>
                            <i className="fas fa-sign-out-alt">
                                <span>LogOut</span>
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        return(
            <nav className = { this.context.drawerClass }>
                { TokenService.hasAuthToken()
                    ? this.renderLogout()
                    : this.renderLogin()
                }
            </nav>
        )
    }
}

export default SideDrawer