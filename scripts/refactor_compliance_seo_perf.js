import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetFiles = [
  'index.html',
  'products.html',
  'product.html',
  'rentals.html',
  'about.html',
  'quality.html',
  'blogs.html',
  'gallery.html',
  'contact.html',
  '404.html',
  'llms.txt',
  'llms-full.txt',
  'public/llms.txt',
  'public/llms-full.txt'
];

function refactorContent(content, filename) {
  let res = content;

  // 1. Email domain replacement
  res = res.replace(/info@phexal\.in/g, 'info@phexalhealthcare.com');

  // 2. Schema logo repair
  res = res.replace(
    /"logo":\s*"https:\/\/phexalhealthcare\.com\/images\/hero_biomedical_command\.jpg"/g,
    '"logo": "https://phexalhealthcare.com/assets/images/logo.png"'
  );

  // 3. Remove Tailwind CDN and warning suppression script
  res = res.replace(
    /<script>\s*\(function\(\)\{var w=console\.warn;console\.warn=function\(\)\{if\(arguments\[0\]&&typeof arguments\[0\]==='string'&&arguments\[0\]\.indexOf\('cdn\.tailwindcss\.com'\)!==-1\)return;w\.apply\(console,arguments\);\}\;\}\)\(\);\s*<\/script>\s*<script src="https:\/\/cdn\.tailwindcss\.com\?plugins=forms,container-queries"><\/script>/g,
    ''
  );
  // Also standalone CDN script if any
  res = res.replace(/<script src="https:\/\/cdn\.tailwindcss\.com\?plugins=forms,container-queries"><\/script>/g, '');

  // Ensure <link rel="stylesheet" href="/css/styles.css"/> is present in head
  if (filename.endsWith('.html') && !res.includes('/css/styles.css')) {
    res = res.replace('</head>', '<link rel="stylesheet" href="/css/styles.css"/>\n</head>');
  }

  // 4. Exact Terminology Replacements (CDSCO Form MD-42 compliance)
  res = res.replace(/Double Jar Suction Machine Manufacturers in India/g, 'Double Jar Suction Machine Supplier in India');
  res = res.replace(/Double Jar Suction Machine Manufacturer in India/g, 'Double Jar Suction Machine Supplier in India');
  res = res.replace(/CDSCO Form MD-42 licensed medical equipment manufacturer/g, 'CDSCO Form MD-42 licensed medical equipment supplier & distributor');
  res = res.replace(/CDSCO Form MD-42 licensed medical equipment manufacturers/g, 'CDSCO Form MD-42 licensed medical equipment suppliers & distributors');
  res = res.replace(/India's Trusted Medical Device Manufacturer/g, "India's Trusted Medical Equipment Supplier");
  res = res.replace(/India's Trusted Medical Equipment Manufacturer/g, "India's Trusted Medical Equipment Supplier");
  res = res.replace(/India's leading CDSCO MD-42 licensed medical equipment manufacturer/g, "India's leading CDSCO MD-42 licensed medical equipment supplier & distributor");
  res = res.replace(/Direct OEM Manufacturer Pricing/g, 'Direct Wholesale Pricing');
  res = res.replace(/Direct OEM manufacturer pricing/g, 'Direct wholesale pricing');
  res = res.replace(/DIRECT MANUFACTURER\.\.\. Full manufacturing line of\.\.\. beds/g, 'Wide range of... beds');
  res = res.replace(/licensed biomedical manufacturer and distributor/g, 'licensed biomedical equipment distributor');
  res = res.replace(/Verified OEM/g, 'Verified Supplier');
  res = res.replace(/Verified OEM Supplier/g, 'Verified Supplier & Distributor');
  res = res.replace(/Manufacturer and distributor of/g, 'Supplier and distributor of');
  res = res.replace(/manufacturer and distributor of/g, 'supplier and distributor of');
  res = res.replace(/B2B medical equipment manufacturer and global exporter/g, 'B2B medical equipment supplier, distributor, and global exporter');
  res = res.replace(/B2B medical equipment manufacturer/g, 'B2B medical equipment supplier & distributor');
  res = res.replace(/medical device manufacturer/g, 'medical equipment supplier');
  res = res.replace(/hospital bed manufacturer/g, 'hospital bed supplier');
  res = res.replace(/equipment manufacturer and distributor/g, 'equipment supplier and distributor');

  // 5. Standardize Delivery Promises (Remove conflicting 120-min, 45-min, 15-min)
  res = res.replace(/120-min emergency bedside delivery across Delhi, Noida &amp; Gurgaon\./g, 'Fast same-day emergency bedside delivery across Delhi NCR.');
  res = res.replace(/120-min emergency bedside delivery across Delhi, Noida & Gurgaon\./g, 'Fast same-day emergency bedside delivery across Delhi NCR.');
  res = res.replace(/24\/7 120-min bedside setup/g, '24/7 fast same-day delivery & bedside setup');
  res = res.replace(/24\/7 rapid 120-minute delivery/g, '24/7 fast same-day delivery');
  res = res.replace(/rapid 120-minute delivery/g, 'fast same-day delivery');
  res = res.replace(/120-minute bedside setup/g, 'fast same-day bedside setup');
  res = res.replace(/120-minute setup/g, 'fast same-day setup');
  res = res.replace(/120-minute rapid bedside emergency deployment SLA/g, 'fast same-day bedside emergency deployment across Delhi-NCR');
  res = res.replace(/guaranteed 120-minute delivery SLA/g, 'guaranteed same-day delivery in Delhi-NCR');
  res = res.replace(/guaranteed 120-minute bedside delivery/g, 'guaranteed same-day bedside delivery');
  res = res.replace(/120-minute delivery/g, 'same-day delivery');
  res = res.replace(/120-Minute Emergency NCR Dispatch/g, 'Fast Same-Day NCR Dispatch');
  res = res.replace(/120-Min Emergency Setup/g, 'Fast Same-Day Emergency Setup');
  res = res.replace(/120-Min Bedside Setup/g, 'Fast Same-Day Delivery & Setup');
  res = res.replace(/120-Min Bedside SLA/g, 'Same-Day Bedside SLA');
  res = res.replace(/120-Min Dispatch/g, 'Same-Day Delivery');
  res = res.replace(/120-MIN DISPATCH/g, 'SAME-DAY DELIVERY');
  res = res.replace(/120-Min SLA/g, 'Same-Day Delivery');
  res = res.replace(/120-minute SLA/g, 'same-day delivery');
  res = res.replace(/120-minute rapid delivery desk/g, 'fast same-day delivery desk');
  res = res.replace(/120-Min Fleet/g, 'Fast Delivery Fleet');
  res = res.replace(/120-minute/g, 'same-day');
  res = res.replace(/120-Min/g, 'Same-Day');
  res = res.replace(/120-min/g, 'same-day');

  res = res.replace(/under 45 minutes/g, 'prompt same-day dispatch');
  res = res.replace(/&lt; 45 Mins Setup/g, 'Fast Same-Day Delivery');
  res = res.replace(/45 Mins Target/g, 'Same-Day Delivery Target');

  // Invoicing & Quote turnaround promises
  res = res.replace(/dispatched in 15 minutes/g, 'dispatched promptly');
  res = res.replace(/dispatched within 15 minutes/g, 'dispatched promptly');
  res = res.replace(/within 15 minutes/g, 'with fast proforma turnaround');
  res = res.replace(/in 15 minutes/g, 'with fast turnaround');
  res = res.replace(/in 15 mins/g, 'promptly');
  res = res.replace(/15-Min Response/g, 'Fast Response');
  res = res.replace(/Under 15 minutes/g, 'Prompt Response');

  // 6. Standardize Warranty Claims
  res = res.replace(/24-month manufacturer warranties/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/24-month manufacturer warranty/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/2 Years Frame Warranty/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/2 Years Frame AMC/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/2 Years Mechanical Warranty/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/3 Years Comprehensive/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/3 Years Actuator Warranty/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/5 Years Material Warranty/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/5 Years Unit Warranty/g, '1-Year / 2-Year Standard Warranty');
  res = res.replace(/5 Years Warranty/g, '1-Year / 2-Year Standard Warranty');

  // 7. Unify Reviews & Ratings (38 Customer Reviews vs 35+)
  res = res.replace(/35\+ Verified Google Reviews/g, '38 Customer Reviews (4.9/5 Rating)');
  res = res.replace(/35\+ Google Reviews/g, '38 Customer Reviews');
  res = res.replace(/Verified Google Reviews/g, 'Customer Reviews & Feedback');
  res = res.replace(/'\s*\+\s*googleLogoSvg\s*\+\s*'<span\s*>Verified Google Review<\/span>'/g, "'<span class=\"material-symbols-outlined text-[15px] text-sky-600\">verified</span><span>Verified Client Feedback</span>'");
  res = res.replace(/'\s*\+\s*googleLogoSvg\s*\+\s*'<span\s*>Verified Google Review<\/span>/g, "'<span class=\"material-symbols-outlined text-[15px] text-sky-600\">verified</span><span>Verified Client Feedback</span>");

  // 8. Remove empty src="" on images
  res = res.replace(/src=""/g, 'src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'%3E%3C/svg%3E"');

  // 9. Replace generic root domain social links bar in index.html
  if (filename === 'index.html') {
    res = res.replace(
      /<!-- Right Edge Floating Social Bar -->\s*<div class="fixed right-3 top-1\/2 -translate-y-1\/2 z-40 hidden md:flex flex-col gap-2">[\s\S]*?<\/div>/g,
      '<!-- Social links bar safely removed per specification -->'
    );

    // 10. Heading Hierarchy on Homepage (index.html)
    // Replace slide <h1> tags with <h2>
    // Slide 1:
    res = res.replace(
      /<h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-\[1\.14\] tracking-tight drop-shadow-sm" style="font-family:'Plus Jakarta Sans',sans-serif;">\s*Double Jar Suction Machine Supplier in India\s*<\/h1>/g,
      '<h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.14] tracking-tight drop-shadow-sm" style="font-family:\'Plus Jakarta Sans\',sans-serif;">Double Jar Suction Machine Supplier in India</h2>'
    );
    // Other slides:
    res = res.replace(
      /<h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-\[1\.14\] tracking-tight drop-shadow-sm"/g,
      '<h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.14] tracking-tight drop-shadow-sm"'
    );
    // Corresponding closing </h1> in slider
    // Ensure exactly ONE singular <h1> exists on Homepage:
    // Check if <h1>Medical Equipment Supplier in Ghaziabad & Delhi NCR</h1> exists; if not, add it before the slider or at the top of hero
    if (!res.includes('<h1 class="phx-main-h1')) {
      res = res.replace(
        '<section class="relative w-full bg-[#07192f] overflow-hidden text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20">',
        '<section class="relative w-full bg-[#07192f] overflow-hidden text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20">\n  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">\n    <h1 class="phx-main-h1 text-xs sm:text-sm font-extrabold text-sky-400 uppercase tracking-widest flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>Medical Equipment Supplier in Ghaziabad &amp; Delhi NCR</h1>\n  </div>'
      );
    }
  }

  // 11. Footer links to Privacy & Terms
  res = res.replace(/onclick="openPrivacyModal\(\)"/g, 'href="/privacy"');
  res = res.replace(/onclick="openTermsModal\(\)"/g, 'href="/terms"');

  // Replace any footer links pointing to '#' for Privacy and Terms
  res = res.replace(/href="#"([^>]*>Privacy)/g, 'href="/privacy"$1');
  res = res.replace(/href="#"([^>]*>Terms)/g, 'href="/terms"$1');

  // 12. Convert PNG product references in HTML to WebP
  res = res.replace(/\/images\/products\/([a-zA-Z0-9_-]+)\.png/g, '/images/products/$1.webp');

  // 13. Ensure mobile touch targets (44px)
  res = res.replace(/class="([^"]*)\b(w-8 h-8|w-7 h-7)\b([^"]*)"/g, 'class="$1 min-h-[44px] min-w-[44px] $3"');

  return res;
}

function processAll() {
  for (const relPath of targetFiles) {
    const fpath = path.join(rootDir, relPath);
    if (!fs.existsSync(fpath)) continue;
    const content = fs.readFileSync(fpath, 'utf8');
    const updated = refactorContent(content, relPath);
    if (content !== updated) {
      fs.writeFileSync(fpath, updated, 'utf8');
      console.log(`Refactored: ${relPath}`);
    }
  }
}

processAll();
console.log('Compliance, technical SEO, and performance refactoring complete!');
