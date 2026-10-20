import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function cleanUrlsPlugin(): Plugin {
  const staticPages = [
    '/products',
    '/product',
    '/about',
    '/contact',
    '/rentals',
    '/quality',
    '/certificates',
    '/blogs',
    '/gallery',
    '/privacy',
    '/terms',
    '/404'
  ];

  return {
    name: 'clean-urls-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const [urlPath, query] = req.url.split('?');

        // Aliases
        if (urlPath === '/certificates') {
          req.url = '/quality.html' + (query ? `?${query}` : '');
          return next();
        }

        // Standard clean pages
        if (staticPages.includes(urlPath)) {
          req.url = `${urlPath}.html` + (query ? `?${query}` : '');
          return next();
        }

        // Product static pages e.g. /products/fowler-bed-super-deluxe
        if (urlPath.startsWith('/products/')) {
          const subPath = urlPath.slice('/products/'.length);
          const cleanSubPath = subPath.endsWith('.html') ? subPath : `${subPath}.html`;
          const diskPath = resolve(__dirname, 'products', cleanSubPath);

          if (fs.existsSync(diskPath)) {
            req.url = `/products/${cleanSubPath}` + (query ? `?${query}` : '');
            return next();
          } else {
            // True HTTP 404 status code for unmatched/invalid product IDs/slugs
            res.statusCode = 404;
            const notFoundHtmlPath = resolve(__dirname, '404.html');
            if (fs.existsSync(notFoundHtmlPath)) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end(fs.readFileSync(notFoundHtmlPath, 'utf8'));
              return;
            }
          }
        }

        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const [urlPath, query] = req.url.split('?');

        if (urlPath === '/certificates') {
          req.url = '/quality.html' + (query ? `?${query}` : '');
          return next();
        }

        if (staticPages.includes(urlPath)) {
          req.url = `${urlPath}.html` + (query ? `?${query}` : '');
          return next();
        }

        if (urlPath.startsWith('/products/')) {
          const subPath = urlPath.slice('/products/'.length);
          const cleanSubPath = subPath.endsWith('.html') ? subPath : `${subPath}.html`;
          const diskPath = resolve(__dirname, 'products', cleanSubPath);

          if (fs.existsSync(diskPath)) {
            req.url = `/products/${cleanSubPath}` + (query ? `?${query}` : '');
            return next();
          } else {
            res.statusCode = 404;
            const notFoundHtmlPath = resolve(__dirname, '404.html');
            if (fs.existsSync(notFoundHtmlPath)) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end(fs.readFileSync(notFoundHtmlPath, 'utf8'));
              return;
            }
          }
        }

        next();
      });
    },
  };
}

// Gather all inputs for Rollup
function getRollupInputs() {
  const inputs: Record<string, string> = {
    main: resolve(__dirname, 'index.html'),
    products: resolve(__dirname, 'products.html'),
    product: resolve(__dirname, 'product.html'),
    about: resolve(__dirname, 'about.html'),
    rentals: resolve(__dirname, 'rentals.html'),
    quality: resolve(__dirname, 'quality.html'),
    blogs: resolve(__dirname, 'blogs.html'),
    gallery: resolve(__dirname, 'gallery.html'),
    contact: resolve(__dirname, 'contact.html'),
    privacy: resolve(__dirname, 'privacy.html'),
    terms: resolve(__dirname, 'terms.html'),
    notfound: resolve(__dirname, '404.html'),
  };

  const productsDir = resolve(__dirname, 'products');
  if (fs.existsSync(productsDir)) {
    const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.html'));
    for (const f of files) {
      const name = f.replace(/\.html$/, '');
      inputs[`product_${name}`] = resolve(productsDir, f);
    }
  }

  return inputs;
}

export default defineConfig({
  plugins: [cleanUrlsPlugin()],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    rollupOptions: {
      input: getRollupInputs(),
    },
  },
});
