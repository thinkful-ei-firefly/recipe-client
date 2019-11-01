import React from 'react'
import config from '../../config'
import firebase from 'firebase'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'

import Button from '../Button/Button'

require('dotenv').config()

class SignInWithFacebook extends React.Component {

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
        const provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                return {
                    token: result.credential.accessToken,
                    isNewUser: result.additionalUserInfo.isNewUser,
                    fullName: result.additionalUserInfo.profile.name,
                    email: result.user.email,
                    accountCreated: result.user.metadata.creationTime,
                    lastLogin: result.user.metadata.lastSignInTime
                }
                //this.context.updateGoogleUser(facebookUser)
            })
            .then(facebookUser => {
                if(facebookUser.isNewUser){
                    AuthApiService.postFacebookUser(facebookUser)
                        .then(res => {
                            TokenService.saveAuthToken(res.authToken)
                            this.context.updateLogin(true)
                        })
                }
                else {
                    AuthApiService.postFacebookLogin(facebookUser)
                        .then(res => {
                            TokenService.saveAuthToken(res.authToken)
                            this.context.updateLogin(true)
                        })
                }
            })
    }

    render() {
        return(
            <Button
                onClick = { this.handleClick }
                className="facebookSignIn">
                Sign In With Facebook
            </Button>
        )
    }
}

export default SignInWithFacebook
