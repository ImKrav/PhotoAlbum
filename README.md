# Photo Album MiniApp

Miniaplicacion construida con React + Next.js (App Router) para listar albumes y mostrar una galeria de fotos consumiendo datos reales desde JSONPlaceholder.

## Objetivo del proyecto

Construir una miniapp incremental con dos fuentes de datos:

- `https://jsonplaceholder.typicode.com/albums`
- `https://jsonplaceholder.typicode.com/photos`

Flujo funcional esperado:

1. Cargar y mostrar lista de albumes.
2. Seleccionar un album.
3. Filtrar y mostrar sus fotos en galeria.

## Requisitos y restricciones

Los siguientes puntos guian la implementacion del proyecto:

- Usar `useEffect` para cargar datos desde la API.
- Usar `fetch` o `axios` para solicitudes HTTP.
- Mostrar datos reales de albumes y fotos en pantalla.
- Mantener estado minimo con `loading` y `data`.
- Incluir manejo de `error` cuando sea posible.
- No depender de `userId` para el flujo principal.
- Priorizar una UI clara con secciones separadas:
	- Encabezado
	- Estado de carga/datos/error
	- Lista de albumes
	- Galeria de fotos

## Estructura base

- `src/app/page.tsx`: vista principal y layout de la miniapp.
- `src/app/layout.tsx`: layout global y metadata.
- `src/app/globals.css`: estilos globales y variables de tema.

## Ejecucion local

Instala dependencias y levanta el entorno de desarrollo:

```bash
npm install
npm run dev
```

Abrir en el navegador:

- `http://localhost:3000`

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo.
- `npm run build`: genera build de produccion.
- `npm run start`: ejecuta build en modo produccion.
- `npm run lint`: ejecuta linting con ESLint.
