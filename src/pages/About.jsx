import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/core/SEO'
import { IMAGES } from '../constants/images'
import { Star, Award, Heart } from 'lucide-react'
import TextReveal from '../components/ui/TextReveal'
import TiltCard from '../components/ui/TiltCard'

const About = () => {
    const [activeChapter, setActiveChapter] = useState('artist')

    const chapters = [
        { id: 'artist', label: 'The Artist', icon: null },
        { id: 'philosophy', label: 'The Philosophy', icon: Heart },
        { id: 'craft', label: 'The Craft', icon: Award },
        { id: 'credentials', label: 'Credentials', icon: Star },
    ]

    const artistSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ashley",
        "jobTitle": "Master Lash Artist & Licensed Esthetician",
        "image": "https://rarityaesthetics.com/assets/ashley-portrait.jpg",
        "url": "https://rarityaesthetics.com/about",
        "worksFor": {
            "@type": "BeautySalon",
            "name": "Rarity Aesthetics"
        },
        "sameAs": [
            "https://www.instagram.com/therarityaesthetics"
        ]
    }

    return (
        <div className="bg-rarity-navy min-h-screen flex flex-col md:flex-row overflow-hidden relative">
            <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <SEO
                title="About Ashley | Rarity Aesthetics"
                description="Meet Ashley, a Master Lash Artist and Licensed Esthetician specializing in natural health and volume styling in Thornton, CO."
                canonical="/about"
                schema={artistSchema}
            />

            {/* LEFT PANEL - Fixed Image (The Anchor) */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden group flex items-center justify-center bg-rarity-navy z-10">
                {/* Decor: Subtle Glow behind circle */}
                <div className="absolute w-[500px] h-[500px] bg-rarity-gold/5 rounded-full blur-3xl" />

                <TiltCard className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <motion.img
                            initial={{ scale: 1.1, filter: "grayscale(100%)" }}
                            animate={{ scale: 1, filter: "grayscale(0%)" }}
                            transition={{ duration: 1.5 }}
                            src={IMAGES.about.portrait}
                            alt="Ashley - Master Lash Artist"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </TiltCard>

                {/* Mobile Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rarity-navy via-transparent to-transparent md:hidden z-20 pointer-events-none" />
            </div>

            {/* RIGHT PANEL - Interactive Content (The Kinetic) */}
            <div className="w-full md:w-1/2 h-[auto] md:h-screen flex flex-col justify-center px-5 py-6 md:p-20 relative z-30 -mt-16 md:mt-0">

                {/* Navigation Tabs */}
                <div className="flex gap-3 md:gap-8 border-b border-rarity-ink/10 mb-12 relative overflow-x-auto no-scrollbar">
                    {chapters.map((chapter) => (
                        <button
                            key={chapter.id}
                            onClick={() => setActiveChapter(chapter.id)}
                            className={`pb-4 text-[11px] md:text-sm font-montserrat tracking-[0.1em] md:tracking-[0.2em] uppercase transition-all duration-500 relative whitespace-nowrap ${activeChapter === chapter.id ? 'text-rarity-ink font-bold' : 'text-rarity-ink/40 hover:text-rarity-gold'
                                }`}
                        >
                            {chapter.label}
                            {/* Kinetic Underline */}
                            {activeChapter === chapter.id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-rarity-gold"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Area - Glass Card */}
                <div className="min-h-[300px] relative">
                    <AnimatePresence mode="wait">
                        {activeChapter === 'artist' && (
                            <motion.div
                                key="artist"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <div className="mb-2">
                                    <TextReveal className="font-playfair text-4xl md:text-6xl lg:text-7xl text-rarity-ink italic">
                                        Ashley.
                                    </TextReveal>
                                </div>
                                <p className="font-lato text-rarity-ink/80 text-lg leading-relaxed max-w-md">
                                    "I don't just apply lashes; I design confidence. My studio is a sanctuary where precision meets artistry, and where you are the muse."
                                </p>
                                <div className="w-24 h-[1px] bg-rarity-gold mt-8" />
                            </motion.div>
                        )}

                        {activeChapter === 'philosophy' && (
                            <motion.div
                                key="philosophy"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <div className="mb-8">
                                    <TextReveal className="font-playfair text-4xl text-rarity-ink">
                                        Invisible Luxury.
                                    </TextReveal>
                                </div>
                                <blockquote className="font-playfair text-2xl text-rarity-ink/90 italic border-l-2 border-rarity-gold pl-6 py-2">
                                    "My work is not about changing how you look. It's about revealing who you are."
                                </blockquote>
                                <p className="font-lato text-rarity-ink/80 text-lg leading-relaxed">
                                    Every set is a collaboration—a study of your bone structure, your style, and your daily life. True luxury feels weightless and looks effortless.
                                </p>
                            </motion.div>
                        )}

                        {activeChapter === 'credentials' && (
                            <motion.div
                                key="credentials"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <h2 className="font-playfair text-4xl text-rarity-ink">Certified Excellence.</h2>
                                <p className="font-lato text-rarity-ink/80 text-lg leading-relaxed mb-6">
                                    Continuous education is the hallmark of a master. I am committed to staying at the forefront of the industry with advanced certifications.
                                </p>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex items-center gap-4 p-4 bg-white/50 border border-rarity-ink/5 rounded-xl">
                                        <div className="w-12 h-12 bg-rarity-gold/10 rounded-full flex items-center justify-center text-rarity-gold">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-xl text-rarity-ink">Licensed Esthetician</h3>
                                            <p className="text-xs font-montserrat uppercase tracking-wider text-rarity-ink/60">State of Colorado</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-white/50 border border-rarity-ink/5 rounded-xl">
                                        <div className="w-12 h-12 bg-rarity-gold/10 rounded-full flex items-center justify-center text-rarity-gold">
                                            <Star className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-xl text-rarity-ink">Master Lash Artist</h3>
                                            <p className="text-xs font-montserrat uppercase tracking-wider text-rarity-ink/60">4x Certified (Volume, Mega Volume, Styling)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-white/50 border border-rarity-ink/5 rounded-xl">
                                        <div className="w-12 h-12 bg-rarity-gold/10 rounded-full flex items-center justify-center text-rarity-gold">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-playfair text-xl text-rarity-ink">Sanitation & Safety</h3>
                                            <p className="text-xs font-montserrat uppercase tracking-wider text-rarity-ink/60">Barbicide Certified</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeChapter === 'craft' && (
                            <motion.div
                                key="craft"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h2 className="font-playfair text-4xl text-rarity-ink mb-6">The Craft.</h2>
                                <p className="font-lato text-rarity-ink/80 mb-8">
                                    With over 5 years of specialized experience in volume and mega-volume techniques, I have dedicated my career to the integrity of the natural lash.
                                </p>

                                <div className="bg-white/40 backdrop-blur-md p-6 rounded-sm border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-500">
                                    <h3 className="font-montserrat text-xs uppercase tracking-widest text-rarity-gold mb-4 font-bold flex items-center gap-2">
                                        <Star className="w-4 h-4" /> Credentials
                                    </h3>
                                    <ul className="space-y-3 font-lato text-rarity-ink text-sm">
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rarity-ink/30" /> Licensed Esthetician (CO)
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rarity-ink/30" /> 3x Certified Master Lash Artist
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rarity-ink/30" /> Borboleta Volume Certified
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute bottom-10 right-10 text-[10px] uppercase tracking-[0.4em] text-rarity-ink/20 font-bold rotate-90 origin-bottom-right">
                    Rarity Aesthetics © 2024
                </div>
            </div>
        </div>
    )
}

const UserIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
)

export default About
