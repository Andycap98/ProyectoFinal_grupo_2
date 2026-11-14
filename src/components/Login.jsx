
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";
import { login } from "../services/authService";
import "./Login.css";

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
  <main className="login-granja">
    <div className="granja-decoracion" aria-hidden="true">
      <div className="nube nube-izquierda"></div>
      <div className="nube nube-derecha"></div>
      <div className="granero-papel">
        <div className="techo-granero"></div>
        <div className="puerta-granero"></div>
      </div>
      <div className="arbol-papel arbol-izquierdo"></div>
      <div className="arbol-papel arbol-derecho"></div>
    </div>

    <form className="login-papel" onSubmit={gestionarLogin}>

      <h1>🐮 Aventura en la Granja</h1>

      <p className="login-subtitulo">
        ¡Bienvenido a nuestra granja de papel!
        Ingresá para comenzar tu aventura.
      </p>

      <div className="login-campo">
        <label htmlFor="user">Correo electrónico</label>
        <input
          id="user"
          type="email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </div>

      <div className="login-campo">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && (
        <p className="login-error" role="alert">
          {error}
        </p>
      )}

      <button className="login-boton" type="submit">
        🌱 ¡Entrar a la granja!
      </button>
    </form>
  </main>
);

};

export default Login;
