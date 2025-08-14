// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ['~/plugins/gsap.client.ts'],
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Rubik: [400, 500, 600, 700]
    },
    display: "swap"
  }
})