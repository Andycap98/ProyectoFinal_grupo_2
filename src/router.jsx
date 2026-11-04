import { createBrowserRouter } from "react-router-dom";
import JuegoComida from "./components/JuegoComida";
import JuegoIntruso from "./components/JuegoIntruso";


import Login from "./components/Login";

function finalizarJuegoComida(puntaje) {
  console.log("Puntaje del Juego 1:", puntaje);
}
function finalizarJuegoIntruso(puntaje) {
  console.log("Puntaje del Juego 2:", puntaje);
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
  element: <JuegoIntruso onFinalizar={finalizarJuegoIntruso} />,
},
{
  path: "/resultados",
  element: <h1>Resultados de la Granja</h1>,
},
]);
export default router;