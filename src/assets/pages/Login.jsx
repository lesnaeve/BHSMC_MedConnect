import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./components/Login/Login.css";
import username from '../img/login/username.png';
import password from '../img/login/password.png';

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [userInput, setUserInput] = useState({
        user_id: '', // Change to user_id to match your backend
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    useEffect(() => {
        document.title = "BHSMC - MedConnect | Log in";
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrorMessage(''); // Clear error message on input change
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userInput.user_id, // Use user_id from state
                    password: userInput.password
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const { token, user_type } = data; // Assuming user_type is returned in the response

            // Store the token in local storage or state management
            localStorage.setItem('token', token);

            // Navigate based on user_type
            if (user_type === 'Admin') {
                navigate('/admin/dashboard');
            } else if (user_type === 'Employee') {
                navigate('/employee/dashboard');
            } else {
                console.error('Unknown user type:', user_type);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Invalid username or password.'); // Set error message
        }
    };

    return (
        <div className='login-background'> {/* New wrapper div for background */}
            <div className='container'>
                <div className='header'>
                    <div className='text'>Welcome to MedConnect</div>
                    <div className='underline'></div>
                </div>
                <form onSubmit={handleLogin}> {/* Wrap inputs in a form */}
                    <div className='inputs'>
                        <div className='input'>
                            <img src={username} alt='' />
                            <input
                                type='text'
                                name='user_id' // Change to user_id to match your backend
                                placeholder='Username'
                                value={userInput.user_id}
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
                        {errorMessage && ( // Conditionally render the error message
                            <div className='error-message'>{errorMessage}</div>
                        )}
                    </div>
                    <div className='forgot-password'><span>Forgot Password</span>?</div>
                    <div className="submit-container">
                        <button type="submit" className='submit-btn'>Log in</button> {/* Change to button type submit */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;