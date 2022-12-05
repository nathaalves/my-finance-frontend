import axios from 'axios';
import { useState, useEffect } from 'react';

type UseRequestProps = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  body?: object | null;
  headers?: object | {};
};

export function useRequest(
  { url, method, body = null, headers = {} }: UseRequestProps,
  isAsync = true
) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsloading] = useState(false);

  const config = {
    url,
    method,
    data: body,
    baseURL: import.meta.env.VITE_API_CONNECTION_BASE_URL,
    headers,
  };

  function request() {
    setIsloading(true);
    axios(config)
      .then((res) => {
        setResponse(res.data);
        setError(undefined);
      })
      .catch((err) => {
        setError(err.response.data);
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  useEffect(() => {
    isAsync ? null : request();
  }, []);

  return { request, response, error, isLoading };
}
