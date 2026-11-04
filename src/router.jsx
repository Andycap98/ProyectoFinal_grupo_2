import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
  path: "/juego-comida",
  element: <h1>¡Hora de Comer!</h1>,
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