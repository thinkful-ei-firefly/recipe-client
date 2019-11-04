
import React from 'react'
import config from '../../config'
import firebase from 'firebase'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'

import Button from '../Button/Button'
import './Google.css'

require('dotenv').config()

class SignInWithGoogle extends React.Component {

  static contextType = UserContext
  
  initializeFirebase = () => {
    if(!firebase.apps.length) {
      firebase.initializeApp(config.FirebaseConfig)
    }
    else {
      return
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.initializeFirebase()
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const googleUser = {
          token: result.credential.idToken,
          isNewUser: result.additionalUserInfo.isNewUser,
          fullName: result.additionalUserInfo.profile.name,
          email: result.user.email,
          accountCreated: result.user.metadata.creationTime,
          lastLogin: result.user.metadata.lastSignInTime
        }
        this.context.updateGoogleUser(googleUser)
      })
      .then(() => {
        if(this.context.googleUser.isNewUser){
          AuthApiService.postGoogleUser(this.context.googleUser)
            .then(res => {
              TokenService.saveAuthToken(res.authToken)
              this.context.updateLogin(true)
            })
        }
        else {
          AuthApiService.postGoogleLogin(this.context.googleUser)
            .then(res => {
              TokenService.saveAuthToken(res.authToken)
              this.context.updateLogin(true)
            })
                .then(() => {
                    if(this.context.googleUser.isNewUser){
                        AuthApiService.postGoogleUser(this.context.googleUser)
                            .then(res => {
                                TokenService.saveAuthToken(res.authToken)
                                this.context.updateLogin(true)
                            })
                    }
                    else {
                        AuthApiService.postGoogleLogin(this.context.googleUser)
                            .then(res => {
                                TokenService.saveAuthToken(res.authToken)
                                this.context.updateLogin(true)
                            })
                    }
                })
          }
      })
  }
  
  render() {
    return(
      <Button
        onClick = { this.handleClick }
        className="google-button">
        <span className="google-button_text">
          <i className="fab fa-google-plus-g"></i>
        </span>     
      </Button>
    )
  }
}

export default SignInWithGoogle