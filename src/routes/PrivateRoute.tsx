import { Outlet } from 'react-router-dom';
import { useAccessTokenQuery } from '../hooks/queries/useAccessTokenQuery';
import { useAccessTokenInterceptor } from '../hooks/interceptors/useAccessTokenInterceptor';
import { LoadingPage } from '../components/LoadingPage';

export function PrivateRoute() {
  const { isSuccess } = useAccessTokenQuery();
  const { addInterceptor } = useAccessTokenInterceptor();

  if (isSuccess) {
    addInterceptor();
  }

  return <>{isSuccess ? <Outlet /> : <LoadingPage />}</>;
}
