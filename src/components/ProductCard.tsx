import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  Check, 
  FileText, 
  Shield, 
  CheckCircle2, 
  Clock, 
  Building2,
  Info,
  PhoneCall
} from 'lucide-react';
import { Product } from '../data/catalog';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
}) => {
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onAddToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const getBadgeStyle = (badge: string) => {
    const lower = badge.toLowerCase();
    if (lower.includes('pediatric')) {
      return 'bg-pink-50 text-pink-700 border-pink-200';
    }
    if (lower.includes('medical') || lower.includes('heavy') || lower.includes('clinical')) {
      return 'bg-brand-50 text-brand-700 border-brand-200';
    }
    if (lower.includes('grade') || lower.includes('autoclavable') || lower.includes('fuel')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-brand-300 relative"
    >
      {/* Top Banner / Image Section */}
      <div className="relative w-full aspect-4/3 bg-white p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 max-w-[85%]">
          {product.badges.slice(0, 2).map((badge, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-md border shadow-2xs ${getBadgeStyle(
                badge
              )}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Lead Time Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-bold text-slate-600 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1">
            <Clock className="w-2.5 h-2.5 text-brand-600" />
            <span>{product.leadTime.split(' ')[0]} {product.leadTime.split(' ')[1]}</span>
          </span>
        </div>

        {/* Product Image */}
        {!imgError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50 p-4 text-center">
            <Shield className="w-10 h-10 text-brand-500 mb-1 opacity-70" />
            <span className="text-xs font-bold text-slate-600">{product.name}</span>
            <span className="text-[10px] text-slate-400">Clinical Equipment Spec</span>
          </div>
        )}
      </div>

      {/* Product Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Subcategory & SKU */}
          <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-slate-500 mb-1.5">
            <span className="text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md truncate">
              {product.subCategoryName}
            </span>
            <span className="font-mono text-[10px] text-slate-400 shrink-0">
              {product.sku}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Manufacturer & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
            <div className="flex items-center gap-1 text-[11px] text-slate-600 truncate">
              <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">{product.manufacturer}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-1.5 py-0.5 rounded text-amber-700 font-bold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-[10px] text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Key Specs Pill Grid (First 3-4 specs) */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-1.5 text-[11px] bg-slate-50/70 p-2.5 rounded-xl">
            {product.specs.slice(0, 4).map((spec, i) => (
              <div key={i} className="truncate">
                <span className="text-slate-400 font-medium block text-[9px] uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="font-semibold text-slate-800 truncate block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Call to Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
              Wholesale B2B Pricing
            </span>
            <span className="text-[10px] font-medium text-slate-500 block mt-0.5 truncate">
              Official Quotes via WhatsApp
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href={`https://wa.me/918070008050?text=${encodeURIComponent('Hello Phexal Healthcare, I would like to enquire about wholesale B2B pricing and availability for: ' + product.name + ' (SKU: ' + product.sku + ')')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-2.5 py-2 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 transition-all shadow-xs hover:shadow-md"
              title="Enquire on WhatsApp"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={handleAdd}
              className={`px-2.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1 transition-all shadow-xs ${
                added
                  ? 'bg-emerald-700 text-white'
                  : 'bg-brand-600 hover:bg-brand-700 text-white'
              }`}
              title="Add to Quote Basket"
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Added</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>+Quote</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
