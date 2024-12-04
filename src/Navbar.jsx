import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // Navigate to Tournaments page
  const handleTournamentClick = () => {
    if (isLoggedIn) {
      navigate('/tournaments');
    } else {
      alert('Please log in to view tournaments!');
    }
  };

  // Navigate to Home page
  const handleHomepageClick = () => {
    navigate('/home');
  };

  // Handle logout
  const handleLogoutClick = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  // Navigate to Login page
  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/updlogo.png" alt="Logo" />
        <h1>Xcelerate</h1>
      </div>
      <div className="navbar-buttons">
        {/* Tournaments Button */}
        <button className="tournament-button" onClick={handleTournamentClick}>
          Tournaments
        </button>

        {/* Home Button */}
        <button className="home-button" onClick={handleHomepageClick}>
          Home
        </button>

        {/* Conditional Rendering for Log In/Log Out */}
        {isLoggedIn ? (
          <button className="out-button" onClick={handleLogoutClick}>
            Logout
          </button>
        ) : (
          <button className="out-button-login" onClick={handleLoginClick}>
            Log In
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
