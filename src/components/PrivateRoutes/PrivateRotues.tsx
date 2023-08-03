import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Route } from "react-router-dom";


export function PrivateRoute({ ...props }) {
  const { signed } = useAuth();
  return signed ? (
    <Route {...props} />
  ) : (
    <Navigate to="/error" />
  );
}

export function AdminRoute({ ...props }) {
  const { admin, signed } = useAuth();
  return admin && signed ? (
    <Route {...props} />
  ) : (
    <Navigate to="/error" />
  );
}
