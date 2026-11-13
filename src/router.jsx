import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./components/Login";
import DashboardProfesor from "./components/DashboardProfesor";
import ProtectorRuta from "./components/ProtectorRuta";

import {
  PantallaJuegoComida,
  PantallaJuegoIntruso,
  PantallaResultados,
} from "./PantallasJuegos";

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
        path: "login-alumno",
        element: <Login />,
      },
      {
        path: "login-profesor",
        element: <Login />,
      },
      {
        path: "juego-comida",
        element: (
          <ProtectorRuta rolRequerido="alumno">
            <PantallaJuegoComida />
          </ProtectorRuta>
        ),
      },
      {
        path: "juego-intruso",
        element: (
          <ProtectorRuta rolRequerido="alumno">
            <PantallaJuegoIntruso />
          </ProtectorRuta>
        ),
      },
      {
        path: "resultados",
        element: (
          <ProtectorRuta rolRequerido="alumno">
            <PantallaResultados />
          </ProtectorRuta>
        ),
      },
      {
        path: "profesor",
        element: (
          <ProtectorRuta rolRequerido="profesor">
            <DashboardProfesor />
          </ProtectorRuta>
        ),
      },
    ],
  },
]);

export default router;

