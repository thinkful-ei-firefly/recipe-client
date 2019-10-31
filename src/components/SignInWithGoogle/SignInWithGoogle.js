import React from 'react'
import config from '../../config'
import firebase from 'firebase'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import MenuContext from '../../contexts/MenuContext'

import Button from '../Button/Button'


class SignInWithGoogle extends React.Component {

    static contextType = MenuContext
    
    initializeFirebase = () => {
        firebase.initializeApp(config.FirebaseConfig)
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
                                console.log(res)
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
                className="googleSignIn">
                Sign In With Google
            </Button>
        )
    }
}

export default SignInWithGoogle