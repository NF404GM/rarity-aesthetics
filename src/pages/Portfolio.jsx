import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/core/SEO'
import { IMAGES } from '../constants/images'

// Placeholder Portfolio Data (Uses the centralized registry)
const portfolioItems = IMAGES.portfolio

const Portfolio = () => {
    const [filter, setFilter] = useState('All')
    const filters = ['All', 'Natural', 'Volume', 'Mega', 'Wet Look', 'Fox Eye', 'Lash Nap']

    const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter)

    return (
        <div className="bg-rarity-navy min-h-screen pt-28 md:pt-40 pb-20 px-4 md:px-6">
            <SEO title="Portfolio | Rarity Aesthetics" description="A gallery of our finest work." canonical="/portfolio" />

            <div className="max-w-[1600px] mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 border-b border-white/10 pb-10">
                    <h1 className="font-playfair text-5xl md:text-6xl lg:text-9xl text-white leading-none">WORK</h1>

                    <div className="flex flex-wrap gap-3 md:gap-8 mt-6 md:mt-0">
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] transition-colors ${filter === f ? 'text-rarity-gold' : 'text-gray-500 hover:text-white'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </header>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                key={item.id}
                                className="aspect-[4/5] bg-white/5 overflow-hidden group relative"
                            >
                                <img src={item.src} alt={item.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-rarity-navy/80 backdrop-blur-md px-3 py-1 text-white text-[10px] uppercase tracking-widest border border-white/10">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default Portfolio
