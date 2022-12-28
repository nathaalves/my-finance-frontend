import type {
  RefreshToken,
  LoginBody,
  AccessToken,
  SignUpBody,
} from '../../types';
import { instance } from './instance';

export async function requestAccessToken(): Promise<AccessToken> {
  const response = await instance.post<AccessToken>(
    '/auth/reauthenticate',
    null,
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function requestRegistration(body: SignUpBody): Promise<void> {
  await instance.post<SignUpBody>('/auth/signup', body);
}

export async function requestLogin(body: LoginBody): Promise<RefreshToken> {
  const response = await instance.post<RefreshToken>('/auth/signin', body, {
    withCredentials: true,
  });
  return response.data;
}
