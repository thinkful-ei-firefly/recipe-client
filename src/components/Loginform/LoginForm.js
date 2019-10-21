import React from 'react'

const LoginForm = (props) => {
  const { onSubmit, buttonText, error } = props
  return (
    <form className='LoginForm' onSubmit={event=>onSubmit(event)}>
      <p>{error}</p>
      <label htmlFor='username_input'>Username: </label>
      <input name='user_name' type='text' required id='username_input'></input>
      <label htmlFor='password_input'>Password: </label>
      <input name='password' type='text' required id='password_input'></input>
      <button type='submit'>{buttonText}</button>
    </form>
  )
}

export default LoginForm
