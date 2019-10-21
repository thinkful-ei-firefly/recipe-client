import React from 'react';
import { Link } from 'react-router-dom';

//import nav bar components
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'

import './header.css';

class Header extends React.Component {

    render() {
        return(
            <header className="header">

                <nav className="navigation">

                    <div className="toggle-button">
                        <DrawerToggleButton />
                    </div>

                    <div className="logo">
                        <Link 
                            to="/"
                            className="logo">
                            Recipe App
                        </Link>
                    </div>

                    <div className="spacer"></div>

                    <div className="navigation-items">
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
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header