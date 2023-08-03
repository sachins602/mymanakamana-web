import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Route } from 'react-router-dom';

export function PrivateRoute({ ...props }) {
  const { user } = useAuth();
  return user ? <Route {...props} /> : <Navigate to='/login' />;
}

export function AdminRoute({ ...props }) {
  const { user } = useAuth();
  return user && user.role === 'admin' ? (
    <Route {...props} />
  ) : (
    <Navigate to='/admin-login' />
  );
}
