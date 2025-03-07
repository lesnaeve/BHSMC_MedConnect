import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./components/Login/Login.css";
import username from '../img/login/username.png';
import password from '../img/login/password.png';

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [userInput, setUserInput] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        document.title = "BHSMC - MedConnect | Log in";
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = () => {
        // Here you would typically validate the username and password
        // For demonstration, we'll assume the login is always successful
        navigate('/admin/dashboard'); // Redirect to Admin Dashboard
    };

    return (
        <div className='login-background'> {/* New wrapper div for background */}
            <div className='container'>
                <div className='header'>
                    <div className='text'>Welcome to MedConnect</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={username} alt='' />
                        <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={userInput.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input'>
                        <img src={password} alt='' />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={userInput.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className='forgot-password'><span>Forgot Password</span>?</div>
                <div className="submit-container">
                    <div className='submit' onClick={handleLogin}>Log in</div>
                </div>
            </div>
        </div>
    );
}

export default Login;