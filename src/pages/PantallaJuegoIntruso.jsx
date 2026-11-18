import { Navigate, useLocation, useOutletContext } from "react-router-dom";
import { useAuth } from "../Context/useAuth";
import JuegoIntruso from "../components/JuegoIntruso";

const PantallaJuegoIntruso = () => {
  const { terminarJuego2 } = useOutletContext();
  const { usuario } = useAuth();
  const { state } = useLocation();

  const terminoComida =
    state?.usuarioId === usuario?.id &&
    Number.isInteger(state?.puntajeJuego1);

  if (!terminoComida) {
    return <Navigate to="/juego-comida" replace />;
  }

  return <JuegoIntruso onFinalizar={terminarJuego2} />;
};

export default PantallaJuegoIntruso;