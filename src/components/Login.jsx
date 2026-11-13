
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";
import { login } from "../services/authService";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();

  const gestionarLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!user.trim() || !password) {
      setError("Ingresá tu correo y contraseña");
      return;
    }

    try {
      const usuarioValidado = await login(user.trim(), password);

      if (!usuarioValidado) {
        setError("Usuario o contraseña incorrectos");
        return;
      }

      iniciarSesion(usuarioValidado);

      if (usuarioValidado.rol === "profesor") {
        navigate("/profesor");
      } else if (usuarioValidado.rol === "alumno") {
        navigate("/juego-comida");
      } else {
        setError("El usuario no tiene un rol válido");
      }
    } catch {
      setError("No se pudieron cargar los usuarios");
    }
  };

  return (
    <form onSubmit={gestionarLogin}>
      <h2>Ingresar a la granja</h2>

      <label htmlFor="user">Correo electrónico</label>
      <input
        id="user"
        type="email"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;
