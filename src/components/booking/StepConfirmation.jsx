import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Calendar, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sparkle = ({ delay }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
            y: -100
        }}
        transition={{
            duration: 2,
            delay: delay,
            repeat: Infinity,
            repeatDelay: 3
        }}
        className="absolute top-1/2 left-1/2 w-4 h-4 text-rarity-gold"
    >
        ✨
    </motion.div>
)

const StepConfirmation = ({ bookingData }) => {
    return (
        <div className="text-center py-12 relative overflow-visible">
            <div className="relative inline-block mx-auto mb-8">
                {/* Sparkles Animation */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-rarity-gold text-2xl"
                            initial={{
                                x: 0,
                                y: 0,
                                opacity: 0,
                                scale: 0
                            }}
                            animate={{
                                x: `${(Math.random() - 0.5) * 200}px`,
                                y: `${(Math.random() - 0.5) * 200}px`,
                                opacity: [0, 1, 0],
                                scale: [0, 1.2, 0],
                                rotate: Math.random() * 360
                            }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }} // One-shot explosion
                        >
                            ✦
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 w-24 h-24 bg-rarity-gold rounded-full flex items-center justify-center shadow-2xl shadow-rarity-gold/30"
                >
                    <Check className="w-12 h-12 text-white" />
                </motion.div>
            </div>

            <h2 className="font-playfair text-4xl text-rarity-ink mb-4">You're Booked!</h2>
            <p className="font-lato text-gray-500 mb-12 max-w-md mx-auto">
                Thank you, {bookingData.form.name.split(' ')[0]}. Currently this is a demo, but your spot for {bookingData.service.title} is locked in spirit!
            </p>

            <div className="bg-white/60 p-8 rounded-3xl max-w-sm mx-auto mb-12 text-left space-y-4">
                <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-rarity-gold" />
                    <span className="font-lato text-rarity-ink">
                        {bookingData.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-rarity-gold" />
                    <span className="font-lato text-rarity-ink">{bookingData.time}</span>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-rarity-gold" />
                    <span className="font-lato text-rarity-ink">9101 Pearl St, Thornton, CO</span>
                </div>
            </div>

            <Link
                to="/"
                className="bg-rarity-ink text-white px-8 py-4 rounded-full font-montserrat text-xs uppercase tracking-widest hover:bg-rarity-gold transition-colors"
                onClick={() => window.scrollTo(0, 0)}
            >
                Return Home
            </Link>
        </div>
    )
}

export default StepConfirmation
