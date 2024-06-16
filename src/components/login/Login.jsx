import React from 'react'
import "./login.css";

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
               <h3 className="loginLogo">Facebook</h3>
               <span className="loginDesc">Connect with friends and the world around you on Facebook.</span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder='Email' className='loginInput' />
                <input placeholder='Password' className='loginInput' />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterbtn">Create a New Account</button>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
