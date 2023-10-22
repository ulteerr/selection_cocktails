import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue')

    },
    {
      path: '/cocktails/:id',
      name: 'cocktail',
      component: () => import('@/pages/Cocktail.vue')
    },
    {
      path: '/coctail-random',
      name: 'cocktailRandom',
      component: () => import('@/pages/CocktailRandom.vue')
    },
  ]
})

export default router
