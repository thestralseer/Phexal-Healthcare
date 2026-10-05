import React, { useState } from 'react';
import { 
 ChevronRight, 
 ChevronDown, 
 Layers, 
 RotateCcw, 
 Wind, 
 Stethoscope, 
 Accessibility, 
 Sparkles, 
 Crosshair,
 CheckCircle2,
 Box,
 SlidersHorizontal,
 X
} from 'lucide-react';
import { Category, Product } from '../data/catalog';

interface CategorySidebarProps {
 categories: Category[];
 products: Product[];
 activeCategoryId: string | null;
 activeSubCategoryId: string | null;
 onSelectCategory: (categoryId: string | null, subCategoryId?: string | null) => void;
 onResetFilters: () => void;
 isMobileOpen?: boolean;
 onCloseMobile?: () => void;
 inStockOnly: boolean;
 onToggleInStockOnly: () => void;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
 categories,
 products,
 activeCategoryId,
 activeSubCategoryId,
 onSelectCategory,
 onResetFilters,
 isMobileOpen = false,
 onCloseMobile,
 inStockOnly,
 onToggleInStockOnly,
}) => {
 // Track open state of each category accordion
 const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

 const toggleCategory = (categoryId: string) => {
 setCollapsedCategories(prev => ({
 ...prev,
 [categoryId]: !prev[categoryId],
 }));
 };

 // Helper to count products in subcategory
 const getSubCategoryCount = (subId: string) => {
 return products.filter(p => p.subCategoryId === subId).length;
 };

 // Helper to count products in whole category
 const getCategoryCount = (catId: string) => {
 return products.filter(p => p.categoryId === catId).length;
 };

 // Icon mapping
 const renderCategoryIcon = (iconName: string) => {
 switch (iconName) {
 case 'Wind':
 return <Wind className="w-4 h-4 text-sky-500" />;
 case 'Stethoscope':
 return <Stethoscope className="w-4 h-4 text-emerald-500" />;
 case 'Accessibility':
 return <Accessibility className="w-4 h-4 text-indigo-500" />;
 case 'Sparkles':
 return <Sparkles className="w-4 h-4 text-amber-500" />;
 case 'Crosshair':
 return <Crosshair className="w-4 h-4 text-cyan-500" />;
 default:
 return <Box className="w-4 h-4 text-slate-500" />;
 }
 };

 const hasActiveFilters = activeCategoryId !== null || activeSubCategoryId !== null || inStockOnly;

 const sidebarContent = (
 <div className="space-y-6">
 {/* Header with Title and Reset */}
 <div className="flex items-center justify-between pb-3 border-b border-slate-200">
 <div className="flex items-center gap-2">
 <Layers className="w-4 h-4 text-brand-600" />
 <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
 Product Categories
 </h2>
 </div>
 {hasActiveFilters && (
 <button
 onClick={onResetFilters}
 className="flex items-center gap-1 text-[11px] font-semibold text-brand-600 hover:text-brand-700 hover:underline transition-all"
 title="Reset category & subcategory filters"
 >
 <RotateCcw className="w-3 h-3" />
 <span>Reset</span>
 </button>
 )}
 </div>

 {/* "All Products" Primary Option */}
 <button
 onClick={() => {
 onSelectCategory(null, null);
 if (onCloseMobile) onCloseMobile();
 }}
 className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
 activeCategoryId === null && activeSubCategoryId === null
 ? 'bg-brand-600 text-white shadow-sm'
 : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
 }`}
 >
 <div className="flex items-center gap-2">
 <Box className="w-4 h-4" />
 <span>All Medical Catalog</span>
 </div>
 <span
 className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
 activeCategoryId === null && activeSubCategoryId === null
 ? 'bg-white/20 text-white'
 : 'bg-slate-100 text-slate-600'
 }`}
 >
 {products.length}
 </span>
 </button>

 {/* Collapsible Category & Subcategory Tree */}
 <div className="space-y-3">
 {categories.map((cat) => {
 const isCategorySelected = activeCategoryId === cat.id && activeSubCategoryId === null;
 const isCategoryOpen = !collapsedCategories[cat.id];
 const catProductCount = getCategoryCount(cat.id);

 return (
 <div
 key={cat.id}
 className={`rounded-2xl border transition-all duration-200 ${
 activeCategoryId === cat.id
 ? 'border-brand-200 bg-brand-50/20 shadow-xs'
 : 'border-slate-200/80 bg-white hover:border-slate-300'
 }`}
 >
 {/* Category Header Bar */}
 <div className="flex items-center justify-between p-2.5">
 <button
 onClick={() => {
 onSelectCategory(cat.id, null);
 if (onCloseMobile) onCloseMobile();
 }}
 className={`flex-1 flex items-center gap-2 text-left text-xs font-bold transition-colors ${
 isCategorySelected
 ? 'text-brand-700'
 : 'text-slate-800 hover:text-brand-600'
 }`}
 >
 <span className="p-1 rounded-lg bg-slate-100/70 shrink-0">
 {renderCategoryIcon(cat.iconName)}
 </span>
 <span className="leading-snug">{cat.name}</span>
 </button>

 <div className="flex items-center gap-1.5 ml-2">
 <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
 {catProductCount}
 </span>
 <button
 onClick={() => toggleCategory(cat.id)}
 className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
 aria-label={`Toggle ${cat.name}`}
 >
 {isCategoryOpen ? (
 <ChevronDown className="w-3.5 h-3.5" />
 ) : (
 <ChevronRight className="w-3.5 h-3.5" />
 )}
 </button>
 </div>
 </div>

 {/* Sub-Category Tree Accordion */}
 {isCategoryOpen && (
 <div className="px-2.5 pb-2.5 pt-0.5 space-y-1 border-t border-slate-100/80">
 {cat.subCategories.map((sub) => {
 const isSubSelected = activeSubCategoryId === sub.id;
 const subCount = getSubCategoryCount(sub.id);

 return (
 <button
 key={sub.id}
 onClick={() => {
 onSelectCategory(cat.id, sub.id);
 if (onCloseMobile) onCloseMobile();
 }}
 className={`w-full text-left py-1.5 px-2.5 rounded-lg text-xs transition-all flex items-center justify-between group ${
 isSubSelected
 ? 'bg-brand-600 text-white font-bold shadow-xs'
 : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
 }`}
 >
 <div className="flex items-center gap-2 truncate pr-2">
 <span
 className={`w-1.5 h-1.5 rounded-full transition-transform ${
 isSubSelected
 ? 'bg-white scale-125'
 : 'bg-slate-300 group-hover:bg-brand-400'
 }`}
 />
 <span className="truncate">{sub.name}</span>
 </div>

 {/* Badge Count for Subcategory */}
 <span
 className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md ${
 isSubSelected
 ? 'bg-white/25 text-white'
 : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
 }`}
 >
 {subCount}
 </span>
 </button>
 );
 })}
 </div>
 )}
 </div>
 );
 })}
 </div>

 {/* Filter by Stock Availability */}
 <div className="pt-4 border-t border-slate-200">
 <div className="flex items-center justify-between">
 <label
 htmlFor="in-stock-filter"
 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 cursor-pointer"
 >
 <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
 <span>Ready Stock Only</span>
 </label>
 <input
 id="in-stock-filter"
 type="checkbox"
 checked={inStockOnly}
 onChange={onToggleInStockOnly}
 className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300 cursor-pointer"
 />
 </div>
 </div>

 {/* Quality Standards Guarantee Box */}
 <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 to-phexal-navy text-white text-xs space-y-1.5 shadow-sm">
 <div className="font-bold text-[11px] uppercase tracking-wider text-brand-400 flex items-center gap-1">
 <SlidersHorizontal className="w-3 h-3" />
 <span>Clinical Compliance</span>
 </div>
 <p className="text-[11px] text-slate-300 leading-relaxed">
 All catalog products carry valid CE, CDSCO MD-42, or regulatory hospital validation certificates.
 </p>
 </div>
 </div>
 );

 return (
 <>
 {/* Desktop Sidebar (Permanent) */}
 <aside className="hidden lg:block w-72 shrink-0">
 <div className="sticky top-28 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
 {sidebarContent}
 </div>
 </aside>

 {/* Mobile Drawer (Slide-over on demand) */}
 {isMobileOpen && (
 <div className="lg:hidden fixed inset-0 z-50 flex">
 {/* Backdrop */}
 <div
 className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
 onClick={onCloseMobile}
 />

 {/* Drawer Body */}
 <div className="relative ml-auto w-full max-w-xs h-full bg-white shadow-2xl p-5 overflow-y-auto flex flex-col justify-between">
 <div>
 <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
 <span className="font-bold text-sm text-slate-900">Filters & Taxonomy</span>
 <button
 onClick={onCloseMobile}
 className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 {sidebarContent}
 </div>

 <div className="pt-4 border-t border-slate-200 mt-6">
 <button
 onClick={onCloseMobile}
 className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition-colors"
 >
 Apply Filters
 </button>
 </div>
 </div>
 </div>
 )}
 </>
 );
};
