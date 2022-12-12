import { createContext } from 'react';

type AuthContextType = {
  token: string;
};

const AuthContext = createContext<AuthContextType>({ token: '' });

export { AuthContext };
