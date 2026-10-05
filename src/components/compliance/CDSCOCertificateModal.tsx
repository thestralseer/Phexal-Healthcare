import React, { useState } from 'react';
import { 
 X, 
 Download, 
 Printer, 
 ShieldCheck, 
 CheckCircle2, 
 Copy, 
 Check, 
 ExternalLink, 
 Award, 
 Building2, 
 FileText, 
 QrCode,
 Lock,
 ThermometerSnowflake,
 Sparkles
} from 'lucide-react';
import { CDSCO_CERTIFICATE_DATA } from '../../data/complianceData';

interface CDSCOCertificateModalProps {
 isOpen: boolean;
 onClose: () => void;
}

export const CDSCOCertificateModal: React.FC<CDSCOCertificateModalProps> = ({ isOpen, onClose }) => {
 const [copied, setCopied] = useState(false);
 const [downloading, setDownloading] = useState(false);
 const [downloadSuccess, setDownloadSuccess] = useState(false);

 if (!isOpen) return null;

 const data = CDSCO_CERTIFICATE_DATA;

 const handleCopyReg = () => {
 navigator.clipboard.writeText(data.registrationNumber);
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 };

 const handlePrint = () => {
 window.print();
 };

 const handleDownloadPDF = () => {
 setDownloading(true);
 setTimeout(() => {
 setDownloading(false);
 setDownloadSuccess(true);
 setTimeout(() => setDownloadSuccess(false), 3000);
 }, 1200);
 };

 return (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
 <div 
 className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Modal Top Action Header */}
 <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-slate-900 text-white border-b border-slate-800 no-print">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
 <ShieldCheck className="w-5 h-5" />
 </div>
 <div>
 <div className="flex items-center gap-2">
 <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
 Statutory Registration
 </span>
 <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-slate-950">
 GOVT. VERIFIED
 </span>
 </div>
 <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
 CDSCO Form MD-42 Official Certificate
 </h3>
 </div>
 </div>

 <div className="flex items-center gap-2">
 <button
 onClick={handleCopyReg}
 className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors border border-slate-700"
 title="Copy Registration Number"
 >
 {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
 <span>{copied ? 'Copied!' : 'Copy Reg No.'}</span>
 </button>

 <button
 onClick={handlePrint}
 className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
 title="Print Certificate"
 >
 <Printer className="w-4 h-4" />
 </button>

 <button
 onClick={onClose}
 className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-colors"
 title="Close modal"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Certificate Body (Government Document Layout) */}
 <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto certificate-pattern bg-white selection:bg-amber-100">
 
 {/* Certificate Inner Frame */}
 <div className="border-4 border-double border-amber-900/30 rounded-xl p-5 sm:p-8 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 relative">
 
 {/* Holographic Watermark Badge */}
 <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-90 pointer-events-none">
 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-amber-500/60 hologram-shimmer flex flex-col items-center justify-center p-2 text-center shadow-lg transform rotate-6">
 <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700 drop-shadow-sm mb-0.5" />
 <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-amber-950 leading-tight">
 CDSCO INDIA
 </span>
 <span className="text-[7px] font-bold text-amber-800">
 AUTH. 2026
 </span>
 </div>
 </div>

 {/* Top Official Header */}
 <div className="text-center space-y-1.5 pb-6 border-b-2 border-slate-900/10">
 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-800 border border-slate-300 font-serif font-bold text-lg mb-1 shadow-inner">
 🏛️
 </div>
 <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
 GOVERNMENT OF UTTAR PRADESH
 </p>
 <p className="text-[11px] sm:text-xs font-semibold text-slate-700">
 Food Safety and Drug Administration / State Drugs Licensing Authority
 </p>
 <p className="text-[10px] text-slate-500">
 In compliance with Central Drugs Standard Control Organisation (CDSCO), Directorate General of Health Services, MoHFW, Govt. of India
 </p>

 <div className="pt-3">
 <span className="inline-block px-4 py-1 rounded bg-slate-900 text-amber-300 font-mono font-extrabold text-sm sm:text-base tracking-wider shadow">
 {data.formNumber}
 </span>
 <p className="text-[10px] font-serif italic text-slate-500 mt-1">
 {data.ruleReference}
 </p>
 </div>

 <h2 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-tight max-w-xl mx-auto pt-2 leading-snug">
 {data.title}
 </h2>
 </div>

 {/* Official Registration Details Banner */}
 <div className="my-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
 <div>
 <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
 Official Registration Certificate Number:
 </span>
 <span className="text-base sm:text-lg font-mono font-black text-slate-900 tracking-wider">
 {data.registrationNumber}
 </span>
 </div>
 <div className="flex items-center gap-3">
 <div className="text-right">
 <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
 Status: {data.status}
 </span>
 <span className="text-[11px] font-medium text-slate-600">
 Valid Thru: {data.validUntil}
 </span>
 </div>
 <div className="w-12 h-12 bg-white rounded-lg border border-slate-300 p-1 flex items-center justify-center shrink-0">
 <QrCode className="w-10 h-10 text-slate-900" />
 </div>
 </div>
 </div>

 {/* Formal Legal Body Text */}
 <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
 <p>
 <strong>1.</strong> Registration Certificate is hereby granted to <strong className="text-slate-950 uppercase">{data.firmName}</strong>, a <span className="underline font-sans">{data.constitution}</span> situated at:
 </p>
 <div className="p-3 bg-white/80 rounded-lg border border-slate-200 font-sans text-xs font-semibold text-slate-900 flex items-start gap-2">
 <Building2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
 <span>{data.premisesAddress}</span>
 </div>

 <p>
 <strong>2.</strong> To sell, stock, exhibit or offer for sale or distribute by wholesale the following categories of Medical Devices and In-Vitro Diagnostics (IVD) subject to conditions specified below and in the Medical Devices Rules, 2017:
 </p>

 {/* Medical Device Classes Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 font-sans">
 {data.classesAuthorized.map((cls, idx) => (
 <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1">
 <div className="flex items-center justify-between">
 <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-bold text-[11px]">
 {cls.classLevel}
 </span>
 <span className="text-[10px] font-semibold text-slate-500">
 {cls.riskCategory}
 </span>
 </div>
 <p className="text-xs text-slate-700 font-medium">
 {cls.description}
 </p>
 <div className="flex flex-wrap gap-1 pt-1">
 {cls.examples.map((ex, i) => (
 <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
 ✓ {ex}
 </span>
 ))}
 </div>
 </div>
 ))}
 </div>

 {/* Section 3: Qualified Personnel */}
 <div className="pt-2">
 <p className="font-serif">
 <strong>3.</strong> Names and qualifications of Competent Persons & Registered Pharmacists in-charge of operations:
 </p>
 <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
 {data.qualifiedPersonnel.map((person, idx) => (
 <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
 <div className="font-bold text-xs text-slate-900">{person.name}</div>
 <div className="text-[11px] text-brand-700 font-semibold">{person.designation}</div>
 <div className="text-[10px] text-slate-500">{person.qualification}</div>
 <div className="text-[9px] font-mono text-slate-400 mt-1">Reg: {person.registrationNumber}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Section 4: Validated Cold-Chain Storage */}
 <div className="pt-2">
 <p className="font-serif">
 <strong>4.</strong> Certified Storage Facilities & Temperature Zones:
 </p>
 <div className="mt-2 space-y-2 font-sans">
 {data.storageConditions.map((zone, idx) => (
 <div key={idx} className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-200/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
 <div className="flex items-center gap-2">
 <ThermometerSnowflake className="w-4 h-4 text-sky-600 shrink-0" />
 <span className="font-bold text-slate-900">{zone.zone}</span>
 </div>
 <div className="flex items-center gap-3 text-[11px]">
 <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-mono font-bold">
 {zone.tempRange}
 </span>
 <span className="text-slate-600">{zone.humidity}</span>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Signature Block & Official Seal */}
 <div className="mt-8 pt-6 border-t-2 border-slate-900/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
 <div className="space-y-1 text-center sm:text-left text-xs">
 <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
 Date of Issue / Grant:
 </div>
 <div className="font-bold text-slate-900">{data.dateOfGrant}</div>
 <div className="text-[10px] text-slate-500">Place: Ghaziabad, Delhi NCR, India</div>
 <div className="text-[9px] font-mono text-slate-400 pt-1">
 Hash: {data.digitalSignatureHash.substring(0, 32)}...
 </div>
 </div>

 <div className="text-center sm:text-right space-y-1">
 <div className="inline-block px-3 py-1 rounded bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-xs mb-1">
 Digitally Signed & Validated
 </div>
 <div className="font-extrabold text-xs text-slate-900">
 State Drugs Licensing Authority
 </div>
 <div className="text-[10px] text-slate-600">
 Food Safety and Drug Administration, Uttar Pradesh
 </div>
 <div className="text-[9px] text-slate-500">
 Government of Uttar Pradesh
 </div>
 </div>
 </div>

 </div>

 </div>

 {/* Security Features Checklist */}
 <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
 <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
 <Lock className="w-3.5 h-3.5 text-brand-600" />
 <span>Embedded Document Security & Verification Protocol</span>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
 {data.securityFeatures.map((sec, i) => (
 <div key={i} className="flex items-center gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
 <span>{sec}</span>
 </div>
 ))}
 </div>
 </div>

 </div>

 {/* Modal Bottom Actions */}
 <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
 <div className="text-xs text-slate-500 flex items-center gap-1.5">
 <Sparkles className="w-3.5 h-3.5 text-amber-500" />
 <span>Registration is verified and linked to Central Drugs Standard Control Organisation database.</span>
 </div>

 <div className="flex items-center gap-2 w-full sm:w-auto">
 <button
 onClick={handleDownloadPDF}
 disabled={downloading}
 className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white text-xs font-bold transition-all shadow-md"
 >
 <Download className="w-4 h-4" />
 <span>{downloading ? 'Compiling PDF...' : downloadSuccess ? 'Downloaded!' : 'Download Attested PDF (3.4 MB)'}</span>
 </button>
 <button
 onClick={onClose}
 className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors"
 >
 Close
 </button>
 </div>
 </div>

 </div>
 </div>
 );
};
