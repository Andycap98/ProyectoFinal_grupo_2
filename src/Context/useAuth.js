
import { useContext } from "react";
import { AuthContext } from "./AuthContext.js";
export function useAuth() {
  const contexto = useContext(AuthContext);

  if (contexto === null) {
    throw new Error("useAuth debe utilizarse dentro de AuthProvider");
  }

  return contexto;
}
