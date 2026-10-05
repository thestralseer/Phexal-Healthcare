import React, { useState } from 'react';
import { 
 FileCheck, 
 Download, 
 FileText, 
 CheckCircle2, 
 Building2, 
 Calendar, 
 ShieldCheck, 
 Check, 
 Eye, 
 Sparkles,
 Layers,
 ArrowDownToLine,
 X
} from 'lucide-react';
import { COMPLIANCE_DOSSIERS, ComplianceDossier } from '../../data/complianceData';

export const ComplianceDossiers: React.FC = () => {
 const [downloadingId, setDownloadingId] = useState<string | null>(null);
 const [downloadedIds, setDownloadedIds] = useState<Record<string, boolean>>({});
 const [selectedDossier, setSelectedDossier] = useState<ComplianceDossier | null>(null);

 const handleDownloadDossier = (dossier: ComplianceDossier) => {
 setDownloadingId(dossier.id);
 setTimeout(() => {
 setDownloadingId(null);
 setDownloadedIds(prev => ({ ...prev, [dossier.id]: true }));
 setTimeout(() => {
 setDownloadedIds(prev => ({ ...prev, [dossier.id]: false }));
 }, 4000);
 }, 1200);
 };

 const handleDownloadAllMasterPack = () => {
 setDownloadingId('all-master');
 setTimeout(() => {
 setDownloadingId(null);
 setDownloadedIds(prev => ({ ...prev, 'all-master': true }));
 setTimeout(() => {
 setDownloadedIds(prev => ({ ...prev, 'all-master': false }));
 }, 4000);
 }, 1800);
 };

 return (
 <section id="compliance-dossiers-section" className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200 relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
 <div className="max-w-2xl">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
 <FileCheck className="w-3.5 h-3.5" />
 <span>Procurement & Tender Readiness</span>
 </div>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
 Downloadable Compliance Dossiers <br />
 <span className="text-brand-600">& Hospital Tender Kits</span>
 </h2>
 <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
 Curated, pre-compiled institutional packs designed for hospital procurement committees, GeM e-tenders, and NABH/NABL statutory audits.
 </p>
 </div>

 {/* Master Download CTA */}
 <div className="flex flex-col sm:flex-row items-center gap-3">
 <button
 onClick={handleDownloadAllMasterPack}
 disabled={downloadingId === 'all-master'}
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-xl active:scale-95 group"
 >
 {downloadedIds['all-master'] ? (
 <>
 <Check className="w-4 h-4 text-emerald-400" />
 <span>Master Tender Pack Downloaded!</span>
 </>
 ) : (
 <>
 <ArrowDownToLine className={`w-4 h-4 text-brand-400 ${downloadingId === 'all-master' ? 'animate-bounce' : ''}`} />
 <span>{downloadingId === 'all-master' ? 'Bundling All Dossiers (41.2 MB)...' : 'Download Complete Master Tender Kit (ZIP)'}</span>
 </>
 )}
 </button>
 </div>
 </div>

 {/* Dossiers Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
 {COMPLIANCE_DOSSIERS.map((dossier) => {
 const isDownloading = downloadingId === dossier.id;
 const isDownloaded = downloadedIds[dossier.id];

 return (
 <div
 key={dossier.id}
 className="bg-white rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
 >
 <div>
 {/* Card Top Pill & Header */}
 <div className="p-6 pb-4 border-b border-slate-100">
 <div className="flex items-center justify-between gap-2 mb-3">
 <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-brand-50 text-brand-700 border border-brand-200 uppercase tracking-wider">
 {dossier.badge}
 </span>
 <span className="text-xs font-mono font-bold text-slate-500">
 {dossier.pages} Pages • {dossier.fileSize}
 </span>
 </div>

 <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
 {dossier.title}
 </h3>
 <p className="text-xs text-slate-500 mt-1 font-medium">
 {dossier.updatedDate}
 </p>
 </div>

 {/* Card Body & Target Audience */}
 <div className="p-6 space-y-4 text-xs">
 <p className="text-slate-600 leading-relaxed">
 {dossier.description}
 </p>

 <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[11px]">
 <span className="font-bold text-slate-700 block mb-0.5">Recommended For:</span>
 <span className="text-slate-500">{dossier.targetAudience}</span>
 </div>

 {/* Table of Contents Preview */}
 <div className="space-y-1.5 pt-1">
 <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
 Included Documents ({dossier.contents.length}):
 </span>
 {dossier.contents.slice(0, 3).map((item, idx) => (
 <div key={idx} className="flex items-start gap-2 text-slate-700">
 <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
 <span className="truncate">{item}</span>
 </div>
 ))}
 {dossier.contents.length > 3 && (
 <span className="text-[10px] text-brand-600 font-semibold block pt-0.5">
 + {dossier.contents.length - 3} additional statutory annexures
 </span>
 )}
 </div>
 </div>
 </div>

 {/* Card Bottom Actions */}
 <div className="p-5 pt-3 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
 <button
 onClick={() => setSelectedDossier(dossier)}
 className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors shadow-sm"
 >
 <Eye className="w-3.5 h-3.5 text-slate-500" />
 <span>Table of Contents</span>
 </button>

 <button
 onClick={() => handleDownloadDossier(dossier)}
 disabled={isDownloading}
 className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
 >
 {isDownloaded ? (
 <>
 <Check className="w-3.5 h-3.5 text-emerald-200" />
 <span>Saved</span>
 </>
 ) : (
 <>
 <Download className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce' : ''}`} />
 <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
 </>
 )}
 </button>
 </div>

 </div>
 );
 })}
 </div>

 </div>

 {/* Dossier Deep Inspection Modal */}
 {selectedDossier && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
 <div 
 className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Modal Close Button */}
 <button
 onClick={() => setSelectedDossier(null)}
 className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
 >
 <X className="w-5 h-5" />
 </button>

 {/* Header */}
 <div className="flex items-center gap-3 mb-4">
 <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
 <FileText className="w-6 h-6" />
 </div>
 <div>
 <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
 Compliance Dossier Contents ({selectedDossier.pages} Pages)
 </span>
 <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
 {selectedDossier.title}
 </h3>
 </div>
 </div>

 {/* Content Breakdown */}
 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
 <p className="text-slate-600 leading-relaxed font-medium">
 {selectedDossier.description}
 </p>

 <div className="pt-2 border-t border-slate-200">
 <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block mb-2">
 Complete Document Index & Annexures:
 </span>
 <div className="space-y-2">
 {selectedDossier.contents.map((item, idx) => (
 <div key={idx} className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-slate-200 text-slate-800">
 <span className="w-5 h-5 rounded-md bg-slate-100 font-mono text-[10px] font-bold flex items-center justify-center text-slate-600">
 {idx + 1}
 </span>
 <span className="font-medium">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Modal Bottom Actions */}
 <div className="mt-6 flex items-center justify-between gap-3">
 <span className="text-[11px] text-slate-500 font-mono">
 {selectedDossier.fileName} ({selectedDossier.fileSize})
 </span>
 <div className="flex items-center gap-2">
 <button
 onClick={() => handleDownloadDossier(selectedDossier)}
 className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
 >
 <Download className="w-4 h-4" />
 <span>Download Complete Dossier</span>
 </button>
 <button
 onClick={() => setSelectedDossier(null)}
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
