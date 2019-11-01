import React from 'react'

import MenuContext from '../../contexts/MenuContext'
import Button from '../Button/Button'
import firebase from 'firebase'
import TokenService from '../../services/token-service'

class SignOutGoogle extends React.Component {

    static contextType = MenuContext

    handleClick = e => {
        e.preventDefault()
        firebase.auth().signOut()
            .then(() => {
                TokenService.clearAuthToken()
                this.context.updateLogin(false)
            })
    }

    render() {
        return(
            <Button
                onClick = { this.handleClick }
                className = "googleSignOut">
                Sign Out Google
            </Button>
        )
    }
}

export default SignOutGoogle