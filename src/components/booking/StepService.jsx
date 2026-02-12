import { motion } from 'framer-motion'
import { Check, Clock, Sparkles } from 'lucide-react'

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
        <div className="space-y-6">
            <h2 className="font-playfair text-3xl text-rarity-ink">Select Service</h2>
            <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {allServices.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => onSelect(service)}
                        className={`
                            relative p-4 md:p-8 rounded-2xl md:rounded-3xl cursor-pointer border transition-all duration-300 group
                            ${selectedService?.id === service.id
                                ? 'bg-rarity-ink text-white border-rarity-ink shadow-2xl scale-[1.02] z-10'
                                : 'bg-white text-rarity-ink border-transparent shadow-sm hover:border-rarity-gold/30 hover:bg-white/90 hover:shadow-md'}
                        `}
                    >
                        {/* Content Container - Avoiding absolute checkmark overlap */}
                        <div className="flex justify-between items-start mb-2 pr-10 relative z-10">
                            <div>
                                <span className="text-[10px] uppercase tracking-widest opacity-60 mb-1 block">
                                    {service.categoryName}
                                </span>
                                <h3 className="font-playfair text-base md:text-xl flex items-center gap-2">
                                    {service.title}
                                    {service.special && (
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${selectedService?.id === service.id ? 'text-rarity-gold border-rarity-gold' : 'text-rarity-gold border-rarity-gold/20'}`}>
                                            <Sparkles className="w-3 h-3" /> Special
                                        </span>
                                    )}
                                </h3>
                            </div>
                            <span className="font-lato text-lg whitespace-nowrap">{service.price}</span>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-montserrat tracking-widest opacity-70 relative z-10">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {service.duration}</span>
                        </div>

                        {/* Selection Indicator - Cleanly positioned */}
                        <div className={`absolute top-4 right-4 md:top-8 md:right-8 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors z-20 ${selectedService?.id === service.id ? 'border-rarity-gold bg-rarity-gold' : 'border-gray-200'}`}>
                            {selectedService?.id === service.id && <Check className="w-4 h-4 text-white" />}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default StepService
