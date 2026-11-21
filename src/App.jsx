import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/useAuth";
import { guardarPartida } from "./services/partidasService";

const App = () => {
  const { usuario, cerrarSesion } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const terminarJuego1 = (puntaje) => {
    navigate("/juego-intruso", {
      replace: true,
      state: { usuarioId: usuario.id, puntajeJuego1: puntaje },
    });
  };

  const terminarJuego2 = (puntaje) => {
    const puntajeJuego1 = state?.puntajeJuego1;

    if (
      !["alumno", "profesor"].includes(usuario?.rol) ||
      state?.usuarioId !== usuario.id ||
      !Number.isInteger(puntajeJuego1)
    ) {
      return;
    }

    const partidaGuardada = guardarPartida({
      usuarioId: usuario.id,
      nombre: usuario.nombre,
      puntajeJuego1,
      puntajeJuego2: puntaje,
      total: puntajeJuego1 + puntaje,
    });

    navigate(`/resultados?partida=${partidaGuardada.id}`, {
      replace: true,
    });
  };

  const reiniciarPartida = () => {
    cerrarSesion();
    navigate("/");
  };

  return (
    <div>
      <Outlet context={{ terminarJuego1, terminarJuego2, reiniciarPartida }} />
    </div>
  );
};

export default App;