import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import { STATIC_ROUTES } from './utils/routes';
import Spinner from './components/Spinner';
import React, { Suspense } from 'react';
import ProtectedRoute from './views/Login/ProtectedRoute';

const ResourcesPage = React.lazy(() => import('./views/Resources/Resources'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={STATIC_ROUTES.LOGIN} element={<Login />} />
        <Route
          path={STATIC_ROUTES.RESOURCES}
          element={
            <ProtectedRoute>
              <ResourcesPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={STATIC_ROUTES.RESOURCES} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
