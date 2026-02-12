import { motion } from 'framer-motion'

const variants = {
    'fade-up': {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-down': {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-left': {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    'fade-right': {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    'scale-in': {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    'fade': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
}

const ScrollReveal = ({
    children,
    variant = 'fade-up',
    delay = 0,
    duration = 0.6,
    threshold = 0.15,
    className = '',
    once = true,
    as = 'div',
}) => {
    const Component = motion[as] || motion.div

    return (
        <Component
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // custom ease-out curve
            }}
            className={className}
        >
            {children}
        </Component>
    )
}

export default ScrollReveal
