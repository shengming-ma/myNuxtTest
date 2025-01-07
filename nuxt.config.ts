// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: ['element-plus/dist/index.css'],
  routeRules: {
    '/': { redirect: '/login' },
  },
})
