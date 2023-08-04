import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to='/login' />;
}

export function AdminRoute() {
  const { user } = useAuth();
  return user && user.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to='/admin-login' />
  );
}
