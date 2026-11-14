import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../Context/useAuth";
import { obtenerPartidas } from "../services/partidasService";
import "./DashboardProfesor.css";

const DashboardProfesor = () => {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const [partidas] = useState(() => obtenerPartidas());

  const cantidadPartidas = partidas.length;

  const alumnosUnicos = [...new Set(partidas.map((partida) => partida.nombre))];
  const cantidadAlumnos = alumnosUnicos.length;

  const promedioGeneral =
    cantidadPartidas > 0
      ? Math.round(
          partidas.reduce((acum, partida) => acum + partida.total, 0) /
            cantidadPartidas
        )
      : 0;

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate("/");
  };

  return (
    <div className="dashboard-profesor-page">
      <div className="container py-5">
        <div className="dashboard-profesor-card">
          <div className="dashboard-header text-center">
            <div className="dashboard-iconos">🚜 🌾 🐮 📚</div>
            <h1 className="dashboard-titulo">Panel del Profesor</h1>
            <h2 className="dashboard-bienvenida">
              ¡Bienvenido, {usuario?.nombre}!
            </h2>
            <p className="dashboard-subtitulo">
              Desde aquí podrás revisar el progreso de los alumnos en
              <strong> Aventura en la Granja</strong>.
            </p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-12 col-md-4">
              <div className="resumen-box">
                <div className="resumen-emoji">🎮</div>
                <h3>Partidas</h3>
                <p className="resumen-numero">{cantidadPartidas}</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="resumen-box">
                <div className="resumen-emoji">👦👧</div>
                <h3>Alumnos</h3>
                <p className="resumen-numero">{cantidadAlumnos}</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="resumen-box">
                <div className="resumen-emoji">⭐</div>
                <h3>Promedio</h3>
                <p className="resumen-numero">{promedioGeneral}</p>
              </div>
            </div>
          </div>

          <section className="seccion-dashboard mb-4">
            <h3 className="seccion-titulo">📋 Historial de partidas</h3>

            {partidas.length === 0 ? (
              <div className="mensaje-vacio">
                <p>🌻 Todavía no hay partidas registradas.</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table tabla-profesor align-middle">
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
                        <td className="total-destacado">{partida.total}</td>
                        <td>
                          {new Date(partida.fecha).toLocaleString("es-AR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section className="seccion-dashboard mb-4">
            <h3 className="seccion-titulo">📝 Gestión de preguntas</h3>
            <div className="gestion-box">
              <p>
                Aquí podrás agregar, editar y eliminar preguntas de los juegos.
              </p>
              <p className="gestion-texto-secundario">
                Esta sección la seguiremos completando en la próxima etapa.
              </p>
            </div>
          </section>

          <div className="text-center">
            <button
              className="btn btn-danger btn-lg dashboard-btn-salir"
              onClick={handleCerrarSesion}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfesor;