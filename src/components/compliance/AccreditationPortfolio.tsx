import React, { useState } from 'react';
import { 
 Award, 
 ShieldCheck, 
 Download, 
 ExternalLink, 
 CheckCircle2, 
 FileCheck2, 
 Calendar, 
 Building, 
 Sparkles,
 Eye,
 Check,
 ChevronRight,
 Filter,
 X
} from 'lucide-react';
import { ACCREDITATION_PORTFOLIO, AccreditationItem } from '../../data/complianceData';

interface AccreditationPortfolioProps {
 onOpenCDSCOModal: () => void;
}

export const AccreditationPortfolio: React.FC<AccreditationPortfolioProps> = ({ onOpenCDSCOModal }) => {
 const [activeCategory, setActiveCategory] = useState<string>('All');
 const [selectedAccreditation, setSelectedAccreditation] = useState<AccreditationItem | null>(null);
 const [downloadingId, setDownloadingId] = useState<string | null>(null);
 const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

 const categories = ['All', 'Regulatory', 'Quality Management', 'Logistics & GDP', 'International'];

 const filteredItems = activeCategory === 'All'
 ? ACCREDITATION_PORTFOLIO
 : ACCREDITATION_PORTFOLIO.filter(item => item.category === activeCategory);

 const handleDownload = (item: AccreditationItem) => {
 setDownloadingId(item.id);
 setTimeout(() => {
 setDownloadingId(null);
 setDownloadSuccessId(item.id);
 setTimeout(() => setDownloadSuccessId(null), 3000);
 }, 1000);
 };

 const handleView = (item: AccreditationItem) => {
 if (item.id === 'cdsco-md42') {
 onOpenCDSCOModal();
 } else {
 setSelectedAccreditation(item);
 }
 };

 return (
 <section id="accreditations-section" className="py-16 sm:py-20 bg-slate-50 relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Header Block */}
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
 <div className="max-w-2xl">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
 <Award className="w-3.5 h-3.5" />
 <span>International Quality & Regulatory Compliance</span>
 </div>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
 Accreditation & Quality Portfolio
 </h2>
 <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
 Every medical device, diagnostic kit, and temperature-controlled consignment meets stringent international benchmarks validated by world-renowned registrars.
 </p>
 </div>

 {/* Category Filter Pills */}
 <div className="flex flex-wrap gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
 {categories.map(cat => (
 <button
 key={cat}
 onClick={() => setActiveCategory(cat)}
 className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
 activeCategory === cat
 ? 'bg-slate-900 text-white shadow-sm'
 : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
 }`}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 {/* Accreditations Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
 {filteredItems.map(item => (
 <div
 key={item.id}
 className="bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
 >
 <div>
 {/* Top Card Header */}
 <div className="p-6 pb-4 border-b border-slate-100">
 <div className="flex items-center justify-between gap-2 mb-3">
 <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-mono font-bold text-xs tracking-wider">
 {item.code}
 </span>
 <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
 {item.status}
 </span>
 </div>

 <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
 {item.title}
 </h3>
 <p className="text-xs text-slate-500 mt-1 font-medium">
 {item.subtitle}
 </p>
 </div>

 {/* Card Meta & Highlights */}
 <div className="p-6 space-y-4 text-xs">
 {/* Registrar & Certificate Number */}
 <div className="space-y-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
 <div className="flex items-center justify-between text-slate-500">
 <span>Registrar / Body:</span>
 <span className="font-semibold text-slate-800 text-right truncate max-w-[180px]" title={item.registrar}>
 {item.registrar.split('/')[0]}
 </span>
 </div>
 <div className="flex items-center justify-between text-slate-500">
 <span>Certificate No:</span>
 <span className="font-mono font-bold text-slate-900">
 {item.certificateNumber}
 </span>
 </div>
 <div className="flex items-center justify-between text-slate-500">
 <span>Audit Validity:</span>
 <span className="font-semibold text-emerald-700">
 {item.validTo}
 </span>
 </div>
 </div>

 {/* Description */}
 <p className="text-slate-600 leading-relaxed">
 {item.description}
 </p>

 {/* Key Highlights Bullet list */}
 <div className="space-y-1.5 pt-1">
 <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
 Key Compliance Pillars:
 </span>
 {item.keyHighlights.map((hl, i) => (
 <div key={i} className="flex items-start gap-2 text-slate-700">
 <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
 <span>{hl}</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Card Footer Actions */}
 <div className="p-5 pt-3 bg-slate-50/70 border-t border-slate-100 flex items-center gap-2">
 <button
 onClick={() => handleView(item)}
 className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-brand-50 hover:text-brand-700 text-slate-800 text-xs font-bold border border-slate-200 transition-all shadow-sm group/btn"
 >
 <Eye className="w-3.5 h-3.5 text-brand-600" />
 <span>Inspect Certificate</span>
 </button>

 <button
 onClick={() => handleDownload(item)}
 disabled={downloadingId === item.id}
 className="inline-flex items-center justify-center p-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white transition-all shadow-sm"
 title={`Download ${item.title}`}
 >
 {downloadSuccessId === item.id ? (
 <Check className="w-4 h-4 text-emerald-200" />
 ) : (
 <Download className={`w-4 h-4 ${downloadingId === item.id ? 'animate-bounce' : ''}`} />
 )}
 </button>
 </div>

 </div>
 ))}
 </div>

 {/* Global Compliance Bottom Banner */}
 <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-phexal-navy to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-300 shrink-0">
 <ShieldCheck className="w-6 h-6" />
 </div>
 <div>
 <h4 className="text-base font-bold text-white">
 Preparing for a NABH, NABL, or Hospital Quality Audit?
 </h4>
 <p className="text-xs text-slate-300 mt-0.5">
 Download our comprehensive 62-page pre-compiled Hospital Tender & Compliance Dossier with all attested certificates.
 </p>
 </div>
 </div>

 <button
 onClick={() => {
 const el = document.getElementById('compliance-dossiers-section');
 if (el) el.scrollIntoView({ behavior: 'smooth' });
 }}
 className="px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-extrabold text-xs tracking-wide transition-all shrink-0 flex items-center gap-2 shadow-lg"
 >
 <span>Access Hospital Tender Packs</span>
 <ChevronRight className="w-4 h-4" />
 </button>
 </div>

 </div>

 {/* Generic Modal for CDSCO / CE / WHO-GDP Preview */}
 {selectedAccreditation && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
 <div 
 className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Modal Close Button */}
 <button
 onClick={() => setSelectedAccreditation(null)}
 className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
 >
 <X className="w-5 h-5" />
 </button>

 {/* Certificate Header */}
 <div className="flex items-center gap-3 mb-4">
 <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 font-extrabold text-lg">
 <Award className="w-6 h-6" />
 </div>
 <div>
 <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
 Verified International Accreditation
 </span>
 <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
 {selectedAccreditation.title}
 </h3>
 </div>
 </div>

 {/* Certificate Preview Frame */}
 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
 <div className="flex items-center justify-between pb-2 border-b border-slate-200">
 <span className="text-slate-500">Certificate Reference:</span>
 <span className="font-mono font-bold text-slate-900">{selectedAccreditation.certificateNumber}</span>
 </div>
 <div className="flex items-center justify-between pb-2 border-b border-slate-200">
 <span className="text-slate-500">Accredited Registrar:</span>
 <span className="font-semibold text-slate-900">{selectedAccreditation.registrar}</span>
 </div>
 <div className="flex items-center justify-between pb-2 border-b border-slate-200">
 <span className="text-slate-500">Audit Validity Cycle:</span>
 <span className="font-bold text-emerald-700">{selectedAccreditation.validFrom} to {selectedAccreditation.validTo}</span>
 </div>
 <div className="pt-2">
 <span className="font-bold text-slate-800 block mb-1">Scope of Certified Operations:</span>
 <p className="text-slate-600 leading-relaxed">{selectedAccreditation.description}</p>
 </div>

 <div className="pt-2">
 <span className="font-bold text-slate-800 block mb-1.5">Audit Compliance Highlights:</span>
 <div className="space-y-1">
 {selectedAccreditation.keyHighlights.map((hl, i) => (
 <div key={i} className="flex items-center gap-2 text-slate-700">
 <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
 <span>{hl}</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Modal Actions */}
 <div className="mt-6 flex items-center justify-between gap-3">
 <span className="text-[11px] text-slate-500 font-mono">
 Size: {selectedAccreditation.fileSize}
 </span>
 <div className="flex items-center gap-2">
 <button
 onClick={() => handleDownload(selectedAccreditation)}
 className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
 >
 <Download className="w-4 h-4" />
 <span>Download Attested Certificate</span>
 </button>
 <button
 onClick={() => setSelectedAccreditation(null)}
 className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
 >
 Close
 </button>
 </div>
 </div>
 </div>
 </div>
 )}

 </section>
 );
};
