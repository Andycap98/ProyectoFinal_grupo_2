
import { useState } from "react";
import JuegoComida from "./components/JuegoComida";
import { Outlet, useNavigate } from "react-router-dom";

function App() {

  const [puntajeFinal, setPuntajeFinal] = useState(null);
  const [puntajeJuego1, setPuntajeJuego1] = useState(0);
  const [puntajeJuego2, setPuntajeJuego2] = useState(0);
  const [nombreJugador, setNombreJugador] = useState("");
  console.log("Nombre del jugador:", nombreJugador);
  const navigate = useNavigate();

  const finalizarJuego = (puntaje) => {
    setPuntajeFinal(puntaje);
  };
  const terminarJuego1 = (puntaje) => {
  setPuntajeJuego1(puntaje);
  navigate("/juego-intruso");
};
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
        puntajeJuego2
      }}
    />
  </div>
);
}

export default App;