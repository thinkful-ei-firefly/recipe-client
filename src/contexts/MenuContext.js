import React from 'react';

import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const MenuContext = React.createContext({
  sideDrawerIsOpen: false,
  drawerClass: '',
  handleOpenSideDrawer: () => {},
  handleCloseSideDrawer: () => {}
});

export default MenuContext

export class MenuProvider extends React.Component {
    constructor(props) {

        super(props)

        const state = {
            sideDrawerIsOpen: false,
            drawerClass: 'side-drawer'
        }

        this.state = state;
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
        this.setUser({})
      }

      render() {
          const value = {
              sideDrawerIsOpen: this.state.sideDrawerIsOpen,
              drawerClass: this.state.drawerClass,
              handleOpenSideDrawer: this.handleOpenSideDrawer,
              handleCloseSideDrawer: this.handleCloseSideDrawer
          }
          return(
              <MenuContext.Provider value={ value }>
                  { this.props.children }
              </MenuContext.Provider>
          )
      }
}

