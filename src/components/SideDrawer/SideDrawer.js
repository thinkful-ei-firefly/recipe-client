import React from 'react'
import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service'

import SideDrawerLogin from './SideDrawerLogin'
import SideDrawerLogout from './SideDrawerLogout'

import './sideDrawer.css'

class SideDrawer extends React.Component {

  static contextType = UserContext
    
  render() {
    return(
      <nav className={ this.context.drawerClass }>
        { TokenService.hasAuthToken()
          ? <SideDrawerLogout />
          : <SideDrawerLogin />
        }
      </nav>
    )
  }
}

export default SideDrawer