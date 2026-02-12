import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Clock, Layers } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const tiers = [
    {
        name: 'Natural',
        price: '$215',
        duration: '3 hours',
        density: 'Light',
        description: 'Subtle enhancement that looks like your own lashes, but better.',
        bestFor: 'First-time clients & everyday elegance',
        link: '/services/natural',
        features: ['1:1 classic technique', 'Lightweight feel', 'Custom eye mapping'],
    },
    {
        name: 'Volume',
        price: '$230',
        duration: '3 hours',
        density: 'Medium-Full',
        description: 'Fluffy, multidimensional fans for glamorous fullness.',
        bestFor: 'Special events & glam lovers',
        link: '/services/volume',
        featured: true,
        features: ['Hand-made 3D-6D fans', 'Textured fullness', 'Fluffy finish'],
    },
    {
        name: 'Mega Volume',
        price: '$250',
        duration: '3.5 hours',
        density: 'Maximum',
        description: 'The boldest, darkest, most dramatic lash look possible.',
        bestFor: 'Maximum impact & drama queens',
        link: '/services/mega-volume',
        features: ['Ultra-fine 10D+ fans', 'Darkest density', 'Strip lash effect'],
    },
]

const ServiceComparison = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-rarity-navy">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal variant="fade-up" className="text-center mb-12 md:mb-16">
                    <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                        Compare Styles
                    </span>
                    <h2 className="font-playfair text-3xl md:text-5xl text-white italic">
                        Find Your Perfect Look
                    </h2>
                </ScrollReveal>

                {/* Cards layout — stack on mobile, row on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {tiers.map((tier, i) => (
                        <ScrollReveal key={tier.name} variant="fade-up" delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 h-full flex flex-col ${tier.featured
                                        ? 'bg-rarity-gold/10 border-2 border-rarity-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.1)]'
                                        : 'bg-white/5 border border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {tier.featured && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-rarity-gold text-rarity-ink text-[10px] font-montserrat font-bold uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1.5">
                                            <Sparkles className="w-3 h-3" /> Most Popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="font-playfair text-2xl md:text-3xl text-white italic mb-2">{tier.name}</h3>
                                <p className="text-gray-400 font-lato text-sm mb-6">{tier.description}</p>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="font-playfair text-4xl text-rarity-gold italic">{tier.price}</span>
                                </div>

                                {/* Details */}
                                <div className="space-y-3 mb-6 flex-grow">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                        <span className="text-gray-300">{tier.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Layers className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                        <span className="text-gray-300">Density: {tier.density}</span>
                                    </div>
                                    <div className="pt-3 border-t border-white/10">
                                        <p className="text-xs text-rarity-gold uppercase tracking-wider font-bold mb-2">Includes</p>
                                        <ul className="space-y-1.5">
                                            {tier.features.map(f => (
                                                <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-rarity-gold rounded-full flex-shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-500 italic mb-4">Best for: {tier.bestFor}</p>

                                <Link
                                    to={tier.link}
                                    className={`flex items-center justify-center gap-2 py-3 rounded-full font-montserrat text-xs font-bold uppercase tracking-widest transition-all duration-300 group ${tier.featured
                                            ? 'bg-rarity-gold text-rarity-ink hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]'
                                            : 'border border-white/20 text-white hover:bg-white/10'
                                        }`}
                                >
                                    View Details
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceComparison
