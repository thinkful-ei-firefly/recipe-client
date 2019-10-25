import React from 'react'
import { Link } from 'react-router-dom'

import LoginForm from '../../components/Loginform/LoginForm'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

import background from '../../images/background1.png'

import './loginRoute.css'

class LoginRoute extends React.Component {

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
        this.props.updateLogin(true)
        this.props.history.push('/recipes')
      })
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    return(
      <div className='login_page'>
      <img src={background} alt='background' className='background'/>
      <section className = "login">
        <h2>Log In </h2>
        <LoginForm onSubmit={this.handleSubmit} buttonText='Login' error={this.state.error}/>
        <p>Haven't signed up? <Link to='/register'>Register</Link></p>
      </section>
      </div>
    )
  }
}

export default LoginRoute
