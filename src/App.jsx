/*import Login from './components/Login';
import { useState } from 'react';
import './App.css';

function App() {
  const [nombreJugador, setNombreJugador] = useState("");
  const [pantalla, setPantalla] = useState("login");
  const iniciarJuego = (nombre) => {
  setNombreJugador(nombre);
  setPantalla("juegoComida");
};
return (
  <>
    {pantalla === "login" ? (
      <Login onComenzar={iniciarJuego} />
    ) : (
      <h1>¡Hora de Comer!</h1>
    )}
  </>
);
}
export default App;
*/

import { useState } from "react";
import JuegoComida from "./JuegoComida";

function App() {

  const [puntajeFinal, setPuntajeFinal] = useState(null);

  const finalizarJuego = (puntaje) => {
    setPuntajeFinal(puntaje);
  };

  return (
    <div>

      <JuegoComida onFinalizar={finalizarJuego} />

      {puntajeFinal !== null && (
        <h3 className="text-center mt-3">
          Resultado recibido por App: {puntajeFinal} puntos
        </h3>
      )}

    </div>
  );

}

export default App;