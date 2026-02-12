import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/core/SEO'
import { IMAGES } from '../constants/images'
import BookingDrawer from '../components/services/BookingDrawer'

const SERVICE_DATA = [
    {
        category: "Specials",
        image: IMAGES.services.specials,
        items: [
            { id: 'val-special', title: 'Valentines lash special', price: '$200.00', duration: '3 hours', desc: 'Book a full set followed by a fill appointment. The fill is on me! Fill must be booked 2-3 weeks after full set.', img: IMAGES.services.specials, special: true },
            { id: 'val-fill', title: 'Valentines special fill', price: 'On me ♡', duration: '2 hours', desc: 'The follow-up fill for the Valentines Special.', img: IMAGES.services.fills, special: true },
        ]
    },
    {
        category: "Lash Sets",
        image: IMAGES.services.lashSets,
        items: [
            { id: 'natural-set', title: 'Natural lash set', price: '$215.00', duration: '3 hours', desc: 'Includes: Wet set, Anime set, Wispy natural lashes, or Wispy/natural looking set.', img: IMAGES.services.natural },
            { id: 'volume-set', title: 'Volume lash set', price: '$230.00', duration: '3 hours', desc: 'Includes: Volume set, Mega volume set, or Wispy volume/Mega volume set.', img: IMAGES.services.volume },
            { id: 'glow-bundle', title: 'Glow up bundle', price: '$285.00', duration: '4 hours', desc: 'Includes a full lash set of your choice + Brow lamination, wax & tint.', img: IMAGES.services.bundle },
        ]
    },
    {
        category: "Fills & Maintenance",
        image: IMAGES.services.fills,
        items: [
            { id: 'mini-fill', title: 'Mini fill', price: '$50.00', duration: '45 mins', desc: '15 minute set up + 30 minutes fill.', img: IMAGES.services.fills },
            { id: 'natural-fill', title: 'Natural fill', price: '$100.00', duration: '1h 40m', desc: 'Includes: Wet set, Anime set, Wispy set.', img: IMAGES.services.natural },
            { id: 'volume-fill', title: 'Volume fill', price: '$115.00', duration: '1h 40m', desc: 'Includes: Volume set, Mega volume set, Wispy volume/mega set.', img: IMAGES.services.volume },
        ]
    },
    {
        category: "Brows & Other",
        image: IMAGES.services.brows,
        items: [
            { id: 'brow-bundle', title: 'Brow bundle', price: '$100.00', duration: '1h 10m', desc: 'Includes brow lamination (4-6 weeks), wax, shape, and tint (14+ days).', img: IMAGES.services.brows },
            { id: 'brow-wax', title: 'Brow wax & shape', price: '$15.00', duration: '40 mins', desc: 'Precision shaping and waxing.', img: IMAGES.services.brows },
            { id: 'lift-tint', title: 'Lash lift & tint', price: '$100.00', duration: '50 mins', desc: 'Enhance your natural lashes.', img: IMAGES.services.lift },
            { id: 'removal', title: 'Lash Removal', price: '$30.00', duration: '45 mins', desc: 'Safe and gentle removal.', img: IMAGES.services.fills },
        ]
    }
]

// Horizontal Slide Component
const ServiceSlide = ({ section, index, onOpenDrawer }) => {
    return (
        <div className="w-screen h-screen flex-shrink-0 flex flex-col lg:flex-row snap-start relative">
            {/* Text Side (Left) - Light Blue Theme */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-full bg-rarity-navy flex flex-col justify-center px-8 md:px-20 relative z-10">
                <span className="text-rarity-ink/40 font-mono text-sm mb-6 block">
                    0{index + 1} — Collection
                </span>

                <h2 className="font-playfair text-6xl md:text-8xl text-rarity-ink mb-8 leading-[0.9]">
                    {section.category}
                </h2>

                <p className="font-lato text-rarity-ink/70 text-lg md:text-xl max-w-md mb-12">
                    Expertly curated services designed for longevity and health.
                    Explore our {section.category.toLowerCase()} options.
                </p>

                <div className="flex gap-6">
                    <button
                        onClick={() => onOpenDrawer(section)}
                        className="group flex items-center gap-4 bg-rarity-ink text-white px-8 py-4 rounded-full hover:bg-rarity-gold transition-all duration-300"
                    >
                        <span className="text-xs uppercase tracking-widest font-bold">View Service Menu</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Image Side (Right) - Full Bleed */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden group">
                <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />

                {/* Subtle Overlay to ensure visual comfort */}
                <div className="absolute inset-0 bg-rarity-navy/10 mix-blend-multiply pointer-events-none" />
            </div>
        </div>
    )
}

const Services = () => {
    const scrollRef = useRef(null)
    const [selectedCategory, setSelectedCategory] = useState(null) // Data object
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    // Horizontal Scroll Wheel Logic
    useEffect(() => {
        const element = scrollRef.current
        if (!element) return

        const handleWheel = (e) => {
            if (window.innerWidth >= 1024) { // Only on desktop
                if (e.deltaY !== 0) {
                    e.preventDefault()
                    element.scrollLeft += e.deltaY
                }
            }
        }

        element.addEventListener('wheel', handleWheel, { passive: false })
        return () => element.removeEventListener('wheel', handleWheel)
    }, [])

    const handleOpenDrawer = (categoryData) => {
        setSelectedCategory(categoryData)
        setIsDrawerOpen(true)
    }

    return (
        <>
            <SEO title="Services | Rarity Aesthetics - Lash Extensions & Brows" description="Explore our curated menu of Volume, Hybrid, and Natural Lash Sets. Plus Brow Lamination and Waxing services in Thornton, CO." canonical="/services" />

            {/* Main Horizontal Container */}
            <div
                ref={scrollRef}
                className="h-screen w-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth lg:bg-rarity-navy"
            >
                {/* Intro Slide */}
                <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-rarity-navy snap-start px-6">
                    <div className="text-center">
                        <span className="text-rarity-ink/50 font-montserrat text-xs tracking-[0.4em] uppercase block mb-6">
                            The Atelier
                        </span>
                        <h1 className="font-playfair text-7xl md:text-9xl text-rarity-ink leading-none mb-8">
                            Service<span className="italic text-rarity-gold">s</span>
                        </h1>
                        <p className="font-lato text-rarity-ink/70 max-w-lg mx-auto mb-12">
                            Scroll to explore our collections.
                            <span className="hidden lg:inline"><br />Use your mouse wheel or trackpad.</span>
                        </p>
                        <div className="animate-bounce text-rarity-ink/40">
                            <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0 mx-auto" />
                        </div>
                    </div>
                </div>

                {/* Service Slides */}
                {SERVICE_DATA.map((section, index) => (
                    <ServiceSlide
                        key={section.category}
                        section={section}
                        index={index}
                        onOpenDrawer={handleOpenDrawer}
                    />
                ))}
            </div>

            {/* Booking Drawer */}
            <BookingDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                category={selectedCategory?.category}
                items={selectedCategory?.items || []}
            />
        </>
    )
}

export default Services
