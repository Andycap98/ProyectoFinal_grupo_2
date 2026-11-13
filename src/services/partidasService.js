
const CLAVE_PARTIDAS = "historialPartidas";

export const obtenerPartidas = () => {
  try {
    const datos = localStorage.getItem(CLAVE_PARTIDAS);
    const partidas = datos ? JSON.parse(datos) : [];

    return Array.isArray(partidas) ? partidas : [];
  } catch {
    return [];
  }
};

export const guardarPartida = (partida) => {
  const partidasAnteriores = obtenerPartidas();

  const nuevaPartida = {
    ...partida,
    id: crypto.randomUUID(),
    fecha: new Date().toISOString(),
  };

  const historialActualizado = [
    ...partidasAnteriores,
    nuevaPartida,
  ];

  localStorage.setItem(
    CLAVE_PARTIDAS,
    JSON.stringify(historialActualizado)
  );

  return nuevaPartida;
};
