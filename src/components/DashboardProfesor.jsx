
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router-dom";

function DashboardProfesor() {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>Panel del Profesor</h1>

      <h2>¡Bienvenido, {usuario?.nombre}!</h2>

      <p>
        Desde aquí podrás administrar las actividades
        de Aventura en la Granja.
      </p>

      <section className="card p-4 mt-4">
        <h3>Gestión de preguntas</h3>

        <p>
          Próximamente podrás agregar, editar y eliminar
          preguntas de los juegos.
        </p>
      </section>

      <button
        className="btn btn-danger mt-4"
        onClick={handleCerrarSesion}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default DashboardProfesor;
