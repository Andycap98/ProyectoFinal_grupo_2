import { useState } from "react";

// Las imágenes están en public/animales/ y se piden con ruta absoluta
// (ej: /animales/perro.png). Todos los archivos son .png.
// Las 5 rondas del juego (según la consigna).
// Cada ronda tiene 3 animales y el nombre del intruso.
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

  const rondaActual = rondas[ronda];

  return (
    <div className="container text-center py-4">
      <h2>El Intruso de la Granja</h2>
      <p>
        Ronda {ronda + 1} de {rondas.length}
      </p>

      <div className="d-flex justify-content-center gap-4 my-4">
        {rondaActual.animales.map((animal) => (
          <div key={animal.nombre}>
            <img
              src={animal.imagen}
              alt={animal.nombre}
              width="160"
              height="160"
              style={{ objectFit: "contain" }}
            />
            <div>
              <strong>{animal.nombre}</strong>
            </div>
          </div>
        ))}
      </div>

      <p>Haz clic en el animal que NO pertenece a la granja</p>
    </div>
  );
}

export default JuegoIntruso;
