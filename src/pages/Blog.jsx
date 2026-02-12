import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Clock, Tag, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/core/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import { blogPosts } from '../data/blog'

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null)

    if (selectedPost) {
        const post = blogPosts.find(p => p.id === selectedPost)
        return (
            <div className="bg-rarity-navy min-h-screen pt-32 md:pt-40 pb-32 px-4 md:px-6">
                <SEO
                    title={`${post.title} | Rarity Aesthetics Blog`}
                    description={post.excerpt}
                    canonical={`/blog/${post.id}`}
                />
                <div className="max-w-3xl mx-auto">
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-montserrat text-xs uppercase tracking-widest p-2 -ml-2"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Tips
                    </button>

                    <ScrollReveal variant="fade-up">
                        <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                            {post.category}
                        </span>
                        <h1 className="font-playfair text-3xl md:text-5xl text-white italic mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-rarity-gold/60 text-sm mb-8">
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" /> {post.readTime}
                            </span>
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/10">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-rarity-navy/20 mix-blend-multiply" />
                        </div>
                    </ScrollReveal>

                    <div className="space-y-10">
                        {post.content.map((section, i) => (
                            <ScrollReveal key={i} variant="fade-up" delay={i * 0.05}>
                                <h2 className="font-playfair text-xl md:text-2xl text-white italic mb-3">
                                    {section.heading}
                                </h2>
                                <p className="font-lato text-rarity-gold/90 leading-relaxed md:text-lg font-medium">
                                    {section.body}
                                </p>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* CTA at bottom */}
                    <ScrollReveal variant="fade-up" className="mt-16 text-center">
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <p className="font-playfair text-2xl text-white italic mb-4">Ready to book?</p>
                            <Link
                                to="/book"
                                className="inline-flex items-center gap-2 bg-rarity-gold text-rarity-ink px-8 py-3 rounded-full font-montserrat text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
                            >
                                Book Appointment
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-rarity-navy min-h-screen pt-32 md:pt-40 pb-32 px-4 md:px-6">
            <SEO
                title="Tips & Aftercare | Rarity Aesthetics Blog"
                description="Expert lash care tips, appointment prep guides, and style inspiration from Rarity Aesthetics in Thornton, CO."
                canonical="/blog"
            />

            <div className="max-w-5xl mx-auto">
                <ScrollReveal variant="fade-up" className="text-center mb-12 md:mb-16">
                    <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                        The Journal
                    </span>
                    <h1 className="font-playfair text-4xl md:text-6xl text-white italic">
                        Tips & Aftercare
                    </h1>
                    <p className="font-lato text-gray-400 mt-4 max-w-lg mx-auto">
                        Expert guides to help you get the most out of your lash experience.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
                    {blogPosts.map((post, i) => (
                        <ScrollReveal key={post.id} variant="fade-up" delay={i * 0.08}>
                            <motion.article
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedPost(post.id)}
                                className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-rarity-gold/20 transition-all duration-300 cursor-pointer group h-full flex flex-col"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden mb-6 rounded-lg relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-rarity-navy/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-rarity-gold/10 text-rarity-gold text-[10px] font-montserrat font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-rarity-gold/60 text-xs flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {post.readTime}
                                    </span>
                                </div>

                                <h2 className="font-playfair text-xl md:text-2xl text-white italic mb-3 group-hover:text-rarity-gold transition-colors leading-tight">
                                    {post.title}
                                </h2>

                                <p className="font-lato text-rarity-gold/80 text-sm leading-relaxed flex-grow mb-4 font-medium">
                                    {post.excerpt}
                                </p>

                                <span className="text-rarity-gold text-xs font-montserrat font-bold uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all">
                                    Read More <ChevronRight className="w-3.5 h-3.5" />
                                </span>
                            </motion.article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
