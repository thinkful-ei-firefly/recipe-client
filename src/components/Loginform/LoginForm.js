import React from 'react'
import { Label, Input } from '../Form/Form'
import Button from '../Button/Button'

const LoginForm = (props) => {
  const { onSubmit, buttonText, error } = props
  return (
    <form
      className='LoginForm'
      onSubmit={event => onSubmit(event)}>
      <p role='alert'>{error}</p>
      <div className='inputs'>
        <Label
          className="label"
          htmlFor="username_input">
          <Input
            placeholder='Username'
            name='user_name'
            type='text'
            id='username_input'
            required>
          </Input>
        </Label>
        <Label
          className="label"
          htmlFor="password_input">
          <Input
            placeholder='Password'
            name='password'
            type='password'
            id='password_input'
            required>
          </Input>
        </Label>
      </div>
      <Button
        className='sub'
        type='submit'>
        {buttonText}
      </Button>
    </form>
  )
}

export default LoginForm
