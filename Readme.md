# 🧮 Calculadora — The Odin Project

Proyecto final del bloque de fundamentos de JavaScript en **The Odin Project**. Consiste en una calculadora funcional construida desde cero con **HTML, CSS y JavaScript puro**, sin usar `eval()` ni `new Function()`.

## 📋 Descripción

Esta calculadora replica el comportamiento de una calculadora física básica: permite realizar las cuatro operaciones matemáticas fundamentales (suma, resta, multiplicación y división), encadenar operaciones consecutivas, y maneja casos especiales como la división entre cero sin romper la aplicación.

## ✨ Características

- Operaciones básicas: suma, resta, multiplicación y división.
- Encadenamiento de operaciones (ej. `12 + 7 - 1 =` se resuelve en dos pasos: `19`, luego `18`).
- Manejo de operadores consecutivos (solo se conserva el último operador presionado).
- Redondeo de resultados con decimales largos para evitar desbordamiento de pantalla.
- Botón de limpiar (`AC`) que reinicia el estado completo de la calculadora.
- Mensaje de error al intentar dividir entre cero, sin bloquear la aplicación.
- Reinicio automático de pantalla al ingresar un nuevo número después de un resultado.
- **Extra:**
  - Soporte para números decimales (con bloqueo de múltiples puntos).
  - Botón de retroceso para corregir la última entrada.
  - Soporte completo de teclado físico.

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura semántica de la interfaz.
- **CSS3** — estilos con Grid Layout para la disposición de botones.
- **JavaScript (Vanilla)** — lógica de la calculadora, sin frameworks ni librerías externas.

## 📁 Estructura del proyecto

```
calculadora/
├── index.html      # Estructura de la calculadora
├── style.css       # Estilos visuales
├── script.js       # Lógica y funcionalidad
└── README.md       # Este archivo
```

## 🚀 Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd calculadora
   ```
3. Abre `index.html` en tu navegador (doble clic o con la extensión "Live Server" en VS Code).

No requiere instalación de dependencias ni servidor.

## 🎮 Controles

| Acción | Mouse | Teclado |
|---|---|---|
| Ingresar dígito | Clic en botón numérico | Teclas `0`-`9` |
| Sumar / Restar / Multiplicar / Dividir | Clic en botón operador | `+`, `-`, `*`, `/` |
| Calcular resultado | Clic en `=` | `Enter` o `=` |
| Punto decimal | Clic en `.` | `.` |
| Borrar último dígito | Clic en `⌫` | `Backspace` |
| Reiniciar todo | Clic en `AC` | `Escape` |

## 🧠 Casos especiales manejados (gotchas)

- ✅ Encadenamiento correcto de operaciones sucesivas.
- ✅ Redondeo automático de decimales largos.
- ✅ Prevención de errores al presionar `=` sin datos suficientes.
- ✅ `AC` limpia completamente el estado de la calculadora.
- ✅ Mensaje personalizado al dividir entre cero.
- ✅ Operadores presionados consecutivamente no generan cálculos erróneos.
- ✅ Un nuevo dígito después de un resultado inicia un cálculo nuevo, no lo concatena.

## 📚 Aprendizajes del proyecto

Este proyecto permitió reforzar conceptos clave de JavaScript:

- Manipulación del DOM y manejo de eventos.
- Manejo de estado en una aplicación sin frameworks.
- Delegación de eventos y uso de atributos `data-*`.
- Diseño de funciones puras para lógica de negocio (operaciones matemáticas).
- Buenas prácticas: evitar `eval()` y `new Function()` por razones de seguridad.

## 👤 Autor

**The big boss: Chuya**
Estudiante
 

## 📄 Licencia

Proyecto desarrollado con fines educativos como parte del currículo de [The Odin Project](https://www.theodinproject.com/).