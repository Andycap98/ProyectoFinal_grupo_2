import { useState } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";

import { useAuth } from "../Context/useAuth";

function Login()  {
    const [nombre, setNombre] = useState("");
    const { setNombreJugador } = useOutletContext();
    const navigate = useNavigate();

   const { iniciarSesion } = useAuth();

    const handleComenzar = () => {
  if (nombre.trim() === "") {
    alert("Por favor, ingresá tu nombre");
    return;
  }
 setNombreJugador(nombre.trim());
  
  iniciarSesion(nombre.trim(), "alumno");

  navigate("/juego-comida");
};
  return (
    <div>
      <h1>Aventura en la Granja</h1>
      <input
  type="text"
  placeholder="Ingresá tu nombre"
  value={nombre}
onChange={(e) => setNombre(e.target.value)}
/>
<button onClick={handleComenzar}>Comenzar</button>
    </div>
  );
}

export default Login;