import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <div className="bg-rarity-navy min-h-screen flex items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg"
            >
                <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                    Page Not Found
                </span>
                <h1 className="font-playfair text-8xl md:text-[10rem] text-white italic leading-none mb-4">
                    404
                </h1>
                <p className="font-lato text-gray-400 text-lg mb-10 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-rarity-gold text-white px-10 py-4 rounded-full font-montserrat text-xs font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-500"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    )
}

export default NotFound
