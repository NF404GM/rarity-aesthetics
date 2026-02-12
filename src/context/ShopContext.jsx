import { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from local storage on init
    useEffect(() => {
        const savedCart = localStorage.getItem('rarity-cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to local storage on change
    useEffect(() => {
        localStorage.setItem('rarity-cart', JSON.stringify(cart));
    }, [cart]);

    const [notification, setNotification] = useState(null)

    const showNotification = (productName) => {
        setNotification({ productName })
        // Auto hide after 3 seconds
        setTimeout(() => {
            setNotification(null)
        }, 3000)
    }

    const closeNotification = () => setNotification(null)

    const addToCart = (productId, quantity = 1, attributes = {}) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Create a unique ID for the cart item based on product ID and selected attributes
        // This allows adding the same product with different attributes as separate line items
        const attributeKey = JSON.stringify(attributes);
        const cartItemId = `${productId}-${attributeKey}`;

        setCart(prev => {
            const existing = prev.find(item => item.cartItemId === cartItemId);
            if (existing) {
                return prev.map(item =>
                    item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity, attributes, cartItemId }]; // Store attributes and unique ID
        });

        // Trigger Notification
        showNotification(product.name)

        // Removed: setIsCartOpen(true); // Don't auto-open cart if we have a notification
    };

    const removeFromCart = (cartItemId) => {
        setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    };

    const updateQuantity = (cartItemId, quantity) => {
        if (quantity < 1) return removeFromCart(cartItemId);
        setCart(prev => prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity } : item));
    };

    const clearCart = () => setCart([]);

    // Calculate totals - need to update to use cartItemId logic if necessary, but price/quantity remains same
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Bundle Logic remains the same as it likely ignores attributes for bundling eligibility
    // ... (Bundle logic omitted for brevity as it doesn't need changing)
    const getBundleDiscount = () => {
        let eligibleItems = [];
        cart.forEach(item => {
            if (item.bundleEligible) {
                for (let i = 0; i < item.quantity; i++) {
                    eligibleItems.push(item.price);
                }
            }
        });

        eligibleItems.sort((a, b) => a - b);
        const count = eligibleItems.length;
        // Sets of 12 (buy 10 get 2 free) -> 2 free per 12
        // Remainder sets of 7 (buy 6 get 1 free) -> 1 free per 7
        const setsOf12 = Math.floor(count / 12);
        const remainder = count % 12;
        const setsOf7 = Math.floor(remainder / 7);

        const freeItemsCount = (setsOf12 * 2) + setsOf7;

        let discountAmount = 0;
        for (let i = 0; i < freeItemsCount; i++) {
            discountAmount += eligibleItems[i];
        }

        return discountAmount;
    }

    const discount = getBundleDiscount();
    const shipping = subtotal - discount > 100 ? 0 : 10;
    const total = subtotal - discount + (subtotal > 0 ? shipping : 0);

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <ShopContext.Provider value={{
            products,
            cart,
            isCartOpen,
            setIsCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            subtotal,
            discount,
            shipping,
            total,
            cartCount,
            notification, // Exported
            closeNotification // Exported
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);
