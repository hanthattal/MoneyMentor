import React, { useState } from "react";
import './RegistrationPage.css'
import { useNavigate } from 'react-router-dom'


export const Registration = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    
    return (
        <div>
            <div className="center">
                
                <div className="auth-form-container">
                    <h1>Register Here</h1>
                    <div className='gradient_background'></div>
                    <form className="register-form">
                        <label htmlFor="Gmail"></label>
                        <input 
                            value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        type="text" 
                        placeholder="Gmail" 
                        id="Gmail" 
                        name="Gmail" 
                        />

                    </form>

                    <form className="login-form">
                        <label htmlFor="username"></label>
                        <input 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="text" 
                            placeholder="username" 
                            id="username" 
                            name="username" 
                        />

                    </form>

                    <form className="phone-form">
                        <label htmlFor="Phone Number"></label>
                        <input 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="text" 
                            placeholder="Phone Number" 
                            id="Phone Number" 
                            name="Phone Number" 
                        />

                    </form>


                    <div className="auth-form-container2">
                        <label htmlFor="password"></label>
                        <input 
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)} 
                            type="password" 
                            placeholder="********" 
                            id="password" 
                            name="password" 
                        />
                    </div>

                    <div className="auth-form-container2">
                        <label htmlFor="Re-enter password"></label>
                        <input 
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)} 
                            type="Re-enter password" 
                            placeholder="********" 
                            id="Re-enter password" 
                            name="Re-enter password" 
                        />
                    </div>

                    <div>
                        <button className="submit"  type="submit" onClick={() => navigate(-1)}>Register</button>
                    </div>

                </div>
        </div>
    </div>
    
    );

}

export default Registration;