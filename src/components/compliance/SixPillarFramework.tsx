import React, { useState } from 'react';
import { 
 ShieldCheck, 
 ThermometerSnowflake, 
 QrCode, 
 Cpu, 
 PackageCheck, 
 Clock, 
 CheckCircle2, 
 AlertCircle, 
 Sparkles, 
 ArrowRight,
 Activity,
 Layers,
 Radio,
 FileCode2,
 Gauge
} from 'lucide-react';
import { SIX_PILLARS_FRAMEWORK, QualityPillar } from '../../data/complianceData';

export const SixPillarFramework: React.FC = () => {
 const [activePillarId, setActivePillarId] = useState<number>(1);

 const activePillar = SIX_PILLARS_FRAMEWORK.find(p => p.id === activePillarId) || SIX_PILLARS_FRAMEWORK[0];

 const getPillarIcon = (name: string, isActive: boolean) => {
 const className = `w-5 h-5 ${isActive ? 'text-white' : 'text-slate-600'}`;
 switch (name) {
 case 'ThermometerSnowflake': return <ThermometerSnowflake className={className} />;
 case 'QrCode': return <QrCode className={className} />;
 case 'ShieldCheck': return <ShieldCheck className={className} />;
 case 'Cpu': return <Cpu className={className} />;
 case 'PackageCheck': return <PackageCheck className={className} />;
 case 'Clock': return <Clock className={className} />;
 default: return <ShieldCheck className={className} />;
 }
 };

 return (
 <section id="quality-framework-section" className="py-16 sm:py-24 bg-white relative overflow-hidden">
 
 {/* Background Subtle Grid */}
 <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
 <Layers className="w-3.5 h-3.5 text-emerald-600" />
 <span>Operational Rigor & SOPs</span>
 </div>

 <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
 6-Pillar Quality Assurance <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-sky-600 to-emerald-600">
 & Cold-Chain Protocols
 </span>
 </h2>

 <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
 From factory-floor biomedical calibration to active 2°C–8°C IoT continuous transit logging, our six-layer operational framework guarantees clinical reliability.
 </p>
 </div>

 {/* 6-Pillar Interactive Split Interface */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 
 {/* Left Column: Pillar Selectors (Cards 1 to 6) */}
 <div className="lg:col-span-5 space-y-2.5">
 {SIX_PILLARS_FRAMEWORK.map((pillar) => {
 const isActive = pillar.id === activePillarId;

 return (
 <button
 key={pillar.id}
 onClick={() => setActivePillarId(pillar.id)}
 className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between gap-4 border ${
 isActive
 ? 'bg-slate-900 border-slate-800 text-white shadow-xl scale-[1.02]'
 : 'bg-slate-50/80 hover:bg-slate-100/80 border-slate-200 text-slate-900'
 }`}
 >
 <div className="flex items-center gap-3.5 min-w-0">
 {/* Pillar Number Badge */}
 <div
 className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-xs shrink-0 transition-colors ${
 isActive
 ? 'bg-brand-500 text-slate-950'
 : 'bg-white border border-slate-200 text-slate-700'
 }`}
 >
 {pillar.numberStr}
 </div>

 <div className="min-w-0">
 <div className="flex items-center gap-2">
 <h3 className={`text-xs sm:text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-900'}`}>
 {pillar.title}
 </h3>
 </div>
 <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
 {pillar.sopCode}
 </p>
 </div>
 </div>

 <div className="shrink-0 flex items-center gap-1.5">
 {getPillarIcon(pillar.iconName, isActive)}
 <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-brand-400 translate-x-1' : 'text-slate-300'}`} />
 </div>
 </button>
 );
 })}
 </div>

 {/* Right Column: Active Pillar Deep-Dive Dashboard */}
 <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
 
 {/* Ambient Background Glow */}
 <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

 <div className="relative z-10 space-y-6">
 
 {/* Pillar Header */}
 <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
 <div>
 <div className="flex items-center gap-2">
 <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-slate-950 font-mono font-bold text-xs">
 PILLAR {activePillar.numberStr}
 </span>
 <span className="text-xs font-mono text-brand-300 font-semibold">
 {activePillar.sopCode}
 </span>
 </div>
 <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
 {activePillar.title}
 </h3>
 </div>

 <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-brand-300">
 {getPillarIcon(activePillar.iconName, true)}
 </div>
 </div>

 {/* Tagline & Core Description */}
 <div>
 <p className="text-sm font-semibold text-sky-200">
 {activePillar.tagline}
 </p>
 <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
 {activePillar.description}
 </p>
 </div>

 {/* Real-Time Live Telemetry Metrics Grid (if present) */}
 {activePillar.telemetryMetrics && activePillar.telemetryMetrics.length > 0 && (
 <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
 <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
 <span className="flex items-center gap-2">
 <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
 <span>Live Telemetry & Calibration Parameters</span>
 </span>
 <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
 ACTIVE SENSORS
 </span>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
 {activePillar.telemetryMetrics.map((metric, idx) => (
 <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between gap-1">
 <span className="text-[11px] text-slate-400">{metric.label}</span>
 <div className="flex items-center justify-between mt-0.5">
 <span className="font-mono font-bold text-xs sm:text-sm text-white">
 {metric.value}
 </span>
 <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
 {metric.status}
 </span>
 </div>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* Verified Quality Protocols Checklist */}
 <div className="space-y-2.5">
 <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
 Mandated Inspection Protocols & Standards:
 </span>
 <div className="space-y-2">
 {activePillar.protocols.map((protocol, idx) => (
 <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3 text-xs sm:text-sm text-slate-200">
 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
 <span>{protocol}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Acceptance Criteria Callout */}
 <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
 <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
 <div className="text-xs">
 <span className="font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
 Strict Acceptance Criteria:
 </span>
 <p className="text-slate-300">
 {activePillar.acceptanceCriteria}
 </p>
 </div>
 </div>

 </div>

 </div>

 </div>

 </div>
 </section>
 );
};
