
import { useState } from "react";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router-dom";


function LoginProfesor() {
  const [nombre, setNombre] = useState("");
  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();

  const handleIngresar = () => {
    if (nombre.trim() === "") {
      alert("Por favor, ingresá tu nombre");
      return;
    }

    iniciarSesion(nombre.trim(), "profesor");
    navigate("/profesor");
  };

  return (
    <div>
      <h1>Acceso del profesor</h1>

      <input
        type="text"
        placeholder="Nombre del profesor"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={handleIngresar}>
        Ingresar
      </button>
    </div>
  );
}

export default LoginProfesor;
