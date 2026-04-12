import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: '/Proyecto_Final_EquipoC/',

  plugins: [
    handlebars({
      partialDirectory: "partials",
    }),
  ],
});

