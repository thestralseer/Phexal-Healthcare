import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
 Search, 
 ShoppingCart, 
 PhoneCall, 
 ShieldCheck, 
 Menu, 
 X, 
 ChevronDown, 
 Sparkles,
 ArrowRight,
 Filter,
 Award,
 Home,
 Building2,
 Mail,
 CheckCircle2,
 Package,
 TrendingUp,
 Clock
} from 'lucide-react';
import { Category, SubCategory, PRODUCTS, Product } from '../data/catalog';

interface NavbarProps {
 categories: Category[];
 activeCategoryId: string | null;
 activeSubCategoryId: string | null;
 onSelectCategory: (categoryId: string | null, subCategoryId?: string | null) => void;
 searchQuery: string;
 onSearchChange: (query: string) => void;
 cartCount: number;
 onOpenCart: () => void;
 onToggleMobileFilter?: () => void;
 onOpenCDSCOModal?: () => void;
 onSelectProduct?: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
 categories,
 activeCategoryId,
 activeSubCategoryId,
 onSelectCategory,
 searchQuery,
 onSearchChange,
 cartCount,
 onOpenCart,
 onToggleMobileFilter,
 onOpenCDSCOModal,
 onSelectProduct,
}) => {
 const navigate = useNavigate();
 const location = useLocation();
 const [openDropdown, setOpenDropdown] = useState<string | null>(null);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
 const [isSearchFocused, setIsSearchFocused] = useState(false);
 const searchContainerRef = useRef<HTMLDivElement | null>(null);
 const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

 const isHome = location.pathname === '/';
 const isCatalog = location.pathname.startsWith('/catalog');
 const isQuality = location.pathname.startsWith('/quality');
 const isAbout = location.pathname.startsWith('/about');
 const isContact = location.pathname.startsWith('/contact');

 // Search Results filtering
 const searchResults = useMemo(() => {
 if (!searchQuery.trim()) return [];
 const q = searchQuery.toLowerCase().trim();
 return PRODUCTS.filter(p => 
 p.name.toLowerCase().includes(q) ||
 p.sku.toLowerCase().includes(q) ||
 p.categoryName.toLowerCase().includes(q) ||
 p.subCategoryName.toLowerCase().includes(q) ||
 p.shortDescription.toLowerCase().includes(q) ||
 p.keyFeatures.some(f => f.toLowerCase().includes(q)) ||
 p.specs.some(s => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q))
 ).slice(0, 6);
 }, [searchQuery]);

 // Click outside to close search dropdown
 useEffect(() => {
 const handleClickOutside = (e: MouseEvent) => {
 if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
 setIsSearchFocused(false);
 }
 };
 document.addEventListener('mousedown', handleClickOutside);
 return () => document.removeEventListener('mousedown', handleClickOutside);
 }, []);

 const handleMouseEnter = (catId: string) => {
 if (dropdownTimerRef.current) {
 clearTimeout(dropdownTimerRef.current);
 dropdownTimerRef.current = null;
 }
 setOpenDropdown(catId);
 };

 const handleMouseLeave = () => {
 dropdownTimerRef.current = setTimeout(() => {
 setOpenDropdown(null);
 }, 180);
 };

 useEffect(() => {
 return () => {
 if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
 };
 }, []);

 // Close mobile menu on route change
 useEffect(() => {
 setMobileMenuOpen(false);
 setIsSearchFocused(false);
 }, [location.pathname]);

 const handleCategoryNav = (catId: string | null, subId?: string | null) => {
 onSelectCategory(catId, subId);
 let url = '/catalog';
 const params = new URLSearchParams();
 if (catId) params.set('category', catId);
 if (subId) params.set('subcategory', subId);
 const qs = params.toString();
 if (qs) url += '?' + qs;
 navigate(url);
 setOpenDropdown(null);
 setMobileMenuOpen(false);
 setIsSearchFocused(false);
 };

 const handleSearchSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setIsSearchFocused(false);
 if (!isCatalog && searchQuery.trim()) {
 navigate('/catalog');
 }
 };

 const handleSearchInputChange = (value: string) => {
 onSearchChange(value);
 };

 const handleSelectSearchResult = (prod: Product) => {
    setIsSearchFocused(false);
    navigate(`/product/${prod.id}`);
  };

 const popularSearches = [
 '10L Oxygen Concentrator',
 'BiPAP G2S Machine',
 'Multiparameter Monitor',
 '12-Channel ECG',
 'Paramount ICU Bed',
 'Surgical Suction Unit'
 ];

 return (
 <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/90 shadow-sm backdrop-blur-md bg-white/95">
 {/* ── Top Utility & Brand Bar ── */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
 
 {/* Logo & Brand Identity */}
 <div className="flex items-center gap-3">
 <Link
 to="/"
 className="flex items-center gap-2.5 text-left group focus:outline-none"
 >
 <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-600 to-phexal-navy flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
 P
 </div>
 <div className="flex flex-col">
 <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 uppercase leading-none">
 PHEXAL
 </span>
 <span className="text-[10px] sm:text-[11px] font-semibold text-brand-600 tracking-[0.18em] uppercase">
 Healthcare
 </span>
 </div>
 </Link>
 </div>

 {/* Central Live Search Bar with Dropdown */}
 <div className="flex-1 max-w-xl hidden md:block relative" ref={searchContainerRef}>
 <form onSubmit={handleSearchSubmit} className="relative">
 <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
 <Search className="w-4 h-4" />
 </div>
 <input
 type="text"
 value={searchQuery}
 onFocus={() => setIsSearchFocused(true)}
 onChange={(e) => handleSearchInputChange(e.target.value)}
 placeholder="Search medical products, equipment, specs (e.g. BiPAP, O2, Doppler)..."
 className="w-full h-11 pl-10 pr-9 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-brand-500 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all shadow-inner"
 />
 {searchQuery && (
 <button
 type="button"
 onClick={() => onSearchChange('')}
 className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-xs font-semibold"
 >
 Clear
 </button>
 )}
 </form>

 {/* ── Live Search Dropdown Popover ── */}
 {isSearchFocused && (
 <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
 
 {/* When Query is Present */}
 {searchQuery.trim() ? (
 searchResults.length > 0 ? (
 <div className="divide-y divide-slate-100">
 <div className="px-4 py-2 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
 <span>Matching Products ({searchResults.length})</span>
 <span className="text-[11px] text-brand-600 font-bold">Live Inventory</span>
 </div>
 <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-100">
 {searchResults.map((prod) => (
 <div
 key={prod.id}
 onClick={() => handleSelectSearchResult(prod)}
 className="p-3.5 hover:bg-sky-50/70 transition-all cursor-pointer flex items-center gap-3.5 group"
 >
 {/* Thumbnail */}
 <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 p-1 shrink-0 overflow-hidden flex items-center justify-center group-hover:border-brand-300 transition-colors">
 <img
 src={prod.imageUrl}
 alt={prod.name}
 className="w-full h-full object-contain group-hover:scale-105 transition-transform"
 onError={(e) => {
 (e.target as HTMLElement).style.display = 'none';
 }}
 />
 </div>

 {/* Info */}
 <div className="flex-1 min-w-0">
 <div className="flex items-center gap-2 mb-0.5">
 <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
 {prod.subCategoryName}
 </span>
 <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
 Ready Stock ({prod.stockCount})
 </span>
 </div>
 <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-brand-600 transition-colors">
 {prod.name}
 </h4>
 <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
 {prod.shortDescription}
 </p>
 <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
 <span>SKU: {prod.sku}</span>
 <span>•</span>
 <span className="text-emerald-600 font-semibold">{prod.inStock ? 'Ready Stock' : 'Made to Order'}</span>
 </div>
 </div>

 {/* Action Arrow */}
 <div className="shrink-0 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all">
 <ArrowRight className="w-4 h-4" />
 </div>
 </div>
 ))}
 </div>
 <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
 <button
 type="button"
 onClick={() => {
 setIsSearchFocused(false);
 navigate('/catalog');
 }}
 className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
 >
 <span>View all results in Catalog</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </button>
 </div>
 </div>
 ) : (
 <div className="p-6 text-center space-y-3">
 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
 <Search className="w-5 h-5" />
 </div>
 <div>
 <div className="text-xs sm:text-sm font-bold text-slate-800">No medical equipment matching "{searchQuery}"</div>
 <p className="text-[11px] text-slate-500 mt-0.5">Try searching with different clinical terms or browse popular categories below.</p>
 </div>
 <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
 {popularSearches.map((term) => (
 <button
 key={term}
 type="button"
 onClick={() => {
 onSearchChange(term);
 }}
 className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-brand-600 text-[11px] font-medium border border-slate-200 transition-colors"
 >
 {term}
 </button>
 ))}
 </div>
 </div>
 )
 ) : (
 /* When Focused with Empty Query: Popular Searches */
 <div className="p-4 space-y-3">
 <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
 <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
 <span>Popular Medical Equipment Searches</span>
 </div>
 <div className="grid grid-cols-2 gap-2">
 {popularSearches.map((term) => (
 <button
 key={term}
 type="button"
 onClick={() => {
 onSearchChange(term);
 }}
 className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-brand-700 border border-slate-200/70 hover:border-brand-200 text-xs font-semibold text-left transition-all group"
 >
 <Package className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600" />
 <span className="truncate">{term}</span>
 </button>
 ))}
 </div>
 </div>
 )}

 </div>
 )}
 </div>


 {/* Right Action Icons & Badges */}
 <div className="flex items-center gap-2 sm:gap-3">
 {/* View Switcher: Quality & Accreditations Button */}
 <Link
 to="/quality"
 className={`hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
 isQuality
 ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
 : 'bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 border-emerald-200/80 shadow-sm'
 }`}
 title="View CDSCO Form MD-42 & Statutory Accreditations"
 >
 <ShieldCheck className={`w-4 h-4 ${isQuality ? 'text-white' : 'text-emerald-600'} shrink-0`} />
 <div className="flex flex-col text-left leading-none">
 <span>Quality & Compliance</span>
 <span className={`text-[9px] font-mono ${isQuality ? 'text-emerald-100' : 'text-emerald-600'}`}>
 ISO 13485 • CDSCO MD-42
 </span>
 </div>
 </Link>

 {/* Mobile Filter Toggle (only in catalog view) */}
 {isCatalog && onToggleMobileFilter && (
 <button
 onClick={onToggleMobileFilter}
 className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200 flex items-center gap-1 text-xs font-semibold"
 title="Filter Categories"
 >
 <Filter className="w-4 h-4 text-brand-600" />
 <span className="hidden sm:inline">Filters</span>
 </button>
 )}

 {/* WhatsApp Quick Inquiries */}
 <a
 href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare,%20I%20have%20an%20inquiry%20regarding%20medical%20equipment%20procurement."
 target="_blank"
 rel="noopener noreferrer"
 className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm"
 >
 <PhoneCall className="w-3.5 h-3.5" />
 <span>B2B Desk</span>
 </a>

 {/* Cart Trigger */}
 <button
 onClick={onOpenCart}
 className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200/80 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
 title="Cart / RFQ Drawer"
 >
 <ShoppingCart className="w-5 h-5" />
 {cartCount > 0 ? (
 <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-600 text-white text-[11px] font-bold flex items-center justify-center shadow-md animate-pulse">
 {cartCount}
 </span>
 ) : (
 <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-slate-300 text-slate-700 text-[9px] font-bold flex items-center justify-center">
 0
 </span>
 )}
 </button>

 {/* Mobile Menu Hamburger */}
 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none"
 aria-label="Toggle menu"
 >
 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>
 </div>

 {/* Mobile Search Input */}
 <div className="md:hidden pb-3">
 <form onSubmit={handleSearchSubmit} className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
 <Search className="w-4 h-4" />
 </div>
 <input
 type="text"
 value={searchQuery}
 onChange={(e) => handleSearchInputChange(e.target.value)}
 placeholder="Search medical equipment..."
 className="w-full h-10 pl-9 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
 />
 </form>
 </div>
 </div>

 {/* ── Mobile Horizontal Scrolling Sub-Nav Bar (Always Visible below lg) ── */}
      <div className="block lg:hidden bg-gradient-to-r from-phexal-navy via-[#0c233c] to-phexal-navy border-t border-b border-white/10 text-white shadow-xs">
        <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar px-3 py-1.5 whitespace-nowrap text-xs" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          <Link
            to="/"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              isHome ? 'bg-white/20 text-white font-bold shadow-xs border border-white/20' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <Link
            to="/catalog"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              isCatalog ? 'bg-white/20 text-white font-bold shadow-xs border border-white/20' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Products</span>
          </Link>
          <Link
            to="/quality"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              isQuality ? 'bg-white/20 text-white font-bold shadow-xs border border-white/20' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Quality</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              isAbout ? 'bg-white/20 text-white font-bold shadow-xs border border-white/20' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              isContact ? 'bg-white/20 text-white font-bold shadow-xs border border-white/20' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-sky-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </button>
        </nav>
      </div>

      {/* ── Bottom Navigation Tier (Dynamic Category Taxonomy & Page Tabs) ── */}
 <div className="hidden lg:block bg-gradient-to-r from-phexal-navy via-[#0c233c] to-phexal-navy border-t border-slate-800 text-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <nav className="flex items-center justify-between py-1" aria-label="Main Navigation">
 
 {/* Left Tabs: Pages + Categories */}
 <div className="flex items-center space-x-1">
 {/* Home Tab */}
 <Link
 to="/"
 className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
 isHome
 ? 'bg-brand-500 text-white shadow-md'
 : 'text-slate-300 hover:text-white hover:bg-white/10'
 }`}
 >
 <Home className="w-3.5 h-3.5" />
 <span>Home</span>
 </Link>

 {/* ── Single "Our Products" Mega Dropdown (Nareena-style) ── */}
 <div
 className="relative"
 onMouseEnter={() => handleMouseEnter('products-mega')}
 onMouseLeave={handleMouseLeave}
 >
 <button
 onClick={(e) => {
 e.preventDefault();
 setOpenDropdown(prev => prev === 'products-mega' ? null : 'products-mega');
 }}
 className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
 isCatalog
 ? 'bg-brand-600 text-white shadow-sm'
 : 'text-slate-200 hover:text-white hover:bg-white/10'
 }`}
 >
 <Sparkles className="w-3.5 h-3.5" />
 <span>Our Products</span>
 <ChevronDown
 className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-400 ${
 openDropdown === 'products-mega' ? 'rotate-180 text-white' : ''
 }`}
 />
 </button>

 {/* MEGA MENU: Full-width dropdown with all categories & product names */}
 {openDropdown === 'products-mega' && (
 <div 
 className="fixed left-0 right-0 top-auto mt-0.5 bg-white text-slate-900 shadow-2xl border-t border-slate-200 z-50 animate-in fade-in slide-in-from-top-1 duration-150 max-h-[calc(100vh-130px)] overflow-y-auto"
 style={{ width: '100vw', backgroundColor: '#ffffff', background: '#ffffff' }}
 onMouseEnter={() => handleMouseEnter('products-mega')}
 onMouseLeave={handleMouseLeave}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
 {/* Header row */}
 <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
 <div className="flex items-center gap-3">
 <span className="text-sm font-extrabold text-slate-900">Browse Our Complete Medical Equipment Catalog</span>
 <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
 {PRODUCTS.length} Products
 </span>
 </div>
 <button
 onClick={() => {
 navigate('/catalog');
 setOpenDropdown(null);
 setMobileMenuOpen(false);
 }}
 className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 hover:underline"
 >
 View All Products <ArrowRight className="w-3.5 h-3.5" />
 </button>
 </div>

 {/* Categories grid with products listed under each - Spacious 4 Columns with scroll */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {categories.map((cat) => {
 const catProducts = PRODUCTS.filter(p => p.categoryId === cat.id);
 return (
 <div key={cat.id} className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/90 hover:border-sky-300 transition-colors flex flex-col justify-between">
 <div>
 {/* Category Header */}
 <div className="flex items-center justify-between border-b-2 border-sky-100 pb-2 mb-2.5">
 <button
 onClick={() => handleCategoryNav(cat.id, null)}
 className="text-xs font-black text-brand-700 hover:text-brand-900 uppercase tracking-wider block leading-tight transition-colors text-left"
 >
 {cat.shortName || cat.name}
 </button>
 <span className="text-[10px] font-bold text-brand-600 bg-white border border-brand-200 px-2 py-0.5 rounded-full shrink-0 ml-2">
 {catProducts.length}
 </span>
 </div>
 {/* Product names list (Fully readable, no truncate) */}
 <ul className="space-y-1 max-h-56 overflow-y-auto pr-1">
 {catProducts.map((prod) => (
 <li key={prod.id}>
 <a
 href={`/product/${prod.id}`}
 onClick={(e) => {
 e.preventDefault();
 navigate(`/product/${prod.id}`);
 setOpenDropdown(null);
 setMobileMenuOpen(false);
 }}
 className="flex items-start gap-1.5 py-1 px-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-brand-600 hover:bg-sky-50 transition-colors leading-snug cursor-pointer break-words"
 title={prod.name}
 >
 <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
 <span>{prod.name}</span>
 </a>
 </li>
 ))}
 </ul>
 </div>
 <div className="pt-2 mt-2 border-t border-slate-200/60 text-[11px] font-bold text-brand-600">
 <button onClick={() => handleCategoryNav(cat.id, null)} className="hover:underline flex items-center gap-1">
 <span>View all in {cat.shortName || cat.name}</span>
 <ArrowRight className="w-3 h-3" />
 </button>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </div>
 )}
 </div>
 </div>

 {/* Right Tabs: Quality, About, Contact */}
 <div className="flex items-center gap-1.5">
 <Link
 to="/quality"
 className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
 isQuality
 ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
 : 'bg-white/10 text-emerald-300 hover:bg-white/20 hover:text-white'
 }`}
 >
 <ShieldCheck className="w-3.5 h-3.5" />
 <span>Quality & Certificates</span>
 </Link>

 <Link
 to="/about"
 className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
 isAbout
 ? 'bg-brand-500 text-white shadow-md'
 : 'text-slate-300 hover:text-white hover:bg-white/10'
 }`}
 >
 <Building2 className="w-3.5 h-3.5" />
 <span>About Us</span>
 </Link>

 <Link
 to="/contact"
 className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
 isContact
 ? 'bg-brand-500 text-white shadow-md'
 : 'text-slate-300 hover:text-white hover:bg-white/10'
 }`}
 >
 <Mail className="w-3.5 h-3.5" />
 <span>Contact</span>
 </Link>
 </div>

 </nav>
 </div>
 </div>

 {/* ── Mobile Slide Navigation Menu ── */}
 {mobileMenuOpen && (
 <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 max-h-[75vh] overflow-y-auto">
 
 {/* Page Links */}
 <div className="space-y-1">
 <Link
 to="/"
 className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
 isHome ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
 }`}
 >
 <Home className="w-4 h-4 text-brand-600" />
 <span>Home</span>
 </Link>

 <Link
 to="/catalog"
 className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
 isCatalog && !activeCategoryId ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
 }`}
 >
 <Sparkles className="w-4 h-4 text-brand-600" />
 <span>All Equipment</span>
 </Link>

 <Link
 to="/quality"
 className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
 isQuality ? 'bg-emerald-50 text-emerald-800' : 'text-slate-700 hover:bg-slate-50'
 }`}
 >
 <ShieldCheck className="w-4 h-4 text-emerald-600" />
 <span>Quality & Certificates</span>
 </Link>

 <Link
 to="/about"
 className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
 isAbout ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
 }`}
 >
 <Building2 className="w-4 h-4 text-brand-600" />
 <span>About Us</span>
 </Link>

 <Link
 to="/contact"
 className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
 isContact ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
 }`}
 >
 <Mail className="w-4 h-4 text-brand-600" />
 <span>Contact Us</span>
 </Link>
 </div>

 <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
 Catalog Categories
 </div>

 <div className="space-y-2.5">
 {categories.map((cat) => {
   const catProducts = PRODUCTS.filter(p => p.categoryId === cat.id);
   const isExpanded = mobileExpandedCat === cat.id;
   return (
     <div key={cat.id} className="border border-slate-200 rounded-xl p-3 bg-slate-50/70">
       <div className="flex items-center justify-between gap-2">
         <button
           onClick={() => handleCategoryNav(cat.id, null)}
           className="flex-1 text-left font-bold text-sm text-slate-900 hover:text-brand-600 truncate"
         >
           {cat.name}
         </button>
         <button
           type="button"
           onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
           className="px-2.5 py-1 text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-200/90 rounded-lg shrink-0 flex items-center gap-1 shadow-2xs"
         >
           <span>{catProducts.length} Products</span>
           <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
         </button>
       </div>

       <div className="mt-2.5 pl-2 border-l-2 border-slate-300 flex flex-wrap gap-1">
         {cat.subCategories.map((sub) => (
           <button
             key={sub.id}
             onClick={() => handleCategoryNav(cat.id, sub.id)}
             className={`text-[11px] px-2 py-0.5 rounded-md transition-colors ${
               activeSubCategoryId === sub.id
                 ? 'bg-brand-600 text-white font-bold'
                 : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
             }`}
           >
             {sub.name}
           </button>
         ))}
       </div>

       {isExpanded && (
         <div className="mt-3 pt-2.5 border-t border-slate-200 space-y-1">
           <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
             Tap Equipment to View Page:
           </span>
           <div className="grid grid-cols-1 gap-1 max-h-52 overflow-y-auto pr-1">
             {catProducts.map((prod) => (
               <a
                 key={prod.id}
                 href={`/product/${prod.id}`}
                 onClick={(e) => {
                   e.preventDefault();
                   navigate(`/product/${prod.id}`);
                   setMobileMenuOpen(false);
                 }}
                 className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-slate-800 bg-white hover:bg-brand-50 hover:text-brand-700 border border-slate-100 transition-colors shadow-2xs"
               >
                 <span className="truncate">{prod.name}</span>
                 <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">{prod.sku}</span>
               </a>
             ))}
           </div>
         </div>
       )}
     </div>
   );
 })}
 </div>
 <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
 <span className="text-xs text-slate-500">Emergency & Wholesale Line:</span>
 <a href="tel:+918070008050" className="text-xs font-bold text-brand-600">
 +91 80700 08050
 </a>
 </div>
 </div>
 )}
 </header>
 );
};
