import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to='/login' />;
}

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem('user');

  return user && JSON.parse(user).role === 'admin' ? (
    children
  ) : (
    <Navigate to='/admin-login' />
  );
}
