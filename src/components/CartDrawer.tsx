import React from 'react';
import { 
 X, 
 Trash2, 
 Plus, 
 Minus, 
 ShoppingBag, 
 PhoneCall, 
 ArrowRight, 
 ShieldCheck, 
 Truck,
 FileText
} from 'lucide-react';
import { Product } from '../data/catalog';

export interface CartItem {
 product: Product;
 quantity: number;
}

interface CartDrawerProps {
 isOpen: boolean;
 onClose: () => void;
 items: CartItem[];
 onUpdateQuantity: (productId: string, quantity: number) => void;
 onRemoveItem: (productId: string) => void;
 onClearCart: () => void;
 onOpenProductDetail: (product: Product) => void;
 onOpenQuoteGenerator?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
 isOpen,
 onClose,
 items,
 onUpdateQuantity,
 onRemoveItem,
 onClearCart,
 onOpenProductDetail,
 onOpenQuoteGenerator,
}) => {
 if (!isOpen) return null;

 const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

 const generateWhatsAppMessage = () => {
 let msg = `*PHEXAL HEALTHCARE - B2B WHOLESALE RFQ INQUIRY*\n`;
 msg += `Total Items: ${items.length} (${totalUnits} units)\n\n`;
 items.forEach((item, idx) => {
 msg += `${idx + 1}. *${item.product.name}*\n SKU: ${item.product.sku}\n Qty: ${item.quantity}\n Category: ${item.product.categoryName}\n\n`;
 });
 msg += `\nPlease provide formal commercial B2B quotation, freight estimate, and GST proforma invoice.`;
 return `https://wa.me/918070008050?text=${encodeURIComponent(msg)}`;
 };

 return (
 <div className="fixed inset-0 z-50 flex justify-end">
 {/* Backdrop */}
 <div 
 className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
 onClick={onClose}
 />

 {/* Drawer */}
 <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-250">
 
 {/* Drawer Header */}
 <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
 <div className="flex items-center gap-2">
 <ShoppingBag className="w-5 h-5 text-brand-600" />
 <h2 className="font-extrabold text-base text-slate-900">
 Procurement Cart / RFQ
 </h2>
 <span className="text-xs font-bold bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full">
 {totalUnits}
 </span>
 </div>

 <div className="flex items-center gap-2">
 {items.length > 0 && (
 <button
 onClick={onClearCart}
 className="text-[11px] font-semibold text-slate-400 hover:text-red-600 transition-colors"
 title="Clear all items"
 >
 Clear All
 </button>
 )}
 <button
 onClick={onClose}
 className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
 >
 <X className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Drawer Items List */}
 <div className="flex-1 overflow-y-auto p-5 space-y-4">
 {items.length > 0 ? (
 items.map((item) => (
 <div
 key={item.product.id}
 className="p-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/40 hover:bg-white transition-all space-y-2.5"
 >
 <div className="flex items-start gap-3">
 <div
 onClick={() => {
 onOpenProductDetail(item.product);
 onClose();
 }}
 className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-1 shrink-0 flex items-center justify-center cursor-pointer hover:border-brand-400"
 >
 <img
 src={item.product.imageUrl}
 alt={item.product.name}
 className="max-h-full max-w-full object-contain"
 />
 </div>

 <div className="flex-1 min-w-0">
 <div className="flex items-center justify-between gap-1">
 <span className="text-[10px] font-semibold text-brand-700 bg-brand-50 px-1.5 py-0.2 rounded truncate">
 {item.product.subCategoryName}
 </span>
 <button
 onClick={() => onRemoveItem(item.product.id)}
 className="text-slate-400 hover:text-red-500 p-0.5"
 title="Remove item"
 >
 <Trash2 className="w-3.5 h-3.5" />
 </button>
 </div>

 <h4
 onClick={() => {
 onOpenProductDetail(item.product);
 onClose();
 }}
 className="font-bold text-xs text-slate-900 mt-1 hover:text-brand-600 cursor-pointer line-clamp-1"
 >
 {item.product.name}
 </h4>

 <div className="flex items-center gap-1.5 mt-0.5">
 <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
 Wholesale B2B Inquiry
 </span>
 </div>
 </div>
 </div>

 {/* Quantity Controls & Line Subtotal */}
 <div className="flex items-center justify-between pt-2 border-t border-slate-100">
 <div className="flex items-center border border-slate-200 rounded-lg bg-white">
 <button
 onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
 className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-l"
 >
 <Minus className="w-3 h-3" />
 </button>
 <span className="w-8 text-center text-xs font-bold text-slate-800">
 {item.quantity}
 </span>
 <button
 onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
 className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-r"
 >
 <Plus className="w-3 h-3" />
 </button>
 </div>

 <div className="text-right">
 <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
 {item.quantity} {item.quantity === 1 ? 'unit' : 'units'}
 </span>
 </div>
 </div>
 </div>
 ))
 ) : (
 <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
 <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
 <ShoppingBag className="w-8 h-8" />
 </div>
 <div>
 <h3 className="text-sm font-bold text-slate-900">Your Quote Cart is empty</h3>
 <p className="text-xs text-slate-500 mt-1">
 Add medical equipment from our structured product catalog to request wholesale quotes.
 </p>
 </div>
 <button
 onClick={onClose}
 className="mt-2 px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs"
 >
 Browse Catalog
 </button>
 </div>
 )}
 </div>

 {/* Drawer Footer Checkout & Quote CTA */}
 {items.length > 0 && (
 <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
 <div className="space-y-1.5 text-xs">
 <div className="flex justify-between text-slate-500">
 <span>Selected Products:</span>
 <span className="font-semibold text-slate-800">{items.length} items</span>
 </div>
 <div className="flex justify-between text-slate-500">
 <span>Total Units Requested:</span>
 <span className="font-semibold text-slate-800">{totalUnits} units</span>
 </div>
 <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">
 <span className="text-xs font-extrabold text-slate-900 block">
 Wholesale B2B Pricing via WhatsApp Desk
 </span>
 <span className="text-[10px] text-slate-500 block mt-0.5">
 Proforma invoice & GST breakdown generated on request
 </span>
 </div>
 </div>

 <div className="pt-1 space-y-2">
 {onOpenQuoteGenerator && (
 <button
 type="button"
 onClick={() => {
 onClose();
 onOpenQuoteGenerator();
 }}
 className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
 >
 <FileText className="w-4 h-4 text-sky-400" />
 <span>Generate Official PDF Quotation</span>
 </button>
 )}

 <a
 href={generateWhatsAppMessage()}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
 >
 <PhoneCall className="w-4 h-4" />
 <span>Request B2B RFQ via WhatsApp</span>
 </a>

 <p className="text-[10px] text-center text-slate-400 leading-tight">
 Direct procurement dispatch from Phexal Central Warehouse with full CE & statutory compliance verification.
 </p>
 </div>
 </div>
 )}
 </div>
 </div>
 );
};
