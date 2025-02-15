import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Save the new user to local storage (or send it to the server in a real app)
    localStorage.setItem('newUser', JSON.stringify({ email, password }));
    navigate('/email-verification');
  };

  return (
    <div className="create-account-container">
        <Navbar />
      <div className="create-account-box">
        <h2>Create a New Account</h2>
        <form onSubmit={handleSubmit} className="create-account-form">
          <input
            type="email"
            placeholder="Email"
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>

        <div className="create-account-footer">
          <p>By clicking Create Account, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>
        </div>

        <div className="create-account-terms">
          <p>Already have an account? 
            <a href="#">
                <Link to="/">Log in</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
