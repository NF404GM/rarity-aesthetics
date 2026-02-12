import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import Button from '../components/ui/Button'
import SEO from '../components/core/SEO'
import ProductModal from '../components/shop/ProductModal'
import { Plus, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react'
import shopBanner from '../assets/Shop_banner_image.png'
import RecentlyViewed, { addToRecentlyViewed } from '../components/shop/RecentlyViewed'

const categories = ['All', 'Collections', 'Adhesives', 'Tools', 'Accessories', 'Apparel']

const Shop = () => {
    const { products, addToCart } = useShop()
    const [activeCategory, setActiveCategory] = useState('All')
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const filteredProducts = activeCategory === 'All'
        ? products
        : products?.filter(p => p.category === activeCategory)

    // Featured Product
    const matteDreams = products?.find(p => p.id === 'matte-dreams')

    const handleProductClick = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
        addToRecentlyViewed(product.id)
    }

    const handleQuickAdd = (e, product) => {
        e.stopPropagation() // Prevent modal opening if we just want to add
        // If product has attributes, we MUST open modal to select them
        if (product.attributes && product.attributes.length > 0) {
            handleProductClick(product)
        } else {
            addToCart(product.id)
        }
    }

    return (
        <div className="bg-rarity-navy min-h-screen font-sans">
            <SEO title="The Lab | Shop Rarity" description="Premium lash supplies for professionals." canonical="/shop" />

            {/* ─── HERO BANNER ─── */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={shopBanner}
                        alt="The Lab — Rarity Aesthetics Shop"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-rarity-navy/40 via-transparent to-rarity-navy" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-rarity-gold font-montserrat text-xs tracking-[0.4em] uppercase font-bold mb-4"
                    >
                        Professional Grade Supplies
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="font-playfair text-5xl md:text-6xl lg:text-9xl text-white italic"
                    >
                        The Lab
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="font-lato text-white/60 text-sm md:text-base mt-4 tracking-wide max-w-md"
                    >
                        Curated tools & materials used daily in our studio
                    </motion.p>
                </div>
            </section>

            <div className="max-w-[1600px] mx-auto px-6 pb-20">

                {/* ─── MATTE DREAMS PROMO STRIP ─── */}
                {matteDreams && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => handleProductClick(matteDreams)}
                        className="relative -mt-12 mb-16 cursor-pointer group"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-rarity-gold/20 bg-rarity-ink/60 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.08)] hover:shadow-[0_0_60px_rgba(212,175,55,0.15)] transition-all duration-500">
                            {/* Subtle shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rarity-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: 'transform 1.2s ease, opacity 0.5s ease' }} />

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-5">
                                {/* Left: Badge + Title */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rarity-gold/10 border border-rarity-gold/20">
                                        <Sparkles className="w-4 h-4 text-rarity-gold animate-pulse" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-montserrat font-bold uppercase tracking-[0.15em] text-rarity-gold bg-rarity-gold/10 px-2.5 py-1 rounded-full">New</span>
                                            <h3 className="font-playfair text-xl md:text-2xl text-white italic">Matte Dreams Collection</h3>
                                        </div>
                                        <p className="font-lato text-gray-400 text-xs mt-1 hidden sm:block">
                                            Our signature ultra-lightweight, matte-finish lash trays — now available
                                        </p>
                                    </div>
                                </div>

                                {/* Center: Bundle Deal */}
                                <div className="hidden lg:flex items-center gap-3 px-5 py-2 bg-white/5 rounded-full border border-white/10">
                                    <Sparkles className="w-3.5 h-3.5 text-rarity-gold" />
                                    <span className="text-xs text-white/80 uppercase tracking-widest font-bold">Buy 6 Get 1 Free</span>
                                </div>

                                {/* Right: CTA */}
                                <div className="flex items-center gap-3 text-rarity-gold group-hover:text-white transition-colors duration-300">
                                    <span className="font-montserrat text-xs font-bold uppercase tracking-widest">Shop Now</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Filter Bar */}
                <div className="sticky top-24 z-40 bg-rarity-navy/80 backdrop-blur-xl py-6 mb-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h2 className="font-playfair text-3xl text-white">The Catalog</h2>
                    <div className="flex gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 md:px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${activeCategory === cat ? 'bg-white text-rarity-navy font-bold' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-16">
                    {filteredProducts?.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                            onClick={() => handleProductClick(product)}
                        >
                            {/* Card Image */}
                            <div className="relative aspect-[4/5] bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6 cursor-pointer">
                                {product.badge && (
                                    <div className="absolute top-4 left-4 z-20 bg-rarity-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {product.badge}
                                    </div>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Quick Add Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button
                                        onClick={(e) => handleQuickAdd(e, product)}
                                        className="bg-white text-rarity-navy px-8 py-3 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest hover:bg-rarity-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                                    >
                                        {product.attributes ? 'Select Options' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="font-lato font-bold text-lg text-white mb-1 group-hover:text-rarity-gold transition-colors line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">{product.category}</p>
                                </div>
                                <span className="font-playfair text-xl text-rarity-gold italic whitespace-nowrap">
                                    ${product.price}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Recently Viewed Strip */}
                <RecentlyViewed />
            </div>

            {/* Product Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default Shop
