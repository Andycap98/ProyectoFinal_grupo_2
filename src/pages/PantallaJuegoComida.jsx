import { useOutletContext } from "react-router-dom";

import JuegoComida from "../components/JuegoComida";

const PantallaJuegoComida = () => {
  const { terminarJuego1 } = useOutletContext();

  return <JuegoComida onFinalizar={terminarJuego1} />;
};

export default PantallaJuegoComida;