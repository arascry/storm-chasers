import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './Login.css';

const Login = (props) => {
    return (
        <div className='Form-Container'>
            <NavBar />
            <div className='Signup-Container'>
                <SignUpForm />
            </div>
            <Footer />
        </div>
    )
}

export default Login;