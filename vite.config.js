import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Obtener todos los archivos HTML en la raíz
const htmlFiles = glob.sync("*.html", { cwd: __dirname });
const input = {};
htmlFiles.forEach((file) => {
  const name = file.replace(".html", "");
  input[name] = path.resolve(__dirname, file);
});

export default defineConfig({
  base: '/Proyecto_Final_EquipoC/',

  build: {
    rollupOptions: {
      input,
    },
  },

  plugins: [
    handlebars({
      partialDirectory: "partials",
    }),
  ],
});
