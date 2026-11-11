
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  // Estados compartidos de la aplicación
  const [puntajeJuego1, setPuntajeJuego1] = useState(0);
  const [puntajeJuego2, setPuntajeJuego2] = useState(0);
  const [nombreJugador, setNombreJugador] = useState("");

  const navigate = useNavigate();

  // Finaliza el Juego 1 y pasa al Juego 2
  const terminarJuego1 = (puntaje) => {
    setPuntajeJuego1(puntaje);
    navigate("/juego-intruso");
  };

  // Finaliza el Juego 2 y muestra los resultados
  const terminarJuego2 = (puntaje) => {
    setPuntajeJuego2(puntaje);
    navigate("/resultados");
  };

  return (
    <div>
      <Outlet
        context={{
          terminarJuego1,
          terminarJuego2,
          nombreJugador,
          setNombreJugador,
          puntajeJuego1,
          puntajeJuego2,
        }}
      />
    </div>
  );
}

export default App;

