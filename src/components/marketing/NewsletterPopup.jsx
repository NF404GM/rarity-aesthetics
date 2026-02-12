import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Cloud } from 'lucide-react'
import Button from '../ui/Button'

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        // key to track if popup has been shown
        const hasSeenPopup = sessionStorage.getItem('rarity_newsletter_seen')

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true)
                sessionStorage.setItem('rarity_newsletter_seen', 'true')
            }, 5000) // 5 second delay

            return () => clearTimeout(timer)
        }
    }, [])

    const handleClose = () => {
        setIsVisible(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate API call
        setSubmitted(true)
        setTimeout(() => {
            setIsVisible(false)
        }, 3000)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-rarity-navy/60 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    {/* Cloud Container Wrapper - Uses drop-shadow to create the "border" around the complex shape */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            transition: { type: "spring", duration: 0.8, bounce: 0.4 }
                        }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        // Floating Animation
                        whileHover={{ scale: 1.02 }}
                        className="relative filter drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-500"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* THE CLOUD SHAPE COMPOSITION */}
                        <div className="relative w-full max-w-md">

                            {/* Cloud Bumps (Absolute positioned circles) */}
                            <div className="absolute -top-12 left-8 w-32 h-32 bg-rarity-navy rounded-full" />
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-rarity-navy rounded-full" />
                            <div className="absolute -top-10 right-8 w-28 h-28 bg-rarity-navy rounded-full" />

                            {/* Main Body */}
                            <div className="relative bg-rarity-navy rounded-[3rem] p-8 pt-12 md:p-12 text-center pb-16">

                                {/* Close Button (Floating) */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-[-3rem] right-0 z-20 bg-white text-rarity-navy p-2 rounded-full shadow-lg hover:bg-rarity-gold hover:text-white transition-all duration-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="mb-2 flex justify-center">
                                        <Sparkles className="w-6 h-6 text-rarity-gold animate-pulse" />
                                    </div>

                                    <h2 className="font-playfair text-3xl md:text-4xl text-rarity-ink italic mb-2">
                                        Welcome Lash Angel
                                    </h2>

                                    <p className="font-montserrat text-rarity-gold text-[10px] uppercase tracking-[0.2em] mb-6 font-bold">
                                        Join the clouds & save 10%
                                    </p>

                                    {!submitted ? (
                                        <>
                                            <p className="font-lato text-gray-600 text-sm mb-6 leading-relaxed">
                                                Unlock your <span className="text-rarity-ink font-bold">VIP discount</span> (+ free styling guide) when you verify your email below.
                                            </p>

                                            <form onSubmit={handleSubmit} className="w-full space-y-4">
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        placeholder="Your Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                        className="w-full bg-white/40 border border-white/40 text-rarity-ink px-6 py-3 rounded-full focus:outline-none focus:border-rarity-gold transition-colors font-lato placeholder:text-gray-500 text-center"
                                                    />
                                                </div>
                                                <Button type="submit" variant="primary" className="w-full justify-center rounded-full bg-rarity-gold text-white font-bold hover:bg-white hover:text-rarity-gold">
                                                    GET MY CODE: RARE
                                                </Button>
                                            </form>
                                        </>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="py-4"
                                        >
                                            <div className="w-16 h-16 bg-rarity-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Cloud className="w-8 h-8 text-rarity-gold" />
                                            </div>
                                            <p className="font-playfair text-xl text-rarity-ink">You're in!</p>
                                            <p className="font-lato text-sm text-gray-500 mt-2">Check your inbox for your code.</p>
                                        </motion.div>
                                    )}

                                    <div className="mt-8 opacity-40">
                                        {/* Decorative element */}
                                        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default NewsletterPopup
