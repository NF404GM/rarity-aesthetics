import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IMAGES } from '../../constants/images'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

const services = [
    {
        id: 1,
        title: "Natural Artistry",
        subtitle: "Enhanced definition using our signature 1:1 technique. The perfect introduction to luxury lash extensions.",
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

const HorizontalGallery = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })

    // Map vertical scroll (0 to 1) to horizontal translation (0% to -66.66%)
    // We have 3 items, so we need to shift by 2 viewport widths to see the last one.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"])

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-rarity-navy hidden md:block">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {services.map((service, i) => (
                        <div key={service.id} className="relative w-screen h-screen flex-shrink-0 group overflow-hidden">
                            {/* Background Image with Zoom Effect & Editorial Texture */}
                            <div className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-105 rarity-grain rarity-vignette">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-rarity-ink/90 via-rarity-ink/40 to-transparent pointer-events-none" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-16 w-full max-w-4xl flex flex-col items-start z-10">
                                <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase mb-4 block opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                    0{service.id} — Museum Collection
                                </span>

                                <h2 className="font-playfair text-9xl text-white mb-6 italic leading-none drop-shadow-lg">
                                    {service.title}
                                </h2>

                                <div className="overflow-hidden mb-8">
                                    <p className="text-gray-200 font-lato text-xl tracking-wide max-w-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-200">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <Button variant="outline" to={service.link} className="border-white/30 text-white hover:bg-white hover:text-rarity-ink backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                                    View Exhibit
                                </Button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalGallery
