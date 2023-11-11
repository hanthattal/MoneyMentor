import React from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'


export const Login = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login Here</h1>
        </div>
    );

}

export default Login;