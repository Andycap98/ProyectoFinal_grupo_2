
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

function RutaProfesor({ children }) {
  const { usuario } = useAuth();

  if (usuario?.rol !== "profesor") {
    return <Navigate to="/login-profesor" replace />;
  }

  return children;
}

export default RutaProfesor;
