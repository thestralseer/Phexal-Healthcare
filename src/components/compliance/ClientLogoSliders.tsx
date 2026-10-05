import React from 'react';
import { 
 Building2, 
 ShieldCheck, 
 FlaskConical, 
 Award, 
 CheckCircle2, 
 TrendingUp, 
 Activity,
 Stethoscope,
 Sparkles
} from 'lucide-react';
import { CLIENT_LOGOS } from '../../data/complianceData';

export const ClientLogoSliders: React.FC = () => {
 // Separate into Hospitals and Diagnostic Chains for dual-tier scrolling
 const hospitalClients = CLIENT_LOGOS.filter(c => c.category === 'Hospital Network' || c.category === 'Research & Government');
 const labClients = CLIENT_LOGOS.filter(c => c.category === 'Diagnostic Chain');

 // Duplicate arrays to ensure seamless infinite looping marquee
 const hospitalMarquee = [...hospitalClients, ...hospitalClients, ...hospitalClients];
 const labMarquee = [...labClients, ...labClients, ...labClients];

 return (
 <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-900 via-[#0c2035] to-slate-900 text-white relative overflow-hidden">
 
 {/* Background Glow Accents */}
 <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10 text-center">
 
 {/* Section Pill Badge */}
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-inner">
 <Sparkles className="w-3.5 h-3.5 text-brand-400" />
 <span>Institutional Trust & Client Portfolio</span>
 </div>

 {/* Section Heading */}
 <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
 Trusted by India's Foremost <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-sky-200 to-emerald-300">Hospital Networks & Diagnostic Labs</span>
 </h2>
 <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
 Supplying certified Class A, B, C, & D biomedical systems, respiratory life-support, and cold-chain diagnostics with 100% CDSCO & statutory compliance.
 </p>

 {/* Live Trust Metrics Grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-800">
 <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
 <div className="text-xl sm:text-2xl font-black text-brand-400 font-mono">180+</div>
 <div className="text-xs font-semibold text-slate-300">Hospital Networks</div>
 <div className="text-[10px] text-slate-400 mt-0.5">Apollo, Max, Fortis, Medanta</div>
 </div>

 <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
 <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">650+</div>
 <div className="text-xs font-semibold text-slate-300">NABL & CAP Labs</div>
 <div className="text-[10px] text-slate-400 mt-0.5">Lal PathLabs, Agilus, Metropolis</div>
 </div>

 <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
 <div className="text-xl sm:text-2xl font-black text-sky-400 font-mono">99.98%</div>
 <div className="text-xs font-semibold text-slate-300">Cold-Chain Uptime</div>
 <div className="text-[10px] text-slate-400 mt-0.5">Active IoT Telemetry Logged</div>
 </div>

 <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
 <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">100%</div>
 <div className="text-xs font-semibold text-slate-300">CDSCO Batch Audits</div>
 <div className="text-[10px] text-slate-400 mt-0.5">Form MD-42 Validated Release</div>
 </div>
 </div>
 </div>

 {/* ── Marquee Row 1: Hospital Networks (Scroll Left) ── */}
 <div className="relative w-full overflow-hidden py-3 group">
 
 {/* Side Gradient Fades for Infinite Illusion */}
 <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none" />
 <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none" />

 <div className="mb-2 px-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-300">
 <Building2 className="w-3.5 h-3.5 text-brand-400" />
 <span>Tier-1 Multi-Specialty & Apex Healthcare Groups</span>
 </div>

 <div className="animate-marquee flex gap-4 items-center">
 {hospitalMarquee.map((client, index) => (
 <div
 key={`hosp-${client.id}-${index}`}
 className="flex-shrink-0 w-72 sm:w-80 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-500/50 transition-all duration-200 shadow-lg group/card hover:scale-[1.02] cursor-default"
 >
 <div className="flex items-center gap-3">
 {/* Client Monogram / Initials Icon */}
 <div 
 className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm text-white shadow-md shrink-0 border border-white/10"
 style={{ backgroundColor: client.colorAccent }}
 >
 {client.initials}
 </div>

 <div className="min-w-0 flex-1">
 <div className="flex items-center gap-1.5">
 <h4 className="text-sm font-bold text-white truncate group-hover/card:text-brand-300 transition-colors">
 {client.shortName}
 </h4>
 <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
 </div>
 <p className="text-[11px] text-slate-400 truncate">
 {client.reach}
 </p>
 </div>
 </div>

 {/* Badges and devices */}
 <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[10px]">
 <div className="flex items-center gap-1">
 <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-300 font-semibold">
 {client.accreditations[0]}
 </span>
 </div>
 <span className="text-brand-300 font-medium truncate max-w-[130px]" title={client.devicesSupplied}>
 {client.devicesSupplied.split(',')[0]}
 </span>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* ── Marquee Row 2: Diagnostic Chains & Laboratories (Scroll Right) ── */}
 <div className="relative w-full overflow-hidden py-3 group mt-2">
 
 {/* Side Gradient Fades */}
 <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none" />
 <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none" />

 <div className="mb-2 px-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
 <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
 <span>National Pathology Chains & CAP/NABL Laboratories</span>
 </div>

 <div className="animate-marquee-reverse flex gap-4 items-center">
 {labMarquee.map((client, index) => (
 <div
 key={`lab-${client.id}-${index}`}
 className="flex-shrink-0 w-72 sm:w-80 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-200 shadow-lg group/card hover:scale-[1.02] cursor-default"
 >
 <div className="flex items-center gap-3">
 {/* Lab Monogram / Initials Icon */}
 <div 
 className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm text-white shadow-md shrink-0 border border-white/10"
 style={{ backgroundColor: client.colorAccent }}
 >
 {client.initials}
 </div>

 <div className="min-w-0 flex-1">
 <div className="flex items-center gap-1.5">
 <h4 className="text-sm font-bold text-white truncate group-hover/card:text-emerald-300 transition-colors">
 {client.shortName}
 </h4>
 <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
 </div>
 <p className="text-[11px] text-slate-400 truncate">
 {client.reach}
 </p>
 </div>
 </div>

 {/* Badges and devices */}
 <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[10px]">
 <div className="flex items-center gap-1">
 <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
 {client.accreditations[0]}
 </span>
 </div>
 <span className="text-slate-300 font-medium truncate max-w-[130px]" title={client.devicesSupplied}>
 {client.devicesSupplied.split(',')[0]}
 </span>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Bottom Floating Interactive Note */}
 <div className="mt-8 text-center">
 <p className="text-xs text-slate-400 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60">
 <ShieldCheck className="w-4 h-4 text-emerald-400" />
 <span>Need custom institutional empanelment or vendor code creation? Instant hospital onboarding within 2 hours.</span>
 </p>
 </div>

 </section>
 );
};
