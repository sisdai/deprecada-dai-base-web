import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '@/views/Inicio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/ayuda',
    name: 'Ayuda',
    component: () => import('../views/Ayuda.vue'),
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
});

export default router;
