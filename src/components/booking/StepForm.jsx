import { motion } from 'framer-motion'

const StepForm = ({ formData, onChange, onComplete }) => {
    const handleChange = (e) => {
        const { name, value } = e.target
        onChange({ ...formData, [name]: value })
    }

    const isValid = formData.name && formData.email && formData.email.includes('@') && formData.email.includes('.') && formData.phone && formData.phone.length >= 10

    return (
        <div className="space-y-6">
            <h2 className="font-playfair text-3xl text-rarity-ink mb-6">Your Details</h2>

            <div className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/40 focus:border-rarity-gold focus:ring-0 rounded-xl p-4 font-lato text-rarity-ink placeholder-rarity-ink/40 outline-none transition-all"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/40 focus:border-rarity-gold focus:ring-0 rounded-xl p-4 font-lato text-rarity-ink placeholder-rarity-ink/40 outline-none transition-all"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/40 focus:border-rarity-gold focus:ring-0 rounded-xl p-4 font-lato text-rarity-ink placeholder-rarity-ink/40 outline-none transition-all"
                />
                <textarea
                    name="notes"
                    placeholder="Any notes or requests? (Optional)"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/50 border border-white/40 focus:border-rarity-gold focus:ring-0 rounded-xl p-4 font-lato text-rarity-ink placeholder-rarity-ink/40 outline-none transition-all resize-none"
                />
            </div>

            <button
                onClick={onComplete}
                disabled={!isValid}
                className="w-full bg-rarity-ink text-white py-4 rounded-full font-montserrat text-xs uppercase tracking-widest hover:bg-rarity-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg mt-8"
            >
                Confirm Appointment (Pay Deposit)
            </button>
            <p className="text-center text-[10px] text-gray-400 font-lato">
                By confirming, you agree to our 24h cancellation policy.
            </p>
        </div>
    )
}

export default StepForm
