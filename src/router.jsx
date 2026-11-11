
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./components/Login";

import {
  PantallaJuegoComida,
  PantallaJuegoIntruso,
  PantallaResultados,
} from "./PantallasJuegos";

// Configuración de las cuatro pantallas
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

