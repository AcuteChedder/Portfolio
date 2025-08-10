// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],
  
  plugins: [
  {src: '~/plugins/vueTyper.client.js', mode: 'client',}
  ],

  googleFonts: {
    families: {
      Rubik: [400, 500, 600, 700]
    },
    display: "swap"
  }
})