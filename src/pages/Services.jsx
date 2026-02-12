import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Clock, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/core/SEO'
import { IMAGES } from '../constants/images'
import ServiceComparison from '../components/services/ServiceComparison'
import ServiceCard from '../components/services/ServiceCard'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'

const SERVICE_DATA = [
    {
        category: "Specials",
        id: "specials",
        image: IMAGES.services.specials,
        items: [
            { id: 'val-special', title: 'Valentines lash special', price: '$200.00', duration: '3 hours', desc: 'Book a full set followed by a fill appointment. The fill is on me! Fill must be booked 2-3 weeks after full set.', img: IMAGES.services.specials, special: true },
            { id: 'val-fill', title: 'Valentines special fill', price: 'On me ♡', duration: '2 hours', desc: 'The follow-up fill for the Valentines Special.', img: IMAGES.services.fills, special: true },
        ]
    },
    {
        category: "Lash Sets",
        id: "lash-sets",
        image: IMAGES.services.lashSets,
        items: [
            { id: 'natural', title: 'Natural lash set', price: '$215.00', duration: '3 hours', desc: 'Includes: Wet set, Anime set, Wispy natural lashes, or Wispy/natural looking set.', img: IMAGES.services.natural, hasDetail: true },
            { id: 'volume', title: 'Volume lash set', price: '$230.00', duration: '3 hours', desc: 'Includes: Volume set, Mega volume set, or Wispy volume/Mega volume set.', img: IMAGES.services.volume, hasDetail: true },
            { id: 'mega-volume', title: 'Mega volume set', price: '$250.00', duration: '4 hours', desc: 'Includes the boldest, darkest, most dramatic lash look possible.', img: IMAGES.services.mega, hasDetail: true },
        ]
    },
    {
        category: "Fills & Maintenance",
        id: "fills",
        image: IMAGES.services.fills,
        items: [
            { id: 'mini-fill', title: 'Mini fill', price: '$50.00', duration: '45 mins', desc: '15 minute set up + 30 minutes fill.', img: IMAGES.services.fills, hasDetail: true },
            { id: 'fills', title: 'Natural fill', price: '$100.00', duration: '1h 40m', desc: 'Includes: Wet set, Anime set, Wispy set.', img: IMAGES.services.natural, hasDetail: true },
            { id: 'volume-fill', title: 'Volume fill', price: '$115.00', duration: '1h 40m', desc: 'Includes: Volume set, Mega volume set, Wispy volume/mega set.', img: IMAGES.services.volume },
        ]
    },
    {
        category: "Brows & Other",
        id: "brows",
        image: IMAGES.services.brows,
        items: [
            { id: 'brow-bundle', title: 'Brow bundle', price: '$100.00', duration: '1h 10m', desc: 'Includes brow lamination (4-6 weeks), wax, shape, and tint (14+ days).', img: IMAGES.services.brows },
            { id: 'brow-wax', title: 'Brow wax & shape', price: '$15.00', duration: '40 mins', desc: 'Precision shaping and waxing.', img: IMAGES.services.brows },
            { id: 'lift-tint', title: 'Lash lift & tint', price: '$100.00', duration: '50 mins', desc: 'Enhance your natural lashes.', img: IMAGES.services.lift },
            { id: 'removal', title: 'Lash Removal', price: '$30.00', duration: '45 mins', desc: 'Safe and gentle removal.', img: IMAGES.services.fills, hasDetail: true },
        ]
    }
]

const ServiceSection = ({ section, index }) => {
    return (
        <section
            id={section.id}
            className="relative lg:sticky lg:top-0 min-h-auto lg:min-h-screen flex flex-col pt-4 lg:pt-8 transition-all duration-500 ease-out"
            style={{ zIndex: index + 10 }}
        >
            <div className="bg-rarity-cream rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)] flex-grow border-t border-white/20 relative overflow-hidden mx-2 md:mx-6">

                <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
                    {/* Header Row: Title & Link */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-rarity-navy/10 pb-4 mb-6 lg:mb-8">
                        <div>
                            <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase mb-4 block font-bold">
                                0{index + 1} — {section.category}
                            </span>
                            <h2 className="font-playfair text-5xl md:text-7xl text-rarity-ink leading-[0.9] tracking-tight">
                                {section.category === 'Lash Sets' ? 'The Collection' : section.category}
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        {/* Left Column: Subtle Image & Context */}
                        <div className="lg:w-1/3 flex flex-col gap-4">
                            <div className="aspect-[4/6] rounded-2xl overflow-hidden shadow-lg border border-rarity-navy/5 group relative">
                                <img
                                    src={section.image}
                                    alt={section.category}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-rarity-ink/5 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <p className="font-lato text-rarity-ink/70 text-base leading-relaxed">
                                Curated services designed for longevity, health, and effortless beauty. Each set is customized to your unique eye shape and natural lashes.
                            </p>
                        </div>

                        {/* Right Column: Service Grid */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 content-start">
                            {section.items.map((service, idx) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

const Services = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": SERVICE_DATA.flatMap((category, catIndex) =>
            category.items.map((item, itemIndex) => ({
                "@type": "Service",
                "position": catIndex * 10 + itemIndex + 1,
                "name": item.title,
                "description": item.desc,
                "offers": {
                    "@type": "Offer",
                    "price": item.price.replace('$', ''),
                    "priceCurrency": "USD"
                },
                "provider": {
                    "@type": "BeautySalon",
                    "name": "Rarity Aesthetics",
                    "image": "https://rarityaesthetics.com/assets/logo.png"
                }
            }))
        )
    }

    return (
        <>
            <SEO
                title="Services | Rarity Aesthetics - Lash Extensions & Brows"
                description="Explore our curated menu of Volume, Hybrid, and Natural Lash Sets. Plus Brow Lamination and Waxing services in Thornton, CO."
                canonical="/services"
                schema={serviceSchema}
            />

            {/* Main Background - Dark to make cards pop */}
            <div className="bg-rarity-navy min-h-screen">

                {/* Minimal Header */}
                <header className="relative pt-16 pb-2 px-4 text-center z-0">
                    <ScrollReveal variant="fade-up">
                        <span className="text-rarity-gold font-montserrat text-xs tracking-[0.4em] uppercase block mb-6">
                            Est. 2024
                        </span>
                        <h1 className="font-playfair text-6xl md:text-9xl text-white leading-none tracking-tight">
                            Service<span className="italic text-rarity-gold opacity-80">s</span>
                        </h1>
                        <p className="mt-8 text-white/60 font-lato max-w-lg mx-auto leading-relaxed">
                            A curated menu of bespoke lash and brow artistry, designed to enhance your natural beauty.
                        </p>
                    </ScrollReveal>
                </header>

                {/* Comparison Section (Discovery) */}
                <div id="discovery" className="bg-rarity-navy">
                    <ServiceComparison />
                </div>

                {/* Alternating Sections */}
                {SERVICE_DATA.map((section, index) => (
                    <ServiceSection
                        key={section.id}
                        section={section}
                        index={index}
                    />
                ))}

                {/* Consultation Footer */}
                <section className="py-24 bg-rarity-ink text-center">
                    <ScrollReveal variant="fade-up" className="max-w-4xl mx-auto px-6">
                        <h2 className="font-playfair text-4xl md:text-5xl text-white italic mb-8">
                            Unsure what to book?
                        </h2>
                        <p className="font-lato text-gray-400 text-lg mb-12">
                            Every set we create is customized to your unique eye shape and lifestyle. We'll consult with you at the start of your appointment to ensure the perfect result.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button variant="primary" to="/book" className="px-12">Book Consultation</Button>
                            <Button variant="outline" href="mailto:hello@rarityaesthetics.com" className="border-white/20 text-white hover:bg-white hover:text-rarity-ink">Email Questions</Button>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </>
    )
}

export default Services
