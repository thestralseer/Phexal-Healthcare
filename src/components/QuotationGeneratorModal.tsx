import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Share2, 
  Trash2, 
  Phone, 
  Mail, 
  MapPin, 
  FileCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Check
} from 'lucide-react';
import { Product, PRODUCTS } from '../data/catalog';
import { CartItem } from './CartDrawer';

interface QuotationGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItems?: CartItem[];
}

export interface QuoteLineItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  hsnCode: string;
  qualityStandard: string;
}

export const QuotationGeneratorModal: React.FC<QuotationGeneratorModalProps> = ({
  isOpen,
  onClose,
  initialItems = [],
}) => {
  // Quotation Metadata
  const [rfqNumber] = useState<string>(() => `PHX-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
  const [rfqDate] = useState<string>(() => new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }));
  const [validUntil] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  });

  // Client Details
  const [clientName, setClientName] = useState<string>('City Super Specialty Hospital & Research Centre');
  const [buyerContact, setBuyerContact] = useState<string>('Dr. Rajesh Verma / Procurement Dept');
  const [buyerEmail, setBuyerEmail] = useState<string>('procurement@hospital.org');
  const [buyerPhone, setBuyerPhone] = useState<string>('+91 98110 XXXXX');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('Sector 62, Institutional Area, Noida / Delhi NCR');

  // Line items
  const [lineItems, setLineItems] = useState<QuoteLineItem[]>(() => {
    if (initialItems.length > 0) {
      return initialItems.map(item => ({
        id: item.product.id,
        name: item.product.name,
        sku: item.product.sku,
        category: item.product.categoryName,
        quantity: item.quantity,
        hsnCode: '9018',
        qualityStandard: 'CDSCO MD-42 / CE Compliant'
      }));
    }
    // Default demonstration item
    const defaultProduct = PRODUCTS[0];
    return [{
      id: defaultProduct.id,
      name: defaultProduct.name,
      sku: defaultProduct.sku,
      category: defaultProduct.categoryName,
      quantity: 2,
      hsnCode: '9018',
      qualityStandard: 'CDSCO MD-42 / CE Compliant'
    }];
  });

  if (!isOpen) return null;

  // Add Item from catalog
  const handleAddItem = (productId: string) => {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    const exists = lineItems.find(item => item.id === prod.id);
    if (exists) {
      setLineItems(prev => prev.map(item => item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setLineItems(prev => [...prev, {
        id: prod.id,
        name: prod.name,
        sku: prod.sku,
        category: prod.categoryName,
        quantity: 1,
        hsnCode: '9018',
        qualityStandard: 'CDSCO MD-42 / CE Compliant'
      }]);
    }
  };

  const handleUpdateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setLineItems(prev => prev.filter(i => i.id !== id));
      return;
    }
    setLineItems(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const handleRemove = (id: string) => {
    setLineItems(prev => prev.filter(i => i.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    let msg = `*PHEXAL HEALTHCARE - OFFICIAL TECHNICAL RFQ DOSSIER*\n`;
    msg += `RFQ Ref: ${rfqNumber}\n`;
    msg += `Date: ${rfqDate}\n`;
    msg += `Client: ${clientName}\n`;
    msg += `Total Items: ${lineItems.length} Products\n\n`;
    msg += `*Requested Equipment:*\n`;
    lineItems.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} (${item.sku}) - Qty: ${item.quantity} Units\n`;
    });
    msg += `\nCDSCO Lic: UP/GHA/MD42/2026/000142 | GSTIN: 09CIOPG0975L1ZN\n`;
    msg += `Please provide customized wholesale institutional pricing, volume tier discount, and dispatch schedule.`;
    window.open(`https://wa.me/918070008050?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800 no-print shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Institutional Procurement Desk
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-slate-950">
                  OFFICIAL RFQ DOSSIER
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Technical Specification & RFQ Quotation Dossier
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-all shadow-md cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Get WhatsApp Price</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white transition-all shadow-md cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-slate-200 print:border-none print:shadow-none print:p-0" id="quotation-print-area">
            
            {/* ══════ LETTERHEAD HEADER ══════ */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#006591] to-[#10B981] flex items-center justify-center text-white font-black text-xl shadow-md">
                      +
                    </div>
                    <div>
                      <h1 className="text-2xl font-black text-slate-900 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        PHEXAL HEALTHCARE
                      </h1>
                      <p className="text-xs font-bold text-[#006591] uppercase tracking-widest">
                        Advanced Medical Systems • Global Exporter & Supplier
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-slate-600 space-y-1">
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>762, Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, Delhi NCR, UP 201014</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Emergency Hotline: +91 80700 08050 | WhatsApp Commercial Desk</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Phexalhealthcare@gmail.com | www.phexalhealthcare.com</span>
                    </p>
                  </div>
                </div>

                <div className="sm:text-right bg-slate-50 sm:bg-transparent p-4 sm:p-0 rounded-xl border sm:border-none border-slate-200">
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-extrabold uppercase tracking-wider mb-2">
                    Official RFQ Dossier
                  </div>
                  <div className="text-xs space-y-1">
                    <p><strong>RFQ Ref:</strong> <span className="text-[#006591] font-mono font-bold">{rfqNumber}</span></p>
                    <p><strong>Date of Issue:</strong> {rfqDate}</p>
                    <p><strong>Validity:</strong> {validUntil} (30 Days)</p>
                    <p><strong>GSTIN:</strong> 09CIOPG0975L1ZN</p>
                    <p><strong>CDSCO License:</strong> UP/GHA/MD42/2026/000142</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ══════ CLIENT / BUYER BILL-TO SECTION ══════ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Procuring Institution / Hospital:
                </span>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full font-bold text-slate-900 text-sm bg-transparent border-b border-dashed border-slate-300 focus:border-blue-600 focus:bg-white px-1 py-0.5 outline-none"
                  placeholder="Enter Hospital / Clinic Name"
                />
                <input
                  type="text"
                  value={buyerContact}
                  onChange={(e) => setBuyerContact(e.target.value)}
                  className="w-full text-xs text-slate-700 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-600 focus:bg-white px-1 py-0.5 outline-none mt-1"
                  placeholder="Attn: Doctor / Procurement Officer"
                />
                <input
                  type="text"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  className="w-full text-xs text-slate-600 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-600 focus:bg-white px-1 py-0.5 outline-none mt-1"
                  placeholder="Phone / WhatsApp"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Delivery Destination / Facility Site:
                </span>
                <input
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full text-xs text-slate-800 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-600 focus:bg-white px-1 py-0.5 outline-none"
                  placeholder="Hospital Delivery Address / City"
                />
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                  <span className="font-bold block mb-0.5">Commercial Pricing Protocol:</span>
                  <span>Custom institutional wholesale volume pricing & CIF freight estimates are negotiated directly via WhatsApp Commercial Desk.</span>
                </div>
              </div>
            </div>

            {/* ══════ ITEMIZATION TABLE (NO PRICES) ══════ */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-2.5 px-3 rounded-l-lg font-bold">#</th>
                    <th className="py-2.5 px-3 font-bold">Medical Equipment Item & Model</th>
                    <th className="py-2.5 px-3 font-bold">HSN</th>
                    <th className="py-2.5 px-3 font-bold">Quality Standard</th>
                    <th className="py-2.5 px-3 font-bold text-center">Qty Requested</th>
                    <th className="py-2.5 px-3 font-bold text-right">Pricing Channel</th>
                    <th className="py-2.5 px-2 rounded-r-lg text-center no-print">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {lineItems.map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-3 font-bold text-slate-400">{index + 1}</td>
                      <td className="py-3 px-3">
                        <div className="font-bold text-slate-900">{item.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          SKU: {item.sku} • Category: {item.category}
                        </div>
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-600">{item.hsnCode}</td>
                      <td className="py-3 px-3">
                        <span className="inline-block px-2 py-0.5 rounded bg-sky-50 text-sky-800 text-[10px] font-bold">
                          {item.qualityStandard}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQty(item.id, parseInt(e.target.value) || 1)}
                          className="w-16 text-center border border-slate-300 rounded py-1 px-1 font-bold text-slate-900 bg-white"
                        />
                      </td>
                      <td className="py-3 px-3 text-right">
                        <span className="text-[11px] font-bold text-emerald-700">Custom via WhatsApp</span>
                      </td>
                      <td className="py-3 px-2 text-center no-print">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="p-1 rounded text-red-500 hover:bg-red-50 transition-colors"
                          title="Remove Item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Add Product from catalog dropdown */}
              <div className="mt-3 flex items-center gap-3 no-print">
                <span className="text-xs font-semibold text-slate-500">+ Add Product to Specification:</span>
                <select
                  onChange={(e) => {
                    if (e.target.value) {
                      handleAddItem(e.target.value);
                      e.target.value = '';
                    }
                  }}
                  className="text-xs border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-slate-800 font-medium"
                >
                  <option value="">Select equipment from catalog...</option>
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>{p.name} ({p.sku})</option>
                  ))}
                </select>
              </div>
            </div>

            {/* ══════ COMMERCIAL TERMS & QUALITY ASSURANCE ══════ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t-2 border-slate-200">
              
              {/* Commercial Terms */}
              <div className="text-xs text-slate-600 space-y-1.5">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Quality & Regulatory Protocol:
                </h4>
                <ul className="space-y-1 list-disc list-inside text-slate-600 text-[11px]">
                  <li><strong>Quality Standard:</strong> 100% genuine biomedical equipment with CDSCO compliance.</li>
                  <li><strong>Delivery:</strong> 120-Min emergency delivery in Delhi NCR; 2-4 days nationwide.</li>
                  <li><strong>Quality Assurance:</strong> 100% pre-calibrated with CDSCO MD-42 test certificate.</li>
                  <li><strong>Licensing:</strong> CDSCO Form MD-42 Authorized Distributor.</li>
                </ul>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px]">
                  <p className="font-bold text-slate-800">RTGS / NEFT Banking Credentials:</p>
                  <p className="text-slate-600 font-mono mt-0.5">
                    Beneficiary: <strong>PHEXAL HEALTHCARE</strong><br/>
                    Bank: HDFC Bank Ltd. | A/C: 50200080509297<br/>
                    IFSC Code: HDFC0000287 | Branch: Indirapuram, Ghaziabad
                  </p>
                </div>
              </div>

              {/* Action Note */}
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-[11px]">
                  <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct WhatsApp Procurement:</span>
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Submit this official RFQ specification to our commercial desk at <strong>+91 80700 08050</strong> for instant customized volume pricing and formal stamped proforma invoice.
                  </p>
                </div>

                {/* Authorized Signatory Box */}
                <div className="pt-4 text-right">
                  <div className="inline-block text-center">
                    <div className="w-36 h-10 border-b border-slate-400 mx-auto flex items-end justify-center pb-1 text-slate-300 font-serif italic text-xs">
                      [Digital Stamp & Sign]
                    </div>
                    <p className="text-[11px] font-bold text-slate-900 mt-1">Authorized Commercial Officer</p>
                    <p className="text-[10px] text-slate-500">Phexal Healthcare</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Official statutory RFQ generated with CDSCO & GST compliance verification.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Get WhatsApp Price</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
