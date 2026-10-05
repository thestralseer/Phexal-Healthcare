import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Building2, 
  Truck, 
  PhoneCall, 
  Stethoscope, 
  HeartPulse, 
  CheckCircle2, 
  Package, 
  Clock, 
  Activity, 
  ChevronDown, 
  ChevronUp,
  ChevronLeft,
  ChevronRight, 
  HelpCircle,
  Cpu,
  Layers,
  FileText,
  BadgeCheck,
  Send,
  Bed,
  Star
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/catalog';

export const HomePage: React.FC = () => {

  // ── NAREENA-STYLE HERO BANNER SLIDES STATE ──
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const catRailRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      badge: 'Hospital Surgical Equipment',
      title: 'Reliable Double Jar Suction Machines Manufacturers in India',
      subtitle: 'Experience top-notch double jar suction machines designed for hospitals and clinics, combining durability, precision, and unmatched performance in India.',
      exploreUrl: '/product/phx-suction-dev',
      enquiryUrl: '/contact',
      image: '/images/products/phx-suction-dev.png',
      tag: 'High Vacuum Dual-Jar'
    },
    {
      badge: 'Maternal & Neonatal Care',
      title: 'Advanced Phototherapy Unit for Newborn Care',
      subtitle: 'Delivering safe and effective light therapy for neonatal jaundice. Designed for precision, reliability, and gentle treatment to ensure the best infant care.',
      exploreUrl: '/product/phx-warmer-infant',
      enquiryUrl: '/contact',
      image: '/images/products/phx-warmer-infant.png',
      tag: 'NICU Microprocessor Warmer'
    },
    {
      badge: 'Critical Care ICU Furniture',
      title: 'High-Precision Motorized ICU Beds & Patient Furniture',
      subtitle: 'Engineered for critical care units, NABH/JCI clinical protocols, dual CPR release, and remote Nurse Control Panels with anti-microbial epoxy coating.',
      exploreUrl: '/product/phx-bed-paramount',
      enquiryUrl: '/contact',
      image: '/images/products/phx-bed-paramount.png',
      tag: '5-Function Motorized ICU'
    },
    {
      badge: 'Respiratory Life Support',
      title: 'Advanced Invasive & Non-Invasive ICU Ventilators',
      subtitle: 'Turbine-driven critical care respiratory life support with 12.1-inch color touchscreen, smart lung mechanics, and 24/7 bedside telemetry.',
      exploreUrl: '/product/phx-icu-sv300',
      enquiryUrl: '/contact',
      image: '/images/products/phx-icu-sv300.png',
      tag: 'Microprocessor ICU Telemetry'
    },
    {
      badge: 'Diagnostic & Vital Monitoring',
      title: 'Clinical-Grade Multi-Parameter Patient Monitors',
      subtitle: 'Comprehensive real-time ECG, SpO2, NIBP, Respiration, Dual Temperature, and Arrhythmia detection for ICUs, emergency rooms, and operation theatres.',
      exploreUrl: '/product/phx-mon-contec',
      enquiryUrl: '/contact',
      image: '/images/products/phx-mon-contec.png',
      tag: '12.1" Multi-Parameter Monitor'
    }
  ];

  const circularCategories = [
    { name: 'Patient Bed (Fowler)', slideIndex: 2, url: '/product/phx-bed-fowler-eco' },
    { name: 'Patient Bed (Semi-Fowler)', slideIndex: 2, url: '/product/phx-bed-semifowler-eco' },
    { name: 'ICU Bed (V2)', slideIndex: 2, url: '/product/phx-bed-paramount' },
    { name: 'Neonatal Incubator', slideIndex: 1, url: '/product/phx-resp-warmer' },
    { name: 'Infant Warmer (V2)', slideIndex: 1, url: '/product/phx-resp-warmer' },
    { name: 'Suction Machine', slideIndex: 0, url: '/product/phx-resp-suction-devilbiss' },
    { name: 'ICU Ventilator', slideIndex: 3, url: '/product/phx-resp-ventilator' },
    { name: 'Patient Monitor', slideIndex: 4, url: '/product/phx-diag-monitor-5para' },
    { name: 'Oxygen Concentrator', slideIndex: 0, url: '/product/phx-resp-o2-10l' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // 4-second auto-scroll
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollRail = (direction: number) => {
    if (catRailRef.current) {
      catRailRef.current.scrollBy({ left: direction * 280, behavior: 'smooth' });
    }
  };

  // Category tabs for the interactive product matrix
  const [activeTab, setActiveTab] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeAboutPillar, setActiveAboutPillar] = useState<'calibration' | 'pricing' | 'emergency'>('calibration');

  // Quick RFQ interactive state
  const [rfqCategory, setRfqCategory] = useState<string>('Hospital Beds & Furniture');
  const [rfqType, setRfqType] = useState<string>('Hospital Tender / Bulk Order');
  const [rfqContact, setRfqContact] = useState<string>('');

  // Tab definitions
  const tabs = [
    { id: 'all', label: 'All Flagships', icon: Sparkles },
    { id: 'respiratory-critical', label: 'Critical Care & ICU', icon: Activity },
    { id: 'hospital-furniture', label: 'Hospital Beds & Furniture', icon: Bed },
    { id: 'diagnostic-monitoring', label: 'Diagnostic & Monitors', icon: HeartPulse },
    { id: 'mobility-care', label: 'Mobility & Assisted Care', icon: Stethoscope },
  ];

  // Filter products based on selected tab
  const displayedProducts = useMemo(() => {
    if (activeTab === 'all') {
      return PRODUCTS.slice(0, 8);
    }
    const filtered = PRODUCTS.filter(p => p.categoryId === activeTab);
    return filtered.length > 0 ? filtered.slice(0, 8) : PRODUCTS.slice(0, 8);
  }, [activeTab]);

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

  const reviews = [
    {
      name: "Dr. Arvind Sharma",
      role: "Director of Critical Care, City Hospital",
      location: "Noida Sector 62",
      rating: 5,
      tag: "Google Verified",
      initials: "DA",
      color: "bg-sky-100 text-[#006591]",
      text: "During an acute hospital ICU surge, Phexal dispatched two high-end mechanical ventilators and motorized ICU beds to our facility in under 45 minutes. Their biomedical engineer calibrated everything at bedside seamlessly. Exceptional clinical support."
    },
    {
      name: "Meenakshi Sundaram",
      role: "Home ICU Caregiver",
      location: "Indirapuram, Ghaziabad",
      rating: 5,
      tag: "Google Verified",
      initials: "MS",
      color: "bg-emerald-100 text-emerald-700",
      text: "Needed an urgent 10L medical oxygen concentrator and BiPAP unit late at night for my father. The Phexal team delivered from their Nyay Khand hub in less than 40 minutes. Tested purity and setup with full patience. Lifesaving continuous service."
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Procurement Head, Gulf Med Supplies",
      location: "Dubai, UAE",
      rating: 5,
      tag: "Export Client",
      initials: "TM",
      color: "bg-purple-100 text-purple-700",
      text: "Procured a full container shipment of multi-parameter patient monitors and electric ICU beds. CE certificates, technical dossiers, and CIF Dubai sea freight clearance were handled with complete transparency. Highly dependable exporter."
    }
  ];

  const faqs = [
    {
      q: "What types of medical equipment does Phexal Healthcare supply?",
      a: "We manufacture, export, and supply hospital-grade medical equipment including 5-function motorized ICU beds, mechanical ICU ventilators, oxygen concentrators (10L & 5L), 12-channel ECG machines, biphasic defibrillators, multi-parameter patient monitors, surgical OT tables, shadowless OT lights, and emergency suction units."
    },
    {
      q: "How quickly can Phexal deliver an emergency ICU setup in Delhi NCR?",
      a: "We guarantee 120-minute emergency delivery and bedside setup across Delhi, Noida, Greater Noida, Ghaziabad, and Gurgaon, 24/7. Our biomedical engineers accompany the equipment to perform complete calibration and clinical briefing."
    },
    {
      q: "Is Phexal Healthcare registered and licensed with CDSCO?",
      a: "Yes, Phexal Healthcare holds statutory Form MD-42 registration (License No. UP/GHA/MD42/2026/000142) under the Medical Devices Rules, 2017 for Class A, B, C, and D medical equipment distribution across India."
    },
    {
      q: "How can I request a formal wholesale quotation or proforma invoice?",
      a: "You can contact us directly by phone at +91 80700 08050, connect with our sales team via WhatsApp, or submit an inquiry using our online RFQ form. Our team issues formal GST proforma invoices within 15 minutes."
    }
  ];

  const handleQuickRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Phexal Healthcare, I would like an urgent quotation for ${rfqCategory} (${rfqType}). Contact details: ${rfqContact || 'Requested via Website'}.`;
    window.open(`https://wa.me/918070008050?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-sky-500 selection:text-white">
      
            {/* ── 1. NAREENA-STYLE LUXURY HERO BANNER WITH WAVE & CIRCULAR QUICK-TRAY ── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#20a4f5] via-[#0288d1] to-[#01579b] text-white pt-2 sm:pt-4" id="nareena-hero-section">
        {/* Medical Hexagon Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20" 
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', 
            backgroundSize: '36px 36px' 
          }} 
        />

        {/* Ambient Glowing Highlights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Slider Stage */}
        <div className="relative w-full min-h-[500px] sm:min-h-[520px] lg:min-h-[540px]">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentHeroSlide;
            return (
              <div 
                key={idx}
                className={`hero-slide absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center ${
                  isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8 lg:py-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Text Column */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold backdrop-blur-md shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                        <span className="px-1.5 py-0.5 rounded bg-slate-900/70 text-sky-200 text-[10px] font-black uppercase tracking-wider">Medroof™</span>
                        <span>{slide.badge}</span>
                      </div>

                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.12] tracking-tight drop-shadow-xs font-heading">
                        {slide.title}
                      </h1>

                      <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed max-w-xl">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-wrap items-center gap-3.5 pt-2">
                        <Link 
                          to={slide.exploreUrl}
                          className="px-7 py-3.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          <span>Explore More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link 
                          to={slide.enquiryUrl}
                          className="px-7 py-3.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          <Send className="w-4 h-4 text-sky-400" />
                          <span>Enquiry Now</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Showcase Product Image - Ultra-Premium 3D Stage */}
                    <div className="lg:col-span-5 flex items-center justify-center relative">
                      <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[460px] h-[330px] sm:h-[370px] lg:h-[400px] flex items-center justify-center group">
                        
                        {/* 3D Illuminated Aura Glow */}
                        <div className="absolute inset-4 bg-gradient-to-tr from-cyan-400/35 via-white/50 to-sky-300/30 rounded-full blur-3xl transform scale-95 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

                        {/* High-Tech Ground Pedestal Base */}
                        <div className="absolute bottom-4 inset-x-8 h-12 bg-white/15 border border-white/30 rounded-[100%] backdrop-blur-xs pointer-events-none shadow-[0_15px_30px_rgba(0,0,0,0.2)]" />
                        <div className="absolute bottom-6 inset-x-14 h-8 bg-sky-300/20 rounded-[100%] blur-sm pointer-events-none" />

                        {/* Top-Left Floating Certification Badge */}
                        <div className="absolute top-1 left-2 sm:top-2 sm:left-0 z-20 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/80 text-slate-800 text-[11px] font-black shadow-xl backdrop-blur-md flex items-center gap-1.5 transition-transform duration-300 hover:scale-105">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[#006591]">CDSCO MD-42</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-700 font-bold">ISO 13485</span>
                        </div>

                        {/* Foreground Product Image */}
                        <div className="relative z-10 w-full h-full p-2 sm:p-4 flex items-center justify-center">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="max-h-[290px] sm:max-h-[330px] lg:max-h-[355px] max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.30)] transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1.5"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/images/products/phx-bed-paramount.png'; }}
                          />
                        </div>

                        {/* Bottom-Right Luxury Medroof Tag Pill */}
                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-0 z-20 px-4 py-2 rounded-2xl bg-slate-950/90 border border-sky-400/40 text-white text-xs font-black shadow-2xl backdrop-blur-md flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                          <div className="w-5 h-5 rounded-lg bg-sky-500/20 border border-sky-400/50 flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-sky-300" />
                          </div>
                          <span className="tracking-wide text-sky-100 font-extrabold">{slide.tag}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

          {/* 5 Dots Indicator */}
          <div className="absolute bottom-5 sm:bottom-6 right-6 sm:right-12 lg:right-20 z-20 flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentHeroSlide(idx)}
                className={`hero-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentHeroSlide ? 'bg-white scale-125 shadow-md' : 'bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CIRCULAR QUICK-EQUIPMENT TRAY (GREEN DOTTED BORDER) ── */}
      <section className="relative w-full bg-white py-6 sm:py-8 border-b border-slate-100 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center">
            
            {/* Left Carousel Arrows */}
            <div className="hidden sm:flex items-center gap-2 mr-3 sm:mr-5 shrink-0">
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center shadow-xs hover:shadow-sm transition-all"
                title="Previous Equipment"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollRail(1)}
                className="w-10 h-10 rounded-full bg-[#0a2540] hover:bg-[#006591] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                title="Next Equipment"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Horizontally Scrollable Rail */}
            <div ref={catRailRef} className="flex-1 flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1">
              {circularCategories.map((c, idx) => (
                <div 
                  key={idx}
                  className="phx-cat-slide-item shrink-0 flex flex-col items-center cursor-pointer group px-2 sm:px-3 text-center"
                  onClick={() => setCurrentHeroSlide(c.slideIndex)}
                >
                  <div 
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg bg-white"
                    style={{ border: '2.5px dotted #16a34a', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}
                  >
                    <div className="w-full h-full rounded-full bg-slate-50/70 group-hover:bg-sky-50/60 p-3 sm:p-4 flex items-center justify-center transition-colors">
                      <Bed className="w-8 h-8 text-slate-800" />
                    </div>
                  </div>
                  <span className="mt-2.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#006591] transition-colors leading-tight max-w-[120px] sm:max-w-[140px] block">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ── 2. TRUSTED BY HOSPITAL NETWORKS & CLIENT MARQUEE ── */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="shrink-0 text-center md:text-left">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#006591] block">
                Empaneled Healthcare Networks
              </span>
              <span className="text-xs font-medium text-slate-500">
                Supplying 500+ Hospitals, Clinics &amp; Defense Medical Facilities
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-8 opacity-85 grayscale hover:grayscale-0 transition-all duration-300">
              {partnerLogos.map((partner, idx) => (
                <div key={idx} className="flex items-center gap-1.5" title={partner.name}>
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-7 w-auto max-w-[90px] object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.text-fallback')) {
                        const fallbackSpan = document.createElement('span');
                        fallbackSpan.className = 'text-fallback text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200';
                        fallbackSpan.innerText = partner.fallback;
                        parent.appendChild(fallbackSpan);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE PRODUCT & CATEGORY MATRIX ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#006591] mb-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Product Specializations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
                Explore Hospital Equipment by Category
              </h2>
            </div>
            
            <Link
              to="/catalog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006591] hover:text-[#004e70] transition-colors self-start md:self-auto"
            >
              <span>View All Catalog Items ({PRODUCTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-[#006591] text-white shadow-md shadow-sky-900/20 scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#006591]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedProducts.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300"
              >
                <div>
                  <Link to={`/product/${prod.id}`} className="block">
                    <div className="relative w-full aspect-[4/3] rounded-xl bg-slate-50 overflow-hidden mb-3.5 flex items-center justify-center p-3 border border-slate-100 group-hover:border-sky-200 transition-colors">
                      <img 
                        src={prod.imageUrl || '/images/banner_products.jpg'} 
                        alt={prod.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/images/banner_products.jpg'; }}
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-sky-800 border border-sky-200/80 shadow-xs">
                        {prod.categoryName.replace(/^\d+\.\s*/, '')}
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Ready Stock</span>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#006591] transition-colors leading-snug line-clamp-2 mb-1.5">
                      {prod.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {prod.shortDescription}
                  </p>

                  {prod.specs && prod.specs.length > 0 && (
                    <div className="space-y-1 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {prod.specs.slice(0, 2).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between text-[10px] text-slate-600">
                          <span className="text-slate-400 font-medium">{spec.label}:</span>
                          <span className="font-semibold text-slate-800 truncate max-w-[120px]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    to={`/product/${prod.id}`}
                    className="flex-1 py-2 px-2.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-xs text-center transition-colors border border-sky-200/60"
                  >
                    View Specs
                  </Link>
                  <a
                    href={`https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare%2C%20please%20send%20a%20quotation%20for%20${encodeURIComponent(prod.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. POLISHED ABOUT US & ENGINEERING RIGOR SECTION ── */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none" style={{ backgroundImage: "url('/images/hero_biomedical_command.jpg')" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: About Intro & Interactive Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Building2 className="w-4 h-4" />
                  <span>About Phexal Healthcare</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight font-heading">
                  India's Trusted Medical Device Manufacturer &amp; ICU Infrastructure Partner
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  Headquartered in Indirapuram, Ghaziabad, Phexal Healthcare operates as a CDSCO Form MD-42 licensed medical equipment manufacturer, international exporter, and emergency ICU supplier. We bridge the gap between world-class engineering and affordable clinical healthcare.
                </p>
              </div>

              {/* 3-Pillar Interactive Accordion */}
              <div className="space-y-3">
                {[
                  {
                    id: 'calibration' as const,
                    title: '1. Central Biomedical Calibration Lab',
                    subtitle: '100% Pre-Dispatch Metrology Verification',
                    tag: '100% Tested',
                    desc: 'Every ICU bed, ventilator, and monitor is validated using Fluke biomedical analyzers and electrical safety analyzers prior to hospital dispatch.',
                    icon: Cpu
                  },
                  {
                    id: 'pricing' as const,
                    title: '2. Direct OEM Manufacturer Pricing',
                    subtitle: 'Zero Middleman Markup • GeM Tender Ready',
                    tag: 'Wholesale Rates',
                    desc: 'Institutional wholesale rates with transparent GST billing, GeM tender readiness, and comprehensive CDSCO compliance.',
                    icon: Award
                  },
                  {
                    id: 'emergency' as const,
                    title: '3. 120-Minute Emergency NCR Dispatch',
                    subtitle: '24/7 Rapid Bedside Response Team',
                    tag: '24/7 Rapid SLA',
                    desc: 'Fully equipped mobile response fleet delivering critical care equipment to Delhi, Noida, Gurgaon, and Ghaziabad bedside within 2 hours.',
                    icon: Truck
                  }
                ].map((pillar) => {
                  const Icon = pillar.icon;
                  const isSelected = activeAboutPillar === pillar.id;
                  return (
                    <div
                      key={pillar.id}
                      onClick={() => setActiveAboutPillar(pillar.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-800 border-sky-400 shadow-md shadow-sky-950/50'
                          : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${isSelected ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-white">{pillar.title}</h4>
                            <span className="text-[11px] text-slate-400">{pillar.subtitle}</span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${isSelected ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-700 text-slate-400'}`}>
                          {pillar.tag}
                        </span>
                      </div>
                      {isSelected && (
                        <p className="text-xs text-slate-300 mt-2.5 pl-11 leading-relaxed">
                          {pillar.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#006591] hover:bg-[#00547a] text-white font-bold text-xs transition-colors shadow-md"
                >
                  <span>Explore Full Company Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>View CDSCO &amp; ISO Certifications</span>
                </Link>
              </div>
            </div>

            {/* Right: Certified Infrastructure Spotlight */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800/80">
                <div className="aspect-[16/11] relative">
                  <img
                    src="/images/banner_quality.jpg"
                    alt="Phexal Central Calibration & Quality Hub"
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/banner_hero_icu.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500 text-white text-[11px] font-bold shadow-sm">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      <span>Statutory Form MD-42 Licensed</span>
                    </div>
                    <h3 className="text-lg font-black text-white font-heading">
                      Central Biomedical Metrology Hub — Indirapuram
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Full traceable calibration certificates issued for all Class A, B, C &amp; D devices before clinical delivery across 40+ countries and 500+ hospital networks.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-slate-700 bg-slate-950/95 py-3.5 text-center">
                  <div>
                    <div className="text-base sm:text-lg font-black text-sky-400">500+</div>
                    <div className="text-[10px] text-slate-400 font-medium">Hospitals Served</div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-emerald-400">10,000+</div>
                    <div className="text-[10px] text-slate-400 font-medium">Devices Deployed</div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-amber-400">40+</div>
                    <div className="text-[10px] text-slate-400 font-medium">Export Countries</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. SINGLE-ROW STREAMLINED KEY STATS BAR ── */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#006591] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-900">500+ Chains</div>
                <div className="text-[11px] text-slate-500">Hospitals Empaneled</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-900">120 Minutes</div>
                <div className="text-[11px] text-slate-500">Emergency SLA in NCR</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-900">Form MD-42</div>
                <div className="text-[11px] text-slate-500">CDSCO Statutory License</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-900">100% Tested</div>
                <div className="text-[11px] text-slate-500">Fluke Calibrated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VERIFIED REVIEWS & CLINICAL TESTIMONIALS SECTION ── */}
      <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Google 4.9 ★ Rated Healthcare Provider</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
                Verified Feedback from Doctors &amp; Hospital Directors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Read authentic reviews from intensive care specialists, hospital procurement heads, and families across Delhi NCR &amp; global export markets.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs shrink-0">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="text-sm font-black text-slate-900 leading-none">4.9 / 5.0</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">52+ Verified Reviews</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{rev.tag}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${rev.color} font-bold text-sm flex items-center justify-center shrink-0`}>
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                    <p className="text-[10px] text-slate-500">{rev.role} ({rev.location})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. RAPID 30-SECOND RFQ / INSTANT QUOTATION CONFIGURATOR ── */}
      <section className="py-12 bg-gradient-to-r from-sky-900 via-[#006591] to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200 block">
                Instant Hospital Procurement
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                Request a Formal Quotation in 30 Seconds
              </h2>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Direct wholesale pricing with GST invoice &amp; calibration certificates dispatched in 15 minutes.
              </p>
              <div className="flex items-center gap-4 text-xs text-sky-200 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>GeM Tender Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>CDSCO Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleQuickRfqSubmit} className="bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-sky-200 block mb-1">Equipment Category</label>
                    <select
                      value={rfqCategory}
                      onChange={(e) => setRfqCategory(e.target.value)}
                      className="w-full bg-slate-900/90 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-400"
                    >
                      <option value="Hospital Beds & Furniture">Hospital Beds &amp; Furniture</option>
                      <option value="Critical Care & ICU Ventilators">Critical Care &amp; ICU Ventilators</option>
                      <option value="Oxygen Concentrators (10L / 5L)">Oxygen Concentrators (10L / 5L)</option>
                      <option value="ECG & Patient Monitors">ECG &amp; Patient Monitors</option>
                      <option value="Surgical & OT Equipment">Surgical &amp; OT Equipment</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-sky-200 block mb-1">Requirement Type</label>
                    <select
                      value={rfqType}
                      onChange={(e) => setRfqType(e.target.value)}
                      className="w-full bg-slate-900/90 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-400"
                    >
                      <option value="Hospital Tender / Bulk Order">Hospital Tender / Bulk Order</option>
                      <option value="Emergency Patient ICU Setup">Emergency Patient ICU Setup</option>
                      <option value="Equipment Rental Service">Equipment Rental Service</option>
                      <option value="Dealer / Distributor Inquiry">Dealer / Distributor Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter WhatsApp / Mobile Number or Hospital Name"
                    value={rfqContact}
                    onChange={(e) => setRfqContact(e.target.value)}
                    required
                    className="flex-1 bg-slate-900/90 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-lg shrink-0 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Instant Quote</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. COMPACT FAQ ACCORDION ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006591] mb-1 block">Quick Clarifications</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight font-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer transition-all hover:border-sky-300"
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#006591] shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </div>
                {openFaqIndex === idx && (
                  <p className="text-xs text-slate-600 leading-relaxed pl-6 mt-2.5 pt-2.5 border-t border-slate-200/60">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
