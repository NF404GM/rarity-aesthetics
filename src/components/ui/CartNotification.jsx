import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Check } from 'lucide-react'
import { useShop } from '../../context/ShopContext'

const CartNotification = () => {
    const { notification, closeNotification } = useShop()

    return (
        <AnimatePresence>
            {notification && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    className="fixed bottom-8 right-4 md:right-8 z-[100] flex items-center gap-4 bg-rarity-ink/90 backdrop-blur-md border border-rarity-gold text-white px-6 py-4 rounded-full shadow-glow"
                >
                    <div className="relative">
                        <Sparkles className="w-6 h-6 text-rarity-gold animate-spin-slow" />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.5, 0] }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-rarity-gold rounded-full blur-md opacity-50"
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-playfair italic text-lg text-rarity-gold">Added to Cart</span>
                        {notification.productName && (
                            <span className="text-xs font-lato text-gray-300 uppercase tracking-wide max-w-[200px] truncate">
                                {notification.productName}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={closeNotification}
                        className="ml-2 hover:text-rarity-gold transition-colors"
                    >
                        <Check className="w-5 h-5" />
                    </button>

                    {/* Progress bar for auto-dismiss */}
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bottom-0 left-6 right-6 h-[2px] bg-rarity-gold/30"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CartNotification
