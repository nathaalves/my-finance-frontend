import { Outlet } from 'react-router-dom';
import { useContent } from '../hooks/queries/useContent';

export function ContentLoader() {
  const { isSuccess } = useContent();

  return <>{isSuccess ? <Outlet /> : <></>}</>;
}
