import React from 'react';
import { useTournamentContext } from './TournamentContext';
import Navbar from '../Navbar';
import './TournamentPage.css'

const TournamentPage = () => {
  const { tournaments } = useTournamentContext();

  return (
    <div className="tournament-page-container">
        <Navbar />
      <h2>Upcoming Tournaments</h2>
      <div className="tournament-list">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="tournament-card">
            <h3>{tournament.name}</h3>
            <p>{tournament.startDate}</p>
            <p>{tournament.endDate}</p>
            <p>{tournament.location}</p>
            <p>{tournament.description}</p>
            <p>Status: {tournament.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentPage;
