import { createBrowserRouter } from "react-router-dom";
import JuegoComida from "./components/JuegoComida";

import Login from "./components/Login";

function finalizarJuegoComida(puntaje) {
  console.log("Puntaje del Juego 1:", puntaje);
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
  path: "/juego-comida",
 element: <JuegoComida onFinalizar={finalizarJuegoComida} />,
},
{
  path: "/juego-intruso",
  element: <h1>El Intruso de la Granja</h1>,
},
{
  path: "/resultados",
  element: <h1>Resultados de la Granja</h1>,
},
]);
export default router;