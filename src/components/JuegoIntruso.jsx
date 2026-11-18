
import { useJuegoIntruso } from "../hooks/useJuegoIntruso";
import "./JuegoIntruso.css";


const JuegoIntruso = ({ onFinalizar }) => {
const {
  rondas,
  cargando,
  error,
  ronda,
  puntaje,
  rondaActual,
  respondida,
  acerto,
  esUltimaRonda,
  handleSeleccionar,
  handleSiguiente,
} = useJuegoIntruso(onFinalizar);

  if (cargando) {
    return (
      <div className="container text-center mt-5">
        <h2> Cargando el juego...</h2>
        <p>¡Estamos buscando al intruso de la granja!</p>
      </div>
    );
  }

  if (error || rondas.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2> No pudimos iniciar el juego</h2>
        <p>{error || "No hay rondas disponibles."}</p>
      </div>
    );
  }



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
        <p>🐾 TOCÁ EL ANIMAL QUE NO VA</p>
      )}
    </div>
 
  );

};
export default JuegoIntruso;