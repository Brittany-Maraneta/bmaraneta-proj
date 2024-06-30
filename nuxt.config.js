export default {
  buildModules: ["@nuxt/postcss8"],
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
