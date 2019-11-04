import React from 'react'
import LoginForm from '../../components/Loginform/LoginForm'
import SignInWithGoogle from '../../components/SignInWithGoogle/SignInWithGoogle'
import SignInWithFacebook from '../../components/SignInWithFacebook/SignInWithFacebook'
import { Link, withRouter } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

import './loginRoute.css'

class LoginRoute extends React.Component {

  static contextType = UserContext

  state = {
    error: null
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user_name = event.target.user_name.value
    const password = event.target.password.value
    AuthApiService.postLogin({user_name, password})
      .then(response => {
        TokenService.saveAuthToken(response.authToken)
        this.context.updateLogin(true)
        this.props.history.push('/')
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    return(
      <div className="login_page">
        <section className = "login">
          <h2>LOGIN</h2>
          <p>Connect with</p>
          <div className="signIn-button">
            <SignInWithGoogle />
            &nbsp;&nbsp;
            <SignInWithFacebook />
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <LoginForm 
            className='sub' 
            onSubmit={ this.handleSubmit } 
            buttonText='LOGIN' 
            error={ this.state.error }
          />
          <p>Haven't signed up? 
            <Link 
              to='/register'>
              Register
            </Link>
          </p>
        </section>
      </div>
    )
  }
}

export default withRouter(LoginRoute)
