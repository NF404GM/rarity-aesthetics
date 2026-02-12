import { motion } from 'framer-motion'

const TIME_SLOTS = {
    morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    afternoon: ['12:30 PM', '1:00 PM', '2:00 PM', '3:30 PM'],
    evening: ['5:00 PM', '6:00 PM']
}

const StepTime = ({ selectedTime, onSelect }) => {
    return (
        <div className="space-y-8">
            {Object.entries(TIME_SLOTS).map(([period, times]) => (
                <div key={period}>
                    <h3 className="font-montserrat text-xs uppercase tracking-widest text-gray-400 mb-4">{period}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {times.map((time) => (
                            <motion.button
                                key={time}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onSelect(time)}
                                className={`
                                    py-3 px-4 rounded-xl text-sm font-lato transition-all duration-200
                                    ${selectedTime === time
                                        ? 'bg-rarity-ink text-white shadow-lg ring-2 ring-rarity-gold ring-offset-2 ring-offset-rarity-navy'
                                        : 'bg-white text-rarity-ink hover:bg-white/80 hover:shadow-sm'}
                                `}
                            >
                                {time}
                            </motion.button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StepTime
