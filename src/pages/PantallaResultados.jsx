import { Navigate, useOutletContext, useSearchParams } from "react-router-dom";
import { useAuth } from "../Context/useAuth";
import { obtenerPartidas } from "../services/partidasService";
import Resultados from "../components/Resultados";

const PantallaResultados = () => {
  const { usuario } = useAuth();
  const { reiniciarPartida } = useOutletContext();
  const [parametros] = useSearchParams();
  const partidaId = parametros.get("partida");

  const partida = obtenerPartidas().find(
    (registro) =>
      registro.id === partidaId && registro.usuarioId === usuario?.id
  );

  if (!partida) {
    return <Navigate to="/juego-comida" replace />;
  }

  return (
    <Resultados
      nombre={partida.nombre}
      puntajeComida={partida.puntajeJuego1}
      puntajeIntruso={partida.puntajeJuego2}
      onReiniciar={reiniciarPartida}
    />
  );
};

export default PantallaResultados;