import React from 'react'
import { Link } from 'react-router-dom'

import LoginForm from '../../components/Loginform/LoginForm'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

import background from '../../images/background1.png'

import './registerRoute.css'

class RegisterRoute extends React.Component {

  state = {
    error: null
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user_name = event.target.user_name.value
    const password = event.target.password.value
    AuthApiService.postUser({user_name, password})
      .then(response => {
        console.log('authToken is '+response.authToken)
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
              <h2>Sign Up</h2>
              <LoginForm onSubmit={this.handleSubmit} buttonText='Sign up' error={this.state.error}/>
              <p>Already a member? <Link to='/login'>Log in</Link></p>
          </section>
          </div>
      )
  }
}

export default RegisterRoute
