import { useEffect, useState } from 'react';

import { LoginApi } from '../services/Login/login';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await LoginApi.verify();

      if (error || !data?.isValid) setIsAuthenticated(false);
      else setIsAuthenticated(true);

      setLoading(false);
    };

    checkSession();
  }, []);

  return { isAuthenticated, loading };
};

export default useAuth;
