import { createBrowserRouter, useOutletContext } from "react-router-dom";
import JuegoComida from "./components/JuegoComida";
import JuegoIntruso from "./components/JuegoIntruso";
import App from "./App";

import Login from "./components/Login";

function finalizarJuegoComida(puntaje) {
  console.log("Puntaje del Juego 1:", puntaje);
}
function PantallaJuegoComida() {
  const { terminarJuego1 } = useOutletContext();

  return <JuegoComida onFinalizar={terminarJuego1} />;
}
function PantallaJuegoIntruso() {
  const { terminarJuego2 } = useOutletContext();

  return <JuegoIntruso onFinalizar={terminarJuego2} />;
}
function finalizarJuegoIntruso(puntaje) {
  console.log("Puntaje del Juego 2:", puntaje);
}
const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [ {
  index: true,
  element: <Login />,
},
  {
  path: "/juego-comida",
element: <PantallaJuegoComida />,
 
},
{
  path: "/juego-intruso",
  element: <PantallaJuegoIntruso />,
},
{
  path: "/resultados",
  element: <h1>Resultados de la Granja</h1>,
},  ]
}
]); 
export default router;