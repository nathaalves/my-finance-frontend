import type {
  RefreshToken,
  LoginBody,
  AccessToken,
  SignUpBody,
} from '../../types';
import { instance } from './instance';

export async function requestAccessToken(): Promise<AccessToken> {
  const refreshToken = localStorage.getItem('refresh-token')
    ? JSON.parse(localStorage.getItem('refresh-token') as string)
    : null;

  const response = await instance.post<AccessToken>(
    '/auth/reauthenticate',
    null,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  return response.data;
}
