const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const { from, to } of replacements) {
    if (typeof from === 'string') {
      content = content.split(from).join(to);
    } else {
      content = content.replace(from, to);
    }
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`No changes needed: ${filePath}`);
  }
}

// 1. src/pages/HomePage.tsx
replaceInFile(path.join(__dirname, '../src/pages/HomePage.tsx'), [
  {
    from: "Reliable Double Jar Suction Machines Manufacturers in India",
    to: "Reliable Double Jar Suction Machine Supplier in India"
  },
  {
    from: "India's Trusted Medical Device Manufacturer &amp; ICU Infrastructure Partner",
    to: "India's Trusted Medical Equipment Supplier &amp; ICU Infrastructure Partner"
  },
  {
    from: "CDSCO Form MD-42 licensed medical equipment manufacturer, international exporter, and emergency ICU supplier.",
    to: "CDSCO Form MD-42 licensed medical equipment supplier & distributor, international exporter, and emergency ICU supplier."
  },
  {
    from: "title: '2. Direct OEM Manufacturer Pricing'",
    to: "title: '2. Direct Wholesale Pricing'"
  },
  {
    from: "title: '3. 120-Minute Emergency NCR Dispatch'",
    to: "title: '3. Fast Same-Day Delivery in Delhi-NCR'"
  },
  {
    from: "We guarantee 120-minute emergency delivery and bedside setup across Delhi, Noida, Greater Noida, Ghaziabad, and Gurgaon, 24/7.",
    to: "We guarantee fast same-day emergency delivery and bedside setup across Delhi, Noida, Greater Noida, Ghaziabad, and Gurgaon, 24/7."
  },
  {
    from: "52+ Verified Reviews",
    to: "38 Verified Reviews"
  },
  {
    from: "Google 4.9 ★ Rated Healthcare Provider",
    to: "4.9 ★ Rated Healthcare Provider (38 Reviews)"
  },
  {
    from: "in under 45 minutes",
    to: "with prompt same-day dispatch"
  },
  {
    from: "dispatched in 15 minutes",
    to: "dispatched promptly with fast turnaround"
  },
  {
    from: "within 15 minutes",
    to: "promptly with fast turnaround"
  },
  {
    from: "/images/products/phx-suction-dev.png",
    to: "/images/products/phx-suction-dev.webp"
  },
  {
    from: "/images/products/phx-warmer-infant.png",
    to: "/images/products/phx-warmer-infant.webp"
  },
  {
    from: "/images/products/phx-bed-paramount.png",
    to: "/images/products/phx-bed-paramount.webp"
  }
]);

// 2. src/pages/AboutPage.tsx
replaceInFile(path.join(__dirname, '../src/pages/AboutPage.tsx'), [
  {
    from: "Official Indian B2B medical equipment manufacturer, authorized metrology calibration hub, and 24/7 ICU life-support provider.",
    to: "Official Indian B2B medical equipment supplier & distributor, authorized metrology calibration hub, and 24/7 ICU life-support provider."
  },
  {
    from: "Built on Clinical Rigor, Direct Manufacturer Pricing &amp; Patient Safety",
    to: "Built on Clinical Rigor, Direct Wholesale Pricing &amp; Patient Safety"
  },
  {
    from: "premier B2B medical equipment manufacturer and global exporter",
    to: "premier B2B medical equipment supplier, distributor, and global exporter"
  },
  {
    from: "medical device manufacturer, expanding indigenously manufactured ICU and surgical solutions",
    to: "medical equipment supplier, expanding indigenously certified ICU and surgical solutions"
  },
  {
    from: "scaled 120-minute emergency bedside setup fleet",
    to: "scaled fast same-day emergency bedside setup fleet"
  }
]);

// 3. src/pages/ProductPage.tsx
replaceInFile(path.join(__dirname, '../src/pages/ProductPage.tsx'), [
  {
    from: "Verified OEM",
    to: "Verified Supplier"
  },
  {
    from: "Manufacturer & Origin",
    to: "Supplier & Origin"
  },
  {
    from: "dispatched within 15 minutes",
    to: "dispatched promptly"
  },
  {
    from: "15 Min Response",
    to: "Fast Proforma Response"
  },
  {
    from: "within 15 minutes",
    to: "promptly with fast turnaround"
  }
]);

// 4. src/components/ProductDetailModal.tsx
replaceInFile(path.join(__dirname, '../src/components/ProductDetailModal.tsx'), [
  {
    from: "Verified OEM",
    to: "Verified Supplier"
  },
  {
    from: "within 15 minutes",
    to: "promptly with fast turnaround"
  }
]);

// 5. src/components/Footer.tsx
replaceInFile(path.join(__dirname, '../src/components/Footer.tsx'), [
  {
    from: `<div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
        <p>© {new Date().getFullYear()} Phexal Healthcare. All rights reserved.</p>
        <p>CDSCO Form MD-42 Reg. UP/GHA/MD42/2026/000142 | CDSCO Licensed & CE Compliant.</p>
      </div>`,
    to: `<div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
        <p>© {new Date().getFullYear()} Phexal Healthcare. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-slate-300 transition-colors py-2 min-h-[44px] inline-flex items-center">Privacy Policy (DPDP Act)</a>
          <span>•</span>
          <a href="/terms" className="hover:text-slate-300 transition-colors py-2 min-h-[44px] inline-flex items-center">Terms of Service</a>
        </div>
        <p>CDSCO Form MD-42 Reg. UP/GHA/MD42/2026/000142 | CDSCO Licensed & CE Compliant.</p>
      </div>`
  }
]);

// 6. src/data/catalog.ts
replaceInFile(path.join(__dirname, '../src/data/catalog.ts'), [
  {
    from: /"manufacturer":\s*"Phexal Healthcare OEM"/g,
    to: '"manufacturer": "Phexal Healthcare (Supplier & Distributor)"'
  },
  {
    from: /"warranty":\s*"1 Year Manufacturer Warranty"/g,
    to: '"warranty": "1-Year Standard Warranty"'
  },
  {
    from: /"warranty":\s*"2 Year Manufacturer Warranty"/g,
    to: '"warranty": "2-Year Standard Warranty"'
  },
  {
    from: /"warranty":\s*"3 Year Manufacturer Warranty"/g,
    to: '"warranty": "3-Year Standard Warranty"'
  },
  {
    from: /"warranty":\s*"5 Year Manufacturer Warranty"/g,
    to: '"warranty": "5-Year Standard Warranty"'
  }
]);

// 7. src/data/complianceData.ts
replaceInFile(path.join(__dirname, '../src/data/complianceData.ts'), [
  {
    from: "Verified OEM & Institutional Seller",
    to: "Verified Supplier & Institutional Seller"
  },
  {
    from: "Response to emergency hospital clinical inquiries within 15 minutes",
    to: "Response to emergency hospital clinical inquiries promptly"
  }
]);

// 8. public/404.html & 404.html
const f404Reps = [
  { from: "within 15 minutes", to: "promptly with fast turnaround" },
  { from: "in under 45 minutes", to: "with prompt same-day dispatch" }
];
replaceInFile(path.join(__dirname, '../404.html'), f404Reps);
replaceInFile(path.join(__dirname, '../public/404.html'), f404Reps);

// 9. index.html - 30-60 min to Same-Day Delivery
replaceInFile(path.join(__dirname, '../index.html'), [
  {
    from: "<span>30-60 Min Delivery</span>",
    to: "<span>Same-Day Delivery</span>"
  }
]);

// 10. llms.txt and public/llms.txt
const llmReps = [
  { from: "with 30-60 minute rapid delivery.", to: "with fast same-day delivery across Delhi-NCR." }
];
replaceInFile(path.join(__dirname, '../llms.txt'), llmReps);
replaceInFile(path.join(__dirname, '../public/llms.txt'), llmReps);

console.log("Deep cleanup script finished successfully!");
