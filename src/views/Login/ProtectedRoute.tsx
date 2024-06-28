import { Navigate, useLocation } from 'react-router-dom';
import { STATIC_ROUTES } from '../../utils/routes';
import { REDIRECT_URI_KEY } from '../../utils/constants';
import Spinner from '../../components/Spinner';
import useAuth from '../../hooks/useAuth';

type TProtectedRoute = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={{
          pathname: STATIC_ROUTES.LOGIN,
          search: `${REDIRECT_URI_KEY}=${location.pathname}${location.search}`,
        }}
      />
    );
  }

  // TODO faire le layout pour wrapper
  return <>{children}</>;
};

export default ProtectedRoute;
