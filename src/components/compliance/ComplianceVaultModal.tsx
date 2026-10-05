import React, { useState } from 'react';
import { 
 X, 
 ShieldCheck, 
 Award, 
 Download, 
 Printer, 
 CheckCircle2, 
 Copy, 
 Check, 
 ExternalLink, 
 FileText, 
 Building2, 
 Sparkles,
 Lock,
 Globe2,
 Cpu,
 BadgePercent
} from 'lucide-react';
import { CDSCO_CERTIFICATE_DATA } from '../../data/complianceData';

interface ComplianceVaultModalProps {
 isOpen: boolean;
 onClose: () => void;
 defaultTab?: 'cdsco' | 'Medical Grade' | 'ce' | 'who' | 'eepc';
}

export const ComplianceVaultModal: React.FC<ComplianceVaultModalProps> = ({
 isOpen,
 onClose,
 defaultTab = 'cdsco'
}) => {
 const [activeTab, setActiveTab] = useState<'cdsco' | 'Medical Grade' | 'ce' | 'who' | 'eepc'>(defaultTab);
 const [copiedId, setCopiedId] = useState<string | null>(null);

 if (!isOpen) return null;

 const handleCopy = (text: string, id: string) => {
 navigator.clipboard.writeText(text);
 setCopiedId(id);
 setTimeout(() => setCopiedId(null), 2000);
 };

 const handlePrint = () => {
 window.print();
 };

 return (
 <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
 <div 
 className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[94vh] animate-in fade-in zoom-in-95 duration-200"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Modal Header */}
 <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-slate-900 text-white border-b border-slate-800 shrink-0 no-print">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
 <ShieldCheck className="w-6 h-6" />
 </div>
 <div>
 <div className="flex items-center gap-2">
 <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
 Official Verification Portal
 </span>
 <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-slate-950">
 STATUTORY AUDIT READY
 </span>
 </div>
 <h3 className="text-base sm:text-lg font-black text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
 CDSCO, CDSCO MD-42 & CE Regulatory Compliance Vault
 </h3>
 </div>
 </div>

 <div className="flex items-center gap-2">
 <button
 onClick={handlePrint}
 className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors border border-slate-700"
 title="Print Dossier"
 >
 <Printer className="w-3.5 h-3.5" />
 <span className="hidden sm:inline">Print Record</span>
 </button>
 <button
 onClick={onClose}
 className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Tab Navigation */}
 <div className="flex items-center gap-2 px-5 sm:px-8 py-3 bg-slate-100 border-b border-slate-200 overflow-x-auto no-scrollbar shrink-0 no-print">
 <button
 onClick={() => setActiveTab('cdsco')}
 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
 activeTab === 'cdsco' 
 ? 'bg-emerald-600 text-white shadow-md' 
 : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
 }`}
 >
 <Award className="w-3.5 h-3.5" />
 <span>CDSCO Form MD-42 (Govt of India)</span>
 </button>

 <button
 onClick={() => setActiveTab('Medical Grade')}
 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
 activeTab === 'Medical Grade' 
 ? 'bg-blue-600 text-white shadow-md' 
 : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
 }`}
 >
 <ShieldCheck className="w-3.5 h-3.5" />
 <span>CDSCO MD-42 Licensed (Medical Devices QMS)</span>
 </button>

 <button
 onClick={() => setActiveTab('ce')}
 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
 activeTab === 'ce' 
 ? 'bg-indigo-600 text-white shadow-md' 
 : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
 }`}
 >
 <Globe2 className="w-3.5 h-3.5" />
 <span>CE European Compliance</span>
 </button>

 <button
 onClick={() => setActiveTab('who')}
 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
 activeTab === 'who' 
 ? 'bg-teal-600 text-white shadow-md' 
 : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
 }`}
 >
 <CheckCircle2 className="w-3.5 h-3.5" />
 <span>WHO-GMP & IEC 60601-1</span>
 </button>

 <button
 onClick={() => setActiveTab('eepc')}
 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
 activeTab === 'eepc' 
 ? 'bg-slate-900 text-white shadow-md' 
 : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
 }`}
 >
 <Building2 className="w-3.5 h-3.5" />
 <span>EEPC India & GSTIN Record</span>
 </button>
 </div>

 {/* Tab Content Area */}
 <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-slate-50">
 
 {/* TAB 1: CDSCO FORM MD-42 */}
 {activeTab === 'cdsco' && (
 <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-md border-2 border-emerald-500/30">
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
 <div>
 <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
 Ministry of Health & Family Welfare • CDSCO Central Licensing
 </span>
 <h2 className="text-xl sm:text-2xl font-black text-slate-900">
 Form MD-42 Registration Certificate
 </h2>
 <p className="text-xs text-slate-500 mt-1 font-mono">
 Registration No: <strong className="text-emerald-700 font-bold text-sm">UP/GHA/MD42/2026/000142</strong>
 </p>
 </div>

 <button
 onClick={() => handleCopy('UP/GHA/MD42/2026/000142', 'cdsco-reg')}
 className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md shrink-0"
 >
 {copiedId === 'cdsco-reg' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
 <span>{copiedId === 'cdsco-reg' ? 'Copied Number!' : 'Copy License No.'}</span>
 </button>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-xs">
 <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
 <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Authorized Entity</h4>
 <p><strong>Firm Name:</strong> PHEXAL HEALTHCARE</p>
 <p><strong>Constitution:</strong> Proprietary Medical Equipment Enterprise</p>
 <p><strong>Licensed Premises:</strong> 762, Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, UP 201014</p>
 <p><strong>Issuing Authority:</strong> State Licensing Authority, Food & Drug Administration, Uttar Pradesh</p>
 </div>

 <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
 <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Statutory Scope & Validity</h4>
 <p><strong>Rule Reference:</strong> Rule 87(B), Medical Devices Rules, 2017</p>
 <p><strong>Date of Grant:</strong> 15th January 2024</p>
 <p><strong>Valid Until:</strong> Perpetuity (Subject to continuous regulatory compliance)</p>
 <p><strong>Status:</strong> <span className="inline-block px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">ACTIVE & VALID IN ALL STATES</span></p>
 </div>
 </div>

 <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950">
 <h4 className="font-bold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
 <ShieldCheck className="w-4 h-4 text-emerald-600" />
 Authorized Medical Device Classes (MDR 2017)
 </h4>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
 <div>• <strong>Class A (Low Risk):</strong> Manual Wheelchairs, Hospital Beds, Thermometers</div>
 <div>• <strong>Class B (Low-Moderate Risk):</strong> Oxygen Concentrators, Suction Units, ECG Machines</div>
 <div>• <strong>Class C (Moderate-High Risk):</strong> ICU Ventilators, BiPAP/CPAP, Multipara Monitors</div>
 <div>• <strong>Class D (High Risk):</strong> Biphasic Defibrillators, Critical Care Infusion Systems</div>
 </div>
 </div>
 </div>
 )}

 {/* TAB 2: CDSCO MD-42 Licensed */}
 {activeTab === 'Medical Grade' && (
 <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-md border-2 border-blue-500/30">
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
 <div>
 <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
 International Quality Management System
 </span>
 <h2 className="text-xl sm:text-2xl font-black text-slate-900">
 CDSCO MD-42 Licensed Accreditation
 </h2>
 <p className="text-xs text-slate-500 mt-1 font-mono">
 Cert No: <strong className="text-blue-700 font-bold text-sm">CDSCO-13485-PHX-9018-2024</strong>
 </p>
 </div>
 <button
 onClick={() => handleCopy('CDSCO-13485-PHX-9018-2024', 'Medical Grade-reg')}
 className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md shrink-0"
 >
 {copiedId === 'Medical Grade-reg' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
 <span>{copiedId === 'Medical Grade-reg' ? 'Copied Number!' : 'Copy CDSCO Cert No.'}</span>
 </button>
 </div>

 <div className="my-6 space-y-4 text-xs text-slate-700">
 <p className="leading-relaxed">
 <strong>Scope of Registration:</strong> Storage, technical calibration, biomedical maintenance, wholesale distribution, and turnkey hospital supply of Class A, B, C, and D medical electrical and non-electrical equipment.
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
 <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
 <p className="text-[10px] uppercase font-bold text-slate-400">Traceability Standard</p>
 <p className="font-bold text-slate-900 text-xs mt-1">Clinical Risk Management Risk Management</p>
 </div>
 <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
 <p className="text-[10px] uppercase font-bold text-slate-400">Metrology Lab</p>
 <p className="font-bold text-slate-900 text-xs mt-1">IEC 60601-1 Calibrated</p>
 </div>
 <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
 <p className="text-[10px] uppercase font-bold text-slate-400">Audit Status</p>
 <p className="font-bold text-emerald-600 text-xs mt-1">Zero Non-Conformances</p>
 </div>
 </div>
 </div>
 </div>
 )}

 {/* TAB 3: CE COMPLIANCE */}
 {activeTab === 'ce' && (
 <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-md border-2 border-indigo-500/30">
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
 <div>
 <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
 European Conformity (Conformité Européenne)
 </span>
 <h2 className="text-xl sm:text-2xl font-black text-slate-900">
 CE Declaration of Conformity (EU MDR)
 </h2>
 <p className="text-xs text-slate-500 mt-1 font-mono">
 Dossier: <strong className="text-indigo-700 font-bold text-sm">CE-PHX-MDR-2045</strong>
 </p>
 </div>
 </div>

 <div className="my-6 text-xs text-slate-700 space-y-3 leading-relaxed">
 <p>
 All patient monitoring systems, respiratory ventilators, oxygen concentrators, and surgical instruments distributed by Phexal Healthcare comply with European Medical Device Regulation (EU) 2017/745 and Medical Device Directive 93/42/EEC.
 </p>
 <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200">
 <h4 className="font-bold text-indigo-950 uppercase tracking-wider text-[11px] mb-2">
 Tested Technical Standards:
 </h4>
 <ul className="space-y-1 list-disc list-inside text-indigo-900 text-[11px]">
 <li>EN 60601-1-2: Electromagnetic Compatibility (EMC) for Medical Electrical Equipment</li>
 <li>EN CDSCO 80601-2-12: Particular Requirements for Critical Care Ventilators</li>
 <li>EN CDSCO 80601-2-61: Particular Requirements for Pulse Oximeter Equipment</li>
 </ul>
 </div>
 </div>
 </div>
 )}

 {/* TAB 4: WHO-GMP & METROLOGY */}
 {activeTab === 'who' && (
 <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-md border-2 border-teal-500/30">
 <div className="pb-6 border-b border-slate-200">
 <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
 World Health Organization Good Manufacturing & Distribution
 </span>
 <h2 className="text-xl sm:text-2xl font-black text-slate-900">
 WHO-GMP & In-House Biomedical Metrology
 </h2>
 </div>
 <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
 <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
 <h4 className="font-bold text-slate-900 text-xs mb-2">Clean Room & Packaging Protocol</h4>
 <p className="text-slate-600">
 All sterile surgical kits, oxygen delivery tubing, and ventilator accessories undergo sanitized handling in cleanroom conditions compliant with WHO-GDP guidelines.
 </p>
 </div>
 <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
 <h4 className="font-bold text-slate-900 text-xs mb-2">NABL-Traceable Calibration</h4>
 <p className="text-slate-600">
 Digital electrical safety analyzers and vital simulators tested against NABL-traceable national primary standards before dispatch.
 </p>
 </div>
 </div>
 </div>
 )}

 {/* TAB 5: EEPC INDIA & GSTIN */}
 {activeTab === 'eepc' && (
 <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-md border-2 border-slate-400">
 <div className="pb-6 border-b border-slate-200">
 <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
 Ministry of Commerce & Industry • Govt of India
 </span>
 <h2 className="text-xl sm:text-2xl font-black text-slate-900">
 EEPC India Global Export Registration
 </h2>
 </div>
 <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
 <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
 <p className="text-slate-400 font-bold uppercase text-[10px]">Statutory GSTIN</p>
 <p className="text-slate-900 font-mono font-bold text-sm mt-1">09CIOPG0975L1ZN</p>
 <p className="text-slate-500 text-[11px] mt-1">State: Uttar Pradesh (09) • Registered Regular Taxpayer</p>
 </div>
 <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
 <p className="text-slate-400 font-bold uppercase text-[10px]">Export Promotion Council</p>
 <p className="text-slate-900 font-bold text-sm mt-1">EEPC India Medical Chapter</p>
 <p className="text-slate-500 text-[11px] mt-1">Authorized Exporter to 40+ countries across Africa, Middle East & SEA</p>
 </div>
 </div>
 </div>
 )}

 </div>

 {/* Modal Footer Controls */}
 <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 no-print">
 <div className="text-xs text-slate-500 flex items-center gap-1.5">
 <CheckCircle2 className="w-4 h-4 text-emerald-600" />
 <span>Audited & Verified for Hospital Procurement Committees & NABH Accreditations.</span>
 </div>
 <div className="flex items-center gap-3 w-full sm:w-auto">
 <a
 href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare,%20please%20send%20the%20complete%20CDSCO%20and%20CDSCO%2013485%20compliance%20dossier%20pack%20for%20our%20hospital%20audit."
 target="_blank"
 rel="noopener noreferrer"
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
 >
 <FileText className="w-4 h-4" />
 <span>Request Full Audit Pack via WhatsApp</span>
 </a>
 </div>
 </div>

 </div>
 </div>
 );
};
