const fs = require('fs');
const path = require('path');

// 1. Update scripts/generate_product_pages.js to eliminate emojis that produce %EF%BF%BD in WhatsApp URL
let genScript = fs.readFileSync('scripts/generate_product_pages.js', 'utf8');

const oldWaBlock = `  // 3. WhatsApp Message formulation
  var waText = '🏥 *B2B EQUIPMENT RFQ SUBMISSION*' +
    '\\n👤 *Contact:* ' + name +
    '\\n🏢 *Hospital/Org:* ' + org +
    '\\n📞 *Phone:* ' + phone +
    '\\n📧 *Email:* ' + email +
    '\\n📍 *City:* ' + city +
    '\\n📦 *Product:* ' + product +
    '\\n🔢 *Quantity:* ' + qty + ' Unit(s)' +
    '\\n\\nPlease dispatch formal GST proforma invoice & availability confirmation.';

  var waUrl = 'https://wa.me/918070008050?text=' + encodeURIComponent(waText);

  statusMsg.className = 'p-3 rounded-xl text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 block';
  statusMsg.innerHTML = '✔ RFQ recorded! Connecting with Phexal Healthcare on WhatsApp...';`;

const newWaBlock = `  // 3. WhatsApp Message formulation (Clean ASCII to prevent %EF%BF%BD / surrogate encoding errors)
  var waText = '*PHEXAL HEALTHCARE - B2B EQUIPMENT RFQ SUBMISSION*' +
    '\\n*Contact Person:* ' + name +
    '\\n*Hospital / Institution:* ' + org +
    '\\n*Phone / WhatsApp:* ' + phone +
    '\\n*Email Address:* ' + email +
    '\\n*City / Location:* ' + city +
    '\\n*Equipment Required:* ' + product +
    '\\n*Target Quantity:* ' + qty + ' Unit(s)' +
    '\\n\\nPlease dispatch formal GST proforma invoice & availability confirmation.';

  var waUrl = 'https://wa.me/918070008050?text=' + encodeURIComponent(waText);

  statusMsg.className = 'p-3 rounded-xl text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 block';
  statusMsg.innerHTML = '<span class=\"material-symbols-outlined text-[16px] inline-block align-middle mr-1\">check_circle</span>RFQ recorded! Connecting with Phexal Healthcare on WhatsApp...';`;

if (genScript.includes(oldWaBlock)) {
  genScript = genScript.replace(oldWaBlock, newWaBlock);
  fs.writeFileSync('scripts/generate_product_pages.js', genScript, 'utf8');
  console.log("Updated scripts/generate_product_pages.js");
} else {
  console.log("oldWaBlock not found in scripts/generate_product_pages.js");
}

// 2. Update index.html buildQuoteMessage to remove emojis
let indexHtml = fs.readFileSync('index.html', 'utf8');
const oldIndexQuote = `    var lines = [
      '🏥 *B2B BULK QUOTATION REQUEST*',
      '🏢 *Institution / Hospital:* ' + d.org,
      '📍 *Destination:* ' + d.city,
      '📦 *Equipment SKU:* ' + d.equipment,
      '🔢 *Target Quantity:* ' + d.qty + ' unit(s)'
    ];
    if (d.notes) {
      lines.push('📝 *Notes / Specifications:* ' + d.notes);
    }`;

const newIndexQuote = `    var lines = [
      '*PHEXAL HEALTHCARE - B2B BULK QUOTATION REQUEST*',
      '*Institution / Hospital:* ' + d.org,
      '*Destination City:* ' + d.city,
      '*Equipment SKU / Item:* ' + d.equipment,
      '*Target Quantity:* ' + d.qty + ' unit(s)'
    ];
    if (d.notes) {
      lines.push('*Notes / Specifications:* ' + d.notes);
    }`;

if (indexHtml.includes(oldIndexQuote)) {
  indexHtml = indexHtml.replace(oldIndexQuote, newIndexQuote);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log("Updated index.html buildQuoteMessage");
} else {
  // Try regex replace for emojis in index.html
  indexHtml = indexHtml.replace(/'🏥 \*B2B BULK QUOTATION REQUEST\*'/g, "'*PHEXAL HEALTHCARE - B2B BULK QUOTATION REQUEST*'");
  indexHtml = indexHtml.replace(/'🏢 \*Institution \/ Hospital:\* '/g, "'*Institution / Hospital:* '");
  indexHtml = indexHtml.replace(/'📍 \*Destination:\* '/g, "'*Destination City:* '");
  indexHtml = indexHtml.replace(/'📦 \*Equipment SKU:\* '/g, "'*Equipment SKU / Item:* '");
  indexHtml = indexHtml.replace(/'🔢 \*Target Quantity:\* '/g, "'*Target Quantity:* '");
  indexHtml = indexHtml.replace(/'📝 \*Notes \/ Specifications:\* '/g, "'*Notes / Specifications:* '");
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log("Updated index.html buildQuoteMessage via regex");
}

// 3. Generate clean, canonical sitemap.xml
const catalogRaw = fs.readFileSync('src/data/catalog.ts', 'utf8');
const productLinks = JSON.parse(fs.readFileSync('src/data/productLinks.json', 'utf8'));

const today = new Date().toISOString().split('T')[0];

let sitemapEntries = [];

// Main core static pages
const corePages = [
  { url: 'https://phexalhealthcare.com/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://phexalhealthcare.com/products.html', priority: '0.95', changefreq: 'daily' },
  { url: 'https://phexalhealthcare.com/rentals.html', priority: '0.90', changefreq: 'daily' },
  { url: 'https://phexalhealthcare.com/quality.html', priority: '0.85', changefreq: 'weekly' },
  { url: 'https://phexalhealthcare.com/about.html', priority: '0.80', changefreq: 'monthly' },
  { url: 'https://phexalhealthcare.com/gallery.html', priority: '0.80', changefreq: 'weekly' },
  { url: 'https://phexalhealthcare.com/blogs.html', priority: '0.80', changefreq: 'weekly' },
  { url: 'https://phexalhealthcare.com/contact.html', priority: '0.85', changefreq: 'monthly' },
  { url: 'https://phexalhealthcare.com/privacy.html', priority: '0.50', changefreq: 'monthly' },
  { url: 'https://phexalhealthcare.com/terms.html', priority: '0.50', changefreq: 'monthly' },
];

for (const page of corePages) {
  sitemapEntries.push(`  <url>
    <loc>${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
}

// Static product pages (89 items)
const seenUrls = new Set();
for (const [id, url] of Object.entries(productLinks)) {
  const fullUrl = `https://phexalhealthcare.com${url}`;
  if (!seenUrls.has(fullUrl)) {
    seenUrls.add(fullUrl);
    sitemapEntries.push(`  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);
  }
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>
`;

fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');
fs.writeFileSync('public/sitemap.xml', sitemapXml, 'utf8');
console.log(`Generated sitemap.xml and public/sitemap.xml with ${sitemapEntries.length} canonical URLs.`);
