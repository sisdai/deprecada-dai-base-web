<template>
  <div>
    <CoverImg title="titulo eni" img="ims" />
    <div class="container text m-y-3">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>

      <hr>

      <p>
        <b>Texto base</b>
        Lorem ipsum dolor <a href="#ejeles">link</a> sit amet consectetur adipisicing elit.
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos <i>delectus qui pariatur</i>, architecto reiciendis voluptatem officiis natus!
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, <button class="link">boton clase .link</button> reiciendis.
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
        Iusto nulla totam sed dolorem voluptatibus et incidunt
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
      </p>

      <hr>

      <button type="button">boton</button>
      <a href="#ejeles" class="btn">link class .btn</a>

      <hr>

      <details>
        <summary>details summary</summary>
        <p>
          Details. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Et debitis necessitatibus quia eaque maxime magnam sint unde repellendus,
          odit dolor repellat recusandae dolores, odio quod iusto doloribus ducimus omnis animi.
        </p>
      </details>

      <hr>

      <ul>
        <li>lista desordenada</li>
        <li>lista desordenada texto para que se vea el interlineado.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </li>
        <li>lista desordenada
          <ul>
            <li>lista desordenada segundo nivel</li>
            <li>lista desordenada segundo nivel</li>
          </ul>
          <ol>
            <li>lista ordenada segundo nivel</li>
            <li>lista ordenada segundo nivel</li>
          </ol>
        </li>
      </ul>

      <hr>

      <ol>
        <li>lista ordenada</li>
        <li>lista ordenada</li>
        <li>lista ordenada
          <ul>
            <li>lista desordenada segundo nivel</li>
            <li>lista desordenada segundo nivel</li>
          </ul>
          <ol>
            <li>lista ordenada segundo nivel</li>
            <li>lista ordenada segundo nivel</li>
          </ol>
        </li>
        <li>lista ordenada</li>
        <li>lista ordenada</li>
      </ol>

      <hr>

      <dl>
        <dt>Lista de detalle</dt>
        <dd>Descipción</dd>
        <dt>Título</dt>
        <dd>Descripción</dd>
      </dl>

      <hr>

      <table>
        <caption>Titulo de la tabla</caption>
        <thead>
          <tr>
            <th>Título</th>
            <th>Título</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contenido fila uno.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis est provident velit eaque in placeat harum unde,
              delectus ipsa eius labore magnam iusto!
              Voluptatem saepe beatae id pariatur itaque tempora?
            </td>
            <td>Contenito fila uno.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis est provident velit eaque in placeat harum unde,
              delectus ipsa eius labore magnam iusto!
              Voluptatem saepe beatae id pariatur itaque tempora?
            </td>
            <td>Contenito fila uno.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis est provident velit eaque in placeat harum unde,
              delectus ipsa eius labore magnam iusto!
              Voluptatem saepe beatae id pariatur itaque tempora?
            </td>
          </tr>
          <tr>
            <td>Contenido fila dos</td>
            <td>Contenito fila dos</td>
            <td>Contenito fila dos</td>
          </tr>
          <tr>
            <td>Contenido fila tres</td>
            <td>Contenito fila tres</td>
            <td>Contenito fila tres</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Foot</td>
            <td>Foot</td>
            <td>Foot</td>
          </tr>
        </tfoot>
      </table>
      <table>
        <caption>Titulo de la tabla</caption>
        <thead>
          <tr>
            <td></td>
            <th scope="col">Título</th>
            <th scope="col">Título</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Títuo</th>
            <td>Contenito fila uno</td>
            <td>Contenito fila uno</td>
          </tr>
          <tr>
            <th scope="row">Títuo</th>
            <td>Contenito fila dos</td>
            <td>Contenito fila dos</td>
          </tr>
          <tr>
            <th scope="row">Título</th>
            <td>Contenito fila tres</td>
            <td>Contenito fila tres</td>
          </tr>
        </tbody>
      </table>

      <hr>

      <fieldset>
        <legend>fielset legend</legend>
        <label for="">label</label><br>
        <select name="" id="">
          <option value="">option</option>
          <option value="">option</option>
        </select>
        <br>
        <label for="">label</label><br>
        <input type="text">
        <br>
        <label for="">label</label><br>
        <input type="text">
        <br>
        <label for="">label</label><br>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </fieldset>

      <hr>

      <h2 class="titular-alto">
        .titular alto Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <h2 class="titular-bajo">
        .titular bajo Labore possimus laudantium similique. Enim, maxime. Dolores, fugit.
      </h2>

      <h2 class="titulo">.titulo</h2>
      <h2 class="subtitulo">.subtitulo</h2>

      <p class="texto-alto">
        .texto-alto
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p class="texto-primario">
        .texto-primario
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p class="texto-secundario">
        .texto-secundario
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p class="texto-notas">
        .texto-notas
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p>
        <button type="button" class="btn-lg">.btn-lg</button>
        <button type="button" class="btn-md">.btn-md</button>
        <button type="button" class="btn">.btn</button>
        <button type="button" class="btn-sm">.btn-sm</button>
      </p>
      <p>
        <button type="button" class="btn-bold">.btn-bold</button>
      </p>
      <p>
        <button type="button" class="btn-block">.btn-block</button>
      </p>

      <hr>

      <GridLinkCoverImg>
        <h2>GridLinkCoverImg</h2>
        <LinkCoverImg url="http://google.com" target="_blank" title="LinkCoverImg" size="full"/>
        <LinkCoverImg url="http://google.com" target="_blank" title="size half" size="half" />
        <LinkCoverImg url="ayuda" title="size half" size="half" />
        <LinkCoverImg url="ayuda" title="size half-desk" size="half-desk" />
        <LinkCoverImg url="ayuda" title="size half-desk" size="half-desk" />
      </GridLinkCoverImg>

      <hr>

      <h2>Pruebas tipografica iconos</h2>
      <span class="icono-acercar"></span>
      <span class="icono-alejar"></span>
      <span class="icono-centrar"></span>
      <span class="icono-cerrar"></span>
      <span class="icono-check"></span>
      <span class="icono-descargar"></span>
      <span class="icono-seleccion"></span>
    </div>
  </div>
</template>

<script>
import GridLinkCoverImg from '@/components/GridLinkCoverImg.vue';
import LinkCoverImg from '@/components/LinkCoverImg.vue';
import CoverImg from '@/components/CoverImg.vue';

export default {
  name: 'App',
  components: {
    GridLinkCoverImg,
    LinkCoverImg,
    CoverImg,
  },
};
</script>
