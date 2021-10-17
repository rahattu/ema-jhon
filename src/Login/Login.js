import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import './Login.css'

const Login = () => {
    const {SignInUsingGoogle}=useAuth();
    const location =useLocation();
    console.log('came from' ,location.state?.from);

    return (

  <div className="login-form">
            <div>
            <h2>Login</h2>
            <form >
                <input type="email" name="" id="" />
                <br/>
                <input type="password" name="" id="" />
                <br/>
                <input type="submit" value="Submit" />

            </form>
            
            <p>-------new to register---------<Link to ="/register"><br/>create account</Link>
            </p>
            <h3>--------or--------</h3>
            <button  onClick={SignInUsingGoogle} className="btn-regular">GoogleSignIn</button>
            </div>
        </div>
    );
};

export default Login;