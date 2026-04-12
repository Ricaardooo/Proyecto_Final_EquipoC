import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Proyecto_Final_EquipoC/' : '/',

  build: {
    cssMinify: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        acerca: 'acerca.html',
        blog: 'blog.html',
        catalogo: 'catalogo.html',
        contacto: 'contacto.html',
        faq: 'faq.html',
        galeria: 'galeria.html',
        login: 'login.html',
        ofertas: 'ofertas.html',
        soporte: 'soporte.html',
      },
    },
  },

  server: {
    port: 5173,
  },

  plugins: [
    handlebars({
      partialDirectory: './partials',
    }),
    purgecss({
      content: [
        './*.html',
        './javascript/**/*.js',
      ],
    }),
  ],
}));
