
import axios from "axios";

export async function obtenerAnimalesComida() {
  const respuesta = await axios.get("/animales-comida.json");

  return respuesta.data;
}

export async function obtenerRondasIntruso() {
  const respuesta = await axios.get("/animales-intruso.json");
 
  return respuesta.data;
}