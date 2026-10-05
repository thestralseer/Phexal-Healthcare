import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Award, 
  HeartPulse, 
  Truck, 
  ArrowRight,
  Target,
  Users,
  Sparkles,
  CheckCircle2,
  Cpu,
  BadgeCheck,
  PhoneCall,
  Clock,
  Layers,
  MapPin,
  FileText
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const partnerLogos = [
    { name: 'AIIMS', src: '/images/partners/aiims.png', fallback: 'AIIMS New Delhi' },
    { name: 'Apollo Hospitals', src: '/images/partners/apollo.svg', fallback: 'Apollo' },
    { name: 'Fortis Healthcare', src: '/images/partners/fortis.png', fallback: 'Fortis' },
    { name: 'Max Healthcare', src: '/images/partners/max.svg', fallback: 'Max Healthcare' },
    { name: 'Medanta The Medicity', src: '/images/partners/medanta.svg', fallback: 'Medanta' },
    { name: 'Dr Lal PathLabs', src: '/images/partners/lalpathlabs.png', fallback: 'Dr Lal PathLabs' },
    { name: 'Northern Railways', src: '/images/partners/railways.svg', fallback: 'Indian Railways' },
    { name: 'Indian Army Health', src: '/images/partners/indian_army.svg', fallback: 'Armed Forces Medical' },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-sky-500 selection:text-white">
      
      {/* ── 1. EXECUTIVE HERO BANNER ── */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-br from-[#061527] via-[#09223f] to-[#040e1a] text-white overflow-hidden border-b border-sky-500/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-md shadow-sm mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CDSCO Form MD-42 Licensed • ISO 13485:2016 Certified • WHO-GDP Compliant</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl mx-auto font-heading">
            Engineering Precision Healthcare &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-300">
              Hospital Infrastructure
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            Official Indian B2B medical equipment manufacturer, authorized metrology calibration hub, and 24/7 ICU life-support provider. Empowering 500+ hospital networks across India and 40+ international healthcare jurisdictions.
          </p>
        </div>
      </section>

      {/* ── 2. KEY STATS RIBBON ── */}
      <div className="w-full bg-white border-b border-slate-200/80 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-[#006591] flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Central Facility</div>
                <div className="text-lg sm:text-xl font-black text-slate-900">15,000+ Sq.Ft</div>
                <div className="text-[11px] text-slate-500">Indirapuram Hub</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Statutory License</div>
                <div className="text-lg sm:text-xl font-black text-slate-900">CDSCO MD-42</div>
                <div className="text-[11px] text-slate-500">Class A–D Licensed</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Global Reach</div>
                <div className="text-lg sm:text-xl font-black text-slate-900">40+ Countries</div>
                <div className="text-[11px] text-slate-500">Export Staging</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Emergency SLA</div>
                <div className="text-lg sm:text-xl font-black text-slate-900">120 Minutes</div>
                <div className="text-[11px] text-slate-500">Delhi NCR Bedside</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 3. OUR STORY, MISSION & VISION ── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#006591] mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Founding Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight font-heading">
                  Built on Clinical Rigor, Direct Manufacturer Pricing &amp; Patient Safety
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                  Founded with a commitment to bridge the gap between high-end multinational medical technology and affordable Indian clinical healthcare, Phexal Healthcare has evolved from an emergency pandemic life-support response team into a premier B2B medical equipment manufacturer and global exporter.
                </p>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  Operating from our central 15,000+ sq.ft logistics and metrology hub in Indirapuram (facing NH-24 corridor), we supply over 500 hospital chains, nursing homes, and government medical institutions with factory-calibrated devices that comply strictly with CDSCO and ISO 13485 standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#006591] flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To democratize access to hospital-grade medical infrastructure by eliminating distributor inflation, ensuring zero-counterfeit supply chains, and issuing certified calibration on every unit.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be Asia's most dependable and technologically rigorous medical device manufacturer, expanding indigenously manufactured ICU and surgical solutions across 60+ countries by 2028.
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-Counterfeit Supply Chain with Traceable Serial Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct OEM Institutional Wholesale Rates — No Hidden Markups</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Pre-Dispatch Fluke Biomedical Metrology &amp; Safety Testing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 text-white">
                <img 
                  src="/images/hero_biomedical_command.jpg" 
                  alt="Phexal Central Biomedical Facility" 
                  className="w-full h-80 object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/banner_quality.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="p-6 relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span>100% Operational Readiness</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white">
                    Central Calibration Lab &amp; Warehousing Hub
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Indirapuram, Ghaziabad • Temperature-controlled cleanroom calibration suite equipped with Fluke electrical safety and gas flow metrology analyzers.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                    <span>Capacity: 5,000+ Units</span>
                    <span className="text-emerald-400 font-bold">Open 24/7/365</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. FOUR PILLARS OF CLINICAL EXCELLENCE ── */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006591] mb-2 block">Our Operational Foundations</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-heading">
              The 4 Pillars Behind Phexal's Reliability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Engineered to deliver institutional dependability for hospital directors, biomedical engineers, and emergency caregivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#006591] flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-[#006591] uppercase tracking-wider block mb-1">Pillar 01</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">Biomedical Metrology Lab</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In-house calibration suite equipped with Fluke biomedical analyzers. Every ICU device undergoes stringent electrical safety and purity calibration before dispatch.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Traceable Test Certificate</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Pillar 02</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">Direct OEM Pricing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct manufacturing &amp; bulk institutional supply without intermediary layers. Formal GST proforma invoices, GeM tender readiness, and wholesale discounts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>15-Minute Invoice Turnaround</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block mb-1">Pillar 03</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">120-Min Emergency SLA</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated mobile rapid-response logistics across Delhi NCR. ICU beds, oxygen concentrators, and ventilators delivered with bedside setup by certified engineers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>24/7/365 On-Call Deployment</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block mb-1">Pillar 04</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">Global Export Logistics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Customs-cleared maritime container staging, CE documentation, and FOB/CIF freight execution supplying healthcare projects in the Middle East, Africa, and CIS.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>40+ Export Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORPORATE MILESTONES & GROWTH TIMELINE ── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006591] mb-2 block">Our Track Record</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Milestones of Medical Innovation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From pandemic crisis relief to an international medical infrastructure leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-black text-[#006591] mb-1">2020</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Foundation &amp; Emergency Care</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Established emergency life-support taskforce in Delhi NCR during peak COVID surges; deployed over 2,000 oxygen concentrators and BiPAP machines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-black text-emerald-600 mb-1">2022</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">CDSCO Form MD-42 &amp; ICU Beds</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Awarded statutory Form MD-42 licensing for Class A–D devices; expanded in-house manufacturing to 5-function motorized ICU beds and surgical OT tables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-black text-amber-600 mb-1">2024</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Fluke Metrology Lab &amp; 500+ Chains</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Established cleanroom metrology facility; achieved empanelment with AIIMS, Apollo, Fortis, Max, Medanta, and Indian Defense healthcare institutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-black text-purple-600 mb-1">2026</div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Global Export &amp; 24/7 ICU Fleet</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expanded regular container exports across 40+ countries; scaled 120-minute emergency bedside setup fleet with real-time IoT equipment tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. STATUTORY ACCREDITATIONS & QUALITY MANAGEMENT ── */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Accreditations &amp; Quality Management</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-heading">
              Certified Medical-Grade Compliance
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Every device distributed by Phexal Healthcare adheres to statutory Indian and international regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">STATUTORY</span>
              </div>
              <h3 className="text-base font-bold text-white">CDSCO Form MD-42</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Official registration (License: UP/GHA/MD42/2026/000142) under Medical Devices Rules, 2017 for Class A, B, C &amp; D devices across India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <Award className="w-7 h-7 text-sky-400" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40">GLOBAL ISO</span>
              </div>
              <h3 className="text-base font-bold text-white">ISO 13485:2016 Certified</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Certified Medical Device Quality Management System covering manufacturing, storage, calibration, and international distribution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <Truck className="w-7 h-7 text-purple-400" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">COLD-CHAIN</span>
              </div>
              <h3 className="text-base font-bold text-white">WHO-GDP Validated</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Good Distribution Practices compliance with real-time temperature/humidity IoT monitoring across our warehousing network.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <Cpu className="w-7 h-7 text-amber-400" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">SAFETY</span>
              </div>
              <h3 className="text-base font-bold text-white">IEC 60601-1 Electrical Safety</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rigorous leakage current and earth bond testing on all motorized ICU beds, ventilators, and multipara monitors using Fluke analyzers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <Globe2 className="w-7 h-7 text-teal-400" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">EUROPEAN</span>
              </div>
              <h3 className="text-base font-bold text-white">CE Compliant Standards</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compliant technical dossiers, risk management (ISO 14971), and biocompatibility testing for international maritime export clearance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <Building2 className="w-7 h-7 text-rose-400" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">PUBLIC SECTOR</span>
              </div>
              <h3 className="text-base font-bold text-white">GeM &amp; MSME Registered</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Approved vendor on Government e-Marketplace (GeM) for public sector hospital procurement, military healthcare tenders, and state health missions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HOSPITAL NETWORK MARQUEE ── */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006591] block mb-4">
            Trusted by India's Top Hospital Networks &amp; Defense Facilities
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            {partnerLogos.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-1.5" title={partner.name}>
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-8 w-auto max-w-[100px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.text-fallback')) {
                      const fallbackSpan = document.createElement('span');
                      fallbackSpan.className = 'text-fallback text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded';
                      fallbackSpan.innerText = partner.fallback;
                      parent.appendChild(fallbackSpan);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. B2B INSTITUTIONAL CTA ── */}
      <section className="py-14 bg-gradient-to-r from-sky-900 via-[#006591] to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-heading">
                Partner with Phexal Healthcare Today
              </h2>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Schedule an in-person facility visit to our Indirapuram metrology cleanroom, or request a formal institutional quotation with direct wholesale pricing matrices.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-white text-[#006591] font-bold text-xs sm:text-sm shadow-xl hover:bg-slate-100 transition-all"
              >
                Schedule Facility Tour
              </Link>
              <a
                href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare,%20I%20would%20like%20to%20discuss%20an%20institutional%20hospital%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
