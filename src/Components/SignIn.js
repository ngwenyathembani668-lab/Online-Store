import React from 'react'
import './SignIn.css';

const SignIn = () => {
  return (
    <div className='Sign-in-page'>

        <h1>Sign in baba</h1>

        <form className='sign-in-box'>

            <p>Enter your EmailAddress</p>
            <input type='email' placeholder='Email' />

            <p>Enter your Password</p>
            <input type='password' placeholder='Password' />

            <button>Sign In</button>

        </form>
      
    </div>
  )
}

export default SignIn;
