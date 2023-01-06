import { Outlet } from 'react-router-dom';
import { LoadingPage } from '../components/LoadingPage';
import { useContentQuery } from '../hooks/queries/useContentQuery';

export function ContentLoader() {
  const { isSuccess } = useContentQuery();

  return <>{isSuccess ? <Outlet /> : <LoadingPage />}</>;
}
