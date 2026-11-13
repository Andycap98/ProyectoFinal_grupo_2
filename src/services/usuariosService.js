
import axios from "axios";

export const listarUsuarios = async () => {
  try {
    const respuesta = await axios.get("/data/usuarios.json");

    if (!Array.isArray(respuesta.data)) {
      throw new Error("El archivo de usuarios no contiene un arreglo");
    }

    return respuesta.data;
  } catch (error) {
    throw new Error("No se pudieron cargar los usuarios", {
      cause: error,
    });
  }
};
