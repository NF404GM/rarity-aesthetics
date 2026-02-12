import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import logo from '../../assets/logo.webp'

const Footer = () => {
    return (
        <footer className="bg-rarity-ink text-rarity-cream pt-20 md:pt-40 pb-10 relative overflow-hidden">
            {/* Giant Watermark */}
            <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <h2 className="text-[20vw] font-playfair leading-none whitespace-nowrap text-white">RARITY</h2>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
                    {/* Column 1: Manifesto */}
                    <ScrollReveal variant="fade-up" delay={0} className="md:col-span-4 space-y-8">
                        <img src={logo} alt="Rarity Aesthetics" className="w-24 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                        <h3 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white leading-[0.9]">
                            Artistry <br /> <span className="text-rarity-gold italic">Undefined.</span>
                        </h3>
                        <p className="font-lato text-gray-400 max-w-sm">
                            We don't just do lashes. We engineer confidence through precision mapping and luxury materials.
                            Serving the Denver metro area from our Thornton, CO studio.
                        </p>
                    </ScrollReveal>

                    {/* Column 2: Navigation */}
                    <ScrollReveal variant="fade-up" delay={0.15} className="md:col-span-3 md:col-start-7">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-rarity-gold mb-8">Menu</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Shop', 'Portfolio', 'Contact', 'Book Now', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : item === 'Book Now' ? '/book' : `/${item.toLowerCase()}`} className="font-playfair text-xl md:text-2xl hover:text-rarity-gold hover:translate-x-4 transition-all duration-300 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    {/* Column 3: Contact */}
                    <ScrollReveal variant="fade-up" delay={0.3} className="md:col-span-3">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-rarity-gold mb-8">Studio</h4>
                        <address className="not-italic font-lato text-gray-300 space-y-2 mb-8">
                            9101 Pearl St<br />
                            Thornton, CO 80229<br />
                            <a href="mailto:hello@rarityaesthetics.com" className="hover:text-white transition-colors">hello@rarityaesthetics.com</a>
                        </address>

                        <h4 className="text-xs uppercase tracking-[0.2em] text-rarity-gold mb-8">Social</h4>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://www.instagram.com/therarityaesthetics" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram" className="border border-white/20 rounded-full px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-rarity-navy transition-all duration-300">
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100095157423415" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook" className="border border-white/20 rounded-full px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-rarity-navy transition-all duration-300">
                                Facebook
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="fade" delay={0.1}>
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-16 md:mt-40 pt-8 border-t border-white/5 gap-2">
                        <p className="text-[10px] uppercase tracking-widest text-gray-500">© 2026 Rarity Aesthetics</p>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500">Designed by WHERE.T.AT</p>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    )
}

export default Footer
