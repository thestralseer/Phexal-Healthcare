const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add DPDP consent note in index.html quote modal
html = html.replace(
  'Connecting directly with Phoebus / Phexal B2B Export &amp; Rental Desk',
  'Connecting directly with Phexal B2B Procurement Desk. By submitting, you consent to our <a href="/privacy" target="_blank" class="underline text-sky-400 hover:text-white">Privacy Policy (DPDP Act 2023)</a>.'
);

// 2. Add lead capture in form submission
const oldSubmitTarget = "var url = waUrl(buildQuoteMessage(payload));";
const newSubmitTarget = `// Lead capture before / alongside WhatsApp
      try {
        var storedLeads = JSON.parse(localStorage.getItem('phx_leads_queue') || '[]');
        storedLeads.push(Object.assign({}, payload, { timestamp: new Date().toISOString(), source: 'index_quote_modal' }));
        localStorage.setItem('phx_leads_queue', JSON.stringify(storedLeads));
        fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(function() {});
      } catch (err) {}

      var url = waUrl(buildQuoteMessage(payload));`;

if (html.includes(oldSubmitTarget)) {
  html = html.replace(oldSubmitTarget, newSubmitTarget);
  console.log("Updated quote submit with lead capture in index.html");
} else {
  console.log("oldSubmitTarget not found in index.html");
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');
