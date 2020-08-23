import React, { useEffect, useState, createContext } from 'react';
import { authConfig } from './config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
