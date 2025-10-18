
# Converter

Aplicación web desarrollada en Angular para convertir entre diferentes unidades de temperatura, distancia y volumen.

## Funcionalidades

- Conversión de **temperatura** entre Celsius, Fahrenheit y Kelvin.
- Conversión de **distancia** entre Millas, Yardas, Pulgadas y Metros.
- Conversión de **volumen** entre Galones y Litros.
- Interfaz moderna, responsiva y fácil de usar.
- Resultados instantáneos y redondeados para mayor claridad.

## Estructura de la interfaz

La aplicación muestra tres tarjetas (cards), una para cada tipo de conversión:

- **Temperatura**: permite convertir entre Celsius, Fahrenheit y Kelvin.
- **Distancia**: permite convertir entre Millas, Yardas, Pulgadas y Metros.
- **Volumen**: permite convertir entre Galones y Litros.

Cada tarjeta tiene su propio formulario y muestra el resultado de la conversión de manera independiente.

## Instalación y uso

1. Instala las dependencias:
	```bash
	npm install
	```
2. Inicia el servidor de desarrollo:
	```bash
	npm start
	```
3. Abre tu navegador en [http://localhost:4200](http://localhost:4200)

## Scripts útiles

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm test`: Ejecuta los tests unitarios.

## Estructura del código

- `src/app/features/converter/`: Componente principal con los tres conversores.
- `src/app/core/temperature.service.ts`: Servicio que gestiona la lógica de conversión para todas las unidades.

## Contribución

Puedes abrir issues o pull requests para sugerir mejoras o reportar errores.

---

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) v18.2.21.
