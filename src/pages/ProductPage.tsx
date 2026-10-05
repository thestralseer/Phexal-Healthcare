import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate, useOutletContext } from 'react-router-dom';
import { 
  PRODUCTS, 
  CATEGORIES,
  Product 
} from '../data/catalog';
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
  Minus,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Clock,
  Package,
  Share2,
  Heart,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Zap,
  Printer,
  Download
} from 'lucide-react';

interface ProductPageContext {
  addToCart: (product: Product, quantity?: number) => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const context = useOutletContext<ProductPageContext>();

  const product = useMemo(() => PRODUCTS.find(p => p.id === productId), [productId]);
  
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'instructions'>('specs');
  const [added, setAdded] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [inquiryHospital, setInquiryHospital] = useState('');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCity, setInquiryCity] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Related products from same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 6);
  }, [product]);

  // Products from same subcategory
  const similarProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter(p => p.subCategoryId === product.subCategoryId && p.id !== product.id).slice(0, 4);
  }, [product]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imageUrl);
      setQuantity(1);
      setActiveTab('specs');
      setAdded(false);
      setInquirySubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = `${product.name} | Phexal Healthcare B2B Medical Equipment`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
          <Package className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Product Not Found</h1>
        <p className="text-sm text-slate-500 mb-6">The product you're looking for doesn't exist in our catalog.</p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Browse All Products
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    if (context?.addToCart) {
      context.addToCart(product, quantity);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2200);
    }
  };

  const handlePrintDatasheet = () => {
    window.print();
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryPhone.trim()) return;
    setInquirySubmitted(true);
  };

  const getWaUrl = () => {
    const text = encodeURIComponent(
      `Hello Phexal Healthcare, I would like to request a formal wholesale B2B quotation for:\nProduct: ${product.name}\nSKU: ${product.sku}\nQuantity: ${quantity} units\nDelivery Lead: ${product.leadTime}`
    );
    return `https://wa.me/918070008050?text=${text}`;
  };

  const category = CATEGORIES.find(c => c.id === product.categoryId);

  return (
    <>
      {/* ═══════ BREADCRUMB STRIP ═══════ */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link to="/catalog" className="hover:text-brand-600 transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link 
              to={`/catalog?category=${product.categoryId}`} 
              className="hover:text-brand-600 transition-colors"
            >
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link 
              to={`/catalog?category=${product.categoryId}&subcategory=${product.subCategoryId}`} 
              className="hover:text-brand-600 transition-colors"
            >
              {product.subCategoryName}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="font-bold text-slate-800 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>


      {/* ═══════ MAIN PRODUCT SECTION ═══════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT: PRODUCT IMAGES ── */}
          <div className="space-y-4 lg:sticky lg:top-28">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-3xl p-8 flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={selectedImage || product.imageUrl}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
              {/* Floating badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                {product.badges.map((b, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-brand-600 text-white shadow-md"
                  >
                    {b}
                  </span>
                ))}
              </div>
              {/* Stock indicator */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md ${
                  product.inStock 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-amber-500 text-white'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-white animate-pulse' : 'bg-amber-200'}`} />
                  {product.inStock ? `In Stock (${product.stockCount})` : 'Made to Order'}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`shrink-0 w-20 h-20 rounded-xl border-2 p-1.5 bg-white overflow-hidden transition-all ${
                      selectedImage === img
                        ? 'border-brand-600 ring-2 ring-brand-500/20 shadow-md'
                        : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust & Guarantee Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center phx-card-hover">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
                <span className="text-[11px] font-bold text-slate-800 block">Verified OEM</span>
                <span className="text-[10px] text-slate-500">Hospital Grade</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center phx-card-hover">
                <Truck className="w-5 h-5 text-sky-600 mx-auto mb-1.5" />
                <span className="text-[11px] font-bold text-slate-800 block">Delivery</span>
                <span className="text-[10px] text-slate-500">{product.leadTime}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center phx-card-hover">
                <Award className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
                <span className="text-[11px] font-bold text-slate-800 block">Certified</span>
                <span className="text-[10px] text-slate-500">{product.certifications[0]}</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: PRODUCT DETAILS & ACTIONS ── */}
          <div className="space-y-6">
            {/* Category / SKU */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Link 
                  to={`/catalog?category=${product.categoryId}`}
                  className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg hover:bg-brand-100 transition-colors"
                >
                  {product.categoryName}
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <Link 
                  to={`/catalog?category=${product.categoryId}&subcategory=${product.subCategoryId}`}
                  className="text-xs font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                >
                  {product.subCategoryName}
                </Link>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-extrabold text-amber-700">{product.rating.toFixed(1)}</span>
                  <span className="text-xs text-slate-500">({product.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>by <strong className="text-slate-700">{product.manufacturer}</strong></span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">SKU: {product.sku}</span>
              </div>
            </div>

            {/* B2B Pricing Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-phexal-navy text-white phx-shimmer">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 phx-live-dot" />
                  Direct Wholesale & Institutional Desk
                </div>
                <span className="text-[10px] font-bold bg-white/10 px-2.5 py-0.5 rounded-full text-slate-200">
                  B2B & Government
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight block">
                Wholesale Pricing on Inquiry
              </span>
              <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed max-w-lg">
                Bulk institutional rates, OEM volume tiers, and custom GST proforma dispatched within 15 minutes via WhatsApp desk.
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Product Description</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Standards:</span>
              {product.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200"
                >
                  ✓ {cert}
                </span>
              ))}
            </div>

            {/* Quantity & CTA */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-base text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-600 hover:bg-brand-700 text-white hover:shadow-lg'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Quote ({quantity})</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add {quantity} to Quote Cart</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Official Quote on WhatsApp</span>
              </a>

              <a
                href="tel:+918070008050"
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-600" />
                <span>Call B2B Desk: +91 8070 008 050</span>
              </a>

              {/* Utility Row: Share & Datasheet */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleShare}
                  className="py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  title="Copy direct product link"
                >
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{copiedShare ? 'Link Copied!' : 'Share Product'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintDatasheet}
                  className="py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  title="Print / Save Technical Specification Sheet"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Print Datasheet</span>
                </button>
              </div>

              {/* Instant B2B / Hospital Quick Inquiry Box */}
              <div className="mt-4 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/70 to-slate-50 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-brand-600" />
                    Instant Hospital / Institutional RFQ
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    15 Min Response
                  </span>
                </div>

                {!inquirySubmitted ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Hospital / Org *"
                        required
                        value={inquiryHospital}
                        onChange={(e) => setInquiryHospital(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      />
                      <input
                        type="text"
                        placeholder="Contact Person *"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        placeholder="Mobile / WhatsApp *"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      />
                      <input
                        type="text"
                        placeholder="City, State"
                        value={inquiryCity}
                        onChange={(e) => setInquiryCity(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Submit RFQ for {product.name}</span>
                    </button>
                  </form>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-center space-y-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-emerald-900">RFQ Logged Successfully!</h5>
                    <p className="text-[11px] text-emerald-700">
                      Our institutional desk will contact {inquiryName} ({inquiryHospital}) shortly.
                    </p>
                    <a
                      href={`https://wa.me/918070008050?text=${encodeURIComponent(
                        `Hello Phexal Healthcare, I just submitted an inquiry on the website for:
Product: ${product.name}
SKU: ${product.sku}
Hospital: ${inquiryHospital}
Contact: ${inquiryName}
Phone: ${inquiryPhone}
City: ${inquiryCity}
Units: ${quantity}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-[11px] font-bold hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Send to WhatsApp Now</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>


        {/* ═══════ TECHNICAL TABS SECTION ═══════ */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200">
          <div className="flex border-b border-slate-200 gap-6 mb-6">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'specs'
                  ? 'border-brand-600 text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'features'
                  ? 'border-brand-600 text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              Key Clinical Features
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'instructions'
                  ? 'border-brand-600 text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Clinical Instructions & Safety
            </button>
          </div>

          {/* Tab 1: Specs Table */}
          {activeTab === 'specs' && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider font-bold border-b border-slate-200 text-xs">
                  <tr>
                    <th className="py-3.5 px-6 w-1/3">Parameter</th>
                    <th className="py-3.5 px-6">Standard / Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.specs.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-3.5 px-6 font-bold text-slate-700">{s.label}</td>
                      <td className="py-3.5 px-6 text-slate-900">{s.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3.5 px-6 font-bold text-slate-700">Manufacturer & Origin</td>
                    <td className="py-3.5 px-6 text-slate-900">{product.manufacturer}</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3.5 px-6 font-bold text-slate-700">Stock Availability</td>
                    <td className="py-3.5 px-6 text-emerald-700 font-bold">
                      {product.inStock ? `Ready Stock (${product.stockCount} units)` : 'Made to Order'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 2: Key Features */}
          {activeTab === 'features' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Instructions & Safety */}
          {activeTab === 'instructions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-3">
                <h4 className="text-sm font-bold text-sky-900 uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600" />
                  Operating Protocols
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-sky-950">
                  {product.usageInstructions.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
                <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Safety & Decontamination Cautions
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-amber-950">
                  {product.safetyGuidelines.map((guideline, idx) => (
                    <li key={idx} className="leading-relaxed">{guideline}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>


        {/* ═══════ SIMILAR PRODUCTS (SAME SUBCATEGORY) ═══════ */}
        {similarProducts.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-500" />
                Similar Products
              </h2>
              <Link 
                to={`/catalog?category=${product.categoryId}&subcategory=${product.subCategoryId}`}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {similarProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all overflow-hidden phx-card-hover"
                >
                  <div className="aspect-4/3 bg-white p-4 flex items-center justify-center border-b border-slate-100">
                    <img 
                      src={p.imageUrl} 
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-1">{p.subCategoryName}</p>
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-brand-600 transition-colors leading-snug">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-2 text-[11px]">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-amber-700">{p.rating.toFixed(1)}</span>
                      <span className="text-slate-400">•</span>
                      <span className={`font-semibold ${p.inStock ? 'text-emerald-600' : 'text-slate-400'}`}>
                        {p.inStock ? 'In Stock' : 'On Order'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}


        {/* ═══════ RELATED PRODUCTS (SAME CATEGORY) ═══════ */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-brand-500" />
                More from {product.categoryName}
              </h2>
              <Link 
                to={`/catalog?category=${product.categoryId}`}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden text-center p-3 phx-card-hover"
                >
                  <div className="aspect-square bg-white rounded-lg p-3 flex items-center justify-center mb-2">
                    <img 
                      src={p.imageUrl} 
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="text-[11px] font-bold text-slate-800 line-clamp-2 group-hover:text-brand-600 transition-colors leading-snug">
                    {p.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>


      {/* ═══════ BOTTOM CTA STRIP ═══════ */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                Need a Quote for {product.name}?
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Our procurement team will prepare a formal GST proforma within 15 minutes.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-900/30 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Quote
              </a>
              <a
                href="tel:+918070008050"
                className="px-6 py-3 bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-bold rounded-xl border border-white/[0.12] transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
