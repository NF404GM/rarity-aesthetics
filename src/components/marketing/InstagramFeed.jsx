import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { Instagram, Heart, MessageCircle } from 'lucide-react'
import { IMAGES } from '../../constants/images'

// Curated Instagram-style grid using portfolio images
const posts = [
    { src: IMAGES.portfolio[0].src, likes: '124', comments: '8' },
    { src: IMAGES.portfolio[1].src, likes: '89', comments: '12' },
    { src: IMAGES.portfolio[2].src, likes: '156', comments: '15' },
    { src: IMAGES.portfolio[3].src, likes: '203', comments: '21' },
    { src: IMAGES.portfolio[4].src, likes: '97', comments: '6' },
    { src: IMAGES.portfolio[5].src, likes: '178', comments: '19' },
]

const InstagramFeed = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-rarity-ink">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal variant="fade-up" className="text-center mb-10 md:mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Instagram className="w-5 h-5 text-rarity-gold" />
                        <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase font-bold">
                            @therarityaesthetics
                        </span>
                    </div>
                    <h2 className="font-playfair text-3xl md:text-5xl text-white italic">
                        Follow the Artistry
                    </h2>
                </ScrollReveal>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 max-w-4xl mx-auto">
                    {posts.map((post, i) => (
                        <ScrollReveal key={i} variant="scale-in" delay={i * 0.05}>
                            <a
                                href="https://www.instagram.com/therarityaesthetics"
                                target="_blank"
                                rel="noreferrer"
                                className="block relative aspect-square overflow-hidden group"
                            >
                                <img
                                    src={post.src}
                                    alt="Rarity Aesthetics lash work"
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <div className="flex items-center gap-1.5 text-white">
                                        <Heart className="w-4 h-4 fill-white" />
                                        <span className="text-xs font-bold">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-white">
                                        <MessageCircle className="w-4 h-4 fill-white" />
                                        <span className="text-xs font-bold">{post.comments}</span>
                                    </div>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Follow CTA */}
                <ScrollReveal variant="fade-up" delay={0.2} className="text-center mt-8">
                    <motion.a
                        href="https://www.instagram.com/therarityaesthetics"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full font-montserrat text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
                    >
                        <Instagram className="w-4 h-4" />
                        Follow on Instagram
                    </motion.a>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default InstagramFeed
