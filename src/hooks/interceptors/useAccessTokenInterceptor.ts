import { useQueryClient } from 'react-query';
import { instance } from '../../services/api';
import { AccessToken } from '../../types';

export function useAccessTokenInterceptor() {
  const queryClient = useQueryClient();
  let interceptor: number | undefined;

  function addInterceptor() {
    interceptor = instance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (error.response.status === 498) {
          try {
            await queryClient.invalidateQueries('token');
            error.config.headers.Authorization = `Bearer ${
              (queryClient.getQueryData('token') as AccessToken).accessToken
            }`;

            return instance(error.config);
          } catch (error) {
            return Promise.reject(error);
          }
        }
      }
    );
  }

  function removeInterceptor() {
    if (interceptor) {
      instance.interceptors.response.eject(interceptor);
    }
  }

  return { addInterceptor, removeInterceptor };
}
