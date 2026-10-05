# Implementation Plan: Medical Equipment E-Commerce Application

A modern, responsive Medical Equipment E-commerce Application with structured categories, dynamic sub-category filtering, detailed product cards, specifications modal, search, and quote/cart management.

## 1. Project Initialization & Setup
- [x] Initialize Vite + React (TypeScript) + Tailwind CSS application
- [x] Install dependencies: `lucide-react`, `clsx`, `tailwind-merge`
- [x] Configure `tailwind.config.js` with medical-grade professional color palette (clinical teal, cyan, dark slate, surface containers)
- [x] Configure `index.html` and Google Fonts (Plus Jakarta Sans, Inter, Roboto Mono)

## 2. Step 1: Data Model & Taxonomy (`src/data/catalog.ts`)
- [x] Define TypeScript Interfaces:
  - `Product`: id, name, sku, categoryId, subCategoryId, subCategoryName, categoryName, description, price, inStock, rating, reviewsCount, badges, keyFeatures, specs, images, manufacturer, warranty, leadTime, certification
  - `SubCategory`: id, name, categoryId, description, iconName, productCount
  - `Category`: id, name, description, iconName, subCategories
- [x] Populate the 5 Categories and all 12 targeted medical products:
  1. **Respiratory & Airway Management**:
     - *Oxygen Concentrators*: AGEasy Medical Oxygen Concentrator, Longfian Oxygen Concentrator
     - *Sleep & Respiratory Support*: BMC RESmart G2S B30VT BiPAP Machine
     - *Suction & Aspiration*: Medical Suction Machine
  2. **Diagnostic & Monitoring Devices**:
     - *Vital Signs*: Pulse Oximeter – Pediatric
     - *Cardiac Diagnostics*: ECG Recording Paper Rolls
     - *Fetal Monitoring*: Fetal Doppler
  3. **Patient Mobility & Assisted Care**:
     - *Manual Wheelchairs*: AGEasy Manual Wheelchair
  4. **Wellness & Physical Therapy**:
     - *Body Contouring*: G5 Body Contouring & Massage System
     - *Wearable Massagers*: Neck Massager Device
  5. **Clinical Tools & Accessories**:
     - *Dental Diagnostics*: Dental Mouth Mirror
     - *Diagnostic Testers*: Alcohol Breathalyzer / Breath Tester (Phexal Healthcare)

## 3. Step 2: Modular UI Components
- [x] `src/components/Navbar.tsx`:
  - Brand identity & logo (Phexal Healthcare)
  - Global search bar with instant clear and debounce
  - Dynamic navigation dropdowns rendered directly from catalog taxonomy
  - Cart & Quote Drawer trigger with live item count badge
  - Quick WhatsApp consultation CTA
- [x] `src/components/CategorySidebar.tsx`:
  - Multi-level collapsible accordion tree (Category -> Subcategory)
  - Real-time product count badge for each subcategory
  - "All Products" reset filter
  - Mobile slide-over drawer filter trigger
  - "Ready Stock Only" quick toggle
- [x] `src/components/ProductCard.tsx`:
  - Clinical image mockup / placeholder with fallback handling
  - Category and subcategory breadcrumb tag
  - Badges ("Medical Grade", "CE Certified", "Pediatric", "ISO 13485", etc.)
  - Formatted wholesale/retail price (INR / USD)
  - Key technical specifications mini-grid
  - Stock availability status indicator
  - "Add to Cart / Request Quote" button
  - Click card to open full details modal
- [x] `src/components/ProductGrid.tsx`:
  - Responsive auto-fill grid (1 col mobile, 2 col tablet, 3-4 col desktop)
  - Search query and active filter summary banner with clear buttons
  - Sort selector (Price: Low to High, High to Low, Rating, Name)
  - Empty state when no products match filters
- [x] `src/components/ProductDetailModal.tsx`:
  - High-resolution modal with product gallery
  - Complete technical specifications table
  - Key clinical features bullet points
  - Regulatory certifications & standard compliance (CE, FDA, ISO)
  - Clinical usage instructions & maintenance guide
  - Quantity selector and "Add to Quote / Cart" action
- [x] `src/components/CartDrawer.tsx`:
  - Off-canvas slide drawer for cart items
  - Quantity adjustments & item removal
  - Wholesale RFQ summary / Instant WhatsApp RFQ generator
  - Subtotal calculation in INR & USD with commercial terms notice

## 4. Step 3: Main Application Integration & Verification
- [x] Wire state management in `src/App.tsx`:
  - Active category & active subcategory filter
  - Search query state
  - Selected product for detail modal
  - Cart state (items, quantities, open/closed) with localStorage persistence
  - Mobile sidebar drawer open/closed
- [x] Verify responsive layout across mobile (<768px), tablet (<1024px), and desktop (>1024px)
- [x] Test filter combinations, search queries, modal interactions, and cart actions
- [x] Verify production build (`npm run build`) runs cleanly with 0 errors
- [x] Start local development server on `http://localhost:3000`
