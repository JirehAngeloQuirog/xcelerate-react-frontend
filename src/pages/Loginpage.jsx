import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';
import Navbar from '../Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
        (email === 'quirog@gmail.com' && password === 'jireh123') ||
         (email ==='dumaraog@gmail.com' && password === 'earl123') ||
         (email === 'sabanpan@gmail.com' && password === 'bryan123') ||
         (email === 'divinagracia@gmail.com' && password === 'lp123') 
    ){
        localStorage.setItem('isLoggedIn', 'true');

        navigate ('/home');
    } else {
        alert("Invalid email or password")
    }
  };

  return (
    <div className="login-container">
        <Navbar />
      <div className="login-box">
        <img src= "/images/updlogo.png"
          alt="Xcelerate Logo" 
          className="xcelerate-logo"
        />
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="email" 
            placeholder="Email or Phone" 
            className="input-field" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgotten password?</a>
        </div>
        <div className="signup-link">
          <p>New to Facebook? <a href="#">Create New Account</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
