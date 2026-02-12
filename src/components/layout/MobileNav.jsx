import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Sparkles, ShoppingBag, CalendarDays, BookOpen } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Sparkles, label: 'Services', path: '/services' },
    { icon: ShoppingBag, label: 'Shop', path: '/shop' },
    { icon: CalendarDays, label: 'Book', path: '/book' },
    { icon: BookOpen, label: 'Blog', path: '/blog' },
]

const MobileNav = () => {
    const { pathname } = useLocation()
    const [isHidden, setIsHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            if (currentY > lastScrollY.current && currentY > 100) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }
            lastScrollY.current = currentY
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isHidden ? 100 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
            {/* Frosted glass bar */}
            <div className="bg-rarity-ink/80 backdrop-blur-xl border-t border-white/10 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
                <div className="flex justify-around items-center h-16">
                    {navItems.map(({ icon: Icon, label, path }) => {
                        const isActive = pathname === path || (path !== '/' && pathname.startsWith(path))
                        return (
                            <Link
                                key={path}
                                to={path}
                                className="flex flex-col items-center justify-center gap-0.5 relative group"
                            >
                                {/* Active indicator dot */}
                                {isActive && (
                                    <motion.div
                                        layoutId="mobile-nav-indicator"
                                        className="absolute -top-1 w-1 h-1 bg-rarity-gold rounded-full"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <motion.div
                                    whileTap={{ scale: 0.85 }}
                                    className="flex flex-col items-center"
                                >
                                    <Icon
                                        className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'text-rarity-gold' : 'text-gray-400'
                                            }`}
                                        strokeWidth={isActive ? 2.5 : 1.5}
                                    />
                                    <span className={`text-[10px] font-montserrat tracking-wider transition-colors duration-200 ${isActive ? 'text-rarity-gold font-bold' : 'text-gray-500'
                                        }`}>
                                        {label}
                                    </span>
                                </motion.div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </motion.nav>
    )
}

export default MobileNav
