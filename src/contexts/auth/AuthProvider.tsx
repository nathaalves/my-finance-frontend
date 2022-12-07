import { AuthContext } from './AuthContext';
import { Outlet } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRequest } from '../../hooks/useRequest';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Credentials = {
  token: string;
  refreshToken: string;
};

export function AuthProvider() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const credentials: Credentials | null = localStorage.getItem('tokens')
    ? JSON.parse(localStorage.getItem('tokens') as string)
    : null;

  if (!credentials) {
    navigate('/login');
  }

  useEffect(() => {
    axios({
      baseURL: 'http://localhost:5000',
      url: '/auth/reauthenticate',
      method: 'post',
      headers: {
        Authorization: `Bearer ${credentials?.refreshToken}`,
      },
    })
      .then((res) => {
        localStorage.setItem(
          'tokens',
          JSON.stringify({
            token: res.data,
            refreshToken: credentials?.refreshToken,
          })
        );
        setToken(res.data);
        navigate('/home');
      })
      .catch((err) => {
        localStorage.removeItem('tokens');
        navigate('/login');
      });
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
