import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to='/login' />;
}

export function AdminRoute() {
  const user = localStorage.getItem('user');

  return user && JSON.parse(user).role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to='/admin-login' />
  );
}
