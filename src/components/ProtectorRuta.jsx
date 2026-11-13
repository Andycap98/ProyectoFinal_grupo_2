
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

const ProtectorRuta = ({ children, rolRequerido }) => {
  const { usuario } = useAuth();

  // Si no hay usuario conectado, vuelve al Login.
  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  // Si el rol no corresponde, redirige a su pantalla.
  if (rolRequerido && usuario.rol !== rolRequerido) {
    if (usuario.rol === "profesor") {
      return <Navigate to="/profesor" replace />;
    }

    if (usuario.rol === "alumno") {
      return <Navigate to="/juego-comida" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectorRuta;
