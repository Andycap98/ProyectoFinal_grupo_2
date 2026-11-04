import { useState } from "react";

function JuegoComida({ onFinalizar }) {

  // Array con los animales, sus opciones y sus respuestas correctas
  const animales = [
    {
      animal: "Vaca",
      imagen: "🐄",
      opciones: ["Pasto", "Carne", "Banana"],
      correcta: "Pasto"
    },
    {
      animal: "Gallina",
      imagen: "🐔",
      opciones: ["Maíz", "Pasto", "Pescado"],
      correcta: "Maíz"
    },
    {
      animal: "Chancho",
      imagen: "🐷",
      opciones: [
        "Todo lo que encuentra",
        "Solo Pasto",
        "Solo Carne"
      ],
      correcta: "Todo lo que encuentra"
    },
    {
      animal: "Oveja",
      imagen: "🐑",
      opciones: ["Pasto", "Hamburguesa", "Pizza"],
      correcta: "Pasto"
    },
    {
      animal: "Caballo",
      imagen: "🐴",
      opciones: ["Pasto y Zanahoria", "Pollo", "Helado"],
      correcta: "Pasto y Zanahoria"
    }
  ];

  // Estados del juego
  const [rondaActual, setRondaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [respondido, setRespondido] = useState(false);
  const [terminado, setTerminado] = useState(false);

  // Función para comprobar la respuesta
  const comprobarRespuesta = (opcion) => {

    // Evita responder más de una vez por ronda
    if (respondido) return;

    setRespondido(true);

    let nuevoPuntaje = puntaje;

    if (opcion === animales[rondaActual].correcta) {

      nuevoPuntaje = puntaje + 10;

      setPuntaje(nuevoPuntaje);

      setMensaje("¡Correcto! " + animales[rondaActual].animal + " comió. 🎉");

    } else {

      setMensaje("¡Esa no es su comida! Intentá con el próximo animal. ❌");

    }

    // Esperamos un momento y avanzamos
    setTimeout(() => {

      // Si estamos en la última ronda, termina el juego
      if (rondaActual === animales.length - 1) {

        setTerminado(true);

        if (onFinalizar) {
          onFinalizar(nuevoPuntaje);
        }

      } else {

        setRondaActual(rondaActual + 1);
        setMensaje("");
        setRespondido(false);

      }

    }, 1500);

  };

  // Pantalla final
  if (terminado) {
    return (
      <div className="container text-center mt-5">

        <h2>¡Juego terminado! 🎉</h2>

        <h3 className="mt-4">
          Tu puntaje fue: {puntaje} / 50
        </h3>

        <p>¡Gracias por alimentar a los animales!</p>

      </div>
    );
  }

  // Animal correspondiente a la ronda actual
  const animal = animales[rondaActual];

  return (

    <div className="container mt-4">

      <div className="card shadow text-center p-4">

        <h2 className="mb-3">
          ¡Hora de Comer! 🐾
        </h2>

        <h5 className="text-muted">
          Ronda {rondaActual + 1} de 5
        </h5>

        <div className="my-4">

          <div style={{ fontSize: "100px" }}>
            {animal.imagen}
          </div>

          <h3>{animal.animal}</h3>

          <p className="lead">
            ¿Qué come este animal?
          </p>

        </div>

        <div className="d-grid gap-3">

          {animal.opciones.map((opcion, indice) => (

            <button
              key={indice}
              className="btn btn-success btn-lg"
              onClick={() => comprobarRespuesta(opcion)}
              disabled={respondido}
            >
              {opcion}
            </button>

          ))}

        </div>

        {mensaje && (

          <div className="alert alert-info mt-4">
            {mensaje}
          </div>

        )}

        <h4 className="mt-3">
          Puntaje: {puntaje} / 50
        </h4>

      </div>

    </div>

  );

}

export default JuegoComida;