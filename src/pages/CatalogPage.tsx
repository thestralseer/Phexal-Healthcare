import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link, useOutletContext } from 'react-router-dom';
import { 
  CATEGORIES, 
  PRODUCTS, 
  Product,
  Category
} from '../data/catalog';
import { CategorySidebar } from '../components/CategorySidebar';
import { ProductGrid } from '../components/ProductGrid';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { 
  ShieldCheck, 
  Sparkles,
  Search,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Award,
  Truck,
  HeartPulse,
  Building2,
  Star,
  Package,
  Filter,
  Zap,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileText,
  TrendingUp,
  BarChart3,
  Grid3X3,
  List,
  SlidersHorizontal,
  Box,
  Wind,
  Stethoscope,
  Accessibility,
  Crosshair,
  Activity
} from 'lucide-react';

interface CatalogContext {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
  onSelectProduct?: (product: Product) => void;
}

// Category icon renderer
const getCategoryIcon = (iconName: string, className: string = 'w-5 h-5') => {
  switch (iconName) {
    case 'Wind': return <Wind className={className} />;
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Accessibility': return <Accessibility className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Crosshair': return <Crosshair className={className} />;
    case 'Bed': return <HeartPulse className={className} />;
    default: return <Box className={className} />;
  }
};

// Category gradient colors
const CATEGORY_GRADIENTS: Record<string, { from: string; to: string; accent: string; bg: string }> = {
  'hospital-furniture': { from: 'from-blue-600', to: 'to-indigo-700', accent: 'text-blue-400', bg: 'bg-blue-500/10' },
  'respiratory': { from: 'from-cyan-600', to: 'to-teal-700', accent: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  'diagnostics': { from: 'from-emerald-600', to: 'to-green-700', accent: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  'mobility': { from: 'from-violet-600', to: 'to-purple-700', accent: 'text-violet-400', bg: 'bg-violet-500/10' },
  'surgical': { from: 'from-rose-600', to: 'to-red-700', accent: 'text-rose-400', bg: 'bg-rose-500/10' },
  'sterilization': { from: 'from-amber-600', to: 'to-orange-700', accent: 'text-amber-400', bg: 'bg-amber-500/10' },
};

const getGradient = (catId: string) => CATEGORY_GRADIENTS[catId] || { from: 'from-brand-600', to: 'to-brand-800', accent: 'text-brand-400', bg: 'bg-brand-500/10' };

export const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const context = useOutletContext<CatalogContext>();
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Read state from URL search params and keep synced
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
    searchParams.get('category') || null
  );
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(
    searchParams.get('subcategory') || null
  );
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sync state when URL params change externally (e.g. from Navbar clicks)
  useEffect(() => {
    setActiveCategoryId(searchParams.get('category') || null);
    setActiveSubCategoryId(searchParams.get('subcategory') || null);
  }, [searchParams]);

  // Open product modal from URL param
  useEffect(() => {
    const productId = searchParams.get('product');
    if (productId) {
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) setSelectedProduct(product);
    }
  }, [searchParams]);

  const handleSelectCategory = (categoryId: string | null, subCategoryId?: string | null) => {
    setActiveCategoryId(categoryId);
    setActiveSubCategoryId(subCategoryId || null);
    
    const params: Record<string, string> = {};
    if (categoryId) params.category = categoryId;
    if (subCategoryId) params.subcategory = subCategoryId;
    setSearchParams(params);

    setTimeout(() => {
      const target = document.getElementById('catalog-content');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleResetFilters = () => {
    setActiveCategoryId(null);
    setActiveSubCategoryId(null);
    setSearchParams({});
    if (context?.setSearchQuery) context.setSearchQuery('');
    setInStockOnly(false);
  };

  // Category scroll helpers
  const scrollCats = (dir: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const amount = dir === 'left' ? -280 : 280;
      categoryScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Active category info
  const activeCategory = CATEGORIES.find(c => c.id === activeCategoryId);
  const activeSubCategory = activeCategory?.subCategories.find(s => s.id === activeSubCategoryId);

  // Filtered Products Logic
  const filteredProducts = useMemo(() => {
    const searchQuery = context?.searchQuery || '';
    return PRODUCTS.filter(product => {
      if (activeCategoryId && product.categoryId !== activeCategoryId) return false;
      if (activeSubCategoryId && product.subCategoryId !== activeSubCategoryId) return false;
      if (inStockOnly && !product.inStock) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inName = product.name.toLowerCase().includes(q);
        const inSku = product.sku.toLowerCase().includes(q);
        const inCat = product.categoryName.toLowerCase().includes(q);
        const inSub = product.subCategoryName.toLowerCase().includes(q);
        const inDesc = product.description.toLowerCase().includes(q);
        const inFeatures = product.keyFeatures.some(f => f.toLowerCase().includes(q));
        const inSpecs = product.specs.some(
          s => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
        );
        const inBadges = product.badges.some(b => b.toLowerCase().includes(q));
        if (!inName && !inSku && !inCat && !inSub && !inDesc && !inFeatures && !inSpecs && !inBadges) return false;
      }
      return true;
    });
  }, [activeCategoryId, activeSubCategoryId, context?.searchQuery, inStockOnly]);

  // Featured product (highest rated in current filter)
  const featuredProduct = useMemo(() => {
    if (filteredProducts.length === 0) return null;
    return [...filteredProducts].sort((a, b) => b.rating - a.rating)[0];
  }, [filteredProducts]);

  // Category stats
  const categoryStats = useMemo(() => {
    return CATEGORIES.map(cat => ({
      ...cat,
      count: PRODUCTS.filter(p => p.categoryId === cat.id).length,
      inStockCount: PRODUCTS.filter(p => p.categoryId === cat.id && p.inStock).length,
    }));
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
           SECTION 1: PREMIUM CATALOG HERO BANNER
           ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left: Heading & Trust */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/15 text-brand-400 text-[11px] font-bold uppercase tracking-wider border border-brand-500/25">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  CDSCO MD-42 Licensed Catalog
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[11px] font-bold border border-emerald-500/25">
                  <Activity className="w-3 h-3" />
                  {PRODUCTS.filter(p => p.inStock).length}/{PRODUCTS.length} In Stock
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.1] tracking-tight mb-3">
                {activeCategory ? (
                  <>
                    <span className="text-slate-400 text-lg font-semibold block mb-1">Catalog /</span>
                    {activeCategory.shortName || activeCategory.name}
                  </>
                ) : (
                  <>
                    Medical Equipment
                    <span className="block bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">
                      Professional Catalog
                    </span>
                  </>
                )}
              </h1>
              
              <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
                {activeCategory 
                  ? activeCategory.description
                  : 'Browse our complete range of CDSCO-certified medical equipment. Every product is 100% tested, hospital-validated, and backed by dedicated biomedical support.'
                }
              </p>

              {/* Quick stats strip */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                {[
                  { icon: <Package className="w-3.5 h-3.5" />, label: `${PRODUCTS.length} Products`, color: 'text-blue-400' },
                  { icon: <Grid3X3 className="w-3.5 h-3.5" />, label: `${CATEGORIES.length} Categories`, color: 'text-violet-400' },
                  { icon: <Truck className="w-3.5 h-3.5" />, label: 'Pan-India Delivery', color: 'text-emerald-400' },
                  { icon: <Award className="w-3.5 h-3.5" />, label: '100% Tested', color: 'text-amber-400' },
                ].map((stat, i) => (
                  <div key={i} className={`flex items-center gap-1.5 text-xs font-semibold ${stat.color}`}>
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Instant Search + Quick Actions */}
            <div className="w-full lg:w-auto lg:min-w-[320px] space-y-4">
              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={context?.searchQuery || ''}
                  onChange={(e) => context?.setSearchQuery?.(e.target.value)}
                  placeholder="Search equipment by name, SKU, or spec..."
                  className="w-full pl-10 pr-4 py-3 bg-white/[0.06] border border-white/[0.12] rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 backdrop-blur-sm transition-all"
                />
                {(context?.searchQuery || '').trim() && (
                  <button 
                    onClick={() => context?.setSearchQuery?.('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex gap-2">
                <a
                  href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare%2C%20I%20need%20a%20bulk%20quotation%20for%20medical%20equipment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Bulk Quote
                </a>
                <Link
                  to="/quality"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-bold rounded-xl border border-white/[0.12] transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Certifications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
           SECTION 2: VISUAL CATEGORY CAROUSEL
           ═══════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200 sticky top-[64px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center gap-2 py-3">
            {/* Scroll Left */}
            <button 
              onClick={() => scrollCats('left')}
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Category Track */}
            <div 
              ref={categoryScrollRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1"
            >
              {/* All Products Pill */}
              <button
                onClick={() => handleSelectCategory(null, null)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  !activeCategoryId
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                All Products
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
                  !activeCategoryId ? 'bg-white/20' : 'bg-slate-200'
                }`}>
                  {PRODUCTS.length}
                </span>
              </button>

              {/* Category Pill Cards */}
              {categoryStats.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id, null)}
                    className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-brand-300'
                    }`}
                  >
                    <span className={`${isActive ? 'text-white/80' : ''}`}>
                      {getCategoryIcon(cat.iconName, 'w-3.5 h-3.5')}
                    </span>
                    <span>{cat.shortName || cat.name}</span>
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-white/20' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scroll Right */}
            <button 
              onClick={() => scrollCats('right')}
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shrink-0"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200 shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
           SECTION 3: FEATURED PRODUCT SPOTLIGHT (when not filtered to subcategory)
           ═══════════════════════════════════════════════════════ */}
      {featuredProduct && !activeSubCategoryId && filteredProducts.length > 3 && (
        <section className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-amber-500" />
              <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Featured Equipment</h2>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Highest Rated
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-2/5 bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 flex items-center justify-center min-h-[200px]">
                  <img 
                    src={featuredProduct.imageUrl}
                    alt={featuredProduct.name}
                    className="max-h-[220px] w-auto object-contain mix-blend-multiply"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    {featuredProduct.badges.slice(0, 2).map((badge, i) => (
                      <span key={i} className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg bg-white shadow-md border border-slate-100 text-slate-700">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-extrabold text-amber-700">{featuredProduct.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs">
                      <span className="font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md">{featuredProduct.categoryName}</span>
                      <ChevronRight className="w-3 h-3 text-slate-300" />
                      <span className="font-semibold text-slate-500">{featuredProduct.subCategoryName}</span>
                      <span className="font-mono text-[10px] text-slate-400 ml-auto">{featuredProduct.sku}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mb-2">
                      {featuredProduct.name}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {featuredProduct.shortDescription || featuredProduct.description}
                    </p>

                    {/* Key specs grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                      {featuredProduct.specs.slice(0, 4).map((spec, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">{spec.label}</span>
                          <span className="text-xs font-bold text-slate-800 truncate block">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-slate-400" />
                        {featuredProduct.manufacturer}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-500" />
                        {featuredProduct.leadTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" />
                        Hospital Grade
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedProduct(featuredProduct)}
                      className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-md shadow-brand-600/20 transition-all flex items-center gap-2"
                    >
                      View Full Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/918070008050?text=${encodeURIComponent('Hello Phexal, I want a quote for: ' + featuredProduct.name + ' (SKU: ' + featuredProduct.sku + ')')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Get Quote
                    </a>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-xl border border-emerald-200 ml-auto">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {featuredProduct.inStock ? 'Ready Stock' : 'Made to Order'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ═══════════════════════════════════════════════════════
           SECTION 4: MAIN CATALOG GRID + SIDEBAR
           ═══════════════════════════════════════════════════════ */}
      <main id="catalog-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* CDSCO Compliance Notice Bar */}
        <div className="mb-6 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-3 border border-emerald-500/30 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider block">
                CDSCO Form MD-42 Registered Medical Supplier (UP/GHA/MD42/2026/000142)
              </span>
              <span className="text-[11px] text-slate-300">
                All equipment certified for Class A, B, C, & D hospital distribution with CDSCO MD-42 Licensed quality assurance.
              </span>
            </div>
          </div>

          <Link
            to="/quality"
            className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow"
          >
            <span>View Quality & Accreditations</span>
            <Sparkles className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          
          {/* Category Sidebar Filter Tree */}
          <CategorySidebar
            categories={CATEGORIES}
            products={PRODUCTS}
            activeCategoryId={activeCategoryId}
            activeSubCategoryId={activeSubCategoryId}
            onSelectCategory={handleSelectCategory}
            onResetFilters={handleResetFilters}
            isMobileOpen={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
            inStockOnly={inStockOnly}
            onToggleInStockOnly={() => setInStockOnly(!inStockOnly)}
          />

          {/* Right Main Column: Product Grid */}
          <div className="flex-1 w-full min-w-0">
            <ProductGrid
              products={filteredProducts}
              categories={CATEGORIES}
              activeCategoryId={activeCategoryId}
              activeSubCategoryId={activeSubCategoryId}
              searchQuery={context?.searchQuery || ''}
              onClearSearch={() => context?.setSearchQuery?.('')}
              onClearFilters={handleResetFilters}
              onSelectProduct={(product) => setSelectedProduct(product)}
              onAddToCart={context?.addToCart || (() => {})}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </main>


      {/* ═══════════════════════════════════════════════════════
           SECTION 5: BOTTOM TRUST & PROCUREMENT CTA STRIP
           ═══════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Need Help With Your Hospital Procurement?
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Our biomedical procurement specialists will help you select the right equipment, 
              prepare quotations, and arrange installation & calibration.
            </p>
          </div>

          {/* Trust Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, title: 'CDSCO Licensed', desc: 'Form MD-42 Certified', color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400' },
              { icon: <Award className="w-5 h-5" />, title: '100% Tested', desc: 'Pre-Dispatch QC', color: 'from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-400' },
              { icon: <Truck className="w-5 h-5" />, title: 'Pan-India Delivery', desc: 'All 28 States & 8 UTs', color: 'from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400' },
              { icon: <HeartPulse className="w-5 h-5" />, title: 'Biomedical Support', desc: 'Installation & Calibration', color: 'from-rose-500/20 to-rose-500/5 border-rose-500/30 text-rose-400' },
            ].map((item, i) => (
              <div key={i} className={`p-4 rounded-2xl bg-gradient-to-b ${item.color} border text-center space-y-2`}>
                <div className="mx-auto w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-white">{item.title}</div>
                <div className="text-[11px] text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare%2C%20I%20need%20assistance%20with%20hospital%20procurement."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-2xl shadow-lg shadow-emerald-900/30 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to Procurement Specialist
            </a>
            <a
              href="tel:+918070008050"
              className="px-6 py-3 bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-bold rounded-2xl border border-white/[0.12] transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call +91 8070 008 050
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-bold rounded-2xl border border-white/[0.12] transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Request Formal Quotation
            </Link>
          </div>
        </div>
      </section>


      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          // Remove product param from URL if present
          if (searchParams.get('product')) {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('product');
            setSearchParams(newParams);
          }
        }}
        onAddToCart={context?.addToCart || (() => {})}
      />
    </>
  );
};
