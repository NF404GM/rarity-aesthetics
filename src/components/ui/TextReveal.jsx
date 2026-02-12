import { motion } from 'framer-motion'

const TextReveal = ({ children, className = '', delay = 0 }) => {
    // Split text into words and characters for granular control
    const text = children || ''
    const words = text.split(' ')

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * 0.1 } // Fast stagger for performance feeling
        })
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200
            }
        }
    }

    return (
        <motion.div
            style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Performance: only animate when in view
            className={className}
        >
            {words.map((word, index) => (
                <motion.span key={index} style={{ marginRight: '0.25em', whiteSpace: 'nowrap' }} className="inline-block">
                    {Array.from(word).map((letter, index) => (
                        <motion.span key={index} variants={child} className="inline-block">
                            {letter}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default TextReveal
