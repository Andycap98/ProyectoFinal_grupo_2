
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./components/Login";

import LoginProfesor from "./components/LoginProfesor";
import DashboardProfesor from "./components/DashboardProfesor";
import RutaProfesor from "./components/RutaProfesor";
import Bienvenida from "./components/Bienvenida";


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
  element: <Bienvenida />,
},
{
  path: "login-alumno",
  element: <Login />,
},
{
  path: "login-profesor",
  element: <LoginProfesor />,
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

{
  path: "login-profesor",
  element: <LoginProfesor />,
},
{
  path: "profesor",
  element: (
    <RutaProfesor>
      <DashboardProfesor />
    </RutaProfesor>
  ),
},

    ],
  },
]);

export default router;

