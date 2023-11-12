import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './LoginPage.css';
import reactLogo from "./Glass.png";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    return (
        <div className="App">
            <div className="left-side">
                {/* Content for the left side goes here */}
            </div>

            <div className="top">
                <img src={reactLogo} alt="React Image"/>
                <div className="auth-form-container1">
                    <h5>MONEY MENTOR</h5>
                    <h6>your personal financial compass</h6>
                    <form className="login-form">
                        <define htmlFor="username"></define>
                        <input 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="text" 
                            placeholder="username" 
                            id="username" 
                            name="username" 
                        />
                        
                    </form>
                        <define htmlFor="password"></define>
                        <input 
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)} 
                            type="password" 
                            placeholder="password" 
                            id="password" 
                            name="password" 
                        />
                <div>
                    <click className="submit"  type="submit" onClick={() => navigate('HomePage')}>Login</click>
                </div>
                <div className = 'under'>
                    <click className="link-btn" onClick={() => navigate('RegistrationPage')}>
                        Create account.
                    </click>

                </div>
                </div>
            </div>

        </div>
    );
}

export default Login;