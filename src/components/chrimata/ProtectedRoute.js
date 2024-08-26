// components/ProtectedRoute.js
import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from '../../atoms';
import Login from '../../pages/chrimata/index';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  useEffect(() => {
    const handleUnload = () => {
      setIsAuthenticated(false);
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [setIsAuthenticated]);

  if (!isAuthenticated) {
    return <Login />;
  }

  return children;
};

export default ProtectedRoute;
