import React, { Component } from 'react'
import config from '../config'
import firebase from 'firebase'
import TokenService from '../services/token-service'


const UserContext = React.createContext({
  error: null,
  login: false,
  sideDrawerIsOpen: false,
  drawerClass: '',
  user: {},
  googleUser: {},

  setError: () => { },
  clearError: () => { },
  setUser: () => { },
  updateLogin: () => { },
  updateGoogleUser: () => { },
  handleOpenSideDrawer: () => { },
  handleCloseSideDrawer: () => { },
  processLogin: () => { },
  processLogout: () => { },
})

export default UserContext

export class UserProvider extends Component {
  constructor(props) {

    super(props)

    const state = {
      error: null,
      login: false,
      sideDrawerIsOpen: false,
      drawerClass: 'side-drawer',
      user: {},
      googleUser: {}
    }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
      }

    this.state = state;
  }

  componentWillUnmount() {
    TokenService.clearCallbackBeforeExpiry()
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
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

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub,
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    this.setUser({})
  }

  initializeFirebase = () => {
    firebase.initializeApp(config.FirebaseConfig)
  }

  render() {
    const user = {
      error: this.state.error,
      user: this.state.user,
      login: this.state.login,
      sideDrawerIsOpen: this.state.sideDrawerIsOpen,
      drawerClass: this.state.drawerClass,
      googleUser: this.state.googleUser,

      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      updateLogin: this.updateLogin,
      updateGoogleUser: this.updateGoogleUser,
      handleOpenSideDrawer: this.handleOpenSideDrawer,
      handleCloseSideDrawer: this.handleCloseSideDrawer,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    }
    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
