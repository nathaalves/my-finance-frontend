import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';

type ErrorResponse = {
  data: {
    message: string;
    details?: string[];
  };
  status: number;
};

export function useRequest(
  config: Partial<AxiosRequestConfig>,
  isAsync = false
) {
  const [response, setResponse] = useState();
  const [error, setError] = useState<ErrorResponse>();
  const [isLoading, setIsloading] = useState(false);

  config.baseURL = import.meta.env.VITE_API_CONNECTION_BASE_URL;

  function request() {
    setIsloading(true);
    axios(config)
      .finally(() => {
        setIsloading(false);
      })
      .then((res) => {
        setResponse(res.data);
        setError(undefined);
      })
      .catch((err) => {
        setError({
          data: err.response.data,
          status: err.response.status,
        });
      });
  }

  useEffect(() => {
    isAsync ? null : request();
  }, []);

  return { request, response, error, isLoading };
}
