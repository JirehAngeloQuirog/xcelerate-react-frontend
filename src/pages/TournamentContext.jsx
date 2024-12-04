import React, { createContext, useState, useContext } from 'react';

// Create context
const TournamentContext = createContext();

// Create a provider component
export const TournamentProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState([
    { id: 1, name: 'Sample Tournament', date: '2025-12-22', location: 'Sample Location', description: 'Sample Description', statues: 'Upcoming'},
  ]);

  const addTournament = (tournament) => {
    setTournaments((prevTournaments) => [
      ...prevTournaments,
      { id: prevTournaments.length + 1, ...tournament },
    ]);
  };

  return (
    <TournamentContext.Provider value={{ tournaments, addTournament }}>
      {children}
    </TournamentContext.Provider>
  );
};

// Create a hook for using the context
export const useTournamentContext = () => {
  const context = useContext(TournamentContext);
  if (!context) {
    throw new Error('useTournamentContext must be used within a TournamentProvider');
  }
  return context;
};
