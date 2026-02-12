import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles } from 'lucide-react'

const NotFound = () => {
    return (
        <div className="bg-rarity-navy min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">
            {/* Decorative floating sparkles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                            y: [0, -60],
                            x: Math.random() * 40 - 20,
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            delay: i * 0.7,
                            repeat: Infinity,
                            repeatDelay: 1 + Math.random() * 2,
                        }}
                        className="absolute text-rarity-gold/40"
                        style={{
                            left: `${15 + Math.random() * 70}%`,
                            top: `${30 + Math.random() * 40}%`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                    </motion.div>
                ))}
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rarity-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-lg relative z-10"
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase font-bold mb-6 block"
                >
                    Lost in the Details
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-playfair text-8xl md:text-[10rem] text-white italic leading-none mb-4"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-playfair text-xl md:text-2xl text-white/60 italic mb-2"
                >
                    This page slipped away
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="font-lato text-gray-400 text-sm mb-12 leading-relaxed"
                >
                    Like a perfect lash, some things are meant to be placed with intention.
                    <br />Let's get you back where you belong.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-rarity-gold text-rarity-ink px-10 py-4 rounded-full font-montserrat text-xs font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-500"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <Link
                        to="/services"
                        className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-4 rounded-full font-montserrat text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500"
                    >
                        View Services
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default NotFound
