<template>
  <nav v-if="hasSubNav" class="main-nav">
    <MainContainer class="flex">
      <div class="main-nav-top">
        <BtnNavMob
          @click.native="toggleMenu"
          :class="{'open':isOpenSubNav}"
          aria-expanded="false"
          aria-controls="subnavegacion-principal"/>
      </div>
      <div
        aria-label="Sub-Navegación principal"
        id="subnavegacion-principal"
        class="main-nav-menu nav"
        :class="{'open':isOpenSubNav}"
        @click="toggleMenu">

        <!-- <div class="nav__list">
          <div class="nav__listitem">
            <router-link class="main-nav-link" to="/">Covid 19</router-link>
            <div class="nav__listitemdrop">
              <div>Productos de Investigación y Modelado de datos Covid 19</div>
              <div>Productos de investigación y Logística de la Campaña Nacional de Vacunación</div>
              <div>Secuenciación</div>
              <div>Índice de prioridad</div>
            </div>
          </div>  
          <div class="nav__listitem">
            <router-link class="main-nav-link" to="/">VIH</router-link>
          </div>      
          <div class="nav__listitem">
            <router-link class="main-nav-link" to="/">Cap III</router-link>
          </div>      
          <div class="nav__listitem">
            <router-link class="main-nav-link" to="/">Cap IV</router-link>
          </div>      
          <div class="nav__listitem">
            <router-link class="main-nav-link" to="/">Cap V</router-link>
          </div>      
          <div class="nav__listitem">
            <router-link class="main-nav-link" to="/">Cap VI</router-link>
          </div>                
        </div> -->

        <!-- <div class="sub-navbar">
          <div class="dropdown">
            <button class="dropbtn">Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>  -->
        
        <!-- <div class="navbar">
          <div class="subnav">
            <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
              <a href="#bring">Bring</a>
              <a href="#deliver">Deliver</a>
              <a href="#package">Package</a>
              <a href="#express">Express</a>
            </div>
          </div>
        </div> -->

      </div>
      <nav 
        aria-label="Sub-Navegación principal"
        id="subnavegacion-principal"
        class="main-nav-menu nav"
        :class="{'open':isOpenSubNav}">
        <div class="nav__list">
          <div class="nav__listitem">
            <router-link class="main-nav-link" to="/">Covid 19</router-link>
            <div class="nav__listitemdrop">
              <div @click="toggleMenu">Productos de Investigación y Modelado de datos Covid 19</div>
              <div @click="toggleMenu">Productos de investigación y Logística de la Campaña Nacional de Vacunación</div>
              <div @click="toggleMenu">Secuenciación</div>
              <div @click="toggleMenu">Índice de prioridad</div>
            </div>
          </div>  
          <div class="nav__listitem" @click="toggleMenu">
            <router-link class="main-nav-link" to="/">VIH</router-link>
          </div>      
          <div class="nav__listitem" @click="toggleMenu">
            <router-link class="main-nav-link" to="/">Cap III</router-link>
          </div>      
          <div class="nav__listitem" @click="toggleMenu">
            <router-link class="main-nav-link" to="/">Cap IV</router-link>
          </div>      
          <div class="nav__listitem" @click="toggleMenu">
            <router-link class="main-nav-link" to="/">Cap V</router-link>
          </div>      
          <div class="nav__listitem" @click="toggleMenu">
            <router-link class="main-nav-link" to="/">Cap VI</router-link>
          </div>                
        </div>
      </nav>
      
    </MainContainer>
  </nav>
  <!-- <nav class="nav">
    <ul class="nav__list">
      <li class="nav__listitem">
        <router-link class="main-nav-link" to="/">Covid 19</router-link>
        <ul class="nav__listitemdrop">
          <li>Productos de Investigación y Modelado de datos Covid 19</li>
          <li>Productos de investigación y Logística de la Campaña Nacional de Vacunación</li>
          <li>Secuenciación</li>
          <li>Índice de prioridad</li>
        </ul>
      </li>
      <li class="nav__listitem">
        <router-link class="main-nav-link" to="/">VIH</router-link>
        <ul class="nav__listitemdrop">
          <li>Portfolio</li>
          <li>Showcase</li>
        </ul>
      </li>
      <li class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap III</router-link>
      </li>      
      <li class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap IV</router-link>
      </li>      
      <li class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap V</router-link>
      </li>      
      <li class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap VI</router-link>
      </li>      
    </ul>

    <div class="nav__list">
      <div class="nav__listitem">
        <router-link class="main-nav-link" to="/">Covid 19</router-link>
        <div class="nav__listitemdrop">
          <div>Productos de Investigación y Modelado de datos Covid 19</div>
          <div>Productos de investigación y Logística de la Campaña Nacional de Vacunación</div>
          <div>Secuenciación</div>
          <div>Índice de prioridad</div>
        </div>
      </div>
      <div class="nav__listitem">
        <router-link class="main-nav-link" to="/">VIH</router-link>
        <div class="nav__listitemdrop">
          <div>Portfolio</div>
          <div>Showcase</div>
        </div>
      </div>
      <div class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap III</router-link>
      </div>      
      <div class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap IV</router-link>
      </div>      
      <div class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap V</router-link>
      </div>      
      <div class="nav__listitem">
        <router-link class="main-nav-link" to="/">Cap VI</router-link>
      </div>      
    </div>
  </nav> -->
</template>

<script>
import MainContainer from '@/components/base/MainContainer.vue';
import BtnNavMob from '@/components/base/BtnNavMob.vue';

export default {
  name: 'MainNav',
  components: {
    MainContainer,
    BtnNavMob,
  },
  data() {
    return {
      domain: process.env.VUE_APP_ENI_DOMAIN,
    };
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleSubNav');
    },
  },
  computed: {
    hasSubNav() {
      return this.$store.getters.hasSubNav;
    },
    isOpenSubNav() {
      return this.$store.getters.isOpenSubNav;
    },
    obtenerNombreEni() {
      return this.$store.getters.obtenerNombreEni;
    },
  },
};
</script>

<style scoped lang="scss">
.main-nav {
  background: map-get($color-gob, "verde");
  box-shadow: 0 0 10px rgba(0,0,0,.7);  
}
.main-nav-top {
  background: map-get($color-gob, "verde");
  position: relative;
  margin-right: - ($gap);
  margin-left: - ($gap);
  z-index: 2;
  box-shadow: 0 0 20px rgba(0,0,0,.2);
}
.main-nav-menu {
  background: map-get($color-gob, "verde");
  border-top: 1px solid rgba(255,255,255,.2);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: absolute;
  top: -100vh;
  height: calc(100vh - 100px);
  height: calc((100 * var(--vh)) - 100px);
  width: 100%;
  margin-right: - ($gap);
  margin-left: - ($gap);
  transition: top .3s ease-in-out;
  // z-index: 1;
  &.open {
    top: 50px;
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    position: relative;
    flex-direction: row;
    height: auto;
    top: 0px;
    margin-right: - ($gap);
    margin-left: - ($gap);
    &.open {
      top: 0;
    }
    a:first-child {
      margin-left: $gap*.5;
    }
  }
}
.main-nav-external-link {
  font-size: map-get($fuente, "size-notas");
  text-transform: uppercase;
  display: flex;
  padding: $gap*.5;
  white-space: nowrap;
  color: map-get($color-gob, "dorado");
  &:hover {
      background: darken(map-get($color-gob, "verde"), 2%);
      color: map-get($color-gob, "beige");
    }
    &:focus {
      background: map-get($color-gob, "verde-obscuro");
      color: map-get($color-gob, "beige");
    }
}
.main-nav-link {
  font-size: map-get($fuente, "size-secundario");
  border-radius: 0;
  color: #fff;
  display: flex;
  padding: $gap*.5;
  white-space: nowrap;
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    display: inline-flex;
    // &:first-child {
    //   margin-left: auto;
    // }
    // &:last-child {
    //   margin-right: auto;
    // }
    &:hover {
      background: darken(map-get($color-gob, "verde"), 2%);
      color: map-get($color-gob, "beige");
    }
    &:focus {
      background: map-get($color-gob, "verde-obscuro");
      color: map-get($color-gob, "beige");
    }
  }
}

.nav {
  background-color: map-get($color-gob, "verde");
  display: flex;
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    justify-content: center;
  }

  &__list {
    display: block;
    margin: 0;

    @media (min-width: map-get($media-queries-limit, "navegacion")) {
      display: flex;      
    }  

    &item {
      font-size: map-get($fuente, "size-secundario");
      list-style: none;
      position: relative;
      cursor: pointer;
      margin: 0;

      &::after {
        // content: '';
        // // width: 0;
        // height: 0.3rem;
        // border-radius: 6px;
        // position: absolute;
        // left: 1rem;
        // bottom: 0.8rem;
        // background-color: palevioletred;
        // transition: background-color 200ms ease-in;
        // transition: color 200ms ease-in;
      }

      &:hover::after, &:focus::after, &:active {
        background-color: map-get($color-gob, "verde-obscuro");
        color: map-get($color-gob, "beige");
      }

      a, .link {
        &:hover {
          background-color: map-get($color-gob, "verde-obscuro") !important;
          color: map-get($color-gob, "beige") !important;
        }
      }

      &:hover ul, &:focus ul {
        opacity: 1;
        visibility: visible;
      }

      &:hover div, &:focus div {
        opacity: 1;
        visibility: visible;
      }

      &drop {
        position: absolute;
        left: 0px;
        box-shadow: 0 0 20px rgba(0,0,0,.2);
        background-color: map-get($color-gob, "verde-claro");
        z-index: 1;
        width: 100%;
        // padding: 15px;
        display: flex;
        flex-direction: column;
        // gap: 15px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 200ms ease-in-out;
        @media (min-width: map-get($media-queries-limit, "navegacion")) {
          width: 260px;
          left: -15px; 
          border-radius: 6px;
          background-color: map-get($color-gob, "verde");
        }  

        li {
          list-style: none;
          color: #fff;
          transition: background-color 200ms ease-in-out;
          transition: color 200ms ease-in-out;

          &:hover, &:focus {
            background-color: darken(map-get($color-gob, "verde"), 2%);
            color: map-get($color-gob, "beige");
          }
        }

        div {
          color: #fff;
          padding: 15px;
          transition: background-color 200ms ease-in-out;
          transition: color 200ms ease-in-out;

          &:hover, &:focus {
            background-color: darken(map-get($color-gob, "verde"), 2%);
            color: map-get($color-gob, "beige");
          }
        }
      }
    }
  }
}

 /* Navbar container */
.sub-navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
}
/* Links inside the navbar */
.sub-navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}
/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}
/* Add a red background color to navbar links on hover */
.sub-navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}
/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;  
  position: absolute;
  // position: block;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
} 

 /* The navigation menu */
.navbar {
  overflow: hidden;
  background-color: #333;
}
/* Navigation links */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* The subnavigation menu */
.subnav {
  float: left;
  overflow: hidden;
}
/* Subnav button */
.subnav .subnavbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
/* Add a red background color to navigation links on hover */
.navbar a:hover, .subnav:hover .subnavbtn {
  background-color: red;
}
/* Style the subnav content - positioned absolute */
.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: red;
  width: 100%;
  z-index: 1;
}
/* Style the subnav links */
.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
}
/* Add a grey background color on hover */
.subnav-content a:hover {
  background-color: #eee;
  color: black;
}
/* When you move the mouse over the subnav container, open the subnav content */
.subnav:hover .subnav-content {
  display: block;
} 

</style>
