const fs = require('fs');
let f = fs.readFileSync('src/components/Footer.tsx', 'utf8');
f = f.replace(
  '<p>© {new Date().getFullYear()} Phexal Healthcare. All rights reserved.</p>',
  `<p>© {new Date().getFullYear()} Phexal Healthcare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-slate-300 transition-colors py-2 min-h-[44px] inline-flex items-center">Privacy Policy (DPDP Act)</a>
            <span>•</span>
            <a href="/terms" className="hover:text-slate-300 transition-colors py-2 min-h-[44px] inline-flex items-center">Terms of Service</a>
          </div>`
);
fs.writeFileSync('src/components/Footer.tsx', f, 'utf8');
console.log('Footer updated successfully!');
