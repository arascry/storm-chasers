import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const Login = (props) => {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm />
            <SignUpForm />
        </div>
    )
}

export default Login;