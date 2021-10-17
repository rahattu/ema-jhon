import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>create account</h2>
                <form onSubmit="">
                <input type="email" name="email" id="" />
                <br/>
                <input type="password" name="" id="" />
                <br/>
                <br/>
                <input type="password" name="" id="" placeholder="re-password"/>
                <input type="submit" value="Submit" />

            </form>
            <p>already have account <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;