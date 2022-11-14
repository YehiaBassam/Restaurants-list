export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  // head: {
  //   link: [{ rel: "icon", type: "image/x-icon", href: "~/public/favicon.ico" }],
  // },
});
