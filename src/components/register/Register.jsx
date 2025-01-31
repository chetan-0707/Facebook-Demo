import React from 'react';
import "./register.css";

function Register() {
  return (
    <div>
        <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
               <h3 className="loginLogo">Facebook</h3>
               <span className="loginDesc">Connect with friends and the world around you on Facebook.</span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder='Username' className='loginInput' />
                <input placeholder='Email' className='loginInput' />
                <input placeholder='Password' className='loginInput' />
                <input placeholder='Password Again' className='loginInput' />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterbtn">Log Into Acoount</button>
              </div>
            </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Register
