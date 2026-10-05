import React from 'react';
import { Link } from 'react-router-dom';
import { 
 ShieldCheck, 
 PhoneCall
} from 'lucide-react';
import { CATEGORIES } from '../data/catalog';

export const Footer: React.FC = () => {
 return (
 <footer className="bg-slate-900 border-t border-slate-800 text-white mt-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 
 {/* Col 1: Brand Info */}
 <div className="space-y-3">
 <div className="flex items-center gap-2">
 <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-white">
 P
 </div>
 <span className="font-extrabold text-base tracking-tight uppercase">
 PHEXAL HEALTHCARE
 </span>
 </div>
 <p className="text-xs text-slate-400 leading-relaxed">
 Global exporter & institutional distributor of respiratory therapy, critical monitoring devices, and clinical diagnostic systems.
 </p>
 
 <Link
 to="/quality"
 className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold hover:underline text-left"
 >
 <ShieldCheck className="w-4 h-4" />
 <span>ISO 13485:2016 & CDSCO Form MD-42 Registered</span>
 </Link>
 </div>

 {/* Col 2: Category Directory */}
 <div className="space-y-2">
 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
 Core Disciplines
 </h4>
 <ul className="space-y-1.5 text-xs text-slate-400 font-medium">
 {CATEGORIES.map(cat => (
 <li key={cat.id}>
 <Link
 to={`/catalog?category=${cat.id}`}
 className="hover:text-brand-400 transition-colors text-left"
 >
 {cat.name}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Col 3: Quality & Statutory Compliance Links */}
 <div className="space-y-2">
 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
 Quality & Compliance
 </h4>
 <ul className="space-y-1.5 text-xs text-slate-400">
 <li>
 <Link
 to="/quality"
 className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
 >
 <span>• CDSCO Form MD-42 Certificate</span>
 </Link>
 </li>
 <li>
 <Link
 to="/quality#accreditations-section"
 className="hover:text-emerald-400 transition-colors text-left"
 >
 • ISO 13485:2016 & ISO 9001:2015 Accreditations
 </Link>
 </li>
 <li>
 <Link
 to="/quality#quality-framework-section"
 className="hover:text-emerald-400 transition-colors text-left"
 >
 • 6-Pillar Cold-Chain Framework
 </Link>
 </li>
 <li>
 <Link
 to="/quality#verification-widget-section"
 className="hover:text-emerald-400 transition-colors text-left"
 >
 • Real-Time Certificate Verification
 </Link>
 </li>
 <li>
 <Link
 to="/quality#compliance-dossiers-section"
 className="hover:text-emerald-400 transition-colors text-left"
 >
 • Download Hospital Tender Packs (62p)
 </Link>
 </li>
 </ul>
 </div>

 {/* Col 4: Quick Links & Contact */}
 <div className="space-y-3">
 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
 Headquarters & Dispatch
 </h4>
 <div className="text-xs text-slate-400 space-y-1.5">
 <p>762 Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, Delhi NCR, India</p>
 <p>Tel: <a href="tel:+918070008050" className="text-white hover:underline">+91 80700 08050</a></p>
 <p>Email: <span className="text-white">Phexalhealthcare@gmail.com</span></p>
 </div>
 <div className="pt-1 space-y-2">
 <a
 href="https://wa.me/918070008050"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
 >
 <PhoneCall className="w-3.5 h-3.5" />
 <span> Procurement Hotline</span>
 </a>
 <div className="flex gap-2 text-xs">
 <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
 <span className="text-slate-600">•</span>
 <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
 <span className="text-slate-600">•</span>
 <Link to="/catalog" className="text-slate-400 hover:text-white transition-colors">Catalog</Link>
 </div>
 </div>
 </div>

 </div>

 <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
 <p>© {new Date().getFullYear()} Phexal Healthcare. All rights reserved.</p>
 <p>CDSCO Form MD-42 Reg. UP/GHA/MD42/2026/000142 | CDSCO Licensed & CE Compliant.</p>
 </div>
 </div>
 </footer>
 );
};
