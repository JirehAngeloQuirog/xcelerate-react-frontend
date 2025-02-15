import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTournamentContext } from './TournamentContext';
import Navbar from '../Navbar';
import './CreateTournament.css';

const CreateTournament = () => {
  const [tournamentName, setTournamentName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const { addTournament } = useTournamentContext();
  const navigate = useNavigate();

  const handleCreateTournament = (e) => {
    e.preventDefault();
    const newTournament = {
      name: tournamentName,
      startDate,
      endDate,
      location,
      description,
      status: 'Upcoming',
    };
    addTournament(newTournament);
    navigate('/tournaments');
  };

  return (
    <div className="create-tournament-container">
      <Navbar />
      <h2>Create a New Tournament</h2>
      <form onSubmit={handleCreateTournament} className="create-tournament-form">
        <div className="form-group">
          <label htmlFor="tournamentName">Tournament Name</label>
          <input
            type="text"
            id="tournamentName"
            value={tournamentName}
            onChange={(e) => setTournamentName(e.target.value)}
            placeholder="Enter tournament name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Date Start</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">Date End</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />

        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter tournament description"
            required
          ></textarea>
        </div>

        <button type="submit" className="create-tournament-button">Create Tournament</button>
      </form>
    </div>
  );
};

export default CreateTournament;
