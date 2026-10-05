import React, { useState } from 'react';
import { 
 Search, 
 ShieldCheck, 
 CheckCircle2, 
 AlertTriangle, 
 QrCode, 
 Download, 
 Camera, 
 Sparkles, 
 FileCheck2, 
 ArrowRight,
 ExternalLink,
 RefreshCw,
 Check
} from 'lucide-react';
import { VERIFICATION_DATABASE_RECORDS, VerificationRecord } from '../../data/complianceData';

export const CertificateVerificationWidget: React.FC = () => {
 const [searchCode, setSearchCode] = useState<string>('UP/GHA/MD42/2026/000142');
 const [activeRecord, setActiveRecord] = useState<VerificationRecord | null>(VERIFICATION_DATABASE_RECORDS[0]);
 const [isScanning, setIsScanning] = useState<boolean>(false);
 const [notFound, setNotFound] = useState<boolean>(false);
 const [downloading, setDownloading] = useState<boolean>(false);
 const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

 const sampleCodes = [
 { label: 'CDSCO Form MD-42', code: 'UP/GHA/MD42/2026/000142' },
 { label: 'CDSCO MD-42 QMS', code: 'CDSCO-MD42-PHX-2026' },
 { label: 'WHO-GDP Cold Chain', code: 'WHO-GDP-IND-2024' },
 { label: 'Oxygen Batch CoA', code: 'COA-O2-2026-991' },
 { label: 'BiPAP Batch CoA', code: 'COA-BIPAP-2026-44' },
 ];

 const handleSearch = (query: string) => {
 const trimmed = query.trim().toUpperCase();
 if (!trimmed) {
 setActiveRecord(null);
 setNotFound(false);
 return;
 }

 const found = VERIFICATION_DATABASE_RECORDS.find(
 r => r.searchCode.toUpperCase().includes(trimmed) || r.title.toUpperCase().includes(trimmed)
 );

 if (found) {
 setActiveRecord(found);
 setNotFound(false);
 } else {
 setActiveRecord(null);
 setNotFound(true);
 }
 };

 const handleTriggerScanner = () => {
 setIsScanning(true);
 // Simulate 2.2s QR camera scan
 setTimeout(() => {
 setIsScanning(false);
 setSearchCode('UP/GHA/MD42/2026/000142');
 setActiveRecord(VERIFICATION_DATABASE_RECORDS[0]);
 setNotFound(false);
 }, 2200);
 };

 const handleDownloadAttestation = () => {
 if (!activeRecord) return;
 setDownloading(true);
 setTimeout(() => {
 setDownloading(false);
 setDownloadSuccess(true);
 setTimeout(() => setDownloadSuccess(false), 3000);
 }, 1200);
 };

 return (
 <section id="verification-widget-section" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#0a1b2d] to-slate-900 text-white relative overflow-hidden">
 
 {/* Background Decorative Rings */}
 <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 {/* Section Header */}
 <div className="text-center max-w-2xl mx-auto mb-10">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-inner">
 <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
 <span>Instant Digital Verification Gateway</span>
 </div>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
 Verify Certificate & Batch CoA
 </h2>
 <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
 Enter your CDSCO Registration ID, CDSCO License Reference, or Dispatched Consignment Batch Code to retrieve authenticated clearance records.
 </p>
 </div>

 {/* Verification Card Shell */}
 <div className="bg-slate-800/90 rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
 
 {/* Input & Scanner Search Bar */}
 <div className="flex flex-col sm:flex-row gap-3 items-stretch">
 <div className="relative flex-1">
 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
 <Search className="w-5 h-5 text-brand-400" />
 </div>
 <input
 type="text"
 value={searchCode}
 onChange={(e) => {
 setSearchCode(e.target.value);
 handleSearch(e.target.value);
 }}
 placeholder="Enter Reg / Cert / Batch # (e.g., UP/GHA/MD42/2026/000142)..."
 className="w-full h-14 pl-12 pr-4 bg-slate-900 border border-slate-700 focus:border-brand-400 rounded-2xl text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20 transition-all font-mono shadow-inner"
 />
 </div>

 {/* Simulated QR Scan Button */}
 <button
 onClick={handleTriggerScanner}
 disabled={isScanning}
 className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold text-xs sm:text-sm border border-slate-600 transition-colors shrink-0 active:scale-95"
 title="Scan 2D DataMatrix on Device Box"
 >
 <Camera className="w-4 h-4 text-brand-300" />
 <span>{isScanning ? 'Scanning QR...' : 'Scan Box QR'}</span>
 </button>
 </div>

 {/* Quick Test Chips */}
 <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
 <span className="text-slate-400 font-medium">Quick Verify Samples:</span>
 {sampleCodes.map((item, idx) => (
 <button
 key={idx}
 onClick={() => {
 setSearchCode(item.code);
 handleSearch(item.code);
 }}
 className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-brand-600 hover:text-white text-slate-300 border border-slate-700 text-[11px] font-mono transition-colors"
 >
 {item.label}
 </button>
 ))}
 </div>

 {/* Simulated QR Viewfinder Overlay */}
 {isScanning && (
 <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-brand-500/50 relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
 <div className="relative w-48 h-48 border-2 border-dashed border-brand-400/80 rounded-2xl flex items-center justify-center">
 {/* Scanner Laser Sweep */}
 <div className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent scanner-laser shadow-[0_0_12px_#34d399]" />
 <QrCode className="w-24 h-24 text-slate-600 animate-pulse" />
 </div>
 <p className="text-xs text-brand-300 font-mono mt-3 animate-pulse">
 Simulating Optical 2D DataMatrix Capture...
 </p>
 </div>
 )}

 {/* Verification Result Display */}
 {!isScanning && activeRecord && (
 <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-emerald-500/40 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
 
 {/* Top Verified Header Bar */}
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
 <div className="flex items-center gap-3">
 <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
 <CheckCircle2 className="w-7 h-7" />
 </div>
 <div>
 <div className="flex items-center gap-2">
 <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
 {activeRecord.type}
 </span>
 <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-slate-950">
 {activeRecord.status}
 </span>
 </div>
 <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
 {activeRecord.title}
 </h3>
 </div>
 </div>

 <div className="text-left sm:text-right">
 <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
 Registration / Reference Code:
 </span>
 <span className="font-mono font-bold text-sm text-brand-300">
 {activeRecord.searchCode}
 </span>
 </div>
 </div>

 {/* Data Breakdown Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5 text-xs">
 <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
 <span className="text-slate-400 block mb-1">Holder / Entity:</span>
 <span className="font-bold text-white text-sm">{activeRecord.entity}</span>
 </div>

 <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
 <span className="text-slate-400 block mb-1">Issuing / Accrediting Body:</span>
 <span className="font-bold text-white text-sm">{activeRecord.issuingAuthority}</span>
 </div>

 <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
 <span className="text-slate-400 block mb-1">Audit Validity / Life:</span>
 <span className="font-bold text-emerald-400 text-sm">{activeRecord.validTill}</span>
 </div>
 </div>

 {/* Scope of Certification / Batch Parameters */}
 <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
 <span className="text-slate-400 font-bold uppercase tracking-wider block">
 Certified Scope & Quality Testing Record:
 </span>
 <p className="text-slate-200 font-mono leading-relaxed">
 {activeRecord.scope}
 </p>
 <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80 flex items-center justify-between">
 <span>Authorized Quality Signatory: <strong className="text-white font-sans">{activeRecord.authorizedPerson}</strong></span>
 <span className="text-emerald-400">Status: PASS (Zero Deviations)</span>
 </div>
 </div>

 {/* Download & Actions Row */}
 <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
 <div className="text-xs text-slate-400 flex items-center gap-1.5">
 <Sparkles className="w-3.5 h-3.5 text-brand-400" />
 <span>Cryptographically authenticated with SHA-256 digital signature.</span>
 </div>

 <button
 onClick={handleDownloadAttestation}
 disabled={downloading}
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 active:scale-95 text-slate-950 font-bold text-xs transition-all shadow-lg"
 >
 {downloadSuccess ? (
 <>
 <Check className="w-4 h-4 text-emerald-950" />
 <span>Document Downloaded!</span>
 </>
 ) : (
 <>
 <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
 <span>{downloading ? 'Preparing Verified PDF...' : `Download Attested ${activeRecord.type} (PDF)`}</span>
 </>
 )}
 </button>
 </div>

 </div>
 )}

 {/* Not Found State */}
 {!isScanning && notFound && (
 <div className="mt-8 p-6 rounded-2xl bg-rose-950/30 border border-rose-500/40 text-center space-y-3">
 <AlertTriangle className="w-8 h-8 text-rose-400 mx-auto" />
 <h3 className="text-base font-bold text-white">No Matching Record Found</h3>
 <p className="text-xs text-slate-300 max-w-md mx-auto">
 No active registration or batch CoA matched <code className="text-rose-300 font-mono font-bold">{searchCode}</code>. Please check for typographical errors or select one of the sample test codes above.
 </p>
 </div>
 )}

 </div>

 </div>
 </section>
 );
};
