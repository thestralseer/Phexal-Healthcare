import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
 CATEGORIES, 
 PRODUCTS, 
 Product, 
 Category 
} from './data/catalog';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { CDSCOCertificateModal } from './components/compliance/CDSCOCertificateModal';
import { ComplianceVaultModal } from './components/compliance/ComplianceVaultModal';
import { QuotationGeneratorModal } from './components/QuotationGeneratorModal';
import { EmergencySpeedDial } from './components/EmergencySpeedDial';
import { ProductDetailModal } from './components/ProductDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductPage } from './pages/ProductPage';
import { QualityPage } from './pages/QualityPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top or hash anchor on route change
const ScrollToTop: React.FC = () => {
 const { pathname, hash } = useLocation();

 useEffect(() => {
 if (hash) {
 const id = hash.replace('#', '');
 const timer = setTimeout(() => {
 const element = document.getElementById(id);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 }, 150);
 return () => clearTimeout(timer);
 } else {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 }
 }, [pathname, hash]);

 return null;
};

// Root Layout Component with persistent Navbar, Cart Drawer, CDSCO Modal, and Footer
const MainLayout: React.FC = () => {
 const navigate = useNavigate();
 const location = useLocation();

 // Global State
 const [searchQuery, setSearchQuery] = useState<string>('');
 const [isCDSCOModalOpen, setIsCDSCOModalOpen] = useState<boolean>(false);
 const [isComplianceVaultOpen, setIsComplianceVaultOpen] = useState<boolean>(false);
 const [isQuoteGeneratorOpen, setIsQuoteGeneratorOpen] = useState<boolean>(false);
 const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
 const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

 // Cart State (stored with localStorage persistence)
 const [cartItems, setCartItems] = useState<CartItem[]>(() => {
 try {
 const saved = localStorage.getItem('phx_cart');
 return saved ? JSON.parse(saved) : [];
 } catch {
 return [];
 }
 });

 useEffect(() => {
 try {
 localStorage.setItem('phx_cart', JSON.stringify(cartItems));
 } catch (e) {
 console.error('Failed to save cart to localStorage', e);
 }
 }, [cartItems]);

 // Cart Operations
 const handleAddToCart = (product: Product, quantity: number = 1) => {
 setCartItems(prev => {
 const existingIndex = prev.findIndex(item => item.product.id === product.id);
 if (existingIndex > -1) {
 const next = [...prev];
 next[existingIndex].quantity += quantity;
 return next;
 } else {
 return [...prev, { product, quantity }];
 }
 });
 };

 const handleUpdateCartQuantity = (productId: string, quantity: number) => {
 if (quantity <= 0) {
 handleRemoveCartItem(productId);
 return;
 }
 setCartItems(prev =>
 prev.map(item =>
 item.product.id === productId ? { ...item, quantity } : item
 )
 );
 };

 const handleRemoveCartItem = (productId: string) => {
 setCartItems(prev => prev.filter(item => item.product.id !== productId));
 };

 const handleClearCart = () => {
 setCartItems([]);
 };

 const totalCartCount = useMemo(() => {
 return cartItems.reduce((sum, item) => sum + item.quantity, 0);
 }, [cartItems]);

 // Read active category from URL search params if on /catalog
 const searchParams = new URLSearchParams(location.search);
 const activeCategoryId = searchParams.get('category');
 const activeSubCategoryId = searchParams.get('subcategory');

 const handleSelectCategory = (categoryId: string | null, subCategoryId?: string | null) => {
 let targetUrl = '/catalog';
 const params = new URLSearchParams();
 if (categoryId) params.set('category', categoryId);
 if (subCategoryId) params.set('subcategory', subCategoryId);
 const qs = params.toString();
 if (qs) targetUrl += '?' + qs;
 navigate(targetUrl);
 };

 return (
 <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500/20 selection:text-brand-700">
 <ScrollToTop />

 {/* ── Persistent Multi-Tier Navbar ── */}
 <Navbar
 categories={CATEGORIES}
 activeCategoryId={activeCategoryId}
 activeSubCategoryId={activeSubCategoryId}
 onSelectCategory={handleSelectCategory}
 searchQuery={searchQuery}
 onSearchChange={setSearchQuery}
 cartCount={totalCartCount}
 onOpenCart={() => setIsCartOpen(true)}
 onOpenCDSCOModal={() => setIsCDSCOModalOpen(true)}
 onSelectProduct={(product: Product) => setSelectedProduct(product)}
 />

 {/* ── Main Page Outlet ── */}
 <div className="flex-1 w-full">
 <Outlet
 context={{
 searchQuery,
 setSearchQuery,
 addToCart: handleAddToCart,
 totalCartCount,
 onOpenCart: () => setIsCartOpen(true),
 onOpenCDSCOModal: () => setIsCDSCOModalOpen(true),
 onSelectProduct: (product: Product) => setSelectedProduct(product),
 }}
 />
 </div>

 {/* ── Global Cart / RFQ Drawer ── */}
 <CartDrawer
 isOpen={isCartOpen}
 onClose={() => setIsCartOpen(false)}
 items={cartItems}
 onUpdateQuantity={handleUpdateCartQuantity}
 onRemoveItem={handleRemoveCartItem}
 onClearCart={handleClearCart}
 onOpenProductDetail={(prod) => setSelectedProduct(prod)}
 onOpenQuoteGenerator={() => setIsQuoteGeneratorOpen(true)}
 />

 {/* ── Global CDSCO Form MD-42 Modal ── */}
 <CDSCOCertificateModal
 isOpen={isCDSCOModalOpen}
 onClose={() => setIsCDSCOModalOpen(false)}
 />

 {/* ── Global Compliance Vault Modal (CDSCO, CDSCO MD-42, CE, WHO-GMP) ── */}
 <ComplianceVaultModal
 isOpen={isComplianceVaultOpen}
 onClose={() => setIsComplianceVaultOpen(false)}
 />

 {/* ── Global PDF Quotation & Proforma Generator Modal ── */}
 <QuotationGeneratorModal
 isOpen={isQuoteGeneratorOpen}
 onClose={() => setIsQuoteGeneratorOpen(false)}
 initialItems={cartItems}
 />

 {/* ── Global Floating Emergency Speed-Dial Action Dock ── */}
 <EmergencySpeedDial
 onOpenQuoteGenerator={() => setIsQuoteGeneratorOpen(true)}
 onOpenComplianceVault={() => setIsComplianceVaultOpen(true)}
 />

 {/* ── Global Product Detail Modal ── */}
 <ProductDetailModal
 product={selectedProduct}
 onClose={() => setSelectedProduct(null)}
 onAddToCart={handleAddToCart}
 />

 {/* ── Multi-Page Footer ── */}
 <Footer />
 </div>
 );
};

export const App: React.FC = () => {
 return (
 <BrowserRouter>
 <Routes>
 <Route element={<MainLayout />}>
 <Route path="/" element={<HomePage />} />
 <Route path="/catalog" element={<CatalogPage />} />
 <Route path="/product/:productId" element={<ProductPage />} />
 <Route path="/quality" element={<QualityPage />} />
 <Route path="/about" element={<AboutPage />} />
 <Route path="/contact" element={<ContactPage />} />
 <Route path="*" element={<Navigate to="/" replace />} />
 </Route>
 </Routes>
 </BrowserRouter>
 );
};

export default App;
