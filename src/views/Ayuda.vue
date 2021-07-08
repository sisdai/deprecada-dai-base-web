<template>
  <div>
    <div class="ayuda-cabecera">
      <div class="container">
        <h1>Ayuda</h1>
      </div>
    </div>
    <div class="container">
      <div class="ayuda-contenido m-b-4-md">
        <h2 class="sub-titulo m-t-2 m-t-3-md">
          Declaración de Accesibilidad
        </h2>
        <p>
          CONACYT tiene el compromiso de facilitar el uso y acceso a la información
          al mayor número de público posible. Nuestro sitio web cuenta con diversos
          recursos de accesibilidad apegados a las estrategias, estándares y recursos
          de Apoyo de la Iniciativa para la Accesibilidad Web* (WAI por sus siglas
          en inglés) y continuamos trabajando en ello. Los recursos de accesibilidad
          con los que contamos son:
        </p>
        <ul>
          <li>
            Navegación por teclado
          </li>
          <li>
            Accesibilidad de lectores de pantalla para describir el contenido que
            estamos navegando en el sitio
          </li>
          <li>
            Paleta de color para facilitar la lectura para personas que padecen la
            mayoría de las variantes de daltonismo
          </li>
          <li>
            Tamaño y contraste de texto legible para personas que tienen
            dificultades de visión
          </li>
          <li>
            Contenido que puede aumentarse el tamaño utilizando los controles
            estándar de los navegadores
          </li>
        </ul>
        <p>
          Si tienes algún comentario o sugerencia relacionada con la accesibilidad
          de nuestro sitio ponte en contacto, tus comentarios ayudarán a mejorar y
          facilitar el acceso a la información.
        </p>

        <h2 class="sub-titulo m-t-2 m-t-4-md">
          Navegación por medio del teclado
        </h2>
        <dl>
          <dt>
            Tabulador (Tab)
          </dt>
          <dd>
            Carga la página, luego comienza a presionar la tecla de tabulación.
            El foco del teclado (color azul) debe moverse cada elemento interactivo de la página.
          </dd>
          <dt>
            Shift + Tab
          </dt>
          <dd>
            Hace lo mismo que usar la tecla de tabulación, pero en sentido inverso.
          </dd>
          <dt>
            Entrar / Volver
          </dt>
          <dd>
            Si activas esta función (presionar la tecla), abrirá el enlace en cuestión.
          </dd>
          <dt>
            Barra espaciadora
          </dt>
          <dd>
            Alterna los valores de las casillas de verificación, activa los botones.
          </dd>
          <dt>
            Teclas de flecha
          </dt>
          <dd>
            Desplaza contenido, mueve o selecciona botones de radio dentro de un grupo.
          </dd>
        </dl>
      </div>
    </div>
    <!-- <div class="help-grid container">
      <details open>
        <summary>Declaración de Accesibilidad</summary>
        <p>
          CONACYT tiene el compromiso de facilitar el uso y acceso a la información
          al mayor número de público posible. Nuestro sitio web cuenta con diversos
          recursos de accesibilidad apegados a las estrategias, estándares y recursos
          de Apoyo de la Iniciativa para la Accesibilidad Web* (WAI por sus siglas
          en inglés) y continuamos trabajando en ello. Los recursos de accesibilidad
          con los que contamos son:
        </p>
        <ul class="ul-lista">
          <li>
            Navegación por teclado
          </li>
          <li>
            Accesibilidad de lectores de pantalla para describir el contenido que
            estamos navegando en el sitio
          </li>
          <li>
            Paleta de color para facilitar la lectura para personas que padecen la
            mayoría de las variantes de daltonismo
          </li>
          <li>
            Tamaño y contraste de texto legible para personas que tienen
            dificultades de visión
          </li>
          <li>
            Contenido que puede aumentarse el tamaño utilizando los controles
            estándar de los navegadores
          </li>
        </ul>
        <p>
          Si tienes algún comentario o sugerencia relacionada con la accesibilidad
          de nuestro sitio ponte en contacto tus comentarios ayudarán a mejorar y
          facilitar el acceso a la información.
        </p>
      </details>
      <details open>
        <summary>Navegación por medio del teclado</summary>
        <dl class="dl-glosario">
          <dt>
            Tabulador (Tab)
          </dt>
          <dd>
            Carga la página, luego comienza a presionar la tecla de tabulación.
            El foco del teclado (color azul) debe moverse cada elemento interactivo de la página.
          </dd>
          <dt>
            Shift + Tab
          </dt>
          <dd>
            Hace lo mismo que usar la tecla de tabulación, pero en sentido inverso.
          </dd>
          <dt>
            Entrar / Volver
          </dt>
          <dd>
            Si activas esta función (presionar la tecla), abrirá el enlace en cuestión.
          </dd>
          <dt>
            Barra espaciadora
          </dt>
          <dd>
            Alterna los valores de las casillas de verificación, activa los botones.
          </dd>
          <dt>
            Teclas de flecha
          </dt>
          <dd>
            Desplaza contenido, mueve o selecciona botones de radio dentro de un grupo.
          </dd>
        </dl>
      </details>
      <details open>
        <summary>Plugins de lectura</summary>
        <ul class="ul-lista">
          <li>Android Accessibility Suite</li>
          <li>Job Access With Speech (JAWS)</li>
          <li>NonVisual Desktop Access</li>
          <li>Orca</li>
          <li>VoiceOver (iOS)</li>
          <li>VoiceOver (macOS)</li>
          <li>Emacspeak (Linux)</li>
          <li>Spoken Web (Internet Explorer)</li>
          <li>ChromeVox (Google Chrome)</li>
        </ul>
        <p>
          Otros para ayudar a personas que no han perdido completamente la vista son para
          agrandar el texto y agregar contraste.
        </p>
        <ul>
          <li>A+ FontSize Changer Lite (Chrome)</li>
          <li>Zoom Page WE (Firefox)</li>
        </ul>
      </details>
      <details open>
        <summary>Glosario de términos</summary>
        <dl class="dl-glosario">
          <dt>Término:</dt>
          <dd>Descripción.</dd>
        </dl>
      </details>
      <details open>
        <summary>Glosario de abreviaturas</summary>
        <ul class="ul-glosario">
          <li>
            <b>Abreviatura</b> Nombre completo
          </li>
        </ul>
      </details>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.ayuda-cabecera {
  background: #f4f4f4;
  padding: $gap 0;
}
.ayuda-contenido {
  max-width: 700px;
}
// @keyframes openDetails {
//   0% {
//     border-right-color: #fff;
//     width: 99.9%;
//     opacity: .1;
//     order: -1;
//   }
//   100% {
//     opacity: 1;
//   }
// }
// @keyframes closeDetails {
//   0% {
//     opacity: .1;
//   }
//   100% {
//     border-right-color: #ddd;
//     width: 33.3%;
//     opacity: 1;
//     order: inherit;
//   }
// }
// .help-grid {
//   details {
//     font-size: 0;
//     padding: $gap 0;
//     border-bottom: 1px solid #ddd;
//     transition: font-size .2s ease-in-out;
//     summary {
//       display: flex;
//       align-content: center;
//       justify-content: space-between;
//       font-size: 1.25rem;
//       line-height: 1.2em;
//       font-weight: 600;
//       cursor: pointer;
//       transition: font-size .2s ease-in-out;
//       word-break: normal;
//       &:hover,
//       &:focus {
//         outline: none;
//       }
//       &::after {
//         content: "";
//       }
//     }
//     summary::marker {
//       content: "";
//     }
//     &[open] {
//       font-size: 1rem;
//       summary {
//         font-size: 1.7rem;
//       }
//     }
//   }
//   @media (min-width: map-get($media-queries-limit, "mobile")) {
//     box-sizing: border-box;
//     margin-bottom: $gap * 2;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     position: relative;
//     transition: all 1s ease-in-out;
//     &::after {
//       background: #fff;
//       content: " ";
//       display: block;
//       height: 1px;
//       width: 100%;
//       position: relative;
//       top: -1px;
//       z-index: 1;
//     }
//     &::before {
//       background: #fff;
//       content: " ";
//       display: block;
//       width: 1px;
//       position: absolute;
//       right: 1px;
//       top: 0;
//       bottom: 0;
//       z-index: 1;
//     }
//     details {
//       background: #fff;
//       border-right: 1px solid #ddd;
//       box-sizing: border-box;
//       width: 33.3%;
//       padding: $gap;
//       animation: closeDetails .5s ease-in-out forwards;
//       > * {
//         max-width: 600px;
//       }
//       &[open] {
//         padding: $gap 0;
//         animation: openDetails .5s ease-in-out forwards;
//         width: 99.9%;
//         opacity: 1;
//         order: -1;
//       }
//     }
//   }
// }
</style>
