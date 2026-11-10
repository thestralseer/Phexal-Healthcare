const fs = require('fs');
let content = fs.readFileSync('src/components/QuotationGeneratorModal.tsx', 'utf8');

// Replace handleShareWhatsApp
const oldFunc = `  const handleShareWhatsApp = () => {
    let msg = \`*PHEXAL HEALTHCARE - OFFICIAL TECHNICAL RFQ DOSSIER*\\n\`;
    msg += \`RFQ Ref: \${rfqNumber}\\n\`;
    msg += \`Date: \${rfqDate}\\n\`;
    msg += \`Client: \${clientName}\\n\`;
    msg += \`Total Items: \${lineItems.length} Products\\n\\n\`;
    msg += \`*Requested Equipment:*\\n\`;
    lineItems.forEach((item, idx) => {
      msg += \`\${idx + 1}. \${item.name} (\${item.sku}) - Qty: \${item.quantity} Units\\n\`;
    });
    msg += \`\\nCDSCO Lic: UP/GHA/MD42/2026/000142 | GSTIN: 09CIOPG0975L1ZN\\n\`;
    msg += \`Please provide customized wholesale institutional pricing, volume tier discount, and dispatch schedule.\`;
    window.open(\`https://wa.me/918070008050?text=\${encodeURIComponent(msg)}\`, '_blank');
  };`;

const newFunc = `  const handleShareWhatsApp = () => {
    // Lead capture alongside / before WhatsApp trigger
    try {
      const leadData = {
        name: buyerContact,
        organization: clientName,
        email: buyerEmail,
        phone: buyerPhone,
        city: deliveryAddress,
        rfqNumber,
        itemsCount: lineItems.length,
        items: lineItems.map(i => \`\${i.name} (Qty: \${i.quantity})\`),
        source: 'QuotationGeneratorModal',
        timestamp: new Date().toISOString()
      };
      const stored = JSON.parse(localStorage.getItem('phx_leads_queue') || '[]');
      stored.push(leadData);
      localStorage.setItem('phx_leads_queue', JSON.stringify(stored));
      fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      }).catch(() => {});
    } catch (e) {}

    let msg = \`*PHEXAL HEALTHCARE - OFFICIAL TECHNICAL RFQ DOSSIER*\\n\`;
    msg += \`RFQ Ref: \${rfqNumber}\\n\`;
    msg += \`Date: \${rfqDate}\\n\`;
    msg += \`Client: \${clientName}\\n\`;
    msg += \`Total Items: \${lineItems.length} Products\\n\\n\`;
    msg += \`*Requested Equipment:*\\n\`;
    lineItems.forEach((item, idx) => {
      msg += \`\${idx + 1}. \${item.name} (\${item.sku}) - Qty: \${item.quantity} Units\\n\`;
    });
    msg += \`\\nCDSCO Lic: UP/GHA/MD42/2026/000142 | GSTIN: 09CIOPG0975L1ZN\\n\`;
    msg += \`Please provide customized wholesale institutional pricing, volume tier discount, and dispatch schedule.\`;
    window.open(\`https://wa.me/918070008050?text=\${encodeURIComponent(msg)}\`, '_blank');
  };`;

content = content.replace(oldFunc, newFunc);

// Add DPDP consent note in modal
const oldCommercialNote = `                  <span className="font-bold block mb-0.5">Commercial Pricing Protocol:</span>
                  <span>Custom institutional wholesale volume pricing & CIF freight estimates are negotiated directly via WhatsApp Commercial Desk.</span>
                </div>`;

const newCommercialNote = `                  <span className="font-bold block mb-0.5">Commercial Pricing Protocol & DPDP Consent:</span>
                  <span>Custom institutional wholesale volume pricing & CIF freight estimates are negotiated directly via WhatsApp Commercial Desk. Data collected is handled in accordance with the DPDP Act 2023.</span>
                </div>`;

content = content.replace(oldCommercialNote, newCommercialNote);

fs.writeFileSync('src/components/QuotationGeneratorModal.tsx', content, 'utf8');
console.log('QuotationGeneratorModal updated successfully!');
