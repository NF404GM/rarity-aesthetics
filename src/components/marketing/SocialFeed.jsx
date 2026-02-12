import { motion } from 'framer-motion'
import { Facebook, ArrowUpRight, Heart, MessageCircle } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { IMAGES } from '../../constants/images'

// Curated "FB/Editorial" style content
const FEED_POSTS = [
    {
        id: 1,
        src: IMAGES.portfolio[0].src,
        likes: '142',
        tag: 'New Collection',
        date: '2 Days Ago',
        caption: 'Exploring the nuances of texture and precision in our latest collection.'
    },
    {
        id: 2,
        src: IMAGES.portfolio[1].src,
        likes: '89',
        tag: 'Studio Life',
        date: '4 Days Ago',
        caption: 'A glimpse into the luxury studio atmosphere where precision meets passion.'
    },
    {
        id: 3,
        src: IMAGES.portfolio[2].src,
        likes: '210',
        tag: 'Artistry',
        date: '1 Week Ago',
        caption: 'Custom mapping tailored to the unique geometry of every client.'
    }
]

const SocialFeed = () => {
    return (
        <section className="py-24 md:py-32 px-4 md:px-6 bg-rarity-ink relative overflow-hidden">
            {/* Background Texture & Depth */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-rarity-gold/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
                    <ScrollReveal variant="fade-up" className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Facebook className="w-5 h-5 text-rarity-gold" />
                            <span className="text-rarity-gold font-montserrat text-[10px] tracking-[0.4em] uppercase font-bold">
                                Join the Community
                            </span>
                        </div>

                        <h2 className="font-playfair text-4xl md:text-7xl text-white italic leading-[1.1]">
                            Latest from <br />
                            <span className="text-rarity-gold not-italic">the Studio.</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=100095157423415"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-4 group"
                        >
                            <div className="text-right">
                                <p className="text-white font-montserrat text-xs font-bold uppercase tracking-widest">Follow us on Facebook</p>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">@rarityaesthetics</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                                <ArrowUpRight className="w-5 h-5 text-white group-hover:text-rarity-ink transition-colors duration-500" />
                            </div>
                        </motion.a>
                    </ScrollReveal>
                </div>

                {/* Editorial Media Grid */}
                <div className="relative">
                    {/* Mobile: Horizontal Scroll | Desktop: 3-column Grid */}
                    <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
                        {FEED_POSTS.map((post, i) => (
                            <ScrollReveal
                                key={post.id}
                                variant="fade-up"
                                delay={i * 0.15}
                                className="min-w-[85vw] md:min-w-0 snap-center"
                            >
                                <a
                                    href="https://www.facebook.com/profile.php?id=100095157423415"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block group"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/5 shadow-2xl">
                                        {/* Image */}
                                        <img
                                            src={post.src}
                                            alt="Studio work"
                                            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                        />

                                        {/* Premium Overlay (Editorial Details) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-rarity-ink/90 via-rarity-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="bg-rarity-gold text-rarity-ink text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                                        {post.tag}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between text-white border-t border-white/10 pt-4">
                                                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">{post.date}</p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 transition-all">
                                                            <Heart className="w-3.5 h-3.5 fill-rarity-gold text-rarity-gold" />
                                                            <span className="text-xs font-bold">{post.likes}</span>
                                                        </div>
                                                        <MessageCircle className="w-3.5 h-3.5 opacity-60" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Static minimal indicator (Mobile visibility) */}
                                        <div className="absolute top-4 right-4 md:hidden flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                            <Facebook className="w-3 h-3 text-white" />
                                            <span className="text-white text-[9px] uppercase tracking-widest font-bold">Latest Post</span>
                                        </div>
                                    </div>

                                    {/* Captions below on mobile/desk - Editorial touch */}
                                    <div className="mt-6 md:mt-8 space-y-1 opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-500">
                                        <span className="text-rarity-gold text-[9px] font-bold uppercase tracking-[0.3em] block">Studio Narrative</span>
                                        <h4 className="text-white font-playfair text-xl md:text-2xl italic leading-snug">
                                            {post.caption}
                                        </h4>
                                    </div>
                                </a>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Thoughtful Narrative Footer */}
                <ScrollReveal variant="fade-up" delay={0.4} className="mt-20 text-center">
                    <p className="text-white/30 font-lato text-sm max-w-lg mx-auto leading-relaxed italic">
                        "Artistry is a conversation between client and artist. Let's continue the story on our social channels."
                    </p>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default SocialFeed
