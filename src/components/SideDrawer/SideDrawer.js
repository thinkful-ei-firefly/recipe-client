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
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            className="menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            Register
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
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/recipes"
                            className = "menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            My Recipes
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/shoppinlist" 
                            className = "menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            Shopping List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/ingredients"
                            className = "menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            My ingredients
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/newrecipe"
                            className = "menu"
                            onClick = { this.context.handleCloseSideDrawer }>
                            New Recipe
                        </Link>
                    </li>
                    <li>
                        <Link
                            to = "/login"
                            className = "menu"
                            onClick = { this.handleLogout }>
                            Logout
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