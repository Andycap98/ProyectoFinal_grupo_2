// Pantalla 4: muestra los resultados del niño en ambos juegos.
// Props:
//   nombre         -> nombre del jugador (viene del Login)
//   puntajeComida  -> puntaje del Juego 1: ¡Hora de Comer! (0 a 50)
//   puntajeIntruso -> puntaje del Juego 2: El Intruso de la Granja (0 a 50)
//   onReiniciar    -> función para volver al Login (se conecta en la próxima entrega)

const PUNTAJE_MAXIMO_JUEGO = 50;
const PUNTAJE_MAXIMO_TOTAL = PUNTAJE_MAXIMO_JUEGO * 2; // 100

function Resultados({
  nombre = "Jugador de prueba",
  puntajeComida = 40,
  puntajeIntruso = 30,
  onReiniciar,
}) {
  // Total de ambos juegos (máximo 100)
  const puntajeTotal = puntajeComida + puntajeIntruso;

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow text-center">
            <div className="card-header bg-success text-white">
              <h1 className="h3 mb-0">🐮 Aventura en la Granja</h1>
            </div>

            <div className="card-body">
              <h2 className="h4 mb-4">¡Resultados de {nombre}!</h2>

              <ul className="list-group mb-4">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>🍽️ ¡Hora de Comer!</span>
                  <span className="badge bg-primary rounded-pill fs-6">
                    {puntajeComida} / {PUNTAJE_MAXIMO_JUEGO}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>🔍 El Intruso de la Granja</span>
                  <span className="badge bg-primary rounded-pill fs-6">
                    {puntajeIntruso} / {PUNTAJE_MAXIMO_JUEGO}
                  </span>
                </li>
              </ul>

              <div className="alert alert-warning mb-0">
                <p className="mb-1 fw-bold">Puntaje total</p>
                <p className="display-5 fw-bold mb-0">
                  {puntajeTotal} / {PUNTAJE_MAXIMO_TOTAL}
                </p>
              </div>
            </div>

            {/* Próximas entregas: mensaje de felicitación y botón "Jugar de nuevo" (onReiniciar) */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultados;