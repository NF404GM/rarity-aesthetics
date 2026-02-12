import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, ArrowUpRight, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const BookingDrawer = ({ isOpen, onClose, category, items }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-rarity-ink/20 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-[70] shadow-2xl overflow-y-auto"
                    >
                        <div className="p-8 md:p-12 min-h-full flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <span className="text-rarity-gold font-montserrat text-xs tracking-[0.2em] uppercase block mb-2">
                                        Booking Request
                                    </span>
                                    <h2 className="font-playfair text-4xl text-rarity-ink italic">
                                        {category}
                                    </h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-6 h-6 text-rarity-ink" />
                                </button>
                            </div>

                            {/* Service List */}
                            <div className="flex-grow space-y-8">
                                {items.map((service) => (
                                    <div key={service.id} className="group border-b border-gray-100 pb-8 last:border-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-playfair text-xl text-rarity-ink group-hover:text-rarity-gold transition-colors flex items-center gap-2">
                                                {service.title}
                                                {service.special && (
                                                    <span className="inline-flex items-center gap-1 bg-rarity-gold/10 text-rarity-gold text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">
                                                        <Sparkles className="w-3 h-3" /> Special
                                                    </span>
                                                )}
                                            </h3>
                                            <span className="font-lato text-rarity-ink font-semibold">{service.price}</span>
                                        </div>

                                        <div className="flex items-center gap-4 mb-4 text-xs font-montserrat tracking-[0.1em] text-gray-400 uppercase">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {service.duration}</span>
                                        </div>

                                        <p className="font-lato text-gray-500 text-sm leading-relaxed mb-6">
                                            {service.desc}
                                        </p>

                                        <Button
                                            to="/book"
                                            state={{ selectedService: service }}
                                            variant="primary"
                                            className="w-full justify-center bg-rarity-ink text-white hover:bg-rarity-gold py-3 text-xs tracking-widest"
                                        >
                                            Select Date
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                                <p className="font-lato text-gray-400 text-xs">
                                    A 50% deposit is required to secure all appointments.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default BookingDrawer
