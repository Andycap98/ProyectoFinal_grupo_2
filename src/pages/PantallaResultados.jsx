import { useOutletContext } from "react-router-dom";

import Resultados from "../components/Resultados";

const PantallaResultados = () => {
  const {
    nombreJugador,
    puntajeJuego1,
    puntajeJuego2,
    reiniciarPartida,
  } = useOutletContext();

  return (
    <Resultados
      nombre={nombreJugador}
      puntajeComida={puntajeJuego1}
      puntajeIntruso={puntajeJuego2}
      onReiniciar={reiniciarPartida}
    />
  );
};

export default PantallaResultados;