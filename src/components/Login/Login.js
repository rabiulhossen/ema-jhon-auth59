import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import './Login.css'

const Login = () => {
    return (
        <div className='login-form'>
            <div>
                <h1>Login</h1>
                <div>

                    <form action="">
                        <div className="form-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" />
                        </div>
                        <div className="password-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" />
                        </div>

                    </form>
                    <input className='submit-btn' type="submit" value="Login" />
                    <p>New User? <Link to="/signup" >Signup </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;