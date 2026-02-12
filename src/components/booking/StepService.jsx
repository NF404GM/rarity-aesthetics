import { motion } from 'framer-motion'
import { Check, Clock, Sparkles, AlertCircle } from 'lucide-react'

// Flattens the nested SERVICE_DATA structure into a single selectable list
const flattenServices = (data) => {
    return data.flatMap(category =>
        category.items.map(item => ({
            ...item,
            categoryName: category.category,
            categoryImage: category.image
        }))
    )
}

const StepService = ({ serviceData, selectedService, onSelect }) => {
    const allServices = flattenServices(serviceData)

    return (
        <div className="flex flex-col h-full">
            <div className="text-center mb-8">
                <span className="text-rarity-gold font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">Step 1</span>
                <h2 className="font-playfair text-3xl md:text-4xl text-rarity-ink italic">Choose your Service</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar -mr-2 p-2">
                {allServices.map((service) => (
                    <motion.button
                        key={service.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(service)}
                        className={`
                            relative text-left p-5 rounded-xl border transition-all duration-300 group flex flex-col justify-between min-h-[140px]
                            ${selectedService?.id === service.id
                                ? 'bg-rarity-navy text-white border-rarity-navy shadow-xl ring-2 ring-rarity-gold ring-offset-2'
                                : 'bg-white text-rarity-ink border-gray-100 shadow-sm hover:border-rarity-gold/30 hover:shadow-md'}
                        `}
                    >
                        {/* Header */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <span className={`text-[9px] uppercase tracking-widest font-bold mb-1 block ${selectedService?.id === service.id ? 'text-rarity-gold' : 'text-gray-400'}`}>
                                    {service.categoryName}
                                </span>
                                {service.special && (
                                    <span className="bg-rarity-gold text-rarity-ink text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <Sparkles className="w-2.5 h-2.5" /> Special
                                    </span>
                                )}
                            </div>

                            <h3 className={`font-playfair text-lg leading-tight mb-2 ${selectedService?.id === service.id ? 'text-white' : 'text-rarity-ink'}`}>
                                {service.title}
                            </h3>
                        </div>

                        {/* Footer Info */}
                        <div className="mt-auto">
                            <div className="flex justify-between items-end border-t pt-3 border-current border-opacity-10">
                                <div className="flex flex-col">
                                    <span className={`text-xl font-lato font-bold ${selectedService?.id === service.id ? 'text-rarity-gold' : 'text-rarity-ink'}`}>
                                        {service.price}
                                    </span>
                                </div>
                                <div className={`flex items-center gap-1.5 text-[10px] font-montserrat tracking-widest uppercase font-bold ${selectedService?.id === service.id ? 'text-white/60' : 'text-gray-400'}`}>
                                    <Clock className="w-3 h-3" /> {service.duration}
                                </div>
                            </div>
                        </div>

                        {/* Selected Checkmark overlay */}
                        {selectedService?.id === service.id && (
                            <div className="absolute top-3 right-3 text-rarity-gold">
                                <div className="w-5 h-5 bg-rarity-gold rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 text-rarity-ink" />
                                </div>
                            </div>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Disclaimer / Info */}
            <div className="mt-6 flex items-start gap-2 text-xs text-gray-400 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>A deposit may be required to secure your appointment. All services are performed by licensed estheticians.</p>
            </div>
        </div>
    )
}

export default StepService
