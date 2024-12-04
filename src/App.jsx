import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TournamentProvider } from './pages/TournamentContext';
import LoginPage from './pages/Loginpage';
import Homepage from './pages/Homepage';
import CreateTournament from './pages/CreateTournament';
import TournamentPage from './pages/TournamentPage';
import './App.css';
import PrivateRoute from './Privateroute';

const App = () => {
  return (
    <TournamentProvider>
      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/home" element={<Homepage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/tournaments" element={<TournamentPage />} />
          <Route path="/create-tournament" element={<CreateTournament />} />
        </Route>
      </Routes>
    </TournamentProvider>
  );
};

export default App;
