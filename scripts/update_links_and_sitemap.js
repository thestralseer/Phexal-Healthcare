import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const linksMap = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'productLinks.json'), 'utf8'));

// 1. Update sitemap.xml & public/sitemap.xml
function updateSitemap(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) return;
  let content = fs.readFileSync(sitemapPath, 'utf8');

  // Replace product.html?id=ID with products/slug.html
  for (const [id, url] of Object.entries(linksMap)) {
    const oldLoc = `https://phexalhealthcare.com/product.html?id=${id}`;
    const newLoc = `https://phexalhealthcare.com${url}`;
    content = content.split(oldLoc).join(newLoc);
  }

  // Ensure privacy and terms are present in sitemap
  if (!content.includes('https://phexalhealthcare.com/privacy')) {
    const privacyEntry = `  <url>
    <loc>https://phexalhealthcare.com/privacy</loc>
    <lastmod>2026-10-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>
  <url>
    <loc>https://phexalhealthcare.com/terms</loc>
    <lastmod>2026-10-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>
</urlset>`;
    content = content.replace('</urlset>', privacyEntry);
  }

  fs.writeFileSync(sitemapPath, content, 'utf8');
  console.log(`Updated sitemap: ${sitemapPath}`);
}

updateSitemap(path.join(rootDir, 'sitemap.xml'));
updateSitemap(path.join(rootDir, 'public', 'sitemap.xml'));

// 2. Update HTML pages replacing product.html?id=ID with /products/slug.html
const htmlFiles = [
  'index.html',
  'products.html',
  'product.html',
  'rentals.html',
  'about.html',
  'quality.html',
  'blogs.html',
  'gallery.html',
  'contact.html',
  '404.html'
];

for (const file of htmlFiles) {
  const fpath = path.join(rootDir, file);
  if (!fs.existsSync(fpath)) continue;
  let html = fs.readFileSync(fpath, 'utf8');
  let replacements = 0;

  for (const [id, url] of Object.entries(linksMap)) {
    // Variations: product.html?id=ID, 'product.html?id=ID', "product.html?id=ID"
    const patterns = [
      `href="product.html?id=${id}"`,
      `href='product.html?id=${id}'`,
      `"product.html?id=${id}"`,
      `'product.html?id=${id}'`
    ];

    for (const pat of patterns) {
      if (html.includes(pat)) {
        const replacement = pat.replace(`product.html?id=${id}`, url);
        html = html.split(pat).join(replacement);
        replacements++;
      }
    }
  }

  if (replacements > 0) {
    fs.writeFileSync(fpath, html, 'utf8');
    console.log(`Updated ${replacements} product links in ${file}`);
  }
}

console.log('All product links & sitemaps updated successfully.');
