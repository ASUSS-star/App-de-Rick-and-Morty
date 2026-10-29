# Rick and Morty

Aplicación web para explorar personajes de la serie **Rick and Morty**. Al pulsar el botón de búsqueda, la aplicación consulta la API pública y muestra el nombre, la imagen, el estado, la especie y la última ubicación conocida de cada personaje.

## Tecnologías

- React 19
- Vite
- JavaScript
- [The Rick and Morty API](https://rickandmortyapi.com/)

## Requisitos

- [Node.js](https://nodejs.org/) (se recomienda una versión LTS)
- npm

## Instalación y uso

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd mi-app
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre en el navegador la dirección que indique Vite en la terminal (normalmente `http://localhost:5173`).

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión de producción. |
| `npm run lint` | Ejecuta ESLint para revisar el código. |

## API

Los personajes se obtienen de [The Rick and Morty API](https://rickandmortyapi.com/documentation). La aplicación carga los resultados de la primera página del endpoint de personajes; se necesita conexión a internet para consultarlos.

## Estructura principal

```text
mi-app/
├── public/          # Recursos públicos
├── src/
│   ├── assets/      # Recursos gráficos
│   ├── img/         # Imágenes usadas por la aplicación
│   ├── App.jsx      # Interfaz y consulta de personajes
│   ├── App.css      # Estilos de la aplicación
│   ├── index.css    # Estilos globales
│   └── main.jsx     # Punto de entrada de React
├── index.html
└── package.json
```
