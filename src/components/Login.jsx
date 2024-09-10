import React from 'react'
import '../Css/Login.css';
import { FcGoogle } from 'react-icons/fc';
import Footer from './Footer';
import Header from './Header';
export default function Login() {
  return (
    <div>
      <Header/>
          <div className='Main-container'>

<div className='login-container'>
    <div className='create-container'>
        <h5 className='createaccount-heading'>Create a new account</h5>
        <div className='signup-container'>
            <FcGoogle className='gicon' /> <span className='signupgoogle-heading'>Sign Up with Google</span>
        </div>
    </div>
    <div className='createaccountbtn-container'>
        <button className='create-ac-btn'>Create an Account</button>
        <p className='already_ac'>Already have an account? <span className='sigin'>Sign In</span></p>
    </div>
</div>

</div>
<Footer/>
    </div>
  )
}
