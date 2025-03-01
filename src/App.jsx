import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TournamentProvider } from './pages/TournamentContext';
import LoginPage from './pages/Loginpage';
import Homepage from './pages/Homepage';
import CreateTournament from './pages/CreateTournament';
import TournamentPage from './pages/TournamentPage';
import CreateAccount from './pages/Createaccount';
import AboutPage from './pages/AboutPage';
import './App.css';
import PrivateRoute from './Privateroute';
import EmailVerification from './pages/EmailVerification';
import Premium from './pages/Premium';

const App = () => {


  return (
    <TournamentProvider>
      <Routes>

        <Route path='/' element={<LoginPage />} />
        <Route path='/premium' element={<Premium />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="email-verification" element={<EmailVerification />} />
        <Route path="about-page" element={<AboutPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/tournaments" element={<TournamentPage />} />
          <Route path="/create-tournament" element={<CreateTournament />} />
        </Route>
      </Routes>
    </TournamentProvider>
  );
};

export default App;
