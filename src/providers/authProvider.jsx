import { useState } from 'react';
import { AuthContext } from '../context/authContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setStateLogin = (data) => setUser(data);
  const setStateLogout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setStateLogin, setStateLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
