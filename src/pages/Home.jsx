import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Heart } from 'lucide-react'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import SEO from '../components/core/SEO'
import { Link } from 'react-router-dom'
import { IMAGES } from '../constants/images'
import heroImage from '../assets/Hero_image_rarity.png'
import ErrorBoundary from '../components/core/ErrorBoundary'
import SocialFeed from '../components/marketing/SocialFeed'
import FloatingGallery from '../components/home/FloatingGallery'

// Cloud Curtain Component for the Reveal Effect
const CloudCurtain = () => {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none flex overflow-hidden">
            {/* Left Curtain */}
            <motion.div
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-1/2 h-full bg-gradient-to-r from-white via-white/95 to-transparent relative"
            >
                {/* Organically shaped cloud puffs */}
                <div className="absolute top-0 right-[-50%] w-[150%] h-full opacity-90 mix-blend-screen"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
                        filter: 'blur(60px)'
                    }}
                />
            </motion.div>

            {/* Right Curtain */}
            <motion.div
                initial={{ x: '0%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-1/2 h-full bg-gradient-to-l from-white via-white/95 to-transparent relative"
            >
                {/* Organically shaped cloud puffs */}
                <div className="absolute top-0 left-[-50%] w-[150%] h-full opacity-90 mix-blend-screen"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
                        filter: 'blur(60px)'
                    }}
                />
            </motion.div>
        </div>
    )
}

const FloatingHeart = ({ delay }) => {
    const randomScale = Math.random() * 0.5 + 0.5 // 0.5 to 1.0
    const peakOpacity = Math.random() * 0.6 + 0.4 // 0.4 to 1.0

    return (
        <motion.div
            initial={{ opacity: 0, y: 0, scale: 0 }}
            animate={{
                opacity: [0, peakOpacity, 0],
                y: -150, // Float higher
                x: Math.random() * 80 - 40, // More wander
                scale: [0, randomScale, 0]
            }}
            transition={{
                duration: Math.random() * 2 + 3, // Slower, more elegant floating (3-5s)
                delay: delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
            }}
            className="absolute text-rarity-gold pointer-events-none z-0"
            style={{ left: `${Math.random() * 100}%`, top: '100%' }}
        >
            <Heart className="w-4 h-4 fill-current" />
        </motion.div>
    )
}

const ServiceSection = ({ title, img, index, link, subtitle }) => {
    return (
        <div className="sticky top-0 h-screen overflow-hidden bg-rarity-navy group md:hidden">
            {/* Background Image with Zoom Effect & Editorial Texture */}
            <div className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-105 rarity-grain rarity-vignette">
                <img src={img} alt={title} className="w-full h-full object-cover opacity-90 sepia-[20%] contrast-125 saturate-[0.8]" />
            </div>

            {/* Gradient Overlay for Text Readability (Bottom Up) */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-rarity-ink/90 via-rarity-ink/40 to-transparent pointer-events-none" />

            {/* Content Block - Editorial Bottom Left */}
            <div className="absolute bottom-0 left-0 p-6 md:p-16 w-full md:max-w-3xl flex flex-col items-start z-10">
                <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase mb-4 block opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    Service 0{index}
                </span>

                <h2 className="font-playfair text-4xl md:text-6xl lg:text-8xl text-white mb-6 italic leading-none drop-shadow-lg">
                    {title}
                </h2>

                <div className="overflow-hidden mb-8">
                    <p className="text-gray-200 font-lato text-lg md:text-xl tracking-wide max-w-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-200">
                        {subtitle}
                    </p>
                </div>

                <Button variant="outline" to={link} className="border-white/30 text-white hover:bg-white hover:text-rarity-ink backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    Explore Details
                </Button>
            </div>
        </div>
    )
}

const Home = () => {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })
    // Hero parallax: background moves at 0.5x scroll rate
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 800], [0, 200])

    // Lab parallax: moves slower than scroll
    const labRef = useRef(null)
    const { scrollYProgress: labScrollY } = useScroll({
        target: labRef,
        offset: ["start end", "end start"]
    })
    const labY = useTransform(labScrollY, [0, 1], [-100, 100])

    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "name": "Rarity Aesthetics",
        "image": "https://rarityaesthetics.com/assets/logo.png",
        "description": "Premium custom lash extensions studio near Denver, CO. Located in Thornton, serving the Denver metro area. Specializing in natural, volume, and mega volume lash artistry.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "9101 Pearl St",
            "addressLocality": "Thornton",
            "addressRegion": "CO",
            "postalCode": "80229",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.8636",
            "longitude": "-104.9783"
        },
        "areaServed": [
            { "@type": "City", "name": "Denver" },
            { "@type": "City", "name": "Thornton" },
            { "@type": "City", "name": "Westminster" },
            { "@type": "City", "name": "Broomfield" },
            { "@type": "City", "name": "Northglenn" }
        ],
        "url": "https://rarityaesthetics.com",
        "telephone": "+17205550123", // Value to be updated
        "priceRange": "$$",
        "hasMap": "https://maps.app.goo.gl/YourMapLinkHere",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/therarityaesthetics"
        ]
    }

    return (
        <ErrorBoundary>
            <div ref={containerRef} className="bg-rarity-navy">
                <SEO
                    title="Kinetic Artistry | Rarity Aesthetics"
                    description="Experience the new standard of lash artistry. Precision mapping in a luxury atmosphere."
                    canonical="/"
                    schema={businessSchema}
                />


                {/* Section 1: Hero */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden bg-rarity-navy">
                    {/* Background Image with Parallax */}
                    <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
                        <img
                            src={heroImage}
                            alt="Natural Artistry Background"
                            className="w-full h-[120%] object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-rarity-navy/30 via-transparent to-rarity-navy/90" />
                    </motion.div>

                    <div className="relative z-10 text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 3, ease: "easeOut" }} // Long, cinematic emerge
                            className="flex flex-col items-center"
                        >
                            {/* Floating Logo - PURE, no box */}
                            <motion.div
                                animate={{
                                    y: [-15, 10, -15],
                                    rotateZ: [0, 1, -1, 0] // Very subtle sway
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="mb-12 relative z-30 filter drop-shadow-2xl"
                            >
                                <img
                                    src={IMAGES.brand.logo}
                                    alt="Rarity Aesthetics"
                                    className="w-[70vw] md:w-[45vw] max-w-[650px] h-auto object-contain"
                                />
                            </motion.div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 relative z-30 w-full sm:w-auto px-4 sm:px-0">
                                <Button variant="primary" to="/book" className="w-full sm:w-auto sm:min-w-[180px] shadow-2xl bg-rarity-ink/90 text-white hover:bg-rarity-ink border border-white/10 backdrop-blur-sm tracking-widest text-xs sm:text-sm py-3 sm:py-4">
                                    Book Appointment
                                </Button>
                                <Button variant="outline" to="/services" className="w-full sm:w-auto sm:min-w-[180px] border-rarity-ink text-rarity-ink hover:bg-rarity-ink hover:text-white backdrop-blur-sm font-bold tracking-widest text-xs sm:text-sm py-3 sm:py-4">
                                    View Menu
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 2 }}
                        className="absolute bottom-12 left-0 right-0 flex justify-center text-rarity-ink/60 animate-bounce"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Discover</span>
                    </motion.div>
                </section>

                {/* Section 2: Kinetic Manifesto - Compacted */}
                <ScrollReveal variant="fade-up" as="section" className="py-20 px-6 relative overflow-hidden bg-white/50 backdrop-blur-sm border-b border-rarity-ink/5">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>

                    <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3 text-center md:text-right">
                            <span className="text-rarity-gold block text-xs font-sans tracking-[0.3em] uppercase font-bold mb-2">The Philosophy</span>
                            <h3 className="font-playfair text-4xl text-rarity-ink">Invisible Luxury</h3>
                        </div>

                        <div className="w-full md:w-2/3 border-l-0 md:border-l border-rarity-ink/10 pl-0 md:pl-12">
                            <p className="font-playfair text-xl md:text-2xl text-rarity-ink/80 leading-relaxed text-center md:text-left">
                                "True luxury is the confidence of a <span className="italic text-rarity-ink font-semibold">perfect fit</span>, the weightlessness of precision, and the art of enhancing without overpowering."
                            </p>

                            <div className="mt-6 flex justify-center md:justify-start">
                                <Link to="/about" className="group flex items-center gap-2 text-rarity-ink text-xs uppercase tracking-widest hover:text-rarity-gold transition-colors font-bold">
                                    Meet The Artist <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Section 3: The Lab */}
                <section ref={labRef} className="h-screen flex items-center relative overflow-hidden group">
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center opacity-100"
                        style={{
                            backgroundImage: `url(${IMAGES.home.shopTeaser})`,
                            y: labY,
                            scale: 1.1,
                            backgroundPosition: 'center 20%' // Adjusting Y to ensure product visibility on mobile
                        }}
                    />
                    {/* Reduced Gradient Overlay - Partial left tint only */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rarity-navy/95 via-rarity-navy/50 to-transparent pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-rarity-ink/60 font-mono text-xs mb-4 block font-bold">EST. 2024</span>
                            <h2 className="font-playfair text-5xl md:text-6xl lg:text-8xl text-rarity-ink mb-8 leading-none">The <br /><span className="text-rarity-gold italic">Lab.</span></h2>
                            <p className="font-lato text-rarity-ink/90 text-lg mb-12 max-w-md leading-relaxed border-l-2 border-rarity-ink pl-6">
                                Professional grade materials for the modern artist. Sourced globally, tested locally, used daily in our own studio.
                            </p>
                            <div className="flex gap-6">
                                <Button variant="outline" to="/shop" className="border-rarity-ink text-rarity-ink hover:bg-rarity-ink hover:text-white px-8">
                                    Enter Shop
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Specials Teaser (Hearts Animation) */}
                <ScrollReveal variant="fade-up" as="section" className="py-20 px-6 bg-rarity-ink relative overflow-hidden">
                    {/* Floating Hearts Container */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                            <FloatingHeart key={i} delay={i * 0.5} />
                        ))}
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="text-center md:text-left">
                            <span className="bg-rarity-gold/20 text-rarity-gold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4 inline-block border border-rarity-gold/20">
                                Limited Time
                            </span>
                            <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl text-white mb-4">Valentines Special <Heart className="inline w-6 h-6 md:w-8 md:h-8 text-rarity-gold fill-rarity-gold animate-pulse" /></h2>
                            <p className="font-lato text-gray-300 max-w-lg text-lg">
                                Book a full set and receive your follow-up fill <strong>On me ♡</strong>.
                            </p>
                        </div>
                        <Button variant="primary" to="/services" className="whitespace-nowrap px-12 py-4 z-20">
                            Claim Offer
                        </Button>
                    </div>
                </ScrollReveal>

                {/* Section 2: Services - "Deconstructed" Floating Gallery */}
                <FloatingGallery />



                {/* Section 6: Social Feed */}
                <SocialFeed />
            </div>
        </ErrorBoundary>
    )
}

export default Home
