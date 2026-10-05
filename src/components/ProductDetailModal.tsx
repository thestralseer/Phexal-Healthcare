import React, { useState, useEffect } from 'react';
import { 
 X, 
 Check, 
 ShieldCheck, 
 Truck, 
 Award, 
 FileText, 
 ShoppingCart, 
 PhoneCall, 
 Building2, 
 Star, 
 AlertCircle,
 HelpCircle,
 Plus,
 Minus
} from 'lucide-react';
import { Product } from '../data/catalog';

interface ProductDetailModalProps {
 product: Product | null;
 onClose: () => void;
 onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
 product,
 onClose,
 onAddToCart,
}) => {
 const [selectedImage, setSelectedImage] = useState<string>('');
 const [quantity, setQuantity] = useState(1);
 const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'instructions'>('specs');
 const [added, setAdded] = useState(false);

 useEffect(() => {
 if (product) {
 setSelectedImage(product.imageUrl);
 setQuantity(1);
 setActiveTab('specs');
 setAdded(false);
 // Lock background scrolling
 document.body.style.overflow = 'hidden';
 } else {
 document.body.style.overflow = '';
 }

 const handleKeyDown = (e: KeyboardEvent) => {
 if (e.key === 'Escape') onClose();
 };
 window.addEventListener('keydown', handleKeyDown);

 return () => {
 document.body.style.overflow = '';
 window.removeEventListener('keydown', handleKeyDown);
 };
 }, [product, onClose]);

 if (!product) return null;

 const handleAdd = () => {
 onAddToCart(product, quantity);
 setAdded(true);
 setTimeout(() => setAdded(false), 1500);
 };

 const getWaUrl = () => {
 const text = encodeURIComponent(
 `Hello Phexal Healthcare, I would like to request a formal wholesale B2B quotation for:
Product: ${product.name}
SKU: ${product.sku}
Quantity: ${quantity} units
Delivery Lead: ${product.leadTime}`
 );
 return `https://wa.me/918070008050?text=${text}`;
 };

 return (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
 {/* Backdrop */}
 <div 
 className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
 onClick={onClose}
 />

 {/* Modal Dialog Card */}
 <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] z-10 animate-in fade-in zoom-in-95 duration-200">
 
 {/* Top Header Strip */}
 <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
 <div className="flex items-center gap-2">
 <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg">
 {product.categoryName}
 </span>
 <span className="text-xs font-medium text-slate-400">/</span>
 <span className="text-xs font-semibold text-slate-600">
 {product.subCategoryName}
 </span>
 </div>

 <button
 onClick={onClose}
 className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors"
 aria-label="Close modal"
 >
 <X className="w-5 h-5" />
 </button>
 </div>

 {/* Scrollable Content Body */}
 <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
 {/* Main Product Hero Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
 
 {/* Left: Images */}
 <div className="space-y-4">
 <div className="relative aspect-4/3 bg-white rounded-2xl p-6 flex items-center justify-center overflow-hidden border border-slate-200">
 <img
 src={selectedImage || product.imageUrl}
 alt={product.name}
 className="max-h-full max-w-full object-contain transition-all"
 />
 <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
 {product.badges.map((b, i) => (
 <span
 key={i}
 className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-brand-600 text-white shadow-xs"
 >
 {b}
 </span>
 ))}
 </div>
 </div>

 {/* Thumbnails */}
 {product.galleryImages.length > 1 && (
 <div className="flex gap-2">
 {product.galleryImages.map((img, idx) => (
 <button
 key={idx}
 onClick={() => setSelectedImage(img)}
 className={`w-16 h-16 rounded-xl border p-1 bg-white overflow-hidden transition-all ${
 selectedImage === img
 ? 'border-brand-600 ring-2 ring-brand-500/20'
 : 'border-slate-200 opacity-70 hover:opacity-100'
 }`}
 >
 <img src={img} alt="Thumb" className="w-full h-full object-contain" />
 </button>
 ))}
 </div>
 )}

 {/* Trust & Guarantee Chips */}
 <div className="grid grid-cols-3 gap-2 pt-2">
 <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
 <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
 <span className="text-[10px] font-bold text-slate-800 block">Verified OEM</span>
 <span className="text-[9px] text-slate-500">Hospital Grade</span>
 </div>
 <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
 <Truck className="w-4 h-4 text-sky-600 mx-auto mb-1" />
 <span className="text-[10px] font-bold text-slate-800 block">Dispatch</span>
 <span className="text-[9px] text-slate-500">{product.leadTime}</span>
 </div>
 <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
 <Award className="w-4 h-4 text-amber-600 mx-auto mb-1" />
 <span className="text-[10px] font-bold text-slate-800 block">Compliant</span>
 <span className="text-[9px] text-slate-500">{product.certifications[0]}</span>
 </div>
 </div>
 </div>

 {/* Right: Details & Buying Actions */}
 <div className="space-y-5">
 <div>
 <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
 <span className="font-mono text-slate-400">SKU: {product.sku}</span>
 <div className="flex items-center gap-1 text-amber-600 font-bold">
 <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
 <span>{product.rating}</span>
 <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
 </div>
 </div>

 <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
 {product.name}
 </h2>

 <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
 <Building2 className="w-3.5 h-3.5 text-slate-400" />
 <span>Manufactured by <strong className="text-slate-700">{product.manufacturer}</strong></span>
 </div>
 </div>

 {/* B2B Quotation Desk Banner */}
 <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-phexal-navy text-white">
 <div className="flex items-center justify-between">
 <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
 Direct Wholesale & Institutional Desk
 </div>
 <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-slate-200">
 B2B & Government Supplies
 </span>
 </div>
 <div className="mt-2">
 <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
 Wholesale Pricing on Inquiry
 </span>
 </div>
 <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
 Bulk institutional rates, OEM volume tiers, and custom GST proforma are dispatched within 15 minutes via our dedicated WhatsApp desk.
 </p>
 </div>

 {/* Description */}
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
 {product.description}
 </p>

 {/* Certifications Badge Row */}
 <div className="flex flex-wrap items-center gap-1.5 pt-1">
 <span className="text-[11px] font-bold text-slate-500 mr-1">Standards:</span>
 {product.certifications.map((cert, i) => (
 <span
 key={i}
 className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200"
 >
 ✓ {cert}
 </span>
 ))}
 </div>

 {/* Quantity & CTA Actions */}
 <div className="pt-3 border-t border-slate-100 space-y-3">
 <div className="flex items-center gap-3">
 <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
 <button
 onClick={() => setQuantity(Math.max(1, quantity - 1))}
 className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs transition-all"
 >
 <Minus className="w-3.5 h-3.5" />
 </button>
 <span className="w-10 text-center font-bold text-sm text-slate-900">
 {quantity}
 </span>
 <button
 onClick={() => setQuantity(quantity + 1)}
 className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs transition-all"
 >
 <Plus className="w-3.5 h-3.5" />
 </button>
 </div>

 <button
 onClick={handleAdd}
 className={`flex-1 py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
 added
 ? 'bg-emerald-600 text-white'
 : 'bg-brand-600 hover:bg-brand-700 text-white hover:shadow-lg'
 }`}
 >
 {added ? (
 <>
 <Check className="w-4 h-4" />
 <span>Added to Cart ({quantity})</span>
 </>
 ) : (
 <>
 <ShoppingCart className="w-4 h-4" />
 <span>Add {quantity} to Cart / Quote</span>
 </>
 )}
 </button>
 </div>

 <a
 href={getWaUrl()}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full py-2.5 px-4 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
 >
 <PhoneCall className="w-4 h-4 text-emerald-600" />
 <span>Request Official RFQ Proforma on WhatsApp</span>
 </a>
 </div>

 </div>
 </div>

 {/* ── Technical Tabs Section ── */}
 <div className="pt-6 border-t border-slate-200 space-y-4">
 <div className="flex border-b border-slate-200 gap-4">
 <button
 onClick={() => setActiveTab('specs')}
 className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
 activeTab === 'specs'
 ? 'border-brand-600 text-brand-700'
 : 'border-transparent text-slate-500 hover:text-slate-800'
 }`}
 >
 <FileText className="w-4 h-4" />
 <span>Technical Specifications</span>
 </button>

 <button
 onClick={() => setActiveTab('features')}
 className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
 activeTab === 'features'
 ? 'border-brand-600 text-brand-700'
 : 'border-transparent text-slate-500 hover:text-slate-800'
 }`}
 >
 <Award className="w-4 h-4" />
 <span>Key Clinical Features</span>
 </button>

 <button
 onClick={() => setActiveTab('instructions')}
 className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
 activeTab === 'instructions'
 ? 'border-brand-600 text-brand-700'
 : 'border-transparent text-slate-500 hover:text-slate-800'
 }`}
 >
 <HelpCircle className="w-4 h-4" />
 <span>Clinical Instructions & Safety</span>
 </button>
 </div>

 {/* Tab 1: Specs Table */}
 {activeTab === 'specs' && (
 <div className="overflow-hidden rounded-2xl border border-slate-200">
 <table className="w-full text-left text-xs">
 <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider font-bold border-b border-slate-200 text-[10px]">
 <tr>
 <th className="py-3 px-4 w-1/3">Parameter</th>
 <th className="py-3 px-4">Standard / Value</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100 font-medium">
 {product.specs.map((s, i) => (
 <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
 <td className="py-3 px-4 font-bold text-slate-700">{s.label}</td>
 <td className="py-3 px-4 text-slate-900">{s.value}</td>
 </tr>
 ))}
 <tr>
 <td className="py-3 px-4 font-bold text-slate-700">Manufacturer & Origin</td>
 <td className="py-3 px-4 text-slate-900">{product.manufacturer}</td>
 </tr>
 <tr>
 <td className="py-3 px-4 font-bold text-slate-700">Stock Availability</td>
 <td className="py-3 px-4 text-emerald-700 font-bold">
 {product.inStock ? `Ready Stock (${product.stockCount} units)` : 'Made to Order'}
 </td>
 </tr>

 </tbody>
 </table>
 </div>
 )}

 {/* Tab 2: Key Features */}
 {activeTab === 'features' && (
 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2.5">
 {product.keyFeatures.map((feat, idx) => (
 <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
 <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
 <span className="leading-relaxed font-medium">{feat}</span>
 </div>
 ))}
 </div>
 )}

 {/* Tab 3: Usage Instructions & Guidelines */}
 {activeTab === 'instructions' && (
 <div className="space-y-4">
 <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-2">
 <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
 <Check className="w-4 h-4 text-sky-600" />
 <span>Operating Protocols</span>
 </h4>
 <ol className="list-decimal list-inside space-y-1.5 text-xs text-sky-950 font-medium">
 {product.usageInstructions.map((step, idx) => (
 <li key={idx} className="leading-relaxed">{step}</li>
 ))}
 </ol>
 </div>

 <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
 <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
 <AlertCircle className="w-4 h-4 text-amber-600" />
 <span>Safety & Decontamination Cautions</span>
 </h4>
 <ul className="list-disc list-inside space-y-1.5 text-xs text-amber-950 font-medium">
 {product.safetyGuidelines.map((guideline, idx) => (
 <li key={idx} className="leading-relaxed">{guideline}</li>
 ))}
 </ul>
 </div>
 </div>
 )}
 </div>
 </div>

 </div>
 </div>
 );
};
