import React, { useState } from 'react';
import { 
 PhoneCall, 
 MessageSquare, 
 FileText, 
 ShieldCheck, 
 MapPin, 
 X, 
 Sparkles, 
 ChevronUp, 
 Activity,
 Zap,
 Clock
} from 'lucide-react';

interface EmergencySpeedDialProps {
 onOpenQuoteGenerator: () => void;
 onOpenComplianceVault: () => void;
}

export const EmergencySpeedDial: React.FC<EmergencySpeedDialProps> = ({
 onOpenQuoteGenerator,
 onOpenComplianceVault,
}) => {
 const [isOpen, setisOpen] = useState(false);

 return (
 <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end no-print">
 
 {/* Expanded Quick Action Menu */}
 {isOpen && (
 <div className="mb-3 w-72 sm:w-80 bg-slate-900/95 backdrop-blur-xl text-white rounded-3xl p-4 shadow-2xl border border-sky-500/30 animate-in slide-in-from-bottom-5 duration-200">
 
 <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
 <div className="flex items-center gap-2">
 <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
 <span className="text-xs font-black text-white tracking-wide uppercase">
 Phexal Quick Actions
 </span>
 </div>
 <span className="text-[10px] font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-800">
 ACTIVE DUTY
 </span>
 </div>

 <div className="space-y-1.5 text-xs">
 
 {/* 1. Emergency Hotline */}
 <a
 href="tel:+918070008050"
 className="flex items-center gap-3 p-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold hover:brightness-110 transition-all shadow-md group"
 >
 <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
 <PhoneCall className="w-4 h-4 animate-bounce" />
 </div>
 <div className="flex-1 min-w-0">
 <div className="text-[11px] uppercase tracking-wider text-rose-100">120-Min Emergency Line</div>
 <div className="text-sm font-black truncate">+91 80700 08050</div>
 </div>
 </a>

 {/* 2. Direct WhatsApp Clinical Doctor Consultation */}
 <a
 href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare,%20I%20need%20urgent%20medical%20equipment%20assistance%20/%20B2B%20quotation."
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-3 p-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md group"
 >
 <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
 <MessageSquare className="w-4 h-4" />
 </div>
 <div className="flex-1 min-w-0">
 <div className="text-[11px] uppercase tracking-wider text-emerald-100">Instant WhatsApp</div>
 <div className="text-xs font-black truncate">Doctor & Caregiver Chat</div>
 </div>
 </a>

 {/* 3. Instant B2B PDF Proforma Quotation */}
 <button
 onClick={() => {
 setisOpen(false);
 onOpenQuoteGenerator();
 }}
 className="w-full flex items-center gap-3 p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-700 text-left group"
 >
 <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
 <FileText className="w-4 h-4" />
 </div>
 <div className="flex-1 min-w-0">
 <div className="text-[11px] uppercase tracking-wider text-slate-400">Commercial Desk</div>
 <div className="text-xs font-bold text-slate-100 truncate">Generate PDF Quotation</div>
 </div>
 </button>

 {/* 4. CDSCO & Statutory Compliance Vault */}
 <button
 onClick={() => {
 setisOpen(false);
 onOpenComplianceVault();
 }}
 className="w-full flex items-center gap-3 p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-700 text-left group"
 >
 <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
 <ShieldCheck className="w-4 h-4" />
 </div>
 <div className="flex-1 min-w-0">
 <div className="text-[11px] uppercase tracking-wider text-slate-400">Statutory License</div>
 <div className="text-xs font-bold text-slate-100 truncate">CDSCO & CDSCO MD-42 Vault</div>
 </div>
 </button>

 {/* 5. Google Maps Indirapuram Hub */}
 <a
 href="https://maps.google.com/?q=762+Nyay+Khand+1+Indirapuram+Ghaziabad"
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-700 group"
 >
 <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
 <MapPin className="w-4 h-4" />
 </div>
 <div className="flex-1 min-w-0">
 <div className="text-[11px] uppercase tracking-wider text-slate-400">Physical Facility</div>
 <div className="text-xs font-bold text-slate-100 truncate">Indirapuram Hub on Maps</div>
 </div>
 </a>

 </div>

 <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
 <span className="flex items-center gap-1">
 <Clock className="w-3 h-3 text-emerald-400" />
 <span>120-Min Bedside SLA</span>
 </span>
 <span className="font-mono text-slate-500">GST: 09CIOPG0975L1ZN</span>
 </div>

 </div>
 )}

 {/* Main Trigger Button */}
 <button
 onClick={() => setisOpen(!isOpen)}
 className={`group relative flex items-center gap-3 px-5 py-3.5 rounded-full font-black text-sm text-white shadow-2xl transition-all duration-300 ${
 isOpen 
 ? 'bg-slate-900 border-2 border-slate-700 scale-95' 
 : 'bg-gradient-to-r from-[#006591] via-[#0284c7] to-[#10B981] hover:scale-105 border-2 border-white/40 ring-4 ring-sky-400/20'
 }`}
 >
 <div className="relative">
 {isOpen ? (
 <X className="w-5 h-5 text-white transition-transform rotate-90" />
 ) : (
 <div className="flex items-center justify-center">
 <Activity className="w-5 h-5 animate-pulse text-white" />
 <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-ping" />
 </div>
 )}
 </div>

 <span className="tracking-tight hidden sm:inline" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
 {isOpen ? 'Close Quick Actions' : 'Hotline & Quick Actions'}
 </span>
 </button>

 </div>
 );
};
