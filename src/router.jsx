import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import PantallaProfesor from "./pages/PantallaProfesor";
import ProtectorRuta from "./components/ProtectorRuta";
import PantallaJuegoComida from "./pages/PantallaJuegoComida";
import PantallaJuegoIntruso from "./pages/PantallaJuegoIntruso";
import PantallaResultados from "./pages/PantallaResultados";
import Inicio from "./pages/Inicio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
    index: true,
      element: <Inicio />,
         },
      {
        path: "login-alumno",
           element: <Inicio />,
            },
      {
        path: "login-profesor",
        element: <Inicio />,
      },
            {
        path: "juego-comida",
        element: (
          <ProtectorRuta>
            <PantallaJuegoComida />
          </ProtectorRuta>
        ),
      },
      {
        path: "juego-intruso",
        element: (
          <ProtectorRuta>
            <PantallaJuegoIntruso />
          </ProtectorRuta>
        ),
      },
      {
        path: "resultados",
        element: (
          <ProtectorRuta>
            <PantallaResultados />
          </ProtectorRuta>
        ),
      },
           {
        path: "profesor",
        element: (
          <ProtectorRuta rolRequerido="profesor">
            <PantallaProfesor />
          </ProtectorRuta>
        ),
      },
    ],
  },
]);

export default router;

