import React, { useState, useMemo } from 'react';
import { 
 ArrowUpDown, 
 SearchX, 
 Sparkles, 
 X, 
 ChevronRight,
 ShieldAlert,
 SlidersHorizontal
} from 'lucide-react';
import { Product, Category } from '../data/catalog';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
 products: Product[];
 categories: Category[];
 activeCategoryId: string | null;
 activeSubCategoryId: string | null;
 searchQuery: string;
 onClearSearch: () => void;
 onClearFilters: () => void;
 onSelectProduct: (product: Product) => void;
 onAddToCart: (product: Product, quantity?: number) => void;
 onSelectCategory: (categoryId: string | null, subCategoryId?: string | null) => void;
}

type SortOption = 'featured' | 'rating' | 'name-asc' | 'name-desc';

export const ProductGrid: React.FC<ProductGridProps> = ({
 products,
 categories,
 activeCategoryId,
 activeSubCategoryId,
 searchQuery,
 onClearSearch,
 onClearFilters,
 onSelectProduct,
 onAddToCart,
 onSelectCategory,
}) => {
 const [sortOption, setSortOption] = useState<SortOption>('featured');

 // Find active category & subcategory names
 const activeCategory = categories.find(c => c.id === activeCategoryId);
 const activeSubCategory = activeCategory?.subCategories.find(s => s.id === activeSubCategoryId);

 // Sorted products
 const sortedProducts = useMemo(() => {
 const list = [...products];
 switch (sortOption) {
 case 'rating':
 return list.sort((a, b) => b.rating - a.rating);
 case 'name-asc':
 return list.sort((a, b) => a.name.localeCompare(b.name));
 case 'name-desc':
 return list.sort((a, b) => b.name.localeCompare(a.name));
 case 'featured':
 default:
 return list;
 }
 }, [products, sortOption]);

 return (
 <div className="flex-1 space-y-5">
 {/* ── Filter Summary & Controls Bar ── */}
 <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
 <div>
 {/* Breadcrumb path */}
 <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
 <button
 onClick={() => onSelectCategory(null, null)}
 className="hover:text-brand-600 transition-colors"
 >
 Catalog
 </button>
 {activeCategory && (
 <>
 <ChevronRight className="w-3 h-3 text-slate-400" />
 <button
 onClick={() => onSelectCategory(activeCategory.id, null)}
 className="hover:text-brand-600 transition-colors"
 >
 {activeCategory.name}
 </button>
 </>
 )}
 {activeSubCategory && (
 <>
 <ChevronRight className="w-3 h-3 text-slate-400" />
 <span className="font-semibold text-brand-700">
 {activeSubCategory.name}
 </span>
 </>
 )}
 </div>

 <div className="flex items-center gap-2.5">
 <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
 {activeSubCategory?.name || activeCategory?.name || 'All Medical Products'}
 </h1>
 <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
 {sortedProducts.length} {sortedProducts.length === 1 ? 'item' : 'items'}
 </span>
 </div>
 {activeSubCategory?.description && (
 <p className="text-xs text-slate-500 mt-0.5">
 {activeSubCategory.description}
 </p>
 )}
 </div>

 {/* Sort Selector */}
 <div className="flex items-center gap-2 w-full md:w-auto justify-end">
 <label htmlFor="sort-select" className="text-xs font-semibold text-slate-600 flex items-center gap-1 shrink-0">
 <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
 <span>Sort by:</span>
 </label>
 <select
 id="sort-select"
 value={sortOption}
 onChange={(e) => setSortOption(e.target.value as SortOption)}
 className="h-9 px-3 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
 >
 <option value="featured">Featured / Recommended</option>
 <option value="rating">Highest Rated</option>
 <option value="name-asc">Product Name (A – Z)</option>
 <option value="name-desc">Product Name (Z – A)</option>
 </select>
 </div>
 </div>

 {/* ── Active Filter Badges Pill Bar ── */}
 {(activeCategoryId || activeSubCategoryId || searchQuery) && (
 <div className="flex flex-wrap items-center gap-2">
 <span className="text-xs font-semibold text-slate-500">Active filters:</span>
 {activeCategory && (
 <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
 <span>Category: {activeCategory.name}</span>
 <button
 onClick={() => onSelectCategory(null, null)}
 className="hover:text-brand-900"
 >
 <X className="w-3 h-3" />
 </button>
 </span>
 )}

 {activeSubCategory && (
 <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
 <span>Subcategory: {activeSubCategory.name}</span>
 <button
 onClick={() => onSelectCategory(activeCategoryId, null)}
 className="hover:text-sky-950"
 >
 <X className="w-3 h-3" />
 </button>
 </span>
 )}

 {searchQuery && (
 <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
 <span>Search: "{searchQuery}"</span>
 <button onClick={onClearSearch} className="hover:text-amber-950">
 <X className="w-3 h-3" />
 </button>
 </span>
 )}

 <button
 onClick={onClearFilters}
 className="text-xs font-bold text-brand-600 hover:text-brand-800 hover:underline ml-1"
 >
 Clear all
 </button>
 </div>
 )}

 {/* ── Product Grid or Empty State ── */}
 {sortedProducts.length > 0 ? (
 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
 {sortedProducts.map((product) => (
 <ProductCard
 key={product.id}
 product={product}
 onSelectProduct={onSelectProduct}
 onAddToCart={onAddToCart}
 />
 ))}
 </div>
 ) : (
 /* Empty State */
 <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-sm">
 <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
 <SearchX className="w-8 h-8" />
 </div>
 <div className="max-w-md">
 <h3 className="text-base sm:text-lg font-bold text-slate-900">
 No medical products match your filter
 </h3>
 <p className="text-xs sm:text-sm text-slate-500 mt-1">
 We couldn't find any products matching your current category selection or search term "{searchQuery}".
 </p>
 </div>
 <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
 <button
 onClick={onClearFilters}
 className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm transition-colors"
 >
 Reset All Filters
 </button>
 <a
 href="https://wa.me/9198110XXXXX?text=Inquiry%20for%20specialized%20medical%20equipment%20specification"
 target="_blank"
 rel="noopener noreferrer"
 className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
 >
 Request Custom Procurement
 </a>
 </div>
 </div>
 )}
 </div>
 );
};
