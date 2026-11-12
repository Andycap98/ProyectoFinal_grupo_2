
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  
const [usuario, setUsuario] = useState(() => {
  const usuarioGuardado = sessionStorage.getItem("usuario");
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
});

const iniciarSesion = (nombre, rol) => {
  const nuevoUsuario = {
    nombre: nombre,
    rol: rol,
  };

  setUsuario(nuevoUsuario);
  sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
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
