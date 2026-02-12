import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { IMAGES } from '../../constants/images'
import Button from '../ui/Button'
import { ArrowUpRight } from 'lucide-react'

const services = [
    {
        id: 1,
        title: "Natural Artistry",
        subtitle: "The perfect introduction to luxury lash extensions. Enhanced definition using our signature 1:1 technique.",
        img: IMAGES.services.natural,
        link: "/services"
    },
    {
        id: 2,
        title: "Volume & Texture",
        subtitle: "Hand-crafted fans for multidimensional depth. A bespoke blend of lengths creating our signature wispy aesthetic.",
        img: IMAGES.services.volume,
        link: "/services"
    },
    {
        id: 3,
        title: "Mega Drama",
        subtitle: "The pinnacle of density and darkness. Maximum impact for those who demand the extraordinary.",
        img: IMAGES.services.mega,
        link: "/services"
    }
]

const GlassCard = ({ service, index }) => {
    // 3D Tilt Logic
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXFromCenter = e.clientX - rect.left - width / 2
        const mouseYFromCenter = e.clientY - rect.top - height / 2
        x.set(mouseXFromCenter / width)
        y.set(mouseYFromCenter / height)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    // Floating Animation Delays based on index
    const floatDuration = 6 + index

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            className={`relative w-full md:w-[80vw] mx-auto mb-32 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto md:mr-0'} md:max-w-5xl`}
        >
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    rotateX,
                    rotateY,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]"
            >
                {/* Internal Gradient Glow */}
                <div className="absolute -inset-full top-0 block h-[200%] w-1/2 -rotate-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[1.5s]" />

                <div className="flex flex-col md:flex-row h-full">
                    {/* Image Half */}
                    <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden">
                        <div className="absolute inset-0 rarity-grain rarity-vignette transition-transform duration-[2000ms] group-hover:scale-110">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Organic Shape Mask Overlay (Optional - creates the 'melted' look) */}
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-rarity-navy/80 to-transparent opacity-60" />
                    </div>

                    {/* Content Half */}
                    <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative bg-gradient-to-b from-transparent to-rarity-ink/40">
                        <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4 font-bold drop-shadow-sm">
                            <span className="w-8 h-[1px] bg-rarity-gold" />
                            Collection 0{service.id}
                        </span>

                        <h3 className="font-playfair text-5xl md:text-6xl text-white mb-8 italic leading-none">
                            {service.title}
                        </h3>

                        <p className="font-lato text-white text-lg leading-relaxed mb-10 max-w-md drop-shadow-md">
                            {service.subtitle}
                        </p>

                        <div className="flex items-center gap-6">
                            <Button to={service.link} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-rarity-ink group-hover:border-white/50">
                                Explore
                            </Button>
                            <motion.div
                                whileHover={{ x: 5, y: -5 }}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-rarity-gold group-hover:border-rarity-gold transition-colors"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const FloatingGallery = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-rarity-ink">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen animate-slow-spin" />
                <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-rarity-gold/5 rounded-full blur-[120px] mix-blend-screen animate-slow-spin" style={{ animationDirection: 'reverse' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-rarity-gold font-montserrat text-xs tracking-[0.4em] uppercase"
                    >
                        Our Signature Menu
                    </motion.span>
                </div>

                {services.map((service, index) => (
                    <GlassCard key={service.id} service={service} index={index} />
                ))}
            </div>
        </section>
    )
}

export default FloatingGallery
