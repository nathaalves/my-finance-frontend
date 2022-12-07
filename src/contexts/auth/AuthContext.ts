import { createContext } from 'react';

type AuthContextType = {
  token: string | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext };
