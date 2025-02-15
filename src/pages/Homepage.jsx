import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './Homepage.css';

const Homepage = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setMeetingCode(e.target.value);
  };

  const handleJoinMeeting = () => {
    if (!isAuthenticated) {
      alert("You need to be logged in to join a tournament!");
      navigate('/');
    } else {
      alert(`Joining meeting with code: ${meetingCode}`);
      
    }
  };

  const handleCreateTournament = () => {
    if (!isAuthenticated) {
      alert ("Please log in.");
      navigate('/');
    } else {
      alert ("Proceeding to create tournament page.");
    }
  };

  
  return (
    <div className="app">
      <Navbar />

      {/* Main Section */}
      <main className="main-content">
        <div className="meeting-options">
          <h2>Where tournaments and organizing events are for everyone.</h2>
          <p>
            We are here to create and find tournaments easier and faster. Connect, collaborate, and make
            friends from anywhere with Xcelerate.
          </p>
          <div className="buttons">
            
            <Link to="/create-tournament">
              <button
                className="create-tournament"
                onClick={handleCreateTournament}
                disabled={!isAuthenticated} 
              >
                Create Tournament
              </button>
            </Link>

            
            <div className="join-meeting">
              <input
                type="text"
                value={meetingCode}
                onChange={handleInputChange}
                placeholder="Enter a Tournament code"
              />
              <button onClick={handleJoinMeeting} disabled={!isAuthenticated}>
                Join
              </button>
            </div>

            
            {!isAuthenticated && (
              <p style={{ color: 'red' }}>Please log in to access the full features.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
