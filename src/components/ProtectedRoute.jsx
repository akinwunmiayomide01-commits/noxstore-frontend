import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("nox_admin_auth");

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}