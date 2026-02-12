import { useParams } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import Button from '../components/ui/Button'
import SEO from '../components/core/SEO'
import { useState } from 'react'

const ProductDetail = () => {
    const { id } = useParams()
    const { products, addToCart } = useShop()
    const product = products.find(p => p.id === id)
    const [quantity, setQuantity] = useState(1)

    if (!product) return <div className="text-white pt-40 text-center">Product not found</div>

    return (
        <div className="bg-rarity-navy min-h-screen pt-40 pb-20 px-6">
            <SEO title={`${product.name} | The Lab`} description={product.description} />

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" />
                        </div>
                        <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1616401784845-18088ae9dc85?q=80&w=1968&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" />
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="md:sticky md:top-40 h-fit">
                    <span className="text-rarity-gold text-sm uppercase tracking-widest">{product.category}</span>
                    <h1 className="font-playfair text-5xl md:text-7xl text-white mt-4 mb-8">{product.name}</h1>
                    <p className="font-lato text-gray-400 text-lg leading-relaxed mb-12">
                        {product.description || "Professional grade materials sourced for durability and precision. Used daily in our studio for all master sets."}
                    </p>

                    <div className="flex items-center gap-8 mb-12">
                        <span className="font-playfair text-4xl text-white">${product.price}</span>
                        <div className="flex items-center border border-white/20 rounded-full px-4 py-2">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-white hover:text-rarity-gold">-</button>
                            <span className="text-white px-4 font-mono">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="text-white hover:text-rarity-gold">+</button>
                        </div>
                    </div>

                    <Button
                        onClick={() => addToCart(product.id, quantity)}
                        variant="primary"
                        className="w-full md:w-auto px-12 py-4 text-sm"
                    >
                        Add to Cart — ${(product.price * quantity).toFixed(2)}
                    </Button>

                    <div className="mt-12 border-t border-white/10 pt-8 space-y-4">
                        <div className="flex justify-between items-center text-sm text-gray-400 uppercase tracking-widest cursor-pointer hover:text-white">
                            <span>Dimensions</span>
                            <span>+</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-400 uppercase tracking-widest cursor-pointer hover:text-white">
                            <span>Shipping & Returns</span>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
