

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../Context/useAuth";
import { obtenerPartidas } from "../services/partidasService";

const DashboardProfesor = () => {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  // Recuperamos las partidas guardadas en el navegador
  const [partidas] = useState(() => obtenerPartidas());

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
        <h3>Historial de partidas</h3>

        {partidas.length === 0 ? (
          <p>Todavía no hay partidas registradas.</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Alumno</th>
                <th>Juego 1</th>
                <th>Juego 2</th>
                <th>Total</th>
                <th>Fecha</th>
              </tr>
            </thead>

            <tbody>
              {partidas.map((partida) => (
                <tr key={partida.id}>
                  <td>{partida.nombre}</td>
                  <td>{partida.puntajeJuego1}</td>
                  <td>{partida.puntajeJuego2}</td>
                  <td>{partida.total}</td>
                  <td>
                    {new Date(partida.fecha).toLocaleString("es-AR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

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
};

export default DashboardProfesor;
