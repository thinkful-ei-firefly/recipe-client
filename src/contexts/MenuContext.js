import React from 'react';

import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const MenuContext = React.createContext({
  login: false,
  sideDrawerIsOpen: false,
  drawerClass: '',

  updateLogin: () => {},
  handleOpenSideDrawer: () => {},
  handleCloseSideDrawer: () => {},
  processLogout: () => {},
});

export default MenuContext

export class MenuProvider extends React.Component {
    constructor(props) {

        super(props)

        const state = {
            login: false,
            sideDrawerIsOpen: false,
            drawerClass: 'side-drawer'
        }

        this.state = state;
    }

    updateLogin = bool => {
      this.setState({ login: bool})
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
        IdleService.unRegisterIdleResets()
      }

      render() {
          const menu = {
              login: this.state.login,
              sideDrawerIsOpen: this.state.sideDrawerIsOpen,
              drawerClass: this.state.drawerClass,

              updateLogin: this.updateLogin,
              handleOpenSideDrawer: this.handleOpenSideDrawer,
              handleCloseSideDrawer: this.handleCloseSideDrawer,
              processLogout: this.processLogout,
          }
          return(
              <MenuContext.Provider value={ menu }>
                  { this.props.children }
              </MenuContext.Provider>
          )
      }
}
