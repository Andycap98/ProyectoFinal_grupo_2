import { useState } from 'react';

function Login({ onComenzar })  {
    const [nombre, setNombre] = useState("");
    const handleComenzar = () => {
  if (nombre.trim() === "") {
    alert("Por favor, ingresá tu nombre");
    return;
  }

  onComenzar(nombre.trim());
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