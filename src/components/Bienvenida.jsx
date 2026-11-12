
import { useNavigate } from "react-router-dom";

function Bienvenida() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>🐮 Aventura en la Granja 🌻</h1>

      <p>¡Bienvenido! Elegí cómo querés ingresar.</p>

      <button
        className="btn btn-success m-2"
        onClick={() => navigate("/login-alumno")}
      >
        Soy alumno
      </button>

      <button
        className="btn btn-primary m-2"
        onClick={() => navigate("/login-profesor")}
      >
        Soy profesor
      </button>
    </div>
  );
}

export default Bienvenida;
