
import axios from "axios";

export async function obtenerAnimalesComida() {
  const respuesta = await axios.get("/animales-comida.json");

  return respuesta.data;
}
