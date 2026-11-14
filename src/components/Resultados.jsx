import "./Resultados.css";

const PUNTAJE_MAXIMO_JUEGO = 50;
const PUNTAJE_MAXIMO_TOTAL = PUNTAJE_MAXIMO_JUEGO * 2;

const Resultados = ({
  nombre = "Jugador",
  puntajeComida = 0,
  puntajeIntruso = 0,
  onReiniciar,
}) => {
  const puntajeTotal = puntajeComida + puntajeIntruso;

  const obtenerMensaje = () => {
  if (puntajeTotal === 100) return "🌟 ¡PERFECTO!";
  if (puntajeTotal >= 90) return "🎉 ¡EXCELENTE!";
  if (puntajeTotal >= 70) return "👏 ¡MUY BIEN!";
  if (puntajeTotal >= 50) return "🌻 ¡BUEN TRABAJO!";
  return "💚 ¡VOLVAMOS A JUGAR!";
};

  const obtenerClaseMensaje = () => {
    if (puntajeTotal >= 90) return "mensaje-excelente";
    if (puntajeTotal >= 50) return "mensaje-bueno";
    return "mensaje-mejorar";
  };

  return (
    <div className="resultados-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="resultados-card">
              <div className="resultados-header text-center">
                <h1 className="resultados-titulo">🐮 Aventura en la Granja</h1>
                <p className="resultados-subtitulo">
                  ¡Terminaste tu aventura!
                </p>
              </div>

              <div className="text-center mb-4">
                <h2 className="jugador-nombre">Resultados de {nombre}</h2>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12 col-md-4">
                  <div className="resultado-box">
                    <span className="resultado-icono">🍽️</span>
                    <h3>Juego 1</h3>
                    <p>¡Hora de Comer!</p>
                    <div className="resultado-puntaje">
                      {puntajeComida} / {PUNTAJE_MAXIMO_JUEGO}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="resultado-box">
                    <span className="resultado-icono">🔍</span>
                    <h3>Juego 2</h3>
                    <p>El Intruso de la Granja</p>
                    <div className="resultado-puntaje">
                      {puntajeIntruso} / {PUNTAJE_MAXIMO_JUEGO}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="resultado-box total-box">
                    <span className="resultado-icono">⭐</span>
                    <h3>Total</h3>
                    <p>Puntaje final</p>
                    <div className="resultado-puntaje">
                      {puntajeTotal} / {PUNTAJE_MAXIMO_TOTAL}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mensaje-final ${obtenerClaseMensaje()}`}>
                {obtenerMensaje()}
              </div>

              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-success btn-lg px-4 resultados-btn"
                  onClick={onReiniciar}
                >
                  Jugar de nuevo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultados;