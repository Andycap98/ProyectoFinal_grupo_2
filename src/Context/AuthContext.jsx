
import { useState } from "react";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider({ children }) {
  
const [usuario, setUsuario] = useState(() => {
  const usuarioGuardado = sessionStorage.getItem("usuario");
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
});


const iniciarSesion = (usuarioValidado) => {
  setUsuario(usuarioValidado);

  sessionStorage.setItem(
    "usuario",
    JSON.stringify(usuarioValidado)
  );
};


const cerrarSesion = () => {
  setUsuario(null);
  sessionStorage.removeItem("usuario");
};

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}
