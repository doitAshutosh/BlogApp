import React, { useState } from 'react';

export default function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'ashutosh@anyone.com' || password === '0987') {
            alert('Login successfull!');
            onLogin();
        }else {
            alert('Invalid email or password');
        }
        
    };

    return (
        <div className = "login-container">
            <h2> Login</h2>
            <form onSubmit = {handleSubmit}>
                <input
                type = "email"
                placeholder = "Email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                required
                className = "input"
                />
                <br />
                <input
                type = "password"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                required
                className = "input"
                />
                <br />
                <button type = "submit" className = "post-button">Login</button>
            </form>
        </div>
    );

}