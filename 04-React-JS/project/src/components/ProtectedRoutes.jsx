import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ component, role }) => {
  const { isAuthenticated, loading, role: userRole } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!role.includes(userRole)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>Access Denied - Insufficient Permissions</h1>
      </div>
    );
  }

  return component;
};

export default ProtectedRoutes;