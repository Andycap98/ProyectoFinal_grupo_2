
import { createBrowserRouter, useOutletContext } from "react-router-dom";

import App from "./App";
import Login from "./components/Login";
import JuegoComida from "./components/JuegoComida";
import JuegoIntruso from "./components/JuegoIntruso";
import Resultados from "./components/Resultados";

// Pantalla 2: Juego de Gabriel
function PantallaJuegoComida() {
  const { terminarJuego1 } = useOutletContext();

  return <JuegoComida onFinalizar={terminarJuego1} />;
}

// Pantalla 3: Juego de Leandro
function PantallaJuegoIntruso() {
  const { terminarJuego2 } = useOutletContext();

  return <JuegoIntruso onFinalizar={terminarJuego2} />;
}

// Pantalla 4: Resultados de Nicolas
function PantallaResultados() {
  const {
    nombreJugador,
    puntajeJuego1,
    puntajeJuego2
  } = useOutletContext();

  return (
    <Resultados
      nombre={nombreJugador}
      puntajeComida={puntajeJuego1}
      puntajeIntruso={puntajeJuego2}
    />
  );
}

// Configuracion de las cuatro pantallas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "juego-comida",
        element: <PantallaJuegoComida />,
      },
      {
        path: "juego-intruso",
        element: <PantallaJuegoIntruso />,
      },
      {
        path: "resultados",
        element: <PantallaResultados />,
      },
    ],
  },
]);

export default router;
