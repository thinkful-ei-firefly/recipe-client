import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import LoginForm from '../../components/Loginform/LoginForm'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import SignInWithGoogle from '../../components/SignInWithGoogle/SignInWithGoogle'
import SignInWithFacebook from '../../components/SignInWithFacebook/SignInWithFacebook'

class RegisterRoute extends React.Component {

  static contextType = UserContext

  state = {
    error: null
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user_name = event.target.user_name.value
    const password = event.target.password.value
    AuthApiService.postUser({user_name, password})
      .then(response => {
        TokenService.saveAuthToken(response.authToken)
        this.context.updateLogin(true)
        this.props.history.push('/')
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
      return(
        <div className='login_page'>
          <section className = "login">
              <h2>SIGN UP</h2>
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
                onSubmit={ this.handleSubmit }
                buttonText='Sign up' 
                error={ this.state.error }
              />
              <p>Already a member?
                <Link 
                  to='/login'>
                  Log in
                </Link>
              </p>
          </section>
          </div>
      )
  }
}

export default withRouter(RegisterRoute)
