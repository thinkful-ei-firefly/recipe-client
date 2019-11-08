import React from 'react';

import TokenService from '../services/token-service'

const MenuContext = React.createContext({
  login: false,
  sideDrawerIsOpen: false,
  drawerClass: '',
  googleUser: {},

  updateLogin: () => { },
  updateGoogleUser: () => { },
  handleOpenSideDrawer: () => { },
  handleCloseSideDrawer: () => { },
  processLogout: () => { },
});

export default MenuContext

export class MenuProvider extends React.Component {
  constructor(props) {

    super(props)

    const state = {
      login: false,
      sideDrawerIsOpen: false,
      drawerClass: 'side-drawer',
      googleUser: {}
    }

    this.state = state;
  }

  updateLogin = bool => {
    this.setState({ login: bool })
  }

  updateGoogleUser = googleUser => {
    this.setState({ googleUser })
  }

  handleOpenSideDrawer = () => {
    this.setState({
      sideDrawerIsOpen: true,
      drawerClass: 'side-drawer is-open'
    })
  }

  handleCloseSideDrawer = () => {
    this.setState({
      sideDrawerIsOpen: false,
      drawerClass: 'side-drawer'
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
  }

  render() {
    const menu = {
      login: this.state.login,
      sideDrawerIsOpen: this.state.sideDrawerIsOpen,
      drawerClass: this.state.drawerClass,
      googleUser: this.state.googleUser,

      updateLogin: this.updateLogin,
      updateGoogleUser: this.updateGoogleUser,
      handleOpenSideDrawer: this.handleOpenSideDrawer,
      handleCloseSideDrawer: this.handleCloseSideDrawer,
      processLogout: this.processLogout,
    }
    return (
      <MenuContext.Provider value={menu}>
        {this.props.children}
      </MenuContext.Provider>
    )
  }
}