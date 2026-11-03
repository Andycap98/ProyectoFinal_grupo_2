import Login from './components/Login';
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