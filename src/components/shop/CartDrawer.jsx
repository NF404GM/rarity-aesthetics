import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react'
import { useShop } from '../../context/ShopContext'
import Button from '../ui/Button'
import CartItem from './CartItem'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const CartDrawer = () => {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        subtotal,
        discount,
        shipping,
        total
    } = useShop()

    const navigate = useNavigate()

    const handleCheckout = () => {
        setIsCartOpen(false)
        navigate('/cart')
    }

    // Bundle Progress Logic
    const bundleEligibleCount = cart.filter(i => i.bundleEligible).reduce((acc, i) => acc + i.quantity, 0)
    // Next goal: 7 (Buy 6 get 1) or 12 (Buy 10 get 2)
    // If < 7, goal is 7. If >= 7, goal is 12. If >= 12, cycle (modulo)
    // Simplified visual logic:
    const nextGoal = bundleEligibleCount < 7 ? 7 : 12
    const progress = Math.min((bundleEligibleCount / nextGoal) * 100, 100)
    const itemsNeeded = Math.max(0, nextGoal - bundleEligibleCount)

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setIsCartOpen(false)
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [setIsCartOpen])

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-[75] w-full max-w-md bg-rarity-navy/95 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <h2 className="font-playfair text-2xl text-white italic">Your Collection</h2>
                                <span className="bg-rarity-gold text-rarity-ink text-xs font-bold px-2 py-1 rounded-full">{cartCount}</span>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Bundle Progress */}
                        {bundleEligibleCount > 0 && itemsNeeded > 0 && (
                            <div className="bg-rarity-gold/10 px-6 py-3 border-b border-rarity-gold/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-3 h-3 text-rarity-gold" />
                                    <p className="text-xs text-rarity-gold uppercase tracking-wider font-bold">
                                        Add {itemsNeeded} more for a free tray
                                    </p>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        className="h-full bg-rarity-gold"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Cart Items */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-4">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                                    <ShoppingBag size={48} className="text-gray-600" />
                                    <p className="font-playfair text-xl text-gray-400">Your collection is empty</p>
                                    <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                                        Start Curating
                                    </Button>
                                </div>
                            ) : (
                                <AnimatePresence mode='popLayout'>
                                    {cart.map((item) => (
                                        <CartItem key={item.cartItemId} item={item} />
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 bg-white/5 border-t border-white/10 space-y-4">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-rarity-gold font-bold">
                                            <span>Bundle Savings</span>
                                            <span>-${discount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-gray-400">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="flex justify-between text-white font-playfair text-xl pt-2 border-t border-white/10">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleCheckout}
                                    variant="primary"
                                    className="w-full justify-between group"
                                >
                                    <span>Checkout</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default CartDrawer
