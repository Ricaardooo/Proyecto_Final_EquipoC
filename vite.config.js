import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: '/Proyecto_Final_EquipoC-main/',

  plugins: [
    handlebars({
      partialDirectory: "partials",
    }),
  ],
});

