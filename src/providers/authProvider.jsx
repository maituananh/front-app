import { createContext, useState } from 'react';
import { getCurrentUser } from '../utils/jwt-utils';
import { getTimeAfterFiveMinutes } from '../utils/date-utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      return null;
    }
    console.log(
      getTimeAfterFiveMinutes(new Date(currentUser.exp * 1000).getTime())
    );
    console.log(new Date());

    return new Date() <
      getTimeAfterFiveMinutes(new Date(currentUser.exp * 1000).getTime())
      ? {
          id: currentUser.sub,
          username: currentUser.sub,
        }
      : null;
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
