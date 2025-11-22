import { CartItem } from "./cart-item.model"
import { Product } from "./product.model"

export interface CartContextType {
    isOpen: boolean
    cartItems: CartItem[]
    itemsCount: number
    totalPrice: number
    setIsOpen: (value: boolean) => void
    addToCart: (product: Product) => void
    setCartItems: (product: Product) => void
    deleteCartItem: (id: number) => void


}