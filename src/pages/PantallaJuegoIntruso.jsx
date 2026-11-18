import { useOutletContext } from "react-router-dom";

import JuegoIntruso from "../components/JuegoIntruso";

const PantallaJuegoIntruso = () => {
  const { terminarJuego2 } = useOutletContext();

  return <JuegoIntruso onFinalizar={terminarJuego2} />;
};

export default PantallaJuegoIntruso;