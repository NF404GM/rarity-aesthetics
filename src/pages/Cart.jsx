import { useShop } from '../context/ShopContext'
import Button from '../components/ui/Button'
import SEO from '../components/core/SEO'
import CartItem from '../components/shop/CartItem'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ShieldCheck, Truck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Cart = () => {
    const {
        cart,
        cartCount,
        subtotal,
        discount,
        shipping,
        total
    } = useShop()

    return (
        <div className="bg-rarity-navy min-h-screen pt-40 pb-20 px-6">
            <SEO title="Concierge Cart | Rarity Aesthetics" description="Review your curated selection." canonical="/cart" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="font-playfair text-5xl md:text-7xl text-white mb-4 italic">Concierge.</h1>
                        <p className="font-lato text-gray-400 text-lg">
                            {cartCount} {cartCount === 1 ? 'item' : 'items'} in your collection
                        </p>
                    </div>
                    <Link to="/shop" className="group flex items-center gap-2 text-rarity-gold hover:text-white transition-colors mt-4 md:mt-0 font-bold uppercase tracking-widest text-xs">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Continue Curating
                    </Link>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-white/5 backdrop-blur-sm">
                        <p className="font-playfair text-3xl text-white/50 mb-8 italic">Your collection is empty.</p>
                        <Button variant="primary" to="/shop">Explore The Lab</Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatePresence mode='popLayout'>
                                {cart.map((item) => (
                                    <CartItem key={item.cartItemId} item={item} />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Right Column: Summary */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 bg-rarity-ink/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <h3 className="font-playfair text-2xl text-white mb-6 italic">Order Summary</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-gray-300 font-lato">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>

                                    {discount > 0 && (
                                        <div className="flex justify-between text-rarity-gold font-bold bg-rarity-gold/10 p-2 rounded-lg border border-rarity-gold/20">
                                            <span>Bundle Savings</span>
                                            <span>-${discount.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between text-gray-300 font-lato">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
                                    </div>

                                    {shipping > 0 && (
                                        <div className="text-xs text-gray-500 text-right">
                                            Add ${Math.max(0, 100 - (subtotal - discount)).toFixed(2)} more for free shipping
                                        </div>
                                    )}

                                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                        <span className="font-playfair text-xl text-white">Total</span>
                                        <div className="text-right">
                                            <span className="block font-playfair text-3xl text-white">${total.toFixed(2)}</span>
                                            <span className="text-xs text-gray-500">USD</span>
                                        </div>
                                    </div>
                                </div>

                                <Button variant="primary" className="w-full justify-center py-4 mb-6 group text-lg">
                                    <span>Proceed to Checkout</span>
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <div className="space-y-3 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                                        <ShieldCheck className="w-4 h-4 text-rarity-gold" />
                                        <span>Secure SSL Encryption</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                                        <Truck className="w-4 h-4 text-rarity-gold" />
                                        <span>Ships within 24 hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
