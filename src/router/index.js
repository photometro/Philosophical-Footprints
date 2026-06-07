import { createRouter, createWebHistory } from 'vue-router';
import Explorer from '../views/Explorer.vue';
import PhilosopherDetail from '../views/PhilosopherDetail.vue';
import PhilosopherMaster from '../views/PhilosopherMaster.vue';
import PhilosophySchool from '../views/PhilosophySchool.vue';
import SchoolDetail from '../views/SchoolDetail.vue'
import DailyThink from '../views/DailyThink.vue';
import UserCenter from '../views/UserCenter.vue';

const routes = [
  {
    path: '/',
    redirect: '/daily'
  },
  {
    path: '/daily',
    name: 'DailyThink',
    component: DailyThink
  },
  { path: '/philosopher-master', name: 'PhilosopherMaster', component: PhilosopherMaster },
  { path: '/philosophy-school', name: 'PhilosophySchool', component: PhilosophySchool },
  {
    path: '/schools/:name',
    component: SchoolDetail,
    name: 'SchoolDetail'
  },

  {
    path: '/explorer',
    name: 'Explorer',
    component: Explorer
  },
  {
    path: '/user',
    name: 'UserCenter',
    component: UserCenter
  },
  {
    path: '/philosopher/:name',
    name: 'PhilosopherDetail',
    component: PhilosopherDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
