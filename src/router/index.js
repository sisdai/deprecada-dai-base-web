import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '@/views/Inicio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    props: { hideMenu: true },
  },
  {
    path: '/ayuda',
    name: 'Ayuda',
    component: () => import('../views/Ayuda.vue'),
  },
  {
    path: '/guia-estilos',
    name: 'GuiaEstilos',
    component: () => import('../views/GuiaEstilos.vue'),
  },
  {
    path: '**',
    name: 'Página no encontrada',
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' };
  },
});

export default router;
