import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({
    children,
    variant = 'primary',
    to = null,
    onClick,
    className = '',
    type = 'button',
    icon: Icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 font-montserrat font-bold uppercase tracking-wider text-sm transition-all duration-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rarity-gold"

    const variants = {
        primary: "bg-rarity-gold text-white hover:shadow-glow hover:-translate-y-1",
        secondary: "border border-rarity-navy text-rarity-navy hover:bg-rarity-navy hover:text-white hover:shadow-lg",
        outline: "border border-rarity-gold text-rarity-gold hover:bg-rarity-gold hover:text-white",
        ghost: "text-rarity-navy hover:bg-rarity-softBlue/30 bg-transparent px-4",
        custom: ""
    }

    const content = (
        <>
            {children}
            {Icon && <Icon className="ml-2 w-4 h-4" />}
        </>
    )

    if (to) {
        return (
            <Link
                to={to}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {content}
            </Link>
        )
    }

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {content}
        </motion.button>
    )
}

export default Button
