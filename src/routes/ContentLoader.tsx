import { Outlet } from 'react-router-dom';
import { useContentQuery } from '../hooks/queries/useContentQuery';

export function ContentLoader() {
  const { isSuccess } = useContentQuery();

  return <>{isSuccess ? <Outlet /> : <></>}</>;
}
