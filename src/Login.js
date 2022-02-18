import React, { useState } from 'react'
import'./Login.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
  // const history = useHistory();
  const navigate = useNavigate();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password) 
    .then((auth) => {

      navigate("/");
    })
    .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {

      navigate("/");
    })
    .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to="/">
        <img 
        className="login_logo"
        src="https://1000merken.com/wp-content/uploads/2020/04/Amazon-Logo.png" alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input 
          value={email} 
          onChange={event => 
          setEmail(event.target.value)}
           type="email" />
          <h5>Password</h5>
          <input 
          value={password} 
          onChange={event => 
          setPassword(event.target.value)} 
          type="password" />
          <button 
          onClick={login} 
          type="submit" 
          className="login_signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you are agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login