import { motion } from 'framer-motion'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useShop } from '../../context/ShopContext'

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useShop()

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
            className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors"
        >
            {/* Image */}
            <div className="w-20 h-20 bg-white/5 rounded-xl overflow-hidden shrink-0 relative">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex-grow min-w-0 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start gap-2">
                        <h4 className="font-playfair text-white text-sm truncate pr-2">{item.name}</h4>
                        <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-gray-500 hover:text-red-400 transition-colors shrink-0"
                            aria-label="Remove item"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>

                    {/* Attributes */}
                    <div className="flex flex-wrap gap-1 mt-1">
                        {item.attributes && Object.entries(item.attributes).map(([key, value]) => (
                            <span key={key} className="text-[10px] uppercase tracking-wide text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                                {value}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer: Price & Quantity */}
                <div className="flex items-center justify-between mt-2">
                    <span className="font-lato text-rarity-gold text-sm">${item.price.toFixed(2)}</span>

                    <div className="flex items-center gap-3 bg-rarity-navy rounded-full px-2 py-1 border border-white/10">
                        <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Minus size={12} />
                        </button>
                        <span className="text-xs font-mono text-white w-4 text-center">{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Plus size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CartItem
