import { useRef, useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const SparkleCursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Smooth spring physics for lag-free but organic movement
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 }
    const springX = useSpring(cursorX, springConfig)
    const springY = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)
        document.body.addEventListener('mouseleave', handleMouseLeave)
        document.body.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
            document.body.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [cursorX, cursorY, isVisible])

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] text-rarity-gold hidden md:block"
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 2 : 1,
                    rotate: isHovering ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <Sparkles
                    className="w-8 h-8 fill-current drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                    strokeWidth={1.5}
                />
            </motion.div>
        </motion.div>
    )
}

export default SparkleCursor
