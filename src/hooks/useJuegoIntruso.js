import { useState, useEffect, useRef } from "react";
import { obtenerRondasIntruso } from "../services/juegosService";

export const useJuegoIntruso = (onFinalizar) => {
  const [rondas, setRondas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const [ronda, setRonda] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [seleccion, setSeleccion] = useState(null);

  const finalizadoRef = useRef(false);
  
useEffect(() => {
  const cargarRondas = async () => {
    try {
      const datos = await obtenerRondasIntruso();
      setRondas(datos);
    } catch (error) {
      console.error("Error al cargar las rondas:", error);
      setError("No se pudieron cargar las rondas.");
    } finally {
      setCargando(false);
    }
  };


  cargarRondas();
}, []);
   
const rondaActual = rondas[ronda];

const respondida = seleccion !== null;

const acerto = rondaActual
  ? seleccion === rondaActual.intruso
  : false;

const esUltimaRonda =
  rondas.length > 0 && ronda === rondas.length - 1;

const handleSeleccionar = (nombre) => {
  if (respondida || !rondaActual) return;

  setSeleccion(nombre);

  if (nombre === rondaActual.intruso) {
    setPuntaje((prev) => prev + 10);
  }
};

const handleSiguiente = () => {
  if (finalizadoRef.current) return;

  if (esUltimaRonda) {
    finalizadoRef.current = true;
    onFinalizar(puntaje);
    return;
  }

  setRonda((prev) => prev + 1);
  setSeleccion(null);
};

  return {
    rondas,
    setRondas,
    cargando,
    setCargando,
    error,
    setError,
    ronda,
    setRonda,
    puntaje,
    setPuntaje,
    seleccion,
    setSeleccion,
    finalizadoRef,
      rondaActual,
     respondida,
     acerto,
     esUltimaRonda,
     handleSeleccionar,
     handleSiguiente
  };
};

