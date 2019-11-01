import React, { Component } from 'react'
import config from '../config'
import firebase from 'firebase'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'


const UserContext = React.createContext({
  error: null,
  user: {},
  googleUser: {},
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
  signInWithGoogle: () => {},
  signOutGoogle: () => {}
})

export default UserContext

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    const state = { 
      error: null,
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

  // componentDidMount() {
  //   if (TokenService.hasAuthToken()) {
  //     /*TokenService.queueCallbackBeforeExpiry(() => {
  //       this.fetchRefreshToken()
  //     })*/
  //   }
  // }

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

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub,
    })
    /*TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken()
    })*/
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    // TokenService.clearCallbackBeforeExpiry()
    this.setUser({})
  }

  initializeFirebase = () => {
    firebase.initializeApp(config.FirebaseConfig)
  }

  signInWithGoogle = () => {
    this.initializeFirebase()
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // console.log(result)
        this.setState({
          googleUser: {
            token: result.credential.idToken,
            isNewUser: result.additionalUserInfo.isNewUser,
            fullName: result.additionalUserInfo.profile.name,
            email: result.user.email,
            accountCreated: result.user.metadata.creationTime,
            lastLogin: result.user.metadata.lastSignInTime
          }
        })
      })
      .then(() => {
        if(this.state.googleUser.isNewUser){
          AuthApiService.postGoogleUser(this.state.googleUser)
            .then(res => {
              TokenService.saveAuthToken(res.authToken)
            })
        }
        else {
          AuthApiService.postGoogleLogin(this.state.googleUser)
            .then(res => {
              TokenService.saveAuthToken(res.authToken)
            })
        }
      })
  }

  signOutGoogle = () => {
    firebase.auth().signOut()
      .then(() => {
        TokenService.clearAuthToken()
      })
      .catch(err => console.log(err))
  }

  render() {
    const user = {
      error: this.state.error,
      user: this.state.user,
      googleUser: this.state.googleUser,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
      signInWithGoogle: this.signInWithGoogle,
      signOutGoogle: this.signOutGoogle
    }
    return (
      <UserContext.Provider value={ user }>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
