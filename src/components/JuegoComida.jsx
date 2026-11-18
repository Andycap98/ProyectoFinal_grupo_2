
import { useJuegoComida } from "../hooks/useJuegoComida";
import "./JuegoComida.css";

const imagenesAlimentos = {
  PASTO: "🌱",
  CARNE: "🥩",
  BANANA: "🍌",
  ZANAHORIA: "🥕",
  MAÍZ: "🌽",
  MANZANA: "🍎",
  PESCADO: "🐟",
  SEMILLAS: "🌻",
  "TODO LO QUE ENCUENTRA": "🍎🥕🌽",
  "SOLO PASTO": "🌱",
  "SOLO CARNE": "🥩",
  "PASTO Y ZANAHORIA": "🌱🥕",
  POLLO: "🍗",
  HELADO: "🍦",
  PIZZA: "🍕",
  HAMBURGUESA: "🍔",
};

const obtenerImagenAlimento = (alimento) => {
  const nombre = alimento.trim().toUpperCase();

  return imagenesAlimentos[nombre] || "❓";
};

const obtenerPregunta = (nombreAnimal) => {
  const nombre = nombreAnimal.toLowerCase().trim();

  const animalesFemeninos = [
    "vaca",
    "gallina",
    "oveja",
    "cabra",
    "yegua",
  ];

  const articulo = animalesFemeninos.includes(nombre)
    ? "la"
    : "el";

  return `¿Qué come ${articulo} ${nombre}?`;
};

const leerPregunta = (texto) => {
  if (!("speechSynthesis" in window)) {
    alert("Este navegador no permite reproducir voz.");
    return;
  }

  window.speechSynthesis.cancel();

  const mensaje = new SpeechSynthesisUtterance(texto);

  mensaje.lang = "es-AR";
  mensaje.rate = 0.85;
  mensaje.pitch = 1;

  window.speechSynthesis.speak(mensaje);
};

const JuegoComida = ({ onFinalizar }) => {
  const {
    animales,
    cargando,
    error,
    rondaActual,
    puntaje,
    mensaje,
    respondido,
    terminado,
    comprobarRespuesta,
  } = useJuegoComida(onFinalizar);

  // Mientras Axios carga los animales
  if (cargando) {
    return (
      <div className="container text-center mt-5">
        <h2>🐮 Cargando animales...</h2>
        <p>¡Estamos preparando la comida de la granja!</p>
      </div>
    );
  }

  // Si ocurre un error o no se reciben animales
  if (error || animales.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>⚠️ No pudimos iniciar el juego</h2>
        <p>{error || "No hay animales disponibles."}</p>
      </div>
    );
  }

  // Pantalla final
  if (terminado) {
    return (
      <div className="container text-center mt-5">
        <h2>¡Juego terminado! 🎉</h2>

        <h3 className="mt-4">
          Tu puntaje fue: {puntaje} / {animales.length * 10}
        </h3>

        <p>¡Gracias por alimentar a los animales!</p>
      </div>
    );
  }

  // Animal correspondiente a la ronda actual
  const animal = animales[rondaActual];

  return (
    <div className="juego-comida container py-4">
      <div className="card shadow text-center p-4">
        <h2 className="mb-3">
          🍎 ¡A COMER!
        </h2>

        <h5 className="text-muted">
          Ronda {rondaActual + 1} de {animales.length}
        </h5>

        <div className="my-4">
          <div className="animal-emoji">
            {animal.imagen}
          </div>

          <h3>{animal.animal}</h3>

          <p className="lead">
            {obtenerPregunta(animal.animal).toUpperCase()}
          </p>

          <button
            type="button"
            className="btn btn-warning btn-lg mt-3"
            onClick={() =>
              leerPregunta(obtenerPregunta(animal.animal))
            }
            aria-label="Escuchar la pregunta"
          >
            🔊 Escuchar pregunta
          </button>
        </div>

        <div className="d-grid gap-3">
          {animal.opciones.map((opcion, indice) => (
            <button
              key={indice}
              type="button"
              className="btn btn-success btn-lg"
              onClick={() => comprobarRespuesta(opcion)}
              disabled={respondido}
            >
              <span className="me-2" aria-hidden="true">
                {obtenerImagenAlimento(opcion)}
              </span>

              <span>{opcion.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {mensaje && (
          <div className="alert alert-info mt-4">
            {mensaje}
          </div>
        )}

        <h4 className="mt-3">
          Puntaje: {puntaje} / {animales.length * 10}
        </h4>
      </div>
    </div>
  );
};

export default JuegoComida;
