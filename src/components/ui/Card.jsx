import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from './Button'

const Card = ({
    title,
    subtitle,
    price,
    image,
    link,
    buttonText = "Learn More",
    className = ""
}) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`bg-white shadow-soft rounded-4xl overflow-hidden group ${className}`}
        >
            <Link to={link} className="block overflow-hidden relative aspect-[4/5]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-rarity-navy/20 group-hover:bg-rarity-navy/0 transition-colors duration-500" />
            </Link>

            <div className="p-8 text-center">
                <h3 className="font-playfair text-2xl text-rarity-navy mb-2">{title}</h3>
                {price && <p className="font-lato text-rarity-gold font-bold tracking-widest mb-4">{price}</p>}
                {subtitle && <p className="font-lato text-gray-600 mb-6 text-sm leading-relaxed">{subtitle}</p>}

                <Button variant="secondary" to={link} className="w-full">
                    {buttonText}
                </Button>
            </div>
        </motion.div>
    )
}

export default Card
