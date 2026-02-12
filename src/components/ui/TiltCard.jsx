import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const TiltCard = ({ children, className = '' }) => {
    const ref = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    // Mouse position state
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth physics for the tilt - using springs prevents jitter/lag
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

    // Map mouse position to rotation (max 12 degrees)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

    // Dynamic sheen/glare effect moving opposite to tilt
    const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
    const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

    const handleMouseMove = (e) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        // Calculate normalized position (-0.5 to 0.5)
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative transition-all duration-200 ease-out will-change-transform ${className}`}
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                {children}
            </div>

            {/* Glare effect - only visible on hover for performance */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none rounded-full"
                style={{
                    background: `linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.2) 100%)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
            />
        </motion.div>
    )
}

export default TiltCard
