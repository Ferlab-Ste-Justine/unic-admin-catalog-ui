import { Navigate, useLocation } from 'react-router-dom';
import { STATIC_ROUTES } from '../../utils/routes';
import { REDIRECT_URI_KEY } from '../../utils/constants';

type TProtectedRoute = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  // TODO check if authenticated call back /users/me
  const isAuthenticated = true;
  const location = useLocation();

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

  if (location.pathname === STATIC_ROUTES.LOGIN) {
    return <Navigate to={STATIC_ROUTES.RESOURCES} />;
  }

  // TODO faire le layout pour wrapper
  return <>{children}</>;
};

export default ProtectedRoute;
