import { useState, useEffect, useMemo, useCallback } from 'react';
import { Product } from '../data/catalog';

export interface CartItem {
 product: Product;
 quantity: number;
}

export function useCart() {
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

 const addToCart = useCallback((product: Product, quantity: number = 1) => {
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
 }, []);

 const updateQuantity = useCallback((productId: string, quantity: number) => {
 if (quantity <= 0) {
 setCartItems(prev => prev.filter(item => item.product.id !== productId));
 return;
 }
 setCartItems(prev =>
 prev.map(item =>
 item.product.id === productId ? { ...item, quantity } : item
 )
 );
 }, []);

 const removeItem = useCallback((productId: string) => {
 setCartItems(prev => prev.filter(item => item.product.id !== productId));
 }, []);

 const clearCart = useCallback(() => {
 setCartItems([]);
 }, []);

 const totalCount = useMemo(() => {
 return cartItems.reduce((sum, item) => sum + item.quantity, 0);
 }, [cartItems]);

 return {
 cartItems,
 addToCart,
 updateQuantity,
 removeItem,
 clearCart,
 totalCount,
 };
}
