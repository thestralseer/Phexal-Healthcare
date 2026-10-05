import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';

function cleanUrlsPlugin(): Plugin {
  const cleanPages = ['/products', '/product', '/about', '/contact', '/rentals', '/quality', '/blogs', '/gallery', '/404'];
  return {
    name: 'clean-urls-plugin',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url) {
          const [urlPath, query] = req.url.split('?');
          if (cleanPages.includes(urlPath)) {
            req.url = `${urlPath}.html` + (query ? `?${query}` : '');
          }
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url) {
          const [urlPath, query] = req.url.split('?');
          if (cleanPages.includes(urlPath)) {
            req.url = `${urlPath}.html` + (query ? `?${query}` : '');
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [cleanUrlsPlugin()],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        product: resolve(__dirname, 'product.html'),
        about: resolve(__dirname, 'about.html'),
        rentals: resolve(__dirname, 'rentals.html'),
        quality: resolve(__dirname, 'quality.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html'),
        notfound: resolve(__dirname, '404.html'),
      },
    },
  },
});

