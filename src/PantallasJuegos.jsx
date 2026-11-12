
import { useOutletContext } from "react-router-dom";

import JuegoComida from "./components/JuegoComida";
import JuegoIntruso from "./components/JuegoIntruso";
import Resultados from "./components/Resultados";

// Pantalla 2: Juego de comida
export function PantallaJuegoComida() {
  const { terminarJuego1 } = useOutletContext();

  return <JuegoComida onFinalizar={terminarJuego1} />;
}

// Pantalla 3: Juego del intruso
export function PantallaJuegoIntruso() {
  const { terminarJuego2 } = useOutletContext();

  return <JuegoIntruso onFinalizar={terminarJuego2} />;
}

// Pantalla 4: Resultados
export function PantallaResultados() {
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
}
