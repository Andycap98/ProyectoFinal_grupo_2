
import { useState, useEffect, useRef } from "react";
import { obtenerAnimalesComida } from "../services/juegosService";

export const useJuegoComida = (onFinalizar) => {
  const [animales, setAnimales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const [rondaActual, setRondaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [respondido, setRespondido] = useState(false);
  const [terminado, setTerminado] = useState(false);

  const temporizadorRef = useRef(null);
  const finalizadoRef = useRef(false);

  useEffect(() => {
    let activo = true;

    const cargarAnimales = async () => {
      try {
        const datos = await obtenerAnimalesComida();

        if (activo) {
          setAnimales(datos);
        }
      } catch (error) {
        console.error("Error al cargar los animales:", error);

        if (activo) {
          setError("No se pudieron cargar los animales.");
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    };

    cargarAnimales();

    return () => {
      activo = false;
      clearTimeout(temporizadorRef.current);
    };
  }, []);

  const comprobarRespuesta = (opcion) => {
    if (
      respondido ||
      terminado ||
      finalizadoRef.current ||
      !animales[rondaActual]
    ) {
      return;
    }

    setRespondido(true);

    const animal = animales[rondaActual];
    const esCorrecta = opcion === animal.correcta;
    const nuevoPuntaje = puntaje + (esCorrecta ? 10 : 0);

    if (esCorrecta) {
      setPuntaje(prev => prev + 10);
      setMensaje(`¡Correcto! ${animal.animal} comió. 🎉`);
    } else {
      setMensaje("¡Esa no es su comida! Intentá con el próximo animal. ❌");
    }

    temporizadorRef.current = setTimeout(() => {
      if (rondaActual === animales.length - 1) {
        finalizadoRef.current = true;
        setTerminado(true);
        onFinalizar?.(nuevoPuntaje);
      } else {
        setRondaActual(prev => prev + 1);
        setMensaje("");
        setRespondido(false);
      }
    }, 1500);
  };

  return {
    animales,
    cargando,
    error,
    rondaActual,
    puntaje,
    mensaje,
    respondido,
    terminado,
    comprobarRespuesta,
  };
};

