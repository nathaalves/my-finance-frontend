import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { requestAccessToken } from '../services/api';
import { instance } from '../services/api/instance';
import { RefreshToken } from '../types';

export function PrivateRoute() {
  const navigate = useNavigate();

  const refreshToken: RefreshToken | null = localStorage.getItem(
    'refresh-token'
  )
    ? JSON.parse(localStorage.getItem('refresh-token') as string)
    : null;

  useEffect(() => {
    if (!refreshToken) {
      navigate('/login');
    }
  }, []);

  const { isSuccess } = useQuery('token', requestAccessToken, {
    onSuccess: (auth) => {
      instance.defaults.headers.Authorization = `Bearer ${auth.accessToken}`;
    },
    onError: () => {
      localStorage.removeItem('refresh-token');
      navigate('/login');
    },
    enabled: !!refreshToken,
  });

  return <>{isSuccess ? <Outlet /> : <></>}</>;
}
