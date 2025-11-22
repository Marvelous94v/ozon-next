'use client'

import { createContext, ReactNode, useContext, useState } from "react";
import { CartContextType } from "../models/cart-context.model";
import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.model";

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('Оберните в CartProvider')
    }

    return context
}

export default function CartProvider({ children }: { children: ReactNode }) {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const itemsCount = cartItems.reduce((sum, item) => sum + item.count, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

    const addToCart = (product: Product) => {
        setCartItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [...prev, { ...product, count: 1 }];
        });
    };

    const deleteCartItem = (id: number) => {
        setCartItems(prev => {
            const item = prev.find(i => i.id === id);
            if (!item) return prev;

            if (item.count > 1) {
                return prev.map(i =>
                    i.id === id ? { ...i, count: i.count - 1 } : i
                );
            } else {
                return prev.filter(i => i.id !== id);
            }
        });
    };

    return (
        <CartContext.Provider value={{ isOpen, cartItems, itemsCount, totalPrice, setIsOpen, addToCart, setCartItems, deleteCartItem }}>
            {children}
        </CartContext.Provider>

    )
}