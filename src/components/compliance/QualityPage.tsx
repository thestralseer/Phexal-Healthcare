import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 ShieldCheck, 
 Award, 
 Building2, 
 Layers, 
 CheckCircle2, 
 Download, 
 FileCheck2, 
 Sparkles, 
 PhoneCall, 
 ArrowRight,
 ExternalLink,
 ChevronDown,
 Lock,
 QrCode,
 ThermometerSnowflake,
 Activity,
 FileText
} from 'lucide-react';
import { CDSCOCertificateModal } from './CDSCOCertificateModal';
import { ClientLogoSliders } from './ClientLogoSliders';
import { AccreditationPortfolio } from './AccreditationPortfolio';
import { SixPillarFramework } from './SixPillarFramework';
import { CertificateVerificationWidget } from './CertificateVerificationWidget';
import { ComplianceDossiers } from './ComplianceDossiers';
import { CDSCO_CERTIFICATE_DATA } from '../../data/complianceData';

interface QualityPageProps {
 onBackToCatalog?: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onBackToCatalog }) => {
 const [isCDSCOModalOpen, setIsCDSCOModalOpen] = useState<boolean>(false);

 const scrollToSection = (id: string) => {
 const el = document.getElementById(id);
 if (el) {
 el.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 };

 return (
 <div className="min-h-screen bg-slate-50 selection:bg-brand-500/20 selection:text-brand-700">
 
 {/* ── 1. Hero Section: Official Regulatory Authority & Trust ── */}
 <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-phexal-navy to-slate-900 text-white overflow-hidden">
 
 {/* Subtle Background Glows */}
 <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
 
 {/* Left Column: Hero Content */}
 <div className="max-w-2xl text-center lg:text-left">
 
 {/* Official License Badge Pill */}
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-inner">
 <ShieldCheck className="w-4 h-4 text-emerald-400" />
 <span>CDSCO Form MD-42 Certified: UP/GHA/MD42/2026/000142</span>
 </div>

 {/* Display Headline */}
 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
 Surgical Precision. <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-sky-200 to-emerald-300">
 Zero-Tolerance Quality.
 </span>
 </h1>

 {/* Subtitle */}
 <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
 Phexal Healthcare operates under statutory license from the Central Drugs Standard Control Organisation (CDSCO), backed by ISO 13485:2016 & ISO 9001:2015 Quality Management Systems, CDSCO Form MD-42, and WHO-GDP validated cold-chain protocols.
 </p>

 {/* Action Buttons */}
 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
 <button
 onClick={() => setIsCDSCOModalOpen(true)}
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-sky-600 hover:from-brand-400 hover:to-sky-500 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg hover:shadow-brand-500/25 active:scale-95"
 >
 <FileText className="w-4 h-4" />
 <span>Inspect CDSCO Form MD-42</span>
 </button>

 <button
 onClick={() => scrollToSection('verification-widget-section')}
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
 >
 <QrCode className="w-4 h-4 text-brand-400" />
 <span>Real-Time Certificate Verification</span>
 </button>
 </div>

 {/* Accreditation Quick Pill Bar */}
 <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] font-mono font-bold text-slate-400">
 <span className="px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-200">
 CDSCO MD-42 Licensed
 </span>
 <span className="px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-200">
 Hospital Grade Metrology
 </span>
 <span className="px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-200">
 WHO-GDP Compliant
 </span>
 <span className="px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-200">
 CE / IVD Marked
 </span>
 <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">
 GeM Verified
 </span>
 </div>

 </div>

 {/* Right Column: Interactive Certificate Preview Card */}
 <div className="w-full max-w-md">
 <div 
 onClick={() => setIsCDSCOModalOpen(true)}
 className="bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden group cursor-pointer hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]"
 >
 {/* Holographic Top Corner Seal */}
 <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-amber-400/40 hologram-shimmer flex flex-col items-center justify-center text-center p-1 shadow-md">
 <ShieldCheck className="w-5 h-5 text-amber-900" />
 <span className="text-[7px] font-black uppercase tracking-wider text-amber-950">
 CDSCO
 </span>
 </div>

 <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
 <Sparkles className="w-4 h-4" />
 <span>Central Statutory Registration</span>
 </div>

 <h3 className="text-lg font-black text-white leading-snug">
 CDSCO Form MD-42 Official Certificate
 </h3>
 
 <p className="text-xs text-slate-300 mt-1 font-mono">
 Reg No: {CDSCO_CERTIFICATE_DATA.registrationNumber}
 </p>

 <div className="mt-4 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5 text-xs">
 <div className="flex justify-between text-slate-400">
 <span>Authorized Entity:</span>
 <span className="font-bold text-white">Phexal Healthcare</span>
 </div>
 <div className="flex justify-between text-slate-400">
 <span>Authorized Classes:</span>
 <span className="font-bold text-emerald-400">Class A, B, C, D & IVD</span>
 </div>
 <div className="flex justify-between text-slate-400">
 <span>Storage Validation:</span>
 <span className="font-bold text-sky-300">+2°C to +8°C & -20°C</span>
 </div>
 <div className="flex justify-between text-slate-400">
 <span>Audit Status:</span>
 <span className="font-bold text-emerald-400">Active & Verified (2029)</span>
 </div>
 </div>

 <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
 <span className="text-amber-300 font-bold group-hover:underline flex items-center gap-1">
 <span>Click to view full digital certificate</span>
 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
 </span>
 <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
 AUTHENTIC
 </span>
 </div>
 </div>
 </div>

 </div>

 {/* Fast Section Navigation Quick Anchor Bar */}
 <div className="mt-14 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
 <button
 onClick={() => setIsCDSCOModalOpen(true)}
 className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700/60"
 >
 🏛️ CDSCO Form MD-42
 </button>
 <button
 onClick={() => scrollToSection('client-slider-section')}
 className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700/60"
 >
 🏥 Hospital & Lab Networks
 </button>
 <button
 onClick={() => scrollToSection('accreditations-section')}
 className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700/60"
 >
 📜 CDSCO & WHO Accreditations
 </button>
 <button
 onClick={() => scrollToSection('quality-framework-section')}
 className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700/60"
 >
 ⚙️ 6-Pillar Quality Framework
 </button>
 <button
 onClick={() => scrollToSection('verification-widget-section')}
 className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700/60"
 >
 🔍 Verify Certificate / CoA
 </button>
 <button
 onClick={() => scrollToSection('compliance-dossiers-section')}
 className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700/60"
 >
 📁 Hospital Tender Dossiers
 </button>
 </div>

 </div>
 </section>

 {/* ── 2. Automatic Infinite Logo Sliders (Hospitals & Lab Networks) ── */}
 <div id="client-slider-section">
 <ClientLogoSliders />
 </div>

 {/* ── 3. Accreditation Portfolio (CDSCO MD-42, Quality Assured, WHO-GDP, CE/IVD) ── */}
 <AccreditationPortfolio onOpenCDSCOModal={() => setIsCDSCOModalOpen(true)} />

 {/* ── 4. 6-Pillar Quality Assurance Framework & Cold-Chain Protocols ── */}
 <SixPillarFramework />

 {/* ── 5. Interactive Real-Time Certificate Verification Widget ── */}
 <CertificateVerificationWidget />

 {/* ── 6. Downloadable Compliance Dossiers & Hospital Tender Kits ── */}
 <ComplianceDossiers />

 {/* ── 7. Institutional Support & Consultation CTA Banner ── */}
 <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="max-w-3xl mx-auto space-y-4">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
 <PhoneCall className="w-3.5 h-3.5" />
 <span>Biomedical Quality & Institutional Affairs Desk</span>
 </div>

 <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
 Require Custom Quality Declarations or Site Audit Inspection?
 </h2>

 <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
 Our Lead Quality Assurance Engineers and Registered Pharmacists are available for immediate coordination with hospital accreditation teams, NABH inspectors, and international procurement committees.
 </p>

 <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
 <a
 href="https://wa.me/9198110XXXXX?text=Hello%20Phexal%20Quality%20Desk,%20I%20need%20assistance%20with%20hospital%20compliance%20documents."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-lg"
 >
 <PhoneCall className="w-4 h-4" />
 <span>Contact Lead Quality Auditor ()</span>
 </a>


 <Link
 to="/catalog"
 className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition-colors border border-slate-700"
 >
 Browse Medical Equipment Catalog →
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* ── CDSCO Form MD-42 Official Modal ── */}
 <CDSCOCertificateModal
 isOpen={isCDSCOModalOpen}
 onClose={() => setIsCDSCOModalOpen(false)}
 />

 </div>
 );
};
