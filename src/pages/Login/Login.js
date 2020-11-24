import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './Login.css';

const Login = (props) => {
    return (
        <div className='Login-Container'>
            <NavBar />
            <LoginForm />
            <SignUpForm />
        </div>
    )
}

export default Login;