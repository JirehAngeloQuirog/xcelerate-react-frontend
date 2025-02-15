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

  // Navigate to About page
  const handleAboutClick = () => {
    navigate('/about-page');
  };

  // Navigate to Settings page
  const handleSettingsClick = () => {
    navigate('/settings');
  };

  // Navigate to Contact page
  const handleContactClick = () => {
    navigate('/contact');
  };

  // Navigate to Premium page
  const handlePremiumClick = () => {
    navigate('/premium');
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
        <button className="home-button" onClick={handleHomepageClick}>
          Home
        </button>

        <button className="about-button" onClick={handleAboutClick}>
          About
        </button>

        <button className="settings-button" onClick={handleSettingsClick}>
          Settings
        </button>

        <button className="contact-button" onClick={handleContactClick}>
          Contact
        </button>

        <button className="tournament-button" onClick={handleTournamentClick}>
          Tournaments
        </button>

        <button className="premium-button" onClick={handlePremiumClick}>
          Premium
        </button>

        <div className="premium-login-group">
          {isLoggedIn ? (
            <button className="out-button" onClick={handleLogoutClick}>
              Logout
            </button>
          ) : (
            <button className="out-button-login" onClick={handleLoginClick}>
              Log In / Sign Up
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;