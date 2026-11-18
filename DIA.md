# Fernando Gabriel Ruiz
## Componente JuegoComida.jsx Proyecto Final
## Se crea el archivo JuegoComida.jsx y DIA.md
## Archivos: creados JuegoComida.jsx y DIA.md
## USO IA: NO

# Fernando Gabriel Ruiz
## animales-intruso.json
## Se crea el archivo animales-intruso.json y se agrega el arreglo de rondas allí
## Archivos: creado animales-intruso.json
## USO IA: NO

# Fernando Gabriel Ruiz
## animales-intruso.json
## Se ha corregido un error de sintaxis
## Archivos: modificado animales-intruso.json
## USO IA: NO

# Fernando Gabriel Ruiz
## pantallaJuegoComida.jsx - PantallaJuegoIntruso.jsx - PantallaResultados.jsx
## Se ha divido el archivo PantallaJuegos.jsx en tres archivos cuya ubicación se asignó en ../pages/
## Archivos: creados apantallaJuegoComida.jsx - PantallaJuegoIntruso.jsx - PantallaResultados.jsx
## Archivos: eliminado PantallaJuegos.jsx
## USO IA: SI - Se utilizó CHAT GPT como apoyo

# Andrea Victoria Cappiello

## Organización y seguimiento del proyecto

**Trabajo realizado:**
- Participación en la organización y seguimiento del proyecto grupal.
- Revisión del funcionamiento de los juegos y de la navegación entre pantallas.
- Seguimiento de cambios realizados mediante Git y GitHub.
- Creación y revisión de Pull Requests e integración de modificaciones a la rama principal.
- Verificación de las funcionalidades antes de integrar cambios.

**Herramientas:** Git, GitHub, VS Code, React y Vite.

**USO IA:** SÍ. Se utilizó ChatGPT como apoyo para comprender conceptos técnicos, analizar errores y revisar soluciones.

---

## Refactorización del componente JuegoIntruso

**Trabajo realizado:**
- Creación del hook personalizado `useJuegoIntruso`.
- Separación de la lógica del juego respecto de su presentación.
- Gestión de rondas y carga de datos.
- Validación de respuestas y actualización de puntajes.
- Control de la selección de animales y finalización del juego.
- Conservación del funcionamiento de las cinco rondas.

**Archivos:**
- Creado: `src/hooks/useJuegoIntruso.js`.
- Modificado: `src/components/JuegoIntruso.jsx`.

**Pruebas:** `npm run lint`, `npm run build` y prueba funcional de las cinco rondas.

**Pull Request:** #25 — Fusionado.

**USO IA:** SÍ. ChatGPT se utilizó como apoyo para orientar la refactorización, comprender el funcionamiento del hook y resolver errores de sintaxis.

---

## Refactorización del componente JuegoComida

**Trabajo realizado:**
- Creación del hook personalizado `useJuegoComida`.
- Separación de los estados y la lógica del componente visual.
- Gestión de carga asíncrona de animales mediante el servicio Axios.
- Validación de respuestas y actualización del puntaje.
- Control de rondas, mensajes y finalización.
- Implementación de actualizaciones funcionales de estado.
- Conservación de la reproducción de preguntas mediante Web Speech API y los emojis de alimentos.

**Archivos:**
- Creado: `src/hooks/useJuegoComida.js`.
- Modificado: `src/components/JuegoComida.jsx`.

**Pruebas:** `npm run lint`, `npm run build`, prueba del botón de audio y verificación de la navegación hasta Resultados.

**Pull Request:** #27 — Fusionado.

**USO IA:** SÍ. Se utilizó ChatGPT como apoyo para analizar el código original, separar responsabilidades, implementar el hook y revisar el funcionamiento.

---

## Pruebas e integración final

**Trabajo realizado:**
- Pruebas de inicio de sesión y navegación entre pantallas.
- Comprobación del funcionamiento de JuegoComida y JuegoIntruso.
- Verificación de puntajes y pantalla de resultados.
- Pruebas de acceso al dashboard del profesor.
- Revisión y pruebas del Pull Request #26 correspondiente a la organización de `pages/`, desarrollado por Gabriel.
- Ejecución de ESLint y compilación de producción con Vite.
- Integración de los cambios mediante Pull Requests.

**USO IA:** SÍ. Se utilizó ChatGPT como apoyo para revisar la arquitectura y orientar las pruebas.

---

## Desarrollo inicial e integración de la aplicación

**Trabajo realizado:**
- Configuración inicial del proyecto utilizando React y Vite.
- Implementación y conexión del inicio de sesión con la navegación inicial.
- Configuración del ruteo para las cuatro pantallas principales.
- Integración de JuegoComida con la navegación y recepción de su puntaje.
- Integración de JuegoComida y JuegoIntruso mediante React Router.
- Implementación de la navegación completa entre pantallas.
- Integración de estados compartidos para gestionar los puntajes.
- Conexión de las pantallas de juegos y resultados.

**Commits de referencia:** `78fe47f`, `ef7167c`, `5f53aff`, `bf747fb`, `d5a9f3b`, `cce80d98`, `2254d8d`.

**Herramientas:** React, JavaScript, JSX, Vite y React Router.

---

## Integración de datos mediante Axios

**Trabajo realizado:**
- Refactorización de JuegoComida para consumir datos JSON mediante Axios.
- Correcciones relacionadas con la navegación.
- Resolución de errores detectados mediante ESLint.
- Integración de los cambios con el resto de la aplicación.

**Commits de referencia:** `d5cdef3`, `d542abd`.

**Herramientas:** JavaScript, React, Axios, JSON y ESLint.

---

## Implementación de roles, autenticación y funcionalidades del profesor

**Trabajo realizado:**
- Implementación de roles y acceso diferenciado para alumnos y profesores.
- Integración de un login único con roles.
- Incorporación del historial de partidas.
- Mejoras visuales de la aplicación y del dashboard del profesor.
- Correcciones y comprobaciones de las funcionalidades integradas.

**Commits de referencia:** `e58524b`, `8e2e6bf`, `a412563`, `7c7b4ea`.

**Herramientas:** React, JavaScript, CSS, Git y GitHub.

---

## Aclaración sobre la participación y el uso de IA

Los trabajos anteriores se encuentran registrados en el historial de Git bajo el autor `Andycap98`.

Durante el proyecto utilicé ChatGPT como herramienta de apoyo para analizar código, comprender conceptos, orientar implementaciones y refactorizaciones, detectar errores y preparar pruebas.

Las contribuciones registradas corresponden a tareas de configuración, implementación, integración, refactorización, corrección y verificación. La participación de otros integrantes se documenta en sus respectivas secciones.

**USO IA:** SÍ. Se utilizó inteligencia artificial como apoyo durante distintas etapas del desarrollo.