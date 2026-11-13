import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/useAuth";
import { guardarPartida } from "./services/partidasService";

const App = () => {
  // Usuario conectado y función para cerrar sesión
  const { usuario, cerrarSesion } = useAuth();

  // Estados compartidos de los juegos
  const [puntajeJuego1, setPuntajeJuego1] = useState(0);
  const [puntajeJuego2, setPuntajeJuego2] = useState(0);

  // El nombre ahora proviene del usuario autenticado
  const nombreJugador = usuario?.nombre ?? "";

  const navigate = useNavigate();

  // Finaliza el Juego 1 y pasa al Juego 2
  const terminarJuego1 = (puntaje) => {
    setPuntajeJuego1(puntaje);
    navigate("/juego-intruso");
  };

  // Finaliza el Juego 2 y muestra los resultados
  
const terminarJuego2 = (puntaje) => {
  setPuntajeJuego2(puntaje);

  if (usuario?.rol === "alumno") {
    guardarPartida({
      usuarioId: usuario.id,
      nombre: usuario.nombre,
      puntajeJuego1: puntajeJuego1,
      puntajeJuego2: puntaje,
      total: puntajeJuego1 + puntaje,
    });
  }

  navigate("/resultados");
};


  // Reinicia los puntajes y vuelve al Login único
  const reiniciarPartida = () => {
    setPuntajeJuego1(0);
    setPuntajeJuego2(0);
    cerrarSesion();
    navigate("/");
  };

  return (
    <div>
      <Outlet
        context={{
          terminarJuego1,
          terminarJuego2,
          nombreJugador,
          puntajeJuego1,
          puntajeJuego2,
          reiniciarPartida,
        }}
      />
    </div>
  );
};

export default App;

