/**
 * PHEXAL HEALTHCARE - ENTERPRISE POWER TOOLS (Sitewide Client Script)
 * 1. Instant Downloadable PDF Quotation / RFQ Specification Dossier (No fixed prices - 100% custom via WhatsApp)
 * 2. CDSCO Form MD-42 & ISO 13485 Compliance & Regulatory Vault
 * 3. Unified Floating Action Dock (Single Clean Button, Zero Artifacts)
 */

(function() {
  // Inject Google Material Symbols if not already present
  if (!document.getElementById('phx-material-symbols-link')) {
    const link = document.createElement('link');
    link.id = 'phx-material-symbols-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
    document.head.appendChild(link);
  }

  // ══════════════════════════════════════════════════════════════
  // 1. INJECT STYLES FOR PRINT, HIDE OLD CLASHING FAB, & CLEAN STYLING
  // ══════════════════════════════════════════════════════════════
  if (!document.getElementById('phx-power-tools-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'phx-power-tools-styles';
    styleEl.textContent = `
      /* HIDE ALL OLD DUPLICATE FLOATING BUTTONS */
      #phx-fab, .phx-fab-glow, a[aria-label*="WhatsApp"][style*="fixed"], .floating-wa-btn {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
        visibility: hidden !important;
      }
      
      #phx-speed-dial-trigger {
        background: linear-gradient(135deg, #006591 0%, #0088cc 100%) !important;
        box-shadow: 0 10px 25px -3px rgba(0, 101, 145, 0.45), 0 4px 10px -2px rgba(0, 0, 0, 0.2) !important;
        outline: none !important;
        border: none !important;
      }
      #phx-speed-dial-trigger:hover {
        transform: translateY(-2px) scale(1.03) !important;
        box-shadow: 0 14px 28px -3px rgba(0, 101, 145, 0.55), 0 6px 12px -2px rgba(0, 0, 0, 0.25) !important;
      }

      @media print {
        .no-print, #phx-header, #phx-footer, #phx-speed-dial-wrap, #phx-announcement-bar, nav, footer, button, .no-print-force, #phx-cart-drawer, #phx-cart-overlay, #phx-fab {
          display: none !important;
        }
        body, html {
          background: white !important;
          color: black !important;
          overflow: visible !important;
        }
        #phx-quote-modal, #phx-vault-modal {
          position: static !important;
          display: block !important;
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          border: none !important;
          z-index: 1 !important;
        }
        #phx-quote-printable-content {
          box-shadow: none !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  // ══════════════════════════════════════════════════════════════
  // 2. UNIFIED FLOATING ACTION DOCK (NO CLASHING / NO ARTIFACTS)
  // ══════════════════════════════════════════════════════════════
  let speedDialWrap = document.getElementById('phx-speed-dial-wrap');
  if (!speedDialWrap) {
    speedDialWrap = document.createElement('div');
    speedDialWrap.id = 'phx-speed-dial-wrap';
    speedDialWrap.className = 'fixed bottom-6 right-6 z-[130] flex flex-col items-end no-print font-sans select-none';
    speedDialWrap.innerHTML = `
      <!-- Expanded Menu Popup -->
      <div id="phx-speed-dial-menu" class="hidden mb-3 w-72 sm:w-80 bg-slate-900/95 backdrop-blur-xl text-white rounded-3xl p-4 shadow-2xl border border-sky-500/30 transition-all duration-200">
        <div class="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="text-xs font-black text-white tracking-wide uppercase">Phexal Quick Actions</span>
          </div>
          <span class="text-[10px] font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-800">ACTIVE DUTY</span>
        </div>

        <div class="space-y-1.5 text-xs">
          <!-- 1. WhatsApp Clinical Consultation & Custom Quotation -->
          <a href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare,%20I%20need%20wholesale%20pricing%20and%20specifications%20for%20medical%20equipment." target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md">
            <div class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[18px]">chat</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-[10px] uppercase tracking-wider text-emerald-100">WhatsApp Desk</div>
              <div class="text-xs font-black truncate">Request Custom Price Quote</div>
            </div>
          </a>

          <!-- 2. Direct Emergency Hotline -->
          <a href="tel:+918070008050" class="flex items-center gap-3 p-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold hover:brightness-110 transition-all shadow-md">
            <div class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[18px]">phone_in_talk</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-[10px] uppercase tracking-wider text-rose-100">Direct Hotline</div>
              <div class="text-sm font-black truncate">+91 80700 08050</div>
            </div>
          </a>

          <!-- 3. Official PDF RFQ / Specification Dossier Generator -->
          <button type="button" onclick="window.generateCartPDFQuotation()" class="w-full flex items-center gap-3 p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-700 text-left cursor-pointer">
            <div class="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[18px]">description</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-[10px] uppercase tracking-wider text-slate-400">Commercial RFQ</div>
              <div class="text-xs font-bold text-slate-100 truncate">Generate Official PDF RFQ</div>
            </div>
          </button>

          <!-- 4. CDSCO & ISO Compliance Vault -->
          <button type="button" onclick="window.openPhexalComplianceVault()" class="w-full flex items-center gap-3 p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-700 text-left cursor-pointer">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-[10px] uppercase tracking-wider text-slate-400">Statutory License</div>
              <div class="text-xs font-bold text-slate-100 truncate">CDSCO & ISO 13485 Vault</div>
            </div>
          </button>

          <!-- 5. Google Maps Hub -->
          <a href="https://maps.google.com/?q=762+Nyay+Khand+1+Indirapuram+Ghaziabad" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-700">
            <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[18px]">location_on</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-[10px] uppercase tracking-wider text-slate-400">Physical Facility</div>
              <div class="text-xs font-bold text-slate-100 truncate">Indirapuram Hub on Maps</div>
            </div>
          </a>
        </div>

        <div class="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[12px] text-emerald-400">schedule</span>
            <span>120-Min Bedside SLA</span>
          </span>
          <span class="font-mono text-slate-500">GST: 09CHZPK9297S1Z0N</span>
        </div>
      </div>

      <!-- Main Clean Trigger Button -->
      <button id="phx-speed-dial-trigger" type="button" onclick="window.togglePhexalSpeedDial()" class="flex items-center gap-2.5 px-5 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white shadow-xl transition-all duration-300 cursor-pointer">
        <span class="material-symbols-outlined text-[20px] text-white">medical_services</span>
        <span class="tracking-tight hidden sm:inline font-bold">Hotline & Quick Actions</span>
      </button>
    `;
    document.body.appendChild(speedDialWrap);
  }

  window.togglePhexalSpeedDial = function() {
    const menu = document.getElementById('phx-speed-dial-menu');
    if (!menu) return;
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  };

  // ══════════════════════════════════════════════════════════════
  // 3. OFFICIAL PDF RFQ / SPECIFICATION PROFORMA (NO PRICES)
  // ══════════════════════════════════════════════════════════════
  let quoteModal = document.getElementById('phx-quote-modal');
  if (!quoteModal) {
    quoteModal = document.createElement('div');
    quoteModal.id = 'phx-quote-modal';
    quoteModal.className = 'fixed inset-0 z-[140] hidden bg-slate-950/85 backdrop-blur-md overflow-y-auto p-2 sm:p-4 md:p-6 flex items-center justify-center font-sans';
    quoteModal.onclick = function(e) { if (e.target === quoteModal) window.closePhexalQuotationModal(); };

    const sampleRfqNum = 'PHX-RFQ-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const validStr = new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

    quoteModal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[92vh]" onclick="event.stopPropagation()">
        
        <!-- Top Action Bar -->
        <div class="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800 no-print shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">description</span>
            </div>
            <div>
              <div class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Institutional Procurement Desk</div>
              <h3 class="text-sm font-bold text-white">Official Technical RFQ & Equipment Specification Dossier</h3>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" onclick="window.print()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white shadow-md transition-all cursor-pointer">
              <span class="material-symbols-outlined text-[16px]">print</span>
              <span>Print / Save PDF</span>
            </button>
            <button type="button" onclick="window.shareQuoteViaWhatsApp()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md transition-all cursor-pointer">
              <span class="material-symbols-outlined text-[16px]">chat</span>
              <span>Get WhatsApp Price</span>
            </button>
            <button type="button" onclick="window.closePhexalQuotationModal()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <!-- Scrollable Printable Document Area -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50">
          <div id="phx-quote-printable-content" class="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-slate-200">
            
            <!-- Letterhead Header -->
            <div class="border-b-2 border-slate-900 pb-5 mb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#006591] to-[#10B981] flex items-center justify-center text-white font-black text-lg shadow-md">+</div>
                  <div>
                    <h1 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">PHEXAL HEALTHCARE</h1>
                    <p class="text-[10px] font-bold text-[#006591] uppercase tracking-widest">Advanced Medical Systems • Exporter & Supplier</p>
                  </div>
                </div>
                <div class="mt-3 text-[11px] text-slate-600 space-y-0.5">
                  <p>📍 762, Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, UP 201014</p>
                  <p>📞 Emergency Hotline: +91 80700 08050 | WhatsApp Commercial Desk</p>
                  <p>✉️ Phexalhealthcare@gmail.com | www.phexalhealthcare.com</p>
                </div>
              </div>

              <div class="sm:text-right text-xs space-y-1 bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-none border-slate-200">
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-wider mb-1">Official RFQ Dossier</span>
                <p><strong>RFQ Ref:</strong> <span class="font-mono text-[#006591] font-bold" id="quote-ref-num">${sampleRfqNum}</span></p>
                <p><strong>Date:</strong> ${todayStr}</p>
                <p><strong>Validity:</strong> ${validStr} (30 Days)</p>
                <p><strong>GSTIN:</strong> 09CHZPK9297S1Z0N</p>
                <p><strong>CDSCO Lic:</strong> UP/GHA/MD42/2026/000142</p>
              </div>
            </div>

            <!-- Buyer Site Information -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Procuring Institution / Hospital:</span>
                <input id="quote-input-hospital" type="text" value="City Super Specialty Hospital & Research Centre" class="w-full font-bold text-slate-900 text-xs bg-transparent border-b border-dashed border-slate-300 py-0.5 outline-none"/>
                <input id="quote-input-contact" type="text" value="Attn: Medical Director / Sourcing Committee" class="w-full text-[11px] text-slate-600 bg-transparent border-b border-dashed border-slate-300 py-0.5 outline-none mt-1"/>
                <input id="quote-input-phone" type="text" value="+91 98110 XXXXX" class="w-full text-[11px] text-slate-600 bg-transparent border-b border-dashed border-slate-300 py-0.5 outline-none mt-1"/>
              </div>
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Delivery Destination / Facility Site:</span>
                <input id="quote-input-address" type="text" value="Sector 62, Institutional Area, Noida, Delhi NCR" class="w-full text-xs text-slate-800 bg-transparent border-b border-dashed border-slate-300 py-0.5 outline-none"/>
                <div class="mt-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950">
                  <span class="font-bold block mb-0.5">Commercial Pricing Terms:</span>
                  <span>Custom institutional wholesale volume pricing & CIF freight estimates are negotiated directly via WhatsApp Commercial Desk.</span>
                </div>
              </div>
            </div>

            <!-- Item Table (NO PRICES) -->
            <div class="overflow-x-auto mb-5">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="bg-slate-900 text-white text-[11px]">
                    <th class="py-2.5 px-3 font-bold rounded-l-lg">#</th>
                    <th class="py-2.5 px-3 font-bold">Medical Equipment & Model</th>
                    <th class="py-2.5 px-3 font-bold">HSN</th>
                    <th class="py-2.5 px-3 font-bold">Quality Standard</th>
                    <th class="py-2.5 px-3 font-bold text-center">Qty</th>
                    <th class="py-2.5 px-3 font-bold text-right rounded-r-lg">Pricing Channel</th>
                  </tr>
                </thead>
                <tbody id="quote-items-tbody" class="divide-y divide-slate-200">
                  <!-- Dynamically populated from cart -->
                </tbody>
              </table>
            </div>

            <!-- Commercial Protocol & Quality Assurance -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t-2 border-slate-200 text-xs">
              <div class="text-[11px] text-slate-600 space-y-1">
                <h4 class="font-bold text-slate-900 uppercase tracking-wider text-[10px]">Quality & Warranty Standards:</h4>
                <p>• <strong>Warranty:</strong> 12 to 24 Months Comprehensive Replacement Warranty.</p>
                <p>• <strong>Calibration:</strong> Pre-calibrated with ISO 13485 test certificate & electrical safety report.</p>
                <p>• <strong>Emergency Delivery:</strong> 120-Min SLA within Delhi NCR; 2-4 days nationwide.</p>
                <p>• <strong>Statutory Regulatory Scope:</strong> Class A, B, C & D CDSCO Registered.</p>
              </div>

              <div class="space-y-2 text-xs">
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px]">
                  <p class="font-bold text-slate-900 mb-1 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                    <span>Direct WhatsApp Procurement:</span>
                  </p>
                  <p class="text-slate-600 leading-relaxed">
                    Upon generating this specification dossier, submit directly to our duty commercial desk at <strong>+91 80700 08050</strong> for instant volume pricing and formal stamped invoice dispatch.
                  </p>
                </div>

                <div class="pt-2 text-right">
                  <p class="text-[10px] font-bold text-slate-800">Authorized Commercial Officer</p>
                  <p class="text-[9px] text-slate-500">Phexal Healthcare Global</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Footer Action -->
        <div class="px-5 py-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 no-print shrink-0">
          <div class="text-[11px] text-slate-500 flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
            <span>Government Verified CDSCO MD-42 & ISO 13485:2016 Compliant Supplier.</span>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button type="button" onclick="window.print()" class="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer">
              Print / Save PDF
            </button>
            <button type="button" onclick="window.shareQuoteViaWhatsApp()" class="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer">
              Get Price on WhatsApp
            </button>
          </div>
        </div>

      </div>
    `;
    document.body.appendChild(quoteModal);
  }

  window.generateCartPDFQuotation = function() {
    // 1. Close cart drawer if open
    if (typeof closeCartDrawer === 'function') closeCartDrawer();
    const dialMenu = document.getElementById('phx-speed-dial-menu');
    if (dialMenu) dialMenu.classList.add('hidden');

    // 2. Extract items from DOM or localStorage
    let extractedItems = [];
    const cartContainer = document.getElementById('cart-items-container');
    if (cartContainer) {
      const itemRows = cartContainer.children;
      for (let i = 0; i < itemRows.length; i++) {
        const row = itemRows[i];
        const titleEl = row.querySelector('h4') || row.querySelector('.font-bold') || row.querySelector('div');
        const qtyEl = row.querySelector('span[id^="qty-"]') || row.querySelector('.font-bold.text-slate-700') || row.querySelector('.font-semibold');
        const skuEl = row.querySelector('.font-mono') || row.querySelector('.text-slate-400');

        if (titleEl) {
          const title = titleEl.innerText.trim();
          let qty = 1;
          if (qtyEl) {
            const parsed = parseInt(qtyEl.innerText.replace(/[^0-9]/g, ''));
            if (parsed > 0) qty = parsed;
          }
          let sku = 'PHX-MED-' + (i + 1);
          if (skuEl) sku = skuEl.innerText.trim();

          extractedItems.push({
            title: title,
            sku: sku,
            qty: qty
          });
        }
      }
    }

    // Fallback if no items extracted
    if (extractedItems.length === 0) {
      extractedItems = [
        { title: 'Mindray SV300 ICU Mechanical Ventilator', sku: 'PHX-VENT-SV300', qty: 1 },
        { title: 'Plain Bed Eco (Hospital Ward Bed)', sku: 'PHX-BED-PLECO', qty: 12 }
      ];
    }

    // 3. Build Table HTML (NO PRICES)
    let tbodyHtml = '';
    extractedItems.forEach((it, idx) => {
      tbodyHtml += `
        <tr>
          <td class="py-2.5 px-3 font-bold text-slate-400">${idx + 1}</td>
          <td class="py-2.5 px-3">
            <div class="font-bold text-slate-900">${it.title}</div>
            <div class="text-[10px] text-slate-500 font-mono">${it.sku}</div>
          </td>
          <td class="py-2.5 px-3 font-mono text-slate-600">9018</td>
          <td class="py-2.5 px-3 text-slate-600">
            <span class="inline-block px-2 py-0.5 rounded bg-sky-50 text-sky-800 text-[10px] font-bold">ISO 13485 / CE</span>
          </td>
          <td class="py-2.5 px-3 text-center font-bold text-slate-900 text-sm">${it.qty} Units</td>
          <td class="py-2.5 px-3 text-right">
            <span class="text-[11px] font-bold text-emerald-700">Custom via WhatsApp</span>
          </td>
        </tr>
      `;
    });

    const tbody = document.getElementById('quote-items-tbody');
    if (tbody) tbody.innerHTML = tbodyHtml;

    // 4. Open Modal
    window.openPhexalQuotationModal();
  };

  window.openPhexalQuotationModal = function() {
    const modal = document.getElementById('phx-quote-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closePhexalQuotationModal = function() {
    const modal = document.getElementById('phx-quote-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  window.shareQuoteViaWhatsApp = function() {
    const hosp = document.getElementById('quote-input-hospital')?.value || 'Hospital Facility';
    const ref = document.getElementById('quote-ref-num')?.innerText || 'PHX-RFQ-2026';
    const msg = `*PHEXAL HEALTHCARE - OFFICIAL TECHNICAL RFQ DOSSIER*\nRef: ${ref}\nInstitution: ${hosp}\n\nCDSCO Lic: UP/GHA/MD42/2026/000142 | GSTIN: 09CHZPK9297S1Z0N\nPlease provide customized wholesale institutional pricing, volume tier discount, and dispatch schedule.`;
    window.open(`https://wa.me/918070008050?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ══════════════════════════════════════════════════════════════
  // 4. CDSCO & ISO 13485 COMPLIANCE VAULT MODAL
  // ══════════════════════════════════════════════════════════════
  let vaultModal = document.getElementById('phx-vault-modal');
  if (!vaultModal) {
    vaultModal = document.createElement('div');
    vaultModal.id = 'phx-vault-modal';
    vaultModal.className = 'fixed inset-0 z-[140] hidden bg-slate-950/85 backdrop-blur-md overflow-y-auto p-2 sm:p-4 md:p-6 flex items-center justify-center font-sans';
    vaultModal.onclick = function(e) { if (e.target === vaultModal) window.closePhexalComplianceVault(); };

    vaultModal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[92vh]" onclick="event.stopPropagation()">
        
        <!-- Top Bar -->
        <div class="flex items-center justify-between px-5 sm:px-8 py-4 bg-slate-900 text-white border-b border-slate-800 no-print shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <span class="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <div>
              <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider">Statutory Compliance Vault</div>
              <h3 class="text-sm sm:text-base font-bold text-white">CDSCO Form MD-42 & ISO 13485:2016 Verification</h3>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" onclick="window.print()" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700 cursor-pointer">
              <span class="material-symbols-outlined text-[20px]">print</span>
            </button>
            <button type="button" onclick="window.closePhexalComplianceVault()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>

        <!-- Tab Buttons -->
        <div class="flex items-center gap-2 px-5 sm:px-8 py-3 bg-slate-100 border-b border-slate-200 overflow-x-auto no-scrollbar shrink-0 no-print text-xs font-bold">
          <button id="vault-tab-btn-cdsco" type="button" onclick="window.switchVaultTab('cdsco')" class="px-4 py-2 rounded-xl bg-emerald-600 text-white shadow-md transition-all shrink-0 cursor-pointer">CDSCO Form MD-42 (Govt of India)</button>
          <button id="vault-tab-btn-iso" type="button" onclick="window.switchVaultTab('iso')" class="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-200 transition-all shrink-0 cursor-pointer">ISO 13485:2016 (Medical Devices)</button>
          <button id="vault-tab-btn-ce" type="button" onclick="window.switchVaultTab('ce')" class="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-200 transition-all shrink-0 cursor-pointer">CE European Compliance</button>
          <button id="vault-tab-btn-who" type="button" onclick="window.switchVaultTab('who')" class="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-200 transition-all shrink-0 cursor-pointer">WHO-GMP & IEC 60601-1</button>
        </div>

        <!-- Tab Contents -->
        <div class="flex-1 overflow-y-auto p-5 sm:p-8 bg-slate-50 text-xs">
          
          <!-- Tab CDSCO -->
          <div id="vault-content-cdsco" class="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-2 border-emerald-500/30">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider mb-2">Statutory Medical Device License</span>
            <h2 class="text-xl font-bold text-slate-900">Form MD-42 Registration Certificate</h2>
            <p class="text-xs text-slate-500 mt-1 font-mono">Registration No: <strong class="text-emerald-700 font-bold">UP/GHA/MD42/2026/000142</strong></p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <p class="text-slate-400 font-bold uppercase text-[10px]">Licensed Firm</p>
                <p class="font-bold text-slate-900 mt-0.5">PHEXAL HEALTHCARE</p>
                <p class="text-slate-600 text-[11px] mt-0.5">762, Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, UP 201014</p>
              </div>
              <div>
                <p class="text-slate-400 font-bold uppercase text-[10px]">Statutory Authority</p>
                <p class="font-bold text-slate-900 mt-0.5">State Licensing Authority, FDA UP</p>
                <p class="text-slate-600 text-[11px] mt-0.5">Under Rule 87(B), Medical Devices Rules, 2017</p>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
              <h4 class="font-bold text-xs uppercase mb-1">Authorized Distribution Classes:</h4>
              <p class="text-[11px] leading-relaxed">
                • <strong>Class A, B, C & D:</strong> ICU Ventilators, Oxygen Concentrators, BiPAP/CPAP, Multipara Monitors, ECG Machines, Electric Hospital Beds, and Surgical Instruments across all Indian states.
              </p>
            </div>
          </div>

          <!-- Tab ISO -->
          <div id="vault-content-iso" class="hidden max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-2 border-blue-500/30">
            <span class="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase tracking-wider mb-2">Quality Management System</span>
            <h2 class="text-xl font-bold text-slate-900">ISO 13485:2016 Certified Facility</h2>
            <p class="text-xs text-slate-500 mt-1 font-mono">Certificate: <strong class="text-blue-700 font-bold">ISO-13485-PHX-9018-2024</strong></p>

            <div class="my-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p><strong>Scope:</strong> Testing, biomedical calibration, sterile packaging, wholesale distribution, and maintenance of life-support medical electrical equipment.</p>
              <p><strong>Metrology Standard:</strong> IEC 60601-1 Electrical Safety & ISO 14971 Risk Management.</p>
            </div>
          </div>

          <!-- Tab CE -->
          <div id="vault-content-ce" class="hidden max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-2 border-indigo-500/30">
            <span class="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold uppercase tracking-wider mb-2">European Conformity</span>
            <h2 class="text-xl font-bold text-slate-900">CE Declaration of Conformity (EU MDR)</h2>
            <div class="my-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p>Compliant with European Medical Device Regulation (EU) 2017/745 and EN 60601-1-2 Electromagnetic Compatibility for patient monitors and oxygen systems.</p>
            </div>
          </div>

          <!-- Tab WHO -->
          <div id="vault-content-who" class="hidden max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-2 border-teal-500/30">
            <span class="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-[10px] font-extrabold uppercase tracking-wider mb-2">WHO Good Distribution Practice</span>
            <h2 class="text-xl font-bold text-slate-900">WHO-GMP & Metrology Calibration Protocol</h2>
            <div class="my-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p>Cleanroom sanitized handling, temperature/humidity monitored staging, and NABL-traceable electrical safety testing before bedside dispatch.</p>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="px-5 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between no-print shrink-0">
          <span class="text-xs text-slate-500">Government Verified for Hospital Tenders & Audits</span>
          <a href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare,%20please%20send%20the%20complete%20CDSCO%20and%20ISO%20compliance%20dossier%20for%20our%20hospital%20audit." target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all">
            Request Full Audit Dossier Pack
          </a>
        </div>

      </div>
    `;
    document.body.appendChild(vaultModal);
  }

  window.openPhexalComplianceVault = function(tab) {
    if (typeof closeCartDrawer === 'function') closeCartDrawer();
    const dialMenu = document.getElementById('phx-speed-dial-menu');
    if (dialMenu) dialMenu.classList.add('hidden');
    if (tab) window.switchVaultTab(tab);
    const modal = document.getElementById('phx-vault-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closePhexalComplianceVault = function() {
    const modal = document.getElementById('phx-vault-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  window.switchVaultTab = function(tab) {
    const tabs = ['cdsco', 'iso', 'ce', 'who'];
    tabs.forEach(t => {
      const btn = document.getElementById('vault-tab-btn-' + t);
      const content = document.getElementById('vault-content-' + t);
      if (btn && content) {
        if (t === tab) {
          btn.className = 'px-4 py-2 rounded-xl bg-emerald-600 text-white shadow-md transition-all shrink-0 cursor-pointer';
          content.classList.remove('hidden');
        } else {
          btn.className = 'px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-200 transition-all shrink-0 cursor-pointer';
          content.classList.add('hidden');
        }
      }
    });
  };

  // Keyboard Escape listener
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.closePhexalQuotationModal();
      window.closePhexalComplianceVault();
      const dialMenu = document.getElementById('phx-speed-dial-menu');
      if (dialMenu) dialMenu.classList.add('hidden');
    }
  });

})();
