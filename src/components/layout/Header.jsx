import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useShop } from '../../context/ShopContext'
import logo from '../../assets/logo.webp'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const { cartCount, setIsCartOpen } = useShop()
    const { pathname } = useLocation()

    let lastScrollY = 0

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            // Toggle Scrolled State for style
            setIsScrolled(currentScrollY > 50)

            // Hide/Show logic (keep existing behavior but smoother)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }
            lastScrollY = currentScrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Shop', path: '/shop' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Book', path: '/book' },
    ]

    return (
        <>
            {/* Desktop Split Header */}
            {/* Desktop Split Header */}
            {/* Top Ticker */}
            <div className="fixed top-0 left-0 right-0 h-8 bg-rarity-ink z-[60] flex items-center justify-center overflow-hidden">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-rarity-gold text-[10px] uppercase tracking-[0.3em] font-bold"
                >
                    Complimentary Shipping on Orders Over $100
                </motion.p>
            </div>

            {/* Desktop Split Header */}
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 }
                }}
                animate={isHidden ? 'hidden' : 'visible'}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-8 left-0 right-0 z-50 hidden md:flex justify-between items-center px-12 py-2 bg-rarity-navy/30 backdrop-blur-md border-b border-rarity-gold/20 shadow-sm"
            >
                {/* Left Navigation */}
                <nav className="flex items-center gap-12 w-1/3 justify-start">
                    {['Home', 'Services', 'Portfolio'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="relative group font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-rarity-ink/80 hover:text-rarity-ink transition-colors"
                        >
                            {item}
                            {/* Fluid Underline */}
                            <span className={`absolute -bottom-1 left-0 w-0 h-px bg-rarity-gold transition-all duration-300 group-hover:w-full ${pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'w-full' : ''}`} />
                        </Link>
                    ))}
                </nav>

                {/* Center Logo */}
                <div className="w-1/3 flex justify-center relative h-12">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="absolute w-52 h-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-500 z-50">
                        <img src={logo} alt="Rarity Aesthetics" className="w-full h-full object-contain filter drop-shadow-sm" />
                    </Link>
                </div>

                {/* Right Navigation */}
                <nav className="flex items-center gap-12 w-1/3 justify-end">
                    {['Shop', 'Book'].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="relative group font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-rarity-ink/80 hover:text-rarity-ink transition-colors"
                        >
                            {item}
                            <span className={`absolute -bottom-1 left-0 w-0 h-px bg-rarity-gold transition-all duration-300 group-hover:w-full ${pathname === `/${item.toLowerCase()}` ? 'w-full' : ''}`} />
                        </Link>
                    ))}

                    <div className="w-px h-4 bg-rarity-ink/20" />

                    <button
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Open shopping cart"
                        className="flex items-center gap-2 group text-rarity-ink/80 hover:text-rarity-ink transition-colors font-montserrat text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        <span>Cart</span>
                        <div className="relative">
                            <ShoppingBag className="w-4 h-4" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-rarity-gold rounded-full animate-pulse" />
                            )}
                        </div>
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Header (Minimal) */}
            <header className={`fixed top-8 left-0 right-0 px-4 py-3 flex justify-between items-center z-50 md:hidden text-rarity-ink transition-all duration-300 ${isScrolled ? 'bg-rarity-navy/80 backdrop-blur-md shadow-lg' : ''}`}>
                <Link to="/" className="w-10 h-10">
                    <img src={logo} alt="Rarity" className="w-full h-full object-contain" />
                </Link>
                <div className="flex items-center gap-3">
                    <button onClick={() => setIsCartOpen(true)} aria-label="Open shopping cart" className="relative">
                        <ShoppingBag className="w-5 h-5 text-rarity-ink" />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-rarity-gold rounded-full" />}
                    </button>
                    <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                        <Menu className="w-7 h-7 text-white" />
                    </button>
                </div>
            </header>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[60] bg-rarity-navy flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="font-playfair text-rarity-gold text-2xl">Menu</span>
                            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                                <X className="w-8 h-8 text-white" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6" role="navigation" aria-label="Mobile navigation">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                                    className="font-playfair text-4xl text-white hover:text-rarity-gold transition-colors"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.1) }}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-auto">
                            <p className="text-rarity-gray font-lato text-sm uppercase tracking-widest">Est. 2026 — Denver Metro / Thornton, CO</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
