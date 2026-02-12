import { motion } from 'framer-motion'
import { Clock, Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const ServiceCard = ({ service }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2rem] p-6 md:p-8 border border-rarity-navy/10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] transition-all duration-500 flex flex-col h-full group relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rarity-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex justify-between items-start mb-4 md:mb-6">
                <h4 className="font-playfair text-xl md:text-2xl text-rarity-ink italic pr-4 leading-tight">
                    {service.title}
                </h4>
                <div className="flex flex-col items-end">
                    <span className="font-lato font-bold text-rarity-gold text-xl md:text-2xl tracking-tight">
                        {service.price}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4 text-rarity-ink text-[11px] font-montserrat tracking-[0.15em] uppercase mb-6 font-semibold">
                <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-rarity-gold" /> {service.duration}
                </span>
            </div>

            <p className="font-lato text-gray-500 text-sm leading-relaxed mb-8 flex-grow opacity-90">
                {service.desc}
            </p>

            <div className="mt-auto pt-6 border-t border-rarity-navy/5 flex flex-col gap-4">
                <Button
                    to="/book"
                    state={{ selectedService: service }}
                    variant="primary"
                    className="w-full justify-center py-4 text-xs tracking-[0.2em] shadow-lg shadow-rarity-ink/10 hover:shadow-xl hover:shadow-rarity-ink/10 font-bold"
                >
                    Book Now
                </Button>
                {service.hasDetail && (
                    <Link
                        to={`/services/${service.id}`}
                        className="group/link flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-rarity-ink/50 hover:text-rarity-gold transition-colors py-2"
                    >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
                    </Link>
                )}
            </div>
        </motion.div>
    )
}

export default ServiceCard
