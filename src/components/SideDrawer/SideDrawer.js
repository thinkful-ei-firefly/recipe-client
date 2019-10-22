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

    renderLoginLink() {
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

    renderLogoutLink() {
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
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()
                }
            </nav>
        )
    }
}

export default SideDrawer