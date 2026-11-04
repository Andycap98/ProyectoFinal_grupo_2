import { useState } from "react";
import "./JuegoIntruso.css";

const rondas = [
  {
    animales: [
      { nombre: "Perro", imagen: "/animales/perro.png" },
      { nombre: "Gato", imagen: "/animales/gato.png" },
      { nombre: "León", imagen: "/animales/leon.png" },
    ],
    intruso: "León",
  },
  {
    animales: [
      { nombre: "Vaca", imagen: "/animales/vaca.png" },
      { nombre: "Oveja", imagen: "/animales/oveja.png" },
      { nombre: "Cocodrilo", imagen: "/animales/cocodrilo.png" },
    ],
    intruso: "Cocodrilo",
  },
  {
    animales: [
      { nombre: "Gallina", imagen: "/animales/gallina.png" },
      { nombre: "Chancho", imagen: "/animales/chancho.png" },
      { nombre: "Elefante", imagen: "/animales/elefante.png" },
    ],
    intruso: "Elefante",
  },
  {
    animales: [
      { nombre: "Caballo", imagen: "/animales/caballo.png" },
      { nombre: "Vaca", imagen: "/animales/vaca.png" },
      { nombre: "Tiburón", imagen: "/animales/tiburon.png" },
    ],
    intruso: "Tiburón",
  },
  {
    animales: [
      { nombre: "Oveja", imagen: "/animales/oveja.png" },
      { nombre: "Perro", imagen: "/animales/perro.png" },
      { nombre: "Pingüino", imagen: "/animales/pinguino.png" },
    ],
    intruso: "Pingüino",
  },
];

function JuegoIntruso({ onFinalizar }) {
  const [ronda, setRonda] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  // Nombre del animal que eligió el niño en esta ronda (null = todavía no eligió)
  const [seleccion, setSeleccion] = useState(null);

  const rondaActual = rondas[ronda];
  const respondida = seleccion !== null;
  const acerto = seleccion === rondaActual.intruso;
  const esUltimaRonda = ronda === rondas.length - 1;

  const handleSeleccionar = (nombre) => {
    if (respondida) return; // ya respondió: no se puede cambiar la respuesta

    setSeleccion(nombre);
    if (nombre === rondaActual.intruso) {
      setPuntaje(puntaje + 10);
    }
  };

  const handleSiguiente = () => {
    if (esUltimaRonda) {
      // Cuando se toca este botón, "puntaje" ya incluye la última respuesta
      onFinalizar(puntaje);
      return;
    }
    setRonda(ronda + 1);
    setSeleccion(null); // la ronda nueva arranca sin respuesta
  };

  // Una vez respondida la ronda, el intruso se pinta de rojo y los demás de verde
  const claseCirculo = (nombre) => {
    if (!respondida) return "circulo-animal";
    return nombre === rondaActual.intruso
      ? "circulo-animal circulo-intruso"
      : "circulo-animal circulo-granja";
  };

  return (
    <div className="juego-intruso container text-center py-4">
      <h2 className="titulo-intruso">El Intruso de la Granja</h2>
      <p>
        Ronda {ronda + 1} de {rondas.length} · Puntaje: {puntaje}
      </p>

      <div className="d-flex justify-content-center gap-4 my-4">
        {rondaActual.animales.map((animal) => (
          <div key={animal.nombre}>
            <button
              type="button"
              className={claseCirculo(animal.nombre)}
              onClick={() => handleSeleccionar(animal.nombre)}
              disabled={respondida}
            >
              <img src={animal.imagen} alt={animal.nombre} />
            </button>
            <div>
              <strong>{animal.nombre}</strong>
            </div>
            {respondida && animal.nombre === rondaActual.intruso && (
              <div className="etiqueta-intruso">¡INTRUSO!</div>
            )}
          </div>
        ))}
      </div>

      {respondida ? (
        <>
          <div className={acerto ? "alert alert-success" : "alert alert-danger"}>
            {acerto
              ? "¡Sacaste al intruso! La granja está a salvo. +10 puntos"
              : "Incorrecto. Ese sí es de la granja."}
          </div>
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={handleSiguiente}
          >
            {esUltimaRonda ? "Ver resultado" : "Siguiente"}
          </button>
        </>
      ) : (
        <p>Haz clic en el animal que NO pertenece a la granja</p>
      )}
    </div>
  );
}

export default JuegoIntruso;
