import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import Button from '../ui/Button'
import { useShop } from '../../context/ShopContext'

const ProductModal = ({ product, isOpen, onClose }) => {
    const { addToCart } = useShop()
    const [quantity, setQuantity] = useState(1)
    const [selectedAttributes, setSelectedAttributes] = useState({})

    // Reset state when product changes
    useEffect(() => {
        if (product) {
            setQuantity(1)
            // Default selections (first option for each attribute)
            const defaults = {}
            product.attributes?.forEach(attr => {
                defaults[attr.name] = attr.options[0]
            })
            setSelectedAttributes(defaults)
        }
    }, [product])

    if (!product) return null

    const handleAttributeSelect = (name, value) => {
        setSelectedAttributes(prev => ({ ...prev, [name]: value }))
    }

    const handleAddToCart = () => {
        addToCart(product.id, quantity, selectedAttributes)
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-rarity-navy border border-white/10 rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden pointer-events-auto flex flex-col md:flex-row shadow-2xl">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-48 md:h-auto relative bg-white/5">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 left-4 md:hidden bg-white/80 text-rarity-ink p-2 rounded-full backdrop-blur-md"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-5 md:p-8 lg:p-12 overflow-y-auto max-h-[60vh] md:max-h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="font-playfair text-3xl md:text-4xl text-rarity-ink mb-2 italic">
                                            {product.name}
                                        </h2>
                                        <p className="text-rarity-gold text-xl font-lato">${product.price.toFixed(2)}</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="hidden md:block text-rarity-ink/50 hover:text-rarity-ink transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="prose prose-invert prose-sm mb-8 font-lato text-gray-600">
                                    <p>{product.description}</p>
                                </div>

                                {/* Attributes */}
                                <div className="space-y-6 mb-8">
                                    {product.attributes?.map((attr) => (
                                        <div key={attr.name}>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">
                                                {attr.name}
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {attr.options.map((option) => (
                                                    <button
                                                        key={option}
                                                        onClick={() => handleAttributeSelect(attr.name, option)}
                                                        className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${selectedAttributes[attr.name] === option
                                                            ? 'bg-rarity-gold border-rarity-gold text-rarity-ink font-bold'
                                                            : 'bg-white/40 border-white/40 text-gray-600 hover:border-rarity-gold hover:text-rarity-ink'
                                                            }`}
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto border-t border-white/20 pt-8">
                                    <div className="flex items-center gap-6 mb-6">
                                        <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Quantity</span>
                                        <div className="flex items-center gap-4 bg-white/40 rounded-full px-4 py-2 border border-white/40">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="text-rarity-ink hover:text-rarity-gold transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="text-rarity-ink font-mono w-8 text-center">{quantity}</span>
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="text-rarity-ink hover:text-rarity-gold transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handleAddToCart}
                                        variant="custom"
                                        className="w-full justify-center py-4 text-sm bg-white text-rarity-ink hover:bg-rarity-gold hover:text-white font-bold tracking-widest uppercase"
                                        icon={ShoppingBag}
                                    >
                                        Add to Cart — ${(product.price * quantity).toFixed(2)}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ProductModal
