import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useShop } from '../../context/ShopContext'
import { Clock } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const STORAGE_KEY = 'rarity_recently_viewed'
const MAX_ITEMS = 6

// Utility to get/set recently viewed from localStorage
export const addToRecentlyViewed = (productId) => {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        const updated = [productId, ...stored.filter(id => id !== productId)].slice(0, MAX_ITEMS)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch { /* localStorage unavailable */ }
}

const RecentlyViewed = ({ currentProductId }) => {
    const { products } = useShop()
    const [viewedIds, setViewedIds] = useState([])

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
            setViewedIds(stored)
        } catch { /* ignore */ }
    }, [])

    // Filter out current product and only show products that exist
    const recentProducts = viewedIds
        .filter(id => id !== currentProductId)
        .map(id => products?.find(p => p.id === id))
        .filter(Boolean)
        .slice(0, MAX_ITEMS)

    if (recentProducts.length === 0) return null

    return (
        <ScrollReveal variant="fade-up" className="mt-16 mb-8">
            <div className="flex items-center gap-3 mb-6">
                <Clock className="w-4 h-4 text-gray-500" />
                <h3 className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
                    Recently Viewed
                </h3>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
                {recentProducts.map(product => (
                    <motion.div
                        key={product.id}
                        whileTap={{ scale: 0.97 }}
                        className="flex-shrink-0 w-32 sm:w-40 snap-start cursor-pointer group"
                        onClick={() => window.location.href = `/shop/${product.id}`}
                    >
                        <div className="aspect-square bg-white/5 rounded-xl overflow-hidden mb-2">
                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <p className="text-white text-xs font-lato line-clamp-1 group-hover:text-rarity-gold transition-colors">
                            {product.name}
                        </p>
                        <p className="text-rarity-gold text-xs font-playfair italic">${product.price}</p>
                    </motion.div>
                ))}
            </div>
        </ScrollReveal>
    )
}

export default RecentlyViewed
