import React from 'react'

import './LoginForm.css'

const LoginForm = (props) => {
  const { onSubmit, buttonText, error } = props
  return (
    <form className='LoginForm' onSubmit={event=>onSubmit(event)}>
      <p>{error}</p>
      <div className='inputs'>
        <input placeholder='Username' name='user_name' type='text' required id='username_input'></input>
        <br />
        <input placeholder='Password' name='password' type='password' required id='password_input'></input>
      </div>
      <button className='sub' type='submit'>{buttonText}</button>
    </form>
  )
}

export default LoginForm
